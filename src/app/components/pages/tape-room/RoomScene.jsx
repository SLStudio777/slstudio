'use client'

// ──────────────────────────────────────────────────────────
// Сцена «комната»: полноэкранное фото студии.
// Клик по деке → плавный зум в неё → переход к сцене деки.
// ──────────────────────────────────────────────────────────

import { useRef, useState } from 'react'

const ZOOM_MS = 1200 // должно совпадать с transition в .tr-room__frame

export default function RoomScene({ onEnter }) {
  const [zooming, setZooming] = useState(false)
  const firedRef = useRef(false)

  function enter() {
    if (firedRef.current) return
    firedRef.current = true

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      onEnter()
      return
    }
    setZooming(true)
    setTimeout(onEnter, ZOOM_MS)
  }

  return (
    <section className={`tr-room${zooming ? ' tr-room--zoom' : ''}`}>
      <div className="tr-room__frame">
        <img
          src="/tape-room/room.webp"
          alt="Студийная комната: кассетная дека на столе и коробки с кассетами"
          className="tr-room__img"
          fetchPriority="high"
        />
        <div className="tr-room__lamp" aria-hidden="true" />
        <div className="tr-room__vignette" aria-hidden="true" />

        <button type="button" className="tr-room__hotspot" onClick={enter} aria-label="Включить деку">
          <span className="tr-room__hint">▸ Включить деку</span>
        </button>
      </div>

      <header className="tr-room__title">
        <h1>The Tape Room</h1>
        <p>Личный архив живого звука</p>
      </header>
    </section>
  )
}
