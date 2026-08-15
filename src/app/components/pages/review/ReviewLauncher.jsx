'use client'

import { useEffect, useState } from 'react'
import { ExternalLink, MapPin, Star } from 'lucide-react'

const REVIEW_URL = 'https://g.page/r/CVzYvDfUAAEkEBI/review'

const COPY = {
  ru: {
    eyebrow: 'SL Studio · Google',
    title: 'Оставить отзыв',
    body: 'Нажмите кнопку — откроется профиль SL Studio в Google Maps или прямая форма отзыва.',
    button: 'Открыть в Google Maps',
    fallback: 'Открыть прямую форму отзыва',
    note: 'Для публикации отзыва потребуется вход в Google-аккаунт.',
  },
  pl: {
    eyebrow: 'SL Studio · Google',
    title: 'Zostaw opinię',
    body: 'Naciśnij przycisk — otworzy się profil SL Studio w Mapach Google albo bezpośredni formularz opinii.',
    button: 'Otwórz w Mapach Google',
    fallback: 'Otwórz formularz opinii',
    note: 'Aby opublikować opinię, musisz zalogować się na konto Google.',
  },
  en: {
    eyebrow: 'SL Studio · Google',
    title: 'Leave a review',
    body: 'Tap the button to open SL Studio in Google Maps or the direct Google review form.',
    button: 'Open in Google Maps',
    fallback: 'Open the review form',
    note: 'You need to be signed in to a Google account to publish a review.',
  },
}

export default function ReviewLauncher() {
  const [lang, setLang] = useState('ru')

  useEffect(() => {
    const browserLang = (navigator.language || '').toLowerCase()
    if (browserLang.startsWith('pl')) setLang('pl')
    else if (!browserLang.startsWith('ru') && !browserLang.startsWith('uk')) setLang('en')
  }, [])

  const text = COPY[lang]

  function openReview() {
    const ua = navigator.userAgent || ''
    const isAndroid = /Android/i.test(ua)
    const isIOS = /iPhone|iPad|iPod/i.test(ua)

    if (isAndroid) {
      const fallback = encodeURIComponent(REVIEW_URL)
      window.location.href = `intent://g.page/r/CVzYvDfUAAEkEBI/review#Intent;scheme=https;package=com.google.android.apps.maps;S.browser_fallback_url=${fallback};end`
      return
    }

    if (isIOS) {
      const startedAt = Date.now()
      window.location.href = 'comgooglemapsurl://g.page/r/CVzYvDfUAAEkEBI/review'
      window.setTimeout(() => {
        if (!document.hidden && Date.now() - startedAt < 2200) window.location.href = REVIEW_URL
      }, 1200)
      return
    }

    window.location.href = REVIEW_URL
  }

  return (
    <section className="relative flex min-h-[72svh] items-center justify-center py-12 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(201,168,76,0.09), transparent 42%)',
        }}
      />

      <div
        className="relative w-full max-w-xl overflow-hidden rounded-2xl p-7 text-center md:p-10"
        style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(201,168,76,0.24)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.28)',
        }}
      >
        <div
          className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-[#C9A84C]"
          style={{
            background: 'rgba(201,168,76,0.1)',
            border: '1px solid rgba(201,168,76,0.24)',
          }}
        >
          <MapPin className="h-6 w-6" aria-hidden="true" />
        </div>

        <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#C9A84C]">
          {text.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-wide text-white md:text-5xl">
          {text.title}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
          {text.body}
        </p>

        <button
          type="button"
          onClick={openReview}
          className="btn-gold mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-[#161616] transition hover:-translate-y-0.5 hover:opacity-95"
          style={{
            background: 'linear-gradient(135deg, #C9A84C 0%, #e8c97a 52%, #C9A84C 100%)',
            backgroundSize: '200% auto',
            boxShadow: '0 0 30px rgba(201,168,76,0.24)',
          }}
        >
          <Star className="h-4 w-4" aria-hidden="true" />
          {text.button}
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </button>

        <a
          href={REVIEW_URL}
          className="mt-4 inline-flex min-h-10 items-center justify-center text-sm text-white/75 underline decoration-white/20 underline-offset-4 transition hover:text-[#e8c97a]"
        >
          {text.fallback}
        </a>

        <p className="mt-5 border-t border-white/[0.06] pt-4 text-xs leading-relaxed text-white/75">
          {text.note}
        </p>
      </div>
    </section>
  )
}
