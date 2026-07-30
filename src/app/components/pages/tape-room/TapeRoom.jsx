'use client'

// ──────────────────────────────────────────────────────────
// Tape Room — оркестратор сцен.
// Сцена «комната» → клик по деке → зум → сцена «дека».
// Все стили страницы живут здесь (префикс tr-), цвета захардкожены
// намеренно — без Tailwind-токенов (правило проекта после 24.07).
// ──────────────────────────────────────────────────────────

import { useEffect, useState } from 'react'
import RoomScene from './RoomScene'
import DeckScene from './DeckScene'

export default function TapeRoom() {
  const [scene, setScene] = useState('room') // 'room' | 'deck'

  useEffect(() => {
    if (window.innerWidth <= 640 && window.sessionStorage.getItem('tr-mobile-room-entered') === '1') {
      setScene('deck')
    }
  }, [])

  function enterDeck() {
    if (typeof window !== 'undefined' && window.innerWidth <= 640) {
      window.sessionStorage.setItem('tr-mobile-room-entered', '1')
    }
    setScene('deck')
  }

  return (
    <div className="tr-root">
      {scene === 'room' ? (
        <RoomScene onEnter={enterDeck} />
      ) : (
        <DeckScene onBack={() => setScene('room')} />
      )}
      <div className="tr-grain" aria-hidden="true" />
      <style>{css}</style>
    </div>
  )
}

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const css = `
/* ── Корневой контейнер: вырывается из контейнера сайта на всю ширину ── */
.tr-root {
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  min-height: 100svh;
  background: #14100c;
  color: #e8dfc8;
  overflow: hidden;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.5;
}
.tr-root button,
.tr-root a,
.tr-root input {
  font-family: inherit;
}

/* Плёночное зерно поверх всего */
.tr-grain {
  position: absolute; inset: 0; z-index: 40;
  pointer-events: none;
  opacity: .07;
  mix-blend-mode: overlay;
  background-image: ${GRAIN_SVG};
  background-size: 240px 240px;
}

@keyframes trFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }

/* ─────────────── СЦЕНА 1: КОМНАТА ─────────────── */
.tr-room { position: relative; height: 100svh; overflow: hidden; }

.tr-room__frame {
  position: absolute; inset: 0;
  /* Центр деки на фото комнаты — точка, в которую летим при зуме */
  transform-origin: 29.5% 67%;
  transition: transform 1.2s cubic-bezier(.55, 0, .15, 1), opacity .45s ease .8s;
  will-change: transform;
}
.tr-room--zoom .tr-room__frame { transform: scale(3.2); opacity: 0; }

.tr-room__picture { display: block; width: 100%; height: 100%; }
.tr-room__img { width: 100%; height: 100%; object-fit: cover; object-position: center 62%; display: block; }

.tr-room__vignette {
  position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(ellipse at 50% 55%, transparent 42%, rgba(8, 5, 3, .78) 100%);
}

/* Тёплое дыхание лампы */
.tr-room__lamp {
  position: absolute; left: 60%; top: 0; width: 34%; height: 60%;
  pointer-events: none;
  background: radial-gradient(closest-side, rgba(255, 196, 110, .16), transparent 72%);
  animation: trLamp 5.5s ease-in-out infinite;
}
@keyframes trLamp { 0%, 100% { opacity: .65; } 50% { opacity: 1; } }

.tr-room__title {
  position: absolute; top: clamp(22px, 7vh, 64px); left: 0; right: 0;
  text-align: center; z-index: 5; pointer-events: none;
  transition: opacity .5s ease;
  animation: trFadeIn 1s ease .15s both;
}
.tr-room--zoom .tr-room__title { opacity: 0; }
.tr-room__title h1 {
  margin: 0;
  font-family: var(--font-playfair), 'Playfair Display', serif;
  font-size: clamp(34px, 5.4vw, 62px);
  font-weight: 500;
  letter-spacing: .04em;
  color: #ede4cc;
  text-shadow: 0 2px 26px rgba(0, 0, 0, .85);
}
.tr-room__title p {
  margin: 12px 0 0;
  color: #C9A84C;
  font-size: clamp(12px, 1.2vw, 13px);
  letter-spacing: .38em;
  text-transform: uppercase;
  text-shadow: 0 1px 12px rgba(0, 0, 0, .9);
}

/* Кликабельная зона над декой */
.tr-room__hotspot {
  position: absolute; left: 11%; top: 52%; width: 38%; height: 31%;
  background: transparent; border: 0; cursor: pointer; z-index: 6;
  border-radius: 18px; padding: 0;
}
.tr-room__hotspot::after {
  content: ''; position: absolute; inset: 0; border-radius: 18px;
  box-shadow: 0 0 0 0 rgba(201, 168, 76, 0);
  transition: box-shadow .4s ease;
}
.tr-room__hotspot:hover::after,
.tr-room__hotspot:focus-visible::after {
  box-shadow: 0 0 90px 16px rgba(201, 168, 76, .16), inset 0 0 70px rgba(201, 168, 76, .09);
}
.tr-room__hint {
  position: absolute; left: 50%; bottom: -16px; transform: translateX(-50%);
  white-space: nowrap;
  background: rgba(18, 12, 7, .8);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(201, 168, 76, .5);
  color: #C9A84C;
  font-size: 12px; letter-spacing: .2em; text-transform: uppercase;
  padding: 11px 24px; border-radius: 999px;
  animation: trPulse 2.8s ease-in-out infinite;
}
@keyframes trPulse { 0%, 100% { opacity: .72; } 50% { opacity: 1; } }

/* ─────────────── СЦЕНА 2: РАБОЧИЙ СТОЛ ─────────────── */
.tr-deck-scene {
  position: relative; isolation: isolate; overflow: hidden;
  min-height: 100svh;
  padding: clamp(18px, 3vw, 34px) clamp(14px, 3vw, 34px) 88px;
  animation: trFadeIn .7s ease both;
}
/* Та же комната остаётся вокруг деки: крупный размытый кадр даёт
   узнаваемый свет и силуэты, а не абстрактное чёрное пятно. */
.tr-deck-scene::before {
  content: ''; position: absolute; inset: -48px; z-index: -3;
  background: url('/tape-room/room.webp') center 58% / cover no-repeat;
  filter: blur(10px) saturate(.96) brightness(.9);
  transform: scale(1.045);
  opacity: .98;
}
.tr-deck-scene::after {
  content: ''; position: absolute; inset: 0; z-index: -2; pointer-events: none;
  background:
    radial-gradient(ellipse at 16% 42%, rgba(191, 121, 60, .2), transparent 46%),
    radial-gradient(ellipse at 67% 8%, rgba(230, 167, 85, .22), transparent 40%),
    radial-gradient(ellipse at 50% 48%, transparent 34%, rgba(9, 6, 4, .24) 88%),
    linear-gradient(180deg, rgba(10, 7, 5, .18), rgba(12, 8, 5, .5));
}
.tr-deck-content { position: relative; z-index: 1; max-width: 1240px; margin: 0 auto; }
.tr-deck-nav {
  max-width: 1040px; margin: 0 auto 12px;
  display: flex; align-items: center; justify-content: space-between; gap: 18px;
}
.tr-deck-nav__title { text-align: right; line-height: 1.1; }
.tr-deck-nav__title span {
  display: block; color: #C9A84C; font-size: 12px; letter-spacing: .22em; text-transform: uppercase;
}
.tr-deck-nav__title strong {
  display: block; margin-top: 5px; color: #d8cfb6;
  font-family: var(--font-playfair), 'Playfair Display', serif; font-weight: 500; font-size: 17px;
}
.tr-back {
  min-height: 40px; display: inline-flex; align-items: center;
  background: rgba(18, 12, 7, .56); backdrop-filter: blur(10px);
  border: 1px solid rgba(201, 168, 76, .36);
  color: #d1c5a8; font-size: 12px; letter-spacing: .18em; text-transform: uppercase;
  padding: 9px 18px; border-radius: 999px; cursor: pointer;
  transition: color .2s ease, border-color .2s ease, background .2s ease;
}
.tr-back:hover { color: #f0dfb2; border-color: rgba(201, 168, 76, .72); background: rgba(32, 22, 12, .72); }

.tr-deck-workbench { position: relative; max-width: 1040px; margin: 0 auto; }
.tr-deck-frame { position: relative; }
.tr-deck-workbench::before {
  content: ''; position: absolute; left: 4%; right: 4%; bottom: 1%; height: 34%; z-index: -1;
  background:
    radial-gradient(ellipse at 50% 48%, rgba(190, 119, 55, .3), transparent 64%),
    linear-gradient(90deg, transparent, rgba(12, 8, 5, .72) 18%, rgba(12, 8, 5, .72) 82%, transparent);
  filter: blur(26px);
}
.tr-deck-workbench::after {
  content: ''; position: absolute; left: 8%; right: 8%; top: 5%; height: 18%; z-index: -1;
  background: radial-gradient(ellipse, rgba(238, 178, 102, .14), transparent 70%);
  filter: blur(28px);
}
/* Мягкая студийная ниша вместо жёсткой рамки: тёмный матовый кант,
   рассеянный свет и затемнение крайних 4% изображения. */
.tr-deck-wrap {
  position: relative; overflow: hidden; border-radius: 10px;
  box-shadow:
    0 0 0 7px rgba(13, 9, 6, .42),
    0 0 0 8px rgba(226, 167, 94, .11),
    0 48px 110px -34px rgba(0, 0, 0, .94),
    0 17px 44px -25px rgba(214, 137, 65, .56);
  background: #0d0a07;
}
.tr-deck-wrap::before {
  content: ''; position: absolute; inset: 0; z-index: 5; pointer-events: none;
  background:
    linear-gradient(90deg, rgba(11, 7, 5, .58) 0, transparent 4.5%, transparent 95.5%, rgba(11, 7, 5, .58) 100%),
    linear-gradient(180deg, rgba(255, 221, 172, .1) 0, transparent 5%, transparent 88%, rgba(8, 5, 3, .4) 100%);
}
.tr-deck-wrap::after {
  content: ''; position: absolute; inset: 0; z-index: 5; pointer-events: none;
  border: 1px solid rgba(245, 207, 150, .12); border-radius: inherit;
  box-shadow:
    inset 0 0 42px rgba(8, 5, 3, .3),
    inset 0 -22px 34px rgba(8, 5, 3, .2);
}

/* Audio-reactive side rails. Energy arrives from the Web Audio analyser as
   --tr-audio-left / --tr-audio-right; only opacity and glow are animated. */
.tr-audio-rail {
  --tr-rail-energy: 0;
  position: absolute; top: 4.5%; bottom: 4.5%; z-index: 7;
  width: clamp(3px, .42vw, 6px); pointer-events: none;
  border-radius: 999px; opacity: 0;
  background: linear-gradient(
    180deg,
    transparent 0,
    rgba(235, 185, 104, .45) 13%,
    rgba(255, 213, 139, .96) 48%,
    rgba(206, 137, 63, .5) 87%,
    transparent 100%
  );
  transform: scaleY(.04);
  transform-origin: center bottom;
  mix-blend-mode: screen;
  will-change: transform, opacity;
  transition: opacity .08s linear, transform .075s linear;
}
.tr-audio-rail--left {
  --tr-rail-energy: var(--tr-audio-left, 0);
  left: 3px;
}
.tr-audio-rail--right {
  --tr-rail-energy: var(--tr-audio-right, 0);
  right: 3px;
}
.tr-deck-wrap--playing .tr-audio-rail {
  opacity: calc(.1 + var(--tr-rail-energy) * .74);
  transform: scaleY(calc(.04 + var(--tr-rail-energy) * .82));
  filter: brightness(calc(.72 + var(--tr-rail-energy) * .72));
  box-shadow:
    0 0 calc(7px + var(--tr-rail-energy) * 26px) rgba(236, 171, 85, .82),
    0 0 calc(18px + var(--tr-rail-energy) * 48px) rgba(205, 126, 53, .32);
}
.tr-deck-img { display: block; width: 100%; height: auto; transition: opacity .3s ease; }
.tr-deck-img--overlay { position: absolute; inset: 0; }

/* Оба видео (вставка и воспроизведение) сняты крупнее, чем фото деки.
   Посадка кадра видео внутри фото откалибрована template-matching'ом
   (VIDEO_RECT в DeckScene.jsx) — числа ниже должны с ним совпадать.
   Маска растушёвывает края, чтобы граница видео/фото не читалась. */
.tr-video {
  position: absolute;
  left: 9.48%; top: 0.35%; width: 81.09%; height: 98.83%;
  object-fit: fill; opacity: 0; transition: opacity .3s ease; z-index: 4;
  pointer-events: none;
  -webkit-mask-image:
    linear-gradient(to right, transparent 0, #000 4%, #000 96%, transparent 100%),
    linear-gradient(to bottom, transparent 0, #000 6%, #000 94%, transparent 100%);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to right, transparent 0, #000 4%, #000 96%, transparent 100%),
    linear-gradient(to bottom, transparent 0, #000 6%, #000 94%, transparent 100%);
  mask-composite: intersect;
}
.tr-video--on { opacity: 1; }

/* Физические кнопки деки: невидимые кликабельные зоны поверх фото */
.tr-hotspot {
  position: absolute; z-index: 6;
  background: transparent; border: 0; padding: 0; cursor: pointer;
  border-radius: 10px;
}
.tr-hotspot::after {
  content: ''; position: absolute; inset: 6% 10%; border-radius: 10px;
  box-shadow: 0 0 0 0 rgba(201, 168, 76, 0);
  transition: box-shadow .3s ease;
}
.tr-hotspot:hover::after,
.tr-hotspot:focus-visible::after {
  box-shadow: 0 0 26px 6px rgba(201, 168, 76, .28), inset 0 0 18px rgba(201, 168, 76, .16);
}
.tr-hotspot--hint::after {
  animation: trHint 2.4s ease-in-out infinite;
}
@keyframes trHint {
  0%, 100% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0); }
  50% { box-shadow: 0 0 24px 5px rgba(201, 168, 76, .3), inset 0 0 16px rgba(201, 168, 76, .18); }
}
.tr-hotspot__tip {
  position: absolute; left: 50%; bottom: calc(100% + 6px);
  transform: translateX(-50%) translateY(4px);
  white-space: nowrap;
  background: rgba(18, 12, 7, .88);
  border: 1px solid rgba(201, 168, 76, .45);
  color: #C9A84C;
  font-size: 12px; letter-spacing: .16em; text-transform: uppercase;
  padding: 6px 12px; border-radius: 999px;
  opacity: 0; pointer-events: none;
  transition: opacity .2s ease, transform .2s ease;
}
.tr-hotspot:hover .tr-hotspot__tip,
.tr-hotspot:focus-visible .tr-hotspot__tip,
.tr-hotspot--coach .tr-hotspot__tip {
  opacity: 1; transform: translateX(-50%) translateY(0);
}
.tr-hotspot--coach::after {
  animation: trMobileCoach 1.25s ease-in-out infinite;
}
@keyframes trMobileCoach {
  0%, 100% { box-shadow: 0 0 12px 2px rgba(201, 168, 76, .22), inset 0 0 12px rgba(201, 168, 76, .12); }
  50% { box-shadow: 0 0 42px 12px rgba(234, 190, 91, .72), inset 0 0 26px rgba(234, 190, 91, .36); }
}

.tr-status {
  width: fit-content; max-width: calc(100% - 24px); min-height: 40px;
  display: flex; align-items: center; justify-content: center;
  margin: 12px auto 0; padding: 8px 18px;
  color: #d3c7aa; font-size: 14px; letter-spacing: .025em; text-align: center;
  background: rgba(17, 11, 7, .58); backdrop-filter: blur(10px);
  border: 1px solid rgba(201, 168, 76, .2); border-radius: 999px;
}

/* J-card: «бумажный вкладыш» с названием трека и волной */
.tr-jcard {
  max-width: 720px; margin: 28px auto 0;
  background: linear-gradient(180deg, #efe6cf, #e5d8ba);
  border-radius: 8px; padding: 18px 22px 20px;
  transform: rotate(-.35deg);
  box-shadow: 0 18px 44px -14px rgba(0, 0, 0, .75);
  animation: trFadeIn .5s ease both;
}
.tr-jcard__line {
  display: flex; justify-content: space-between; align-items: baseline; gap: 14px;
  border-bottom: 1px solid rgba(90, 66, 40, .35);
  padding-bottom: 10px; margin-bottom: 12px;
}
.tr-jcard__title {
  font-family: var(--font-playfair), 'Playfair Display', serif;
  font-style: italic; color: #41301d;
  font-size: clamp(16px, 2.2vw, 21px);
}
.tr-jcard__genre {
  font-size: 12px; letter-spacing: .22em; text-transform: uppercase;
  color: #8a6a34; white-space: nowrap;
}
.tr-jcard__error { color: #8a4a2a; font-size: 12.5px; margin-top: 8px; }

/* ─────────────── КАССЕТНАЯ КОЛЛЕКЦИЯ ─────────────── */
.tr-shelf {
  position: relative; max-width: 1180px;
  margin: clamp(30px, 4vw, 48px) auto 18px;
  padding: clamp(20px, 3vw, 30px);
  background:
    radial-gradient(ellipse at 72% 0, rgba(234, 169, 91, .13), transparent 36%),
    repeating-linear-gradient(92deg, rgba(255, 224, 177, .018) 0 1px, transparent 1px 17px),
    linear-gradient(155deg, rgba(86, 51, 26, .88), rgba(35, 21, 12, .94) 46%, rgba(18, 11, 7, .97));
  border: 1px solid rgba(226, 168, 94, .24); border-radius: 18px 18px 12px 12px;
  box-shadow:
    0 38px 86px -42px rgba(0, 0, 0, .98),
    inset 0 1px rgba(255, 229, 188, .08),
    inset 0 -18px 34px rgba(8, 5, 3, .28);
  isolation: isolate;
}
/* Передняя кромка деревянного стола — коробки больше не висят в воздухе. */
.tr-shelf::after {
  content: ''; position: absolute; left: 18px; right: 18px; bottom: -15px; height: 16px; z-index: -1;
  border-radius: 0 0 12px 12px;
  background:
    repeating-linear-gradient(90deg, rgba(255, 225, 180, .025) 0 1px, transparent 1px 22px),
    linear-gradient(180deg, #422816, #1c110a 68%, #0d0805);
  border: 1px solid rgba(222, 163, 91, .16); border-top: 0;
  box-shadow: 0 14px 28px rgba(0, 0, 0, .56);
}
.tr-shelf__head {
  position: relative; z-index: 2;
  display: flex; align-items: end; justify-content: space-between; gap: 28px;
  margin-bottom: 20px; padding-bottom: 17px;
  border-bottom: 1px solid rgba(218, 157, 82, .22);
}
.tr-shelf__eyebrow {
  display: block; margin-bottom: 7px; color: #d5ad58;
  font-size: 12px; letter-spacing: .22em; text-transform: uppercase;
}
.tr-shelf__head h2 {
  margin: 0;
  font-family: var(--font-playfair), 'Playfair Display', serif;
  font-weight: 500; color: #f1e5ca;
  font-size: clamp(22px, 2.5vw, 28px); letter-spacing: .02em;
}
.tr-shelf__head p {
  max-width: 390px; margin: 0; color: #cabd9f; font-size: 14px;
  line-height: 1.55; text-align: right; letter-spacing: .035em;
}
.tr-collection-toolbar {
  display: flex; align-items: center; justify-content: space-between; gap: 18px;
  margin: -2px 0 19px;
}
.tr-collection-switch {
  display: inline-flex; padding: 4px;
  background: rgba(13, 8, 5, .48); border: 1px solid rgba(218, 157, 82, .2);
  border-radius: 999px; box-shadow: inset 0 2px 10px rgba(0, 0, 0, .3);
}
.tr-collection-switch button {
  min-height: 40px; border: 0; border-radius: 999px; padding: 8px 17px;
  background: transparent; color: #bfb193; cursor: pointer;
  font-size: 12px; letter-spacing: .1em; text-transform: uppercase;
  transition: color .2s ease, background .2s ease, box-shadow .2s ease;
}
.tr-collection-switch button:hover { color: #eee0bf; }
.tr-collection-switch .tr-collection-switch--active {
  color: #2e2115;
  background: linear-gradient(180deg, #e7d5ac, #c7ab75);
  box-shadow: 0 4px 12px rgba(0, 0, 0, .34), inset 0 1px rgba(255, 255, 255, .45);
}
.tr-quick-listen {
  min-height: 46px; display: grid; grid-template-columns: 1fr auto; align-items: center;
  column-gap: 14px; padding: 7px 13px 7px 16px; border-radius: 8px;
  color: #ddcda9; text-decoration: none;
  background: rgba(27, 18, 11, .5); border: 1px solid rgba(218, 157, 82, .26);
  transition: color .2s ease, border-color .2s ease, background .2s ease, transform .2s ease;
}
.tr-quick-listen span { font-size: 14px; letter-spacing: .035em; }
.tr-quick-listen small {
  grid-column: 1; color: #9f9174; font-size: 12px; letter-spacing: .035em;
}
.tr-quick-listen strong {
  grid-column: 2; grid-row: 1 / span 2; color: #C9A84C; font-size: 20px; font-weight: 400;
}
.tr-quick-listen:hover {
  color: #f3e5c4; border-color: rgba(218, 174, 90, .58);
  background: rgba(47, 31, 17, .68); transform: translateX(2px);
}
.tr-shelf__row {
  position: relative; z-index: 1;
  display: grid; grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 17px; align-items: stretch;
  padding: 14px 14px 18px;
  border-radius: 13px;
  background:
    linear-gradient(180deg, rgba(255, 211, 151, .045), transparent 23%),
    repeating-linear-gradient(95deg, rgba(255, 225, 184, .018) 0 1px, transparent 1px 19px),
    rgba(19, 12, 8, .38);
  box-shadow:
    inset 0 10px 24px rgba(5, 3, 2, .28),
    inset 0 -1px rgba(239, 188, 116, .12);
}
.tr-box {
  --tr-box-tilt: 0deg;
  position: relative; min-height: 40px;
  background: rgba(12, 8, 5, .44);
  border: 1px solid rgba(224, 168, 97, .18); border-radius: 10px;
  padding: 7px 7px 9px; cursor: pointer; overflow: hidden;
  transform: rotate(var(--tr-box-tilt)); transform-origin: 50% 82%;
  transition: transform .3s cubic-bezier(.2, .7, .2, 1), filter .25s ease, border-color .25s ease, box-shadow .25s ease;
  filter: brightness(.94);
  box-shadow:
    0 14px 22px -13px rgba(0, 0, 0, .94),
    inset 0 1px rgba(255, 226, 181, .05);
  animation: trBoxArrive .58s cubic-bezier(.2, .75, .25, 1) both;
  animation-delay: calc(var(--tr-box-i, 0) * 65ms);
}
.tr-box::before {
  content: ''; position: absolute; left: 10%; right: 10%; bottom: 4px; height: 14%; z-index: -1;
  background: rgba(0, 0, 0, .72); border-radius: 50%; filter: blur(8px);
  transition: transform .3s ease, opacity .3s ease;
}
@keyframes trBoxArrive {
  from { opacity: 0; transform: translateY(16px) rotate(var(--tr-box-tilt)); }
  to { opacity: 1; transform: translateY(0) rotate(var(--tr-box-tilt)); }
}
.tr-box:hover {
  transform: translateY(-8px) rotate(0deg) scale(1.025); filter: brightness(1.08);
  border-color: rgba(230, 176, 105, .48);
  box-shadow:
    0 24px 30px -18px rgba(0, 0, 0, .96),
    0 0 28px rgba(201, 168, 76, .1);
}
.tr-box:hover::before { transform: translateY(8px) scaleX(.88); opacity: .76; }
.tr-box--featured {
  border-color: rgba(237, 188, 83, .58);
  background:
    radial-gradient(circle at 50% 38%, rgba(240, 180, 72, .14), transparent 58%),
    rgba(18, 11, 5, .58);
  box-shadow:
    0 18px 30px -15px rgba(0, 0, 0, .96),
    0 0 32px rgba(218, 155, 45, .2),
    inset 0 1px rgba(255, 226, 157, .12);
}
.tr-box--featured::after {
  content: ''; position: absolute; inset: 5px; z-index: 3; pointer-events: none;
  border-radius: 8px; box-shadow: inset 0 0 24px rgba(244, 186, 70, .12), 0 0 22px rgba(224, 159, 44, .18);
  animation: trFeaturedHalo 2.4s ease 1.1s 1 both;
}
@keyframes trFeaturedHalo {
  0% { opacity: .16; }
  48% { opacity: .92; }
  100% { opacity: .38; }
}
.tr-box--featured .tr-box__label {
  color: #4c2b0f; font-weight: 700; font-style: italic;
  background: linear-gradient(180deg, #f5d88f, #d8ad53);
  box-shadow: 0 4px 11px rgba(0, 0, 0, .58), 0 0 17px rgba(226, 166, 61, .22);
}
.tr-box__featured-mark {
  position: absolute; z-index: 4; top: 10px; right: 10px;
  color: #f0cf78; font-size: 12px; letter-spacing: .14em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, .9);
}
.tr-box--active {
  transform: translateY(-6px) rotate(0deg); filter: brightness(1.1);
  border-color: rgba(220, 178, 91, .78);
  box-shadow:
    0 25px 34px -18px rgba(0, 0, 0, .96),
    0 0 38px rgba(201, 168, 76, .17);
  animation: trBoxOpen .42s cubic-bezier(.2, .7, .2, 1) both;
}
@keyframes trBoxOpen {
  0% { transform: translateY(0) rotate(var(--tr-box-tilt)) scale(1); }
  48% { transform: translateY(2px) rotate(0deg) scale(.975); }
  100% { transform: translateY(-6px) rotate(0deg) scale(1); }
}
.tr-box img {
  width: 100%; height: auto; display: block; border-radius: 6px;
  filter: saturate(.94) contrast(1.03);
  transition: transform .32s cubic-bezier(.2, .7, .2, 1), filter .25s ease;
}
.tr-box:hover img { transform: scale(1.035); filter: saturate(1.04) contrast(1.04); }
.tr-box--active img { transform: scale(1.025); }
.tr-box__label {
  position: absolute; left: 50%; bottom: 37px;
  transform: translateX(-50%) rotate(-2deg);
  background: linear-gradient(180deg, #f2ead4, #dfd0ae); color: #41301d;
  font-family: var(--font-playfair), 'Playfair Display', serif; font-style: normal; font-weight: 600;
  font-size: clamp(16px, 1.7vw, 19px);
  padding: 4px 13px; border-radius: 2px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, .52); white-space: nowrap;
  transition: transform .3s ease;
}
.tr-box:hover .tr-box__label,
.tr-box--active .tr-box__label { transform: translateX(-50%) rotate(-1deg) translateY(-2px); }
.tr-box__count {
  position: relative; z-index: 2; display: block; margin-top: 7px;
  color: #d0c19f; font-size: 12px; letter-spacing: .09em; text-transform: uppercase;
}

/* Лоток с кассетами открытой коробки */
.tr-tray {
  margin-top: 18px;
  border: 1px solid rgba(201, 168, 76, .22);
  background: rgba(24, 18, 12, .62);
  backdrop-filter: blur(6px);
  border-radius: 14px;
  padding: 22px clamp(14px, 3vw, 28px) 26px;
  animation: trTrayIn .45s cubic-bezier(.2, .7, .3, 1) both;
}
.tr-tray--featured {
  border-color: rgba(229, 180, 77, .38);
  background:
    radial-gradient(ellipse at 50% 0, rgba(226, 160, 55, .14), transparent 45%),
    rgba(24, 17, 10, .72);
  box-shadow: inset 0 1px rgba(255, 224, 156, .08), 0 20px 45px rgba(0, 0, 0, .28);
}
@keyframes trTrayIn { from { opacity: 0; transform: translateY(-14px); } to { opacity: 1; transform: none; } }

.tr-hits-intro { margin: 0 0 22px; text-align: center; }
.tr-hits-intro > span {
  display: block; color: #d4aa50; font-size: 12px; letter-spacing: .24em; text-transform: uppercase;
}
.tr-hits-intro h3 {
  margin: 7px 0 5px; color: #f0dfb9;
  font-family: var(--font-playfair), 'Playfair Display', serif;
  font-size: clamp(21px, 2.7vw, 29px); font-weight: 500;
}
.tr-hits-intro p { margin: 0; color: #b9aa8b; font-size: 14px; }
.tr-tray__grid--hits { grid-template-columns: repeat(5, minmax(0, 1fr)); }

.tr-tray__groups { display: grid; gap: 30px; }
.tr-artist-group { min-width: 0; }
.tr-artist-group + .tr-artist-group {
  padding-top: 28px;
  border-top: 1px dashed rgba(206, 164, 94, .25);
}
.tr-artist-label {
  position: relative; width: fit-content; max-width: 100%;
  display: flex; align-items: center; gap: 11px;
  margin: 0 0 17px 5px; padding: 8px 14px 9px 10px;
  color: #3b2b1b;
  background:
    repeating-linear-gradient(0deg, rgba(75, 49, 25, .035) 0 1px, transparent 1px 5px),
    linear-gradient(180deg, #eee1c4, #d7c29c);
  border: 1px solid rgba(255, 239, 203, .5); border-radius: 3px; cursor: pointer;
  box-shadow: 0 5px 12px rgba(0, 0, 0, .38), inset 0 1px rgba(255, 255, 255, .45);
  transform: rotate(-.25deg);
  text-align: left;
  transition: transform .2s ease, filter .2s ease, box-shadow .2s ease;
}
.tr-artist-label::after {
  content: ''; position: absolute; left: 12%; right: 12%; bottom: -5px; height: 5px;
  background: rgba(15, 10, 6, .34); filter: blur(4px); z-index: -1;
}
.tr-artist-label__index {
  color: #8a6a34; font-size: 12px; letter-spacing: .12em;
  border-right: 1px solid rgba(79, 55, 30, .28); padding-right: 10px;
}
.tr-artist-label__name {
  min-width: 0;
  font-family: var(--font-playfair), 'Playfair Display', serif;
  font-size: clamp(17px, 2vw, 22px); font-weight: 600; line-height: 1.1;
  overflow-wrap: anywhere;
}
.tr-artist-label--has-logo { padding-top: 7px; padding-bottom: 7px; }
.tr-artist-label__logo {
  width: clamp(150px, 23vw, 230px); height: 64px; display: grid; place-items: center; overflow: hidden;
  border: 1px solid rgba(63, 44, 26, .32); border-radius: 3px;
  box-shadow: inset 0 0 14px rgba(0, 0, 0, .18), 0 2px 5px rgba(0, 0, 0, .25);
}
.tr-artist-label__logo img { width: 100%; height: 100%; display: block; object-fit: contain; }
.tr-logo--dark { background: #060608; }
.tr-logo--color { background: #4e3d4c; }
.tr-logo--light { background: #ddd8cc; }
.tr-artist-label__count {
  color: #705737; font-size: 12px; letter-spacing: .08em; white-space: nowrap;
}
.tr-artist-label__open {
  color: #8a642b; font-size: 12px; letter-spacing: .04em; white-space: nowrap;
  border-left: 1px solid rgba(79, 55, 30, .23); padding-left: 11px;
}
.tr-artist-label:hover {
  transform: rotate(0deg) translateY(-2px); filter: brightness(1.04);
  box-shadow: 0 9px 17px rgba(0, 0, 0, .42), inset 0 1px rgba(255, 255, 255, .5);
}

.tr-artist-index {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(225px, 1fr)); gap: 13px;
  padding: 15px; border-radius: 13px;
  background: rgba(19, 12, 8, .38);
  box-shadow: inset 0 10px 24px rgba(5, 3, 2, .27), inset 0 -1px rgba(239, 188, 116, .1);
}
.tr-artist-card {
  min-height: 78px; display: grid; grid-template-columns: 48px 1fr auto; align-items: center; gap: 12px;
  padding: 10px 12px; cursor: pointer; text-align: left;
  color: #3c2b1a; border: 1px solid rgba(255, 239, 203, .38); border-radius: 4px;
  background:
    repeating-linear-gradient(0deg, rgba(75, 49, 25, .03) 0 1px, transparent 1px 5px),
    linear-gradient(150deg, #e9dcc0, #cdb78e);
  box-shadow: 0 8px 17px rgba(0, 0, 0, .35), inset 0 1px rgba(255, 255, 255, .42);
  transform: rotate(var(--tr-artist-tilt, 0deg));
  transition: transform .22s ease, filter .2s ease, box-shadow .2s ease;
  animation: trArtistCardIn .45s ease both;
  animation-delay: calc(var(--tr-artist-i, 0) * 35ms);
}
@keyframes trArtistCardIn {
  from { opacity: 0; transform: translateY(10px) rotate(var(--tr-artist-tilt, 0deg)); }
  to { opacity: 1; transform: rotate(var(--tr-artist-tilt, 0deg)); }
}
.tr-artist-card:hover,
.tr-artist-card--active {
  transform: translateY(-3px) rotate(0deg); filter: brightness(1.04);
  box-shadow: 0 13px 22px rgba(0, 0, 0, .42), 0 0 18px rgba(206, 158, 75, .14);
}
.tr-artist-card--active { border-color: rgba(139, 96, 38, .55); }
.tr-artist-card__logo {
  width: 48px; height: 48px; display: grid; place-items: center; overflow: hidden;
  color: #e7d8b5; background: #3b2b1c; border: 1px solid rgba(80, 55, 28, .38); border-radius: 50%;
  font-family: var(--font-playfair), 'Playfair Display', serif; font-size: 16px; letter-spacing: .04em;
  box-shadow: inset 0 0 13px rgba(0, 0, 0, .42);
}
.tr-artist-card__logo img { width: 100%; height: 100%; object-fit: contain; }
.tr-artist-card--has-logo { grid-template-columns: 112px 1fr auto; }
.tr-artist-card--has-logo .tr-artist-card__logo {
  width: 112px; height: 52px; border-radius: 4px;
  border-color: rgba(68, 47, 27, .36); box-shadow: inset 0 0 12px rgba(0, 0, 0, .25);
}
.tr-logo-card--dark .tr-artist-card__logo { background: #050507; }
.tr-logo-card--color .tr-artist-card__logo { background: #4e3d4c; }
.tr-logo-card--light .tr-artist-card__logo { background: #ddd8cc; }
.tr-artist-card__body { min-width: 0; }
.tr-artist-card__body strong {
  display: block; color: #3b2a18;
  font-family: var(--font-playfair), 'Playfair Display', serif; font-size: 18px; line-height: 1.2;
}
.tr-artist-card__body small {
  display: block; margin-top: 5px; color: #796343; font-size: 12px; line-height: 1.25;
}
.tr-artist-card__count {
  min-width: 27px; height: 27px; display: grid; place-items: center;
  color: #745424; background: rgba(255, 247, 225, .42); border: 1px solid rgba(91, 61, 27, .2);
  border-radius: 50%; font-size: 12px;
}

.tr-tray--artist { border-color: rgba(205, 164, 91, .31); }
.tr-artist-focus { margin-bottom: 22px; padding-bottom: 17px; border-bottom: 1px solid rgba(205, 164, 91, .2); }
.tr-artist-focus__eyebrow {
  color: #cba34f; font-size: 12px; letter-spacing: .22em; text-transform: uppercase;
}
.tr-artist-focus__logo {
  width: min(360px, 100%); height: 96px; display: grid; place-items: center; overflow: hidden;
  margin: 13px 0 12px; border: 1px solid rgba(213, 170, 87, .25); border-radius: 7px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, .28), inset 0 0 18px rgba(0, 0, 0, .2);
}
.tr-artist-focus__logo img { width: 100%; height: 100%; object-fit: contain; }
.tr-artist-focus h3 {
  margin: 6px 0 5px; color: #eee1c2;
  font-family: var(--font-playfair), 'Playfair Display', serif;
  font-size: clamp(22px, 2.5vw, 28px); font-weight: 500;
}
.tr-artist-focus p { margin: 0; color: #b8aa8d; font-size: 14px; }

.tr-tray__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px 16px;
}
.tr-cassette {
  min-width: 0; background: transparent; border: 0; padding: 0; cursor: pointer;
  text-align: center;
  animation: trCassIn .5s ease both;
}
@keyframes trCassIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
.tr-cassette img {
  width: 100%; height: auto; display: block;
  filter: drop-shadow(0 10px 14px rgba(0, 0, 0, .55));
  transition: transform .22s ease;
}
.tr-cassette:hover img { transform: translateY(-8px) rotate(-1.5deg) scale(1.04); }
.tr-cassette__chip {
  display: block; width: fit-content; max-width: 100%; margin: 9px auto 0;
  font-size: 14px; color: #d8cfb6;
  background: rgba(60, 48, 32, .55);
  border: 1px solid rgba(201, 168, 76, .18);
  border-radius: 10px; padding: 5px 11px;
  line-height: 1.35; white-space: normal; overflow-wrap: anywhere;
}
.tr-cassette__duration {
  display: block; width: max-content; margin: 6px auto 0;
  color: #bbaa86; font-size: 12px; letter-spacing: .08em;
}
.tr-cassette__meta,
.tr-cassette__genre {
  display: block; width: fit-content; max-width: 100%; margin: 6px auto 0;
  color: #caa85d; font-size: 12px; line-height: 1.3; letter-spacing: .04em;
  overflow-wrap: anywhere;
}
.tr-cassette__genre {
  padding: 3px 9px; border: 1px solid rgba(201, 168, 76, .24); border-radius: 999px;
  background: rgba(72, 54, 31, .36); text-transform: uppercase; letter-spacing: .1em;
}

@media (max-width: 900px) {
  .tr-deck-scene { padding-left: 14px; padding-right: 14px; }
  .tr-shelf__row { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .tr-tray__grid--hits { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
  .tr-room { cursor: pointer; }
  .tr-room__frame { transform-origin: 27% 54%; }
  .tr-room__img { object-position: center center; }
  .tr-room__hotspot { left: 4.5%; top: 47.5%; width: 45%; height: 12%; }
  .tr-room__hint { bottom: -28px; font-size: 12px; padding: 7px 12px; }
  .tr-room__title { top: clamp(20px, 5.5vh, 48px); padding: 0 18px; }
  .tr-room__title h1 { font-size: clamp(34px, 11vw, 48px); }
  .tr-room__title p { max-width: 280px; margin-left: auto; margin-right: auto; line-height: 1.55; }
  .tr-deck-nav__title { display: none; }
  .tr-deck-workbench { margin-left: -8px; margin-right: -8px; }
  .tr-deck-frame {
    overflow: hidden; border-radius: 8px;
    border: 1px solid rgba(232, 190, 119, .3);
    box-shadow:
      0 0 0 2px rgba(12, 8, 5, .64),
      0 0 0 3px rgba(226, 167, 94, .1),
      0 18px 44px -22px rgba(0, 0, 0, .92);
    background: #0d0a07;
  }
  .tr-deck-wrap { width: 122%; max-width: none; margin-left: -11%; border-radius: 0; box-shadow: none; }
  .tr-audio-rail {
    width: 3px; top: 5%; bottom: 5%; z-index: 10;
    mix-blend-mode: normal;
  }
  .tr-audio-rail--left { left: 9.4%; }
  .tr-audio-rail--right { right: 9.4%; }
  .tr-deck-wrap--playing .tr-audio-rail {
    opacity: calc(.14 + var(--tr-rail-energy) * .72);
  }
  .tr-hotspot { top: 66% !important; height: 30% !important; }
  .tr-hotspot__tip {
    top: 25%; bottom: auto;
    min-width: 48px; box-sizing: border-box;
    padding: 6px 10px 13px;
    border: 0; border-radius: 0;
    background: rgba(23, 15, 8, .64);
    color: rgba(239, 203, 132, .84);
    font-size: 12px; letter-spacing: .1em; text-align: center;
    clip-path: polygon(18% 5%, 82% 5%, 96% 35%, 50% 100%, 4% 35%);
    filter: drop-shadow(0 3px 6px rgba(0, 0, 0, .42));
    transform: translate(-50%, -100%);
  }
  .tr-hotspot--coach { z-index: 9; }
  .tr-hotspot--coach::after { inset: 5% -10% 0; }
  .tr-hotspot--coach .tr-hotspot__tip {
    opacity: .82;
    transform: translate(-50%, -100%);
    animation: trCoachPick 1.35s cubic-bezier(.45, 0, .25, 1) 1 both;
  }
  @keyframes trCoachPick {
    0%, 42% { transform: translate(-50%, calc(-100% - 3px)); }
    72% { transform: translate(-50%, calc(-100% + 6px)); }
    100% { transform: translate(-50%, -100%); }
  }
  .tr-hotspot[data-control='play'] { left: 22% !important; width: 6.3% !important; }
  .tr-hotspot[data-control='rewind'] { left: 28.3% !important; width: 5% !important; }
  .tr-hotspot[data-control='fastForward'] { left: 33.3% !important; width: 4.8% !important; }
  .tr-hotspot[data-control='stop'] { left: 38.1% !important; width: 5.3% !important; }
  .tr-hotspot[data-control='pause'] { left: 43.4% !important; width: 6.2% !important; }
  .tr-shelf { padding: 18px 14px; border-radius: 14px; }
  .tr-shelf__head { align-items: start; flex-direction: column; gap: 9px; }
  .tr-shelf__head p { text-align: left; }
  .tr-collection-toolbar { align-items: stretch; flex-direction: column; }
  .tr-collection-switch { display: grid; grid-template-columns: 1fr 1fr; }
  .tr-collection-switch button { padding-left: 10px; padding-right: 10px; }
  .tr-quick-listen { width: 100%; box-sizing: border-box; }
  .tr-shelf__row { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
  .tr-box { padding: 9px 8px 8px; }
  .tr-box__label { bottom: 33px; }
  .tr-tray__groups { gap: 24px; }
  .tr-artist-group + .tr-artist-group { padding-top: 23px; }
  .tr-artist-label { margin-left: 0; padding-right: 11px; gap: 8px; }
  .tr-artist-label__logo { width: clamp(128px, 44vw, 190px); height: 55px; }
  .tr-artist-label__count { white-space: normal; text-align: right; }
  .tr-artist-label__open { display: none; }
  .tr-artist-index { grid-template-columns: 1fr; padding: 11px; }
  .tr-artist-card--has-logo { grid-template-columns: 96px 1fr auto; }
  .tr-artist-card--has-logo .tr-artist-card__logo { width: 96px; height: 48px; }
  .tr-tray__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px 10px; }
  .tr-tray__grid--hits { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

/* Доступность: уважаем reduced motion */
@media (prefers-reduced-motion: reduce) {
  .tr-room__hint, .tr-room__lamp, .tr-hotspot--hint::after, .tr-hotspot--coach::after,
  .tr-hotspot--coach .tr-hotspot__tip, .tr-box,
  .tr-box--featured::after, .tr-artist-card { animation: none; }
  .tr-audio-rail { display: none; }
  .tr-room__frame { transition: opacity .4s ease; }
  .tr-room--zoom .tr-room__frame { transform: none; }
}
`
