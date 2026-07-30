'use client'

import { useRef, useState } from 'react'

const ZOOM_MS = 1200

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
        <picture className="tr-room__picture">
          <source
            media="(max-width: 640px) and (orientation: portrait)"
            srcSet="/tape-room/room-mobile.webp"
          />
          <img
            src="/tape-room/room.webp"
            alt="Studio room with a cassette deck and tape archive"
            className="tr-room__img"
            fetchPriority="high"
          />
        </picture>
        <div className="tr-room__lamp" aria-hidden="true" />
        <div className="tr-room__vignette" aria-hidden="true" />

        <button type="button" className="tr-room__hotspot" onClick={enter} aria-label="Switch on the deck">
          <span className="tr-room__hint">▸ Switch on the deck</span>
        </button>
      </div>

      <header className="tr-room__title">
        <h1>The Tape Room</h1>
        <p>A personal archive of living sound</p>
      </header>
    </section>
  )
}
