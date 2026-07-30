'use client'

// ──────────────────────────────────────────────────────────
// Сцена «дека»: магнитофон + полка с коробками жанров.
//
// Состояния деки:
//   idle → open → loaded → (видео вставки) → ready → playing ⇄ paused
//   playing/paused → stopping (короткое нажатие STOP) → ready
//
// ready   — кассета внутри, лоток закрыт, кнопки НЕ зажаты, музыка не играет.
// playing — крутится зацикленное видео деки (PLAY зажат), играет аудио.
// paused  — фото с зажатыми PLAY+PAUSE, аудио на паузе.
// stopping — STOP зажат на 160 мс; звук и видео уже остановлены.
//
// Управление — КЛИКОМ ПО ФИЗИЧЕСКИМ КНОПКАМ на самой деке
// (PLAY / PAUSE / STOP-EJECT), панельных кнопок больше нет.
//
// КАЛИБРОВКА — все константы ниже в процентах от кадра деки 1846×852.
// VIDEO_RECT: оба видео (вставка и воспроизведение) сняты более крупным
// планом, чем фото; template-matching дал одинаковую посадку кадра видео
// внутри фото: x=175 y=3 w=1497 h=842 → проценты ниже. Поэтому видео
// рендерится НЕ на весь контейнер, а в этот прямоугольник с растушёванной
// маской по краям — и картинка не «прыгает» при переходе фото ↔ видео.
// ──────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from 'react'
import { ARTISTS, GENRES, CASSETTE_IMAGES } from '../../../../data/tapeRoomData'

const DECK_IMG = {
  idle: '/tape-room/deck-empty.webp',
  open: '/tape-room/deck-open.webp',
  loaded: '/tape-room/deck-open-cassette.webp',
  ready: '/tape-room/deck-playing-clean.webp',
  playing: '/tape-room/deck-play-pressed.webp',
  paused: '/tape-room/deck-play-pause-pressed.webp',
  rewinding: '/tape-room/deck-rewind-pressed.webp',
  fastForwarding: '/tape-room/deck-fast-forward-pressed.webp',
  stopping: '/tape-room/deck-stop-pressed.webp',
}

// Посадка кадра видео внутри фото деки (см. шапку файла)
const VIDEO_RECT = { left: 9.48, top: 0.35, width: 81.09, height: 98.83 }

// Тихие механические звуки транспорта. Все файлы запускаются только
// после действия пользователя; ошибки воспроизведения не ломают деку.
const SFX = {
  play: { src: '/tape-room/sounds/play-click.mp3', volume: 0.32 },
  pause: { src: '/tape-room/sounds/pause-click.mp3', volume: 0.32 },
  stop: { src: '/tape-room/sounds/stop-click.mp3', volume: 0.28 },
  rewind: { src: '/tape-room/sounds/rewind.mp3', volume: 0.42 },
  insert: { src: '/tape-room/sounds/cassette-insert.mp3', volume: 0.24 },
  eject: { src: '/tape-room/sounds/cassette-eject.mp3', volume: 0.24 },
  boxOpen1: { src: '/tape-room/sounds/box-open-1.mp3', volume: 0.3 },
  boxOpen2: { src: '/tape-room/sounds/box-open-2.mp3', volume: 0.3 },
  cassettePickup1: { src: '/tape-room/sounds/cassette-pickup-1.mp3', volume: 0.28 },
  cassettePickup2: { src: '/tape-room/sounds/cassette-pickup-2.mp3', volume: 0.28 },
}

// Кликабельные зоны физических кнопок (проценты от кадра 1846×852)
const HOTSPOTS = [
  { id: 'play', label: 'Play', x: 22.8, y: 70.5, w: 5.6, h: 20 },
  { id: 'rewind', label: 'Rewind 10 seconds', x: 28.4, y: 70.5, w: 4.8, h: 20 },
  { id: 'fastForward', label: 'Fast-forward 10 seconds', x: 33.2, y: 70.5, w: 4.9, h: 20 },
  { id: 'stop', label: 'Stop / Eject', x: 38.1, y: 70.5, w: 5.3, h: 20 },
  { id: 'pause', label: 'Pause', x: 43.5, y: 70.5, w: 5.4, h: 20 },
]

function groupTracksByArtist(tracks) {
  const groups = []
  const byArtist = new Map()

  tracks.forEach((track, index) => {
    const artist = track.artist || 'SL Studio'
    const artistId = track.artistId || 'sl-studio'
    let group = byArtist.get(artistId)
    if (!group) {
      group = {
        artist,
        artistId,
        label: artist,
        logo: track.artistLogo || null,
        logoVariant: track.artistLogoVariant || null,
        tracks: [],
      }
      byArtist.set(artistId, group)
      groups.push(group)
    }
    group.tracks.push({ track, index })
  })

  return groups
}

export default function DeckScene({ onBack }) {
  const [deckState, setDeckState] = useState('idle') // idle | open | loaded | ready | playing | paused | stopping
  const [track, setTrack] = useState(null)
  const [collectionMode, setCollectionMode] = useState('genres') // genres | artists
  const [activeGenre, setActiveGenre] = useState(null)
  const [activeArtist, setActiveArtist] = useState(null)
  const [insertOn, setInsertOn] = useState(false)
  const [audioError, setAudioError] = useState(false)
  const [mobileCoach, setMobileCoach] = useState(null)

  const deckRef = useRef(null)
  const frameRef = useRef(null)
  const insertRef = useRef(null)
  const insertLatchPlayedRef = useRef(false)
  const loopRef = useRef(null)
  const waveRef = useRef(null)
  const trayRef = useRef(null)
  const wavesurferRef = useRef(null)
  const timersRef = useRef([])
  const coachTimersRef = useRef([])
  const transportCoachTimersRef = useRef([])
  const meterAudioContextRef = useRef(null)
  const sfxRef = useRef({})

  const later = (fn, ms) => {
    timersRef.current.push(setTimeout(fn, ms))
  }
  useEffect(
    () => () => {
      timersRef.current.forEach(clearTimeout)
      transportCoachTimersRef.current.forEach(clearTimeout)
      meterAudioContextRef.current?.close().catch(() => {})
      meterAudioContextRef.current = null
    },
    [],
  )

  function clearTransportCoach(markSeen = false) {
    transportCoachTimersRef.current.forEach(clearTimeout)
    transportCoachTimersRef.current = []
    setMobileCoach(null)
    if (markSeen && typeof window !== 'undefined') {
      window.sessionStorage.setItem('tr-mobile-controls-seen-v5', '1')
    }
  }

  function runMobileTransportCoach() {
    if (typeof window === 'undefined' || window.innerWidth > 640) return
    if (window.sessionStorage.getItem('tr-mobile-controls-seen-v5') === '1') return

    clearTransportCoach()
    transportCoachTimersRef.current.push(
      setTimeout(() => setMobileCoach('pause'), 1600),
      setTimeout(() => setMobileCoach('stop'), 3900),
      setTimeout(() => clearTransportCoach(true), 6200),
    )
  }

  useEffect(() => {
    coachTimersRef.current.forEach(clearTimeout)
    coachTimersRef.current = []
    setMobileCoach(null)

    if (typeof window === 'undefined' || window.innerWidth > 640) return
    if (window.sessionStorage.getItem('tr-mobile-controls-seen-v5') === '1') return

    if (deckState === 'ready' && track && !insertOn) {
      coachTimersRef.current.push(setTimeout(() => setMobileCoach('play'), 1800))
    }

    return () => {
      coachTimersRef.current.forEach(clearTimeout)
      coachTimersRef.current = []
    }
  }, [deckState, track?.id, insertOn])

  useEffect(() => {
    const sounds = {}
    for (const [id, config] of Object.entries(SFX)) {
      const audio = new Audio(config.src)
      audio.preload = 'auto'
      audio.volume = config.volume
      sounds[id] = audio
    }
    sfxRef.current = sounds

    return () => {
      Object.values(sounds).forEach((audio) => {
        audio.pause()
        audio.currentTime = 0
      })
      sfxRef.current = {}
    }
  }, [])

  function playSfx(id) {
    const audio = sfxRef.current[id]
    if (!audio) return
    audio.currentTime = 0
    audio.play().catch(() => {})
  }

  // Unlock delayed mobile sounds during the original cassette tap.
  function primeSfx(ids) {
    ids.forEach((id) => {
      const audio = sfxRef.current[id]
      if (!audio) return
      const volume = audio.volume
      audio.volume = 0
      audio.currentTime = 0
      const promise = audio.play()
      if (!promise?.then) {
        audio.pause()
        audio.currentTime = 0
        audio.volume = volume
        return
      }
      promise
        .then(() => {
          audio.pause()
          audio.currentTime = 0
          audio.volume = volume
        })
        .catch(() => {
          audio.volume = volume
        })
    })
  }

  // iOS requires Web Audio to be created/resumed directly in the PLAY tap.
  function unlockMeterAudio() {
    if (typeof window === 'undefined') return
    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    if (!AudioContextClass) return
    try {
      if (!meterAudioContextRef.current || meterAudioContextRef.current.state === 'closed') {
        meterAudioContextRef.current = new AudioContextClass()
      }
      meterAudioContextRef.current.resume().catch(() => {})
    } catch {}
  }

  const transportOn =
    deckState === 'playing' ||
    deckState === 'paused' ||
    deckState === 'rewinding' ||
    deckState === 'fastForwarding'

  // ── Выбор кассеты: открыть деку → положить кассету → видео вставки ──
  function pickCassette(genre, t, soundVariant) {
    if (insertOn) return
    primeSfx(['insert', 'stop'])
    playSfx(soundVariant % 2 === 0 ? 'cassettePickup1' : 'cassettePickup2')
    setAudioError(false)
    setTrack({ ...t, genreName: t.genreName || genre.name })
    setActiveGenre(null)
    setActiveArtist(null)
    deckRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })

    const startInsert = () => {
      insertLatchPlayedRef.current = false
      playSfx('insert')
      setInsertOn(true)
      later(() => {
        const v = insertRef.current
        if (v) {
          v.currentTime = 0
          v.play().catch(() => {})
        }
      }, 30)
    }

    if (deckState === 'open') {
      setDeckState('loaded')
      later(startInsert, 550)
    } else if (deckState === 'loaded') {
      startInsert()
    } else {
      // idle, ready, playing или paused: сначала открываем лоток
      setDeckState('open')
      later(() => setDeckState('loaded'), 550)
      later(startInsert, 1100)
    }
  }

  // У соседних коробок и кассет разные варианты Foley. Звук коробки
  // срабатывает только при открытии, чтобы закрытие не звучало неестественно.
  function toggleGenre(genre, index, isActive) {
    if (!isActive) playSfx(index % 2 === 0 ? 'boxOpen1' : 'boxOpen2')
    setActiveArtist(null)
    setActiveGenre(isActive ? null : genre)
  }

  function changeCollectionMode(mode) {
    setCollectionMode(mode)
    setActiveGenre(null)
    setActiveArtist(null)
  }

  function openArtist(artistId) {
    const artist = ARTISTS.find((item) => item.id === artistId)
    if (!artist) return
    setCollectionMode('artists')
    setActiveGenre(null)
    setActiveArtist(artist)
  }

  function toggleArtist(artist) {
    setActiveGenre(null)
    setActiveArtist(activeArtist?.id === artist.id ? null : artist)
  }

  // После открытия коробки сдвигаем страницу к появившемуся лотку.
  // Небольшая задержка нужна, чтобы React успел отрисовать кассеты.
  useEffect(() => {
    if (!activeGenre && !activeArtist) return
    const timer = setTimeout(() => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const tray = trayRef.current
      if (!tray) return
      const offset = window.innerWidth <= 640 ? 150 : 185
      const top = tray.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({
        top: Math.max(0, top),
        behavior: reducedMotion ? 'auto' : 'smooth',
      })
    }, 140)
    return () => clearTimeout(timer)
  }, [activeGenre, activeArtist])

  function onInsertTimeUpdate() {
    const video = insertRef.current
    if (!video?.duration || insertLatchPlayedRef.current) return
    if (video.duration - video.currentTime <= 0.8) {
      insertLatchPlayedRef.current = true
      playSfx('stop')
    }
  }

  function onInsertEnded() {
    if (!insertLatchPlayedRef.current) playSfx('stop')
    insertLatchPlayedRef.current = true
    setInsertOn(false)
    // Кассета внутри, но ничего не зажато — ждём нажатия PLAY на деке
    setDeckState('ready')
  }

  // ── Audio + real-time frame light ──
  // WaveSurfer plays the track. A Web Audio analyser reads only its energy
  // and writes two CSS variables directly on the deck, without React renders.
  useEffect(() => {
    if (!transportOn || !track || !waveRef.current) return
    let ws = null
    let cancelled = false
    let audioContext = null
    let sourceNode = null
    let analyser = null
    let frequencyData = null
    let mediaElement = null
    let animationFrame = 0
    let removeReadyListener = null
    let removePlayListener = null
    let smoothLeft = 0
    let smoothRight = 0
    let adaptiveLeftPeak = 0.5
    let adaptiveRightPeak = 0.5

    const clamp = (value) => Math.min(1, Math.max(0, value))
    const setFrameEnergy = (left, right) => {
      const deck = deckRef.current
      const frame = frameRef.current
      if (!deck) return
      deck.style.setProperty('--tr-audio-left', left.toFixed(3))
      deck.style.setProperty('--tr-audio-right', right.toFixed(3))
      frame?.style.setProperty('--tr-audio-left', left.toFixed(3))
      frame?.style.setProperty('--tr-audio-right', right.toFixed(3))
      if (Math.max(left, right) > 0.025) frame?.classList.add('tr-deck-frame--meter-live')
      else frame?.classList.remove('tr-deck-frame--meter-live')
    }
    const resetFrameEnergy = () => setFrameEnergy(0, 0)

    const averageBand = (fromHz, toHz) => {
      if (!analyser || !frequencyData || !audioContext) return 0
      const hzPerBin = audioContext.sampleRate / analyser.fftSize
      const startBin = Math.max(1, Math.floor(fromHz / hzPerBin))
      const endBin = Math.min(frequencyData.length - 1, Math.ceil(toHz / hzPerBin))
      let sum = 0
      let count = 0
      for (let i = startBin; i <= endBin; i += 1) {
        sum += frequencyData[i]
        count += 1
      }
      return count ? sum / count / 255 : 0
    }

    const animateFrame = () => {
      if (analyser && frequencyData) {
        analyser.getByteFrequencyData(frequencyData)
        const bass = averageBand(45, 120)
        const lowMid = averageBand(120, 280)
        const body = averageBand(55, 520)
        const isAudible = mediaElement && !mediaElement.paused && !mediaElement.ended
        const rawLeft = bass * 0.82 + body * 0.18
        const rawRight = lowMid * 0.7 + bass * 0.18 + body * 0.12

        // Follow each track's own loudness, so mastered songs do not pin the
        // indicators at full height for their entire duration.
        adaptiveLeftPeak = Math.max(rawLeft, adaptiveLeftPeak * 0.999)
        adaptiveRightPeak = Math.max(rawRight, adaptiveRightPeak * 0.999)
        const normalise = (value, peak) => {
          // Never amplify a quiet song until it looks as loud as a mastered one.
          // The fixed reference floor preserves roughly 20–25% more downward travel.
          const referencePeak = Math.max(peak, 0.5)
          return clamp((value - 0.07) / Math.max(0.2, referencePeak - 0.07))
        }
        const leftTarget = isAudible
          ? Math.pow(normalise(rawLeft, adaptiveLeftPeak), 2.15)
          : 0
        const rightTarget = isAudible
          ? Math.pow(normalise(rawRight, adaptiveRightPeak), 2.1)
          : 0

        // Fast rise, quicker fall and an expanded mid-range keep peaks rare.
        smoothLeft += (leftTarget - smoothLeft) * (leftTarget > smoothLeft ? 0.48 : 0.24)
        smoothRight += (rightTarget - smoothRight) * (rightTarget > smoothRight ? 0.46 : 0.23)
        setFrameEnergy(smoothLeft, smoothRight)
      }
      animationFrame = requestAnimationFrame(animateFrame)
    }

    const connectAnalyser = () => {
      if (cancelled || analyser || !mediaElement) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const AudioContextClass = window.AudioContext || window.webkitAudioContext
      if (!AudioContextClass) return

      try {
        audioContext = meterAudioContextRef.current
        if (!audioContext || audioContext.state === 'closed') {
          audioContext = new AudioContextClass()
          meterAudioContextRef.current = audioContext
        }
        sourceNode = audioContext.createMediaElementSource(mediaElement)
        analyser = audioContext.createAnalyser()
        analyser.fftSize = 1024
        analyser.smoothingTimeConstant = 0.3
        sourceNode.connect(analyser)
        analyser.connect(audioContext.destination)
        frequencyData = new Uint8Array(analyser.frequencyBinCount)
        audioContext.resume().catch(() => {})
        animateFrame()
      } catch {
        resetFrameEnergy()
        sourceNode = null
        analyser = null
      }
    }

    import('wavesurfer.js')
      .then(({ default: WaveSurfer }) => {
        if (cancelled || !waveRef.current) return
        ws = WaveSurfer.create({
          container: waveRef.current,
          height: 56,
          waveColor: 'rgba(96, 72, 44, 0.35)',
          progressColor: '#8a6a34',
          cursorColor: '#C9A84C',
          barWidth: 2,
          barGap: 2,
          barRadius: 2,
          url: track.audio,
          autoplay: true,
        })
        removeReadyListener = ws.on('ready', () => {
          mediaElement = ws.getMediaElement?.() || null
          if (!mediaElement) return
          const onPlay = () => {
            connectAnalyser()
            audioContext?.resume().catch(() => {})
          }
          mediaElement.addEventListener('play', onPlay)
          removePlayListener = () => mediaElement?.removeEventListener('play', onPlay)
          if (!mediaElement.paused) onPlay()
        })
        // When the tape ends, release the transport and the frame light.
        ws.on('finish', () => {
          resetFrameEnergy()
          setDeckState('ready')
        })
        ws.on('error', () => setAudioError(true))
        wavesurferRef.current = ws
      })
      .catch(() => setAudioError(true))

    return () => {
      cancelled = true
      cancelAnimationFrame(animationFrame)
      removeReadyListener?.()
      removePlayListener?.()
      resetFrameEnergy()
      try {
        sourceNode?.disconnect()
        analyser?.disconnect()
      } catch {}
      try {
        ws?.destroy()
      } catch {}
      wavesurferRef.current = null
    }
    // Recreate only when the selected track changes or transport fully stops.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transportOn, track?.id])

  // Пауза/продолжение аудио и зацикленного видео при переключении состояний
  useEffect(() => {
    const ws = wavesurferRef.current
    const v = loopRef.current
    if (
      deckState === 'paused' ||
      deckState === 'rewinding' ||
      deckState === 'fastForwarding'
    ) {
      ws?.pause()
      v?.pause()
    } else if (deckState === 'playing') {
      if (ws && !ws.isPlaying()) ws.play()
      v?.play().catch(() => {})
    }
  }, [deckState])

  // ── Физические кнопки деки ──
  function handleHotspot(id) {
    if (insertOn) return
    if (id === mobileCoach) setMobileCoach(null)
    if (id === 'play') {
      if (deckState === 'ready' && track) {
        unlockMeterAudio()
        playSfx('play')
        setDeckState('playing')
        runMobileTransportCoach()
      } else if (deckState === 'paused') {
        unlockMeterAudio()
        playSfx('play')
        setDeckState('playing')
      }
    } else if (id === 'pause') {
      clearTransportCoach(true)
      if (deckState === 'playing') {
        playSfx('pause')
        setDeckState('paused')
      } else if (deckState === 'paused') {
        playSfx('pause')
        setDeckState('playing')
      }
    } else if (id === 'rewind' || id === 'fastForward') {
      if ((deckState === 'playing' || deckState === 'paused') && track) {
        const ws = wavesurferRef.current
        if (!ws) return
        const duration = ws.getDuration?.() || 0
        const current = ws.getCurrentTime?.() || 0
        const delta = id === 'rewind' ? -10 : 10
        const target = Math.min(
          Math.max(current + delta, 0),
          Math.max(duration - 0.05, 0),
        )

        ws.pause()
        loopRef.current?.pause()
        playSfx('rewind')
        ws.setTime(target)
        setDeckState(id === 'rewind' ? 'rewinding' : 'fastForwarding')
        later(() => setDeckState('playing'), 1260)
      }
    } else if (id === 'stop') {
      clearTransportCoach(true)
      if (transportOn) {
        playSfx('stop')
        // Звук и видео останавливаются сразу. На 160 мс показываем физически
        // зажатую STOP, затем клавиша отщёлкивается; кассета остаётся внутри.
        setDeckState('stopping')
        later(() => setDeckState('ready'), 160)
      } else if (deckState === 'ready') {
        playSfx('eject')
        // Eject: достаём кассету, лоток открывается пустым
        setTrack(null)
        setDeckState('open')
      } else if (deckState === 'idle') {
        playSfx('eject')
        setDeckState('open')
      } else if (deckState === 'open') {
        playSfx('stop')
        setDeckState('idle')
      }
    }
  }

  const status = insertOn
    ? 'Inserting cassette…'
    : deckState === 'idle'
      ? 'Open a box below and choose a cassette'
      : deckState === 'open'
        ? 'Deck is open — choose a cassette from a box'
        : deckState === 'loaded'
          ? 'Cassette in tray'
          : deckState === 'ready'
            ? track
              ? 'Cassette loaded — press ▸ PLAY on the deck'
              : ''
            : deckState === 'paused'
              ? 'Paused — press PAUSE again to continue'
              : deckState === 'rewinding'
                ? 'Rewinding 10 seconds…'
                : deckState === 'fastForwarding'
                  ? 'Fast-forwarding 10 seconds…'
                  : deckState === 'stopping'
                    ? 'Stopped'
                : track
                ? `Playing: ${track.artist} — ${track.title}`
                : ''

  // Какое фото деки показываем под видео/оверлеями
  const stillState = insertOn ? 'loaded' : deckState

  return (
    <section className="tr-deck-scene">
      <div className="tr-deck-content">
        <div className="tr-deck-nav">
          <button type="button" className="tr-back" onClick={onBack}>
            ← Back to the room
          </button>
          <div className="tr-deck-nav__title" aria-hidden="true">
            <span>The Tape Room</span>
            <strong>Workbench</strong>
          </div>
        </div>

        {/* ── Дека на том же рабочем столе, что и в общей сцене ── */}
        <div className="tr-deck-workbench">
          <div
            ref={frameRef}
            className={`tr-deck-frame${deckState === 'playing' ? ' tr-deck-frame--playing' : ''}`}
          >
            <div
              className={`tr-deck-wrap${deckState === 'playing' ? ' tr-deck-wrap--playing' : ''}`}
            ref={deckRef}
          >
            <span className="tr-audio-rail tr-audio-rail--left" aria-hidden="true" />
            <span className="tr-audio-rail tr-audio-rail--right" aria-hidden="true" />
        {/* Все состояния рендерятся сразу и переключаются прозрачностью —
            без морганий при смене картинки */}
        {Object.entries(DECK_IMG).map(([state, src], i) => (
          <img
            key={state}
            src={src}
            alt={state === stillState ? 'Cassette deck' : ''}
            aria-hidden={state !== stillState}
            className={`tr-deck-img${i > 0 ? ' tr-deck-img--overlay' : ''}`}
            style={{ opacity: state === stillState ? 1 : 0 }}
          />
        ))}

        {/* Видео вставки кассеты — в откалиброванной посадке кадра */}
        <video
          ref={insertRef}
          className={`tr-video${insertOn ? ' tr-video--on' : ''}`}
          src="/tape-room/cassette-insert-web.mp4"
          muted
          playsInline
          preload="auto"
          onTimeUpdate={onInsertTimeUpdate}
          onEnded={onInsertEnded}
        />

        {/* Зацикленное видео играющей деки (PLAY зажат, стрелки живые) */}
        <video
          ref={loopRef}
          className={`tr-video${deckState === 'playing' && !insertOn ? ' tr-video--on' : ''}`}
          src="/tape-room/deck-playing-loop.mp4"
          muted
          playsInline
          loop
          preload="auto"
        />

        {/* Физические кнопки: PLAY / REW / FF / STOP-EJECT / PAUSE */}
        {!insertOn &&
          HOTSPOTS.map((h) => (
            <button
              key={h.id}
              type="button"
              className={[
                'tr-hotspot',
                (h.id === 'play' && deckState === 'ready' && track) ||
                (h.id === 'pause' && deckState === 'playing') ||
                ((h.id === 'rewind' || h.id === 'fastForward') &&
                  (deckState === 'playing' || deckState === 'paused'))
                  ? 'tr-hotspot--hint'
                  : '',
                mobileCoach === h.id ? 'tr-hotspot--coach' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              data-control={h.id}
              style={{
                left: `${h.x}%`,
                top: `${h.y}%`,
                width: `${h.w}%`,
                height: `${h.h}%`,
              }}
              onClick={() => handleHotspot(h.id)}
              aria-label={h.label}
            >
              <span className="tr-hotspot__tip">
                {mobileCoach === h.id ? h.id.toUpperCase() : h.label}
              </span>
            </button>
          ))}
            </div>
          </div>

          <p className="tr-status">{status}</p>
        </div>

      {/* ── Вкладыш с треком и волной ── */}
      {track && (deckState === 'ready' || deckState === 'stopping' || transportOn) && !insertOn && (
        <div className="tr-jcard">
          <div className="tr-jcard__line">
            <span className="tr-jcard__title">
              {track.artist} — {track.title}
            </span>
            <span className="tr-jcard__genre">{track.genreName}</span>
          </div>
          <div ref={waveRef} />
          {audioError && (
            <p className="tr-jcard__error">
              Audio file not found — check the path in src/data/tapeRoomData.js
            </p>
          )}
        </div>
      )}

      {/* ── Кассетная коллекция: жанры / исполнители ── */}
      <div className="tr-shelf">
        <div className="tr-shelf__head">
          <div>
            <span className="tr-shelf__eyebrow">Cassette collection</span>
            <h2>{collectionMode === 'genres' ? 'Choose a box' : 'Choose an artist'}</h2>
          </div>
          <p>
            {collectionMode === 'genres'
              ? '8 boxes · highlights and the full archive by genre'
              : 'Every recording by the selected band or artist'}
          </p>
        </div>

        <div className="tr-collection-toolbar">
          <div className="tr-collection-switch" role="tablist" aria-label="Collection view">
            <button
              type="button"
              role="tab"
              aria-selected={collectionMode === 'genres'}
              className={collectionMode === 'genres' ? 'tr-collection-switch--active' : ''}
              onClick={() => changeCollectionMode('genres')}
            >
              By genre
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={collectionMode === 'artists'}
              className={collectionMode === 'artists' ? 'tr-collection-switch--active' : ''}
              onClick={() => changeCollectionMode('artists')}
            >
              By artist
            </button>
          </div>

          <a className="tr-quick-listen" href="/portfolio">
            <span>Standard player</span>
            <small>quick listening</small>
            <strong aria-hidden="true">→</strong>
          </a>
        </div>

        {collectionMode === 'genres' ? (
          <>
            <div className="tr-shelf__row">
              {GENRES.map((g, i) => {
                const active = activeGenre?.id === g.id
                return (
                  <button
                    key={g.id}
                    type="button"
                    className={`tr-box${active ? ' tr-box--active' : ''}${
                      g.featured ? ' tr-box--featured' : ''
                    }`}
                    onClick={() => toggleGenre(g, i, active)}
                    aria-expanded={active}
                    aria-label={`${g.name}: ${g.tracks.length} tracks`}
                    style={{
                      '--tr-box-i': i,
                      '--tr-box-tilt': `${i % 2 === 0 ? -0.45 : 0.45}deg`,
                    }}
                  >
                    {g.featured && <span className="tr-box__featured-mark">★ SELECTED</span>}
                    <img
                      src={active ? '/tape-room/box-open.webp' : '/tape-room/box-closed.webp'}
                      alt=""
                    />
                    <span className="tr-box__label">{g.name}</span>
                    <span className="tr-box__count">{g.tracks.length} tracks</span>
                  </button>
                )
              })}
            </div>

            {activeGenre && (
              <div
                className={`tr-tray${activeGenre.featured ? ' tr-tray--featured' : ''}`}
                key={activeGenre.id}
                ref={trayRef}
              >
                {activeGenre.featured ? (
                  <>
                    <div className="tr-hits-intro">
                      <span>SL Studio selection</span>
                      <h3>Five pieces to begin with</h3>
                      <p>A short route through different sides of the studio archive.</p>
                    </div>
                    <div className="tr-tray__grid tr-tray__grid--hits">
                      {activeGenre.tracks.map((t, i) => (
                        <button
                          key={t.id}
                          type="button"
                          className="tr-cassette"
                          style={{ animationDelay: `${i * 55}ms` }}
                          onClick={() => pickCassette(activeGenre, t, i)}
                        >
                          <img
                            src={CASSETTE_IMAGES[t.brand] || CASSETTE_IMAGES.blank}
                            alt={`Cassette: ${t.artist} — ${t.title}`}
                          />
                          <span className="tr-cassette__chip">{t.title}</span>
                          <span className="tr-cassette__meta">{t.artist} · {t.genreName}</span>
                          {t.duration && <span className="tr-cassette__duration">{t.duration}</span>}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="tr-tray__groups">
                    {groupTracksByArtist(activeGenre.tracks).map((group, groupIndex) => (
                      <section className="tr-artist-group" key={group.artistId}>
                        <button
                          type="button"
                          className={`tr-artist-label${group.logo ? ' tr-artist-label--has-logo' : ''}`}
                          onClick={() => openArtist(group.artistId)}
                          aria-label={`Show every recording by ${group.label}`}
                        >
                          <span className="tr-artist-label__index">
                            {String(groupIndex + 1).padStart(2, '0')}
                          </span>
                          {group.logo ? (
                            <span
                              className={`tr-artist-label__logo tr-logo--${group.logoVariant || 'dark'}`}
                            >
                              <img src={group.logo} alt="" loading="lazy" />
                            </span>
                          ) : (
                            <span className="tr-artist-label__name">{group.label}</span>
                          )}
                          <span className="tr-artist-label__count">
                            {group.tracks.length} {group.tracks.length === 1 ? 'cassette' : 'cassettes'}
                          </span>
                          <span className="tr-artist-label__open">All recordings →</span>
                        </button>

                        <div className="tr-tray__grid">
                          {group.tracks.map(({ track: t, index }, groupTrackIndex) => (
                            <button
                              key={t.id}
                              type="button"
                              className="tr-cassette"
                              style={{ animationDelay: `${groupTrackIndex * 55}ms` }}
                              onClick={() => pickCassette(activeGenre, t, index)}
                            >
                              <img
                                src={CASSETTE_IMAGES[t.brand] || CASSETTE_IMAGES.blank}
                                alt={`Cassette: ${t.artist} — ${t.title}`}
                              />
                              <span className="tr-cassette__chip">{t.title}</span>
                              {t.duration && <span className="tr-cassette__duration">{t.duration}</span>}
                            </button>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <>
            <div className="tr-artist-index">
              {ARTISTS.map((artist, i) => {
                const active = activeArtist?.id === artist.id
                const genres = [...new Set(artist.tracks.map((item) => item.genreName))]
                const initials = artist.displayName
                  .split(/\s+/)
                  .map((part) => part[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()

                return (
                  <button
                    key={artist.id}
                    type="button"
                    className={`tr-artist-card${active ? ' tr-artist-card--active' : ''}${
                      artist.logo
                        ? ` tr-artist-card--has-logo tr-logo-card--${artist.logoVariant || 'dark'}`
                        : ''
                    }`}
                    onClick={() => toggleArtist(artist)}
                    aria-expanded={active}
                    style={{
                      '--tr-artist-i': i,
                      '--tr-artist-tilt': `${i % 2 === 0 ? -0.28 : 0.28}deg`,
                    }}
                  >
                    <span className="tr-artist-card__logo" aria-hidden="true">
                      {artist.logo ? <img src={artist.logo} alt="" /> : initials}
                    </span>
                    <span className="tr-artist-card__body">
                      <strong>{artist.displayName}</strong>
                      <small>{genres.join(' · ')}</small>
                    </span>
                    <span className="tr-artist-card__count">{artist.tracks.length}</span>
                  </button>
                )
              })}
            </div>

            {activeArtist && (
              <div className="tr-tray tr-tray--artist" key={activeArtist.id} ref={trayRef}>
                <div className="tr-artist-focus">
                  <span className="tr-artist-focus__eyebrow">Artist archive</span>
                  {activeArtist.logo && (
                    <span
                      className={`tr-artist-focus__logo tr-logo--${activeArtist.logoVariant || 'dark'}`}
                    >
                      <img src={activeArtist.logo} alt={`${activeArtist.displayName} logo`} />
                    </span>
                  )}
                  <h3>{activeArtist.displayName}</h3>
                  <p>
                    {activeArtist.tracks.length} recordings ·{' '}
                    {[...new Set(activeArtist.tracks.map((item) => item.genreName))].join(' · ')}
                  </p>
                </div>

                <div className="tr-tray__grid">
                  {activeArtist.tracks.map((t, i) => (
                    <button
                      key={t.id}
                      type="button"
                      className="tr-cassette"
                      style={{ animationDelay: `${i * 45}ms` }}
                      onClick={() => pickCassette({ name: t.genreName }, t, i)}
                    >
                      <img
                        src={CASSETTE_IMAGES[t.brand] || CASSETTE_IMAGES.blank}
                        alt={`Cassette: ${t.artist} — ${t.title}`}
                      />
                      <span className="tr-cassette__chip">{t.title}</span>
                      <span className="tr-cassette__genre">{t.genreName}</span>
                      {t.duration && <span className="tr-cassette__duration">{t.duration}</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
      </div>
    </section>
  )
}
