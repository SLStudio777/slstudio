'use client'

import { ArrowUpRight, MapPin, Star } from 'lucide-react'

const REVIEW_URL = 'https://g.page/r/CVzYvDfUAAEkEBI/review'
const MAPS_QUERY = 'SL Studio 52.2330018,21.0614198'

const COPY = {
  en: {
    eyebrow: 'Already worked together?',
    title: 'Share your experience on Google',
    body: 'Your review helps independent musicians find the studio and understand what working together is really like.',
    button: 'Open in Google Maps',
    note: 'Google Maps will open when it is installed. Otherwise, the Google review form opens in your browser.',
  },
  pl: {
    eyebrow: 'Pracowaliśmy już razem?',
    title: 'Podziel się opinią w Google',
    body: 'Twoja opinia pomaga niezależnym muzykom znaleźć studio i zobaczyć, jak naprawdę wygląda wspólna praca.',
    button: 'Otwórz w Mapach Google',
    note: 'Jeśli aplikacja Mapy Google jest zainstalowana, otworzy się automatycznie. W przeciwnym razie otworzy się formularz opinii w przeglądarce.',
  },
}

export default function GoogleReviewCard({ lang = 'en' }) {
  const text = COPY[lang] || COPY.en

  function openGoogleReview() {
    const ua = navigator.userAgent || ''
    const isAndroid = /Android/i.test(ua)
    const isIOS = /iPhone|iPad|iPod/i.test(ua)

    if (isAndroid) {
      const mapsUrl = `www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`
      const fallback = encodeURIComponent(REVIEW_URL)
      window.location.href = `intent://${mapsUrl}#Intent;scheme=https;package=com.google.android.apps.maps;S.browser_fallback_url=${fallback};end`
      return
    }

    if (isIOS) {
      const appUrl = `comgooglemaps://?q=${encodeURIComponent(MAPS_QUERY)}&center=52.2330018,21.0614198&zoom=15`
      const startedAt = Date.now()
      window.location.href = appUrl
      window.setTimeout(() => {
        if (!document.hidden && Date.now() - startedAt < 1800) window.location.href = REVIEW_URL
      }, 900)
      return
    }

    window.location.href = REVIEW_URL
  }

  return (
    <section id="google-review" className="mt-20 scroll-mt-24">
      <div
        className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl p-7 md:p-9"
        style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(201,168,76,0.22)',
          boxShadow: '0 18px 60px rgba(0,0,0,0.2)',
        }}
      >
        <div
          className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(circle, rgba(201,168,76,0.13), transparent 70%)',
          }}
        />

        <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2 text-[#C9A84C]">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-[0.22em]">
                {text.eyebrow}
              </span>
            </div>
            <h2 className="text-2xl font-semibold tracking-wide text-white md:text-3xl">
              {text.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65">
              {text.body}
            </p>
          </div>

          <button
            type="button"
            onClick={openGoogleReview}
            className="btn-gold inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-[#161616] transition hover:-translate-y-0.5 hover:opacity-95 md:w-auto"
            style={{
              background: 'linear-gradient(135deg, #C9A84C 0%, #e8c97a 52%, #C9A84C 100%)',
              backgroundSize: '200% auto',
              boxShadow: '0 0 26px rgba(201,168,76,0.2)',
            }}
          >
            <Star className="h-4 w-4" aria-hidden="true" />
            {text.button}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <p className="relative mt-5 border-t border-white/[0.06] pt-4 text-xs leading-relaxed text-white/75">
          {text.note}
        </p>
      </div>
    </section>
  )
}
