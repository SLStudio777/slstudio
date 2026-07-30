// ────────────────────────────────────────────────────────────────
// Tape Room — 59 работ из /portfolio, жанровые коробки, «Хиты»
// и сквозной каталог исполнителей.
//
// Когда появятся настоящие логотипы, добавьте путь в ARTIST_LOGOS:
//   'oleg-volos': '/tape-room/artists/oleg-volos.webp'
// ────────────────────────────────────────────────────────────────

import { portfolioSections } from './portfolioTracks.js'

export const CASSETTE_IMAGES = {
  blank: '/tape-room/cassette-blank-nobg.webp',
  sony: '/tape-room/cassette-sony-hf.webp',
  tdk: '/tape-room/cassette-tdk-d.webp',
  basf: '/tape-room/cassette-basf-lh.webp',
  maxell: '/tape-room/cassette-maxell-ud.webp',
  denon: '/tape-room/cassette-denon-dx1.webp',
}

const GENRE_NAMES = {
  jazz: 'Jazz',
  blues: 'Blues',
  rock: 'Rock',
  metal: 'Metal',
  'dark-folk': 'Dark Folk',
  pop: 'Pop',
  classical: 'Classical',
}

const BAND_NAMES = {
  TM: 'Temperatura',
  BB: 'Bleuler Band',
  ID: 'Idillia',
  PX: 'Paradox',
  RS: 'Red Sky Syndrome',
}

const ARTIST_NAME_ALIASES = {
  'Temperatura band': 'Temperatura',
  'Idillia band': 'Idillia',
  'Paradox band': 'Paradox',
}

const ARTIST_IDS = {
  Temperatura: 'temperatura',
  'Bleuler Band': 'bleuler-band',
  Idillia: 'idillia',
  Paradox: 'paradox',
  'Red Sky Syndrome': 'red-sky-syndrome',
  'Alexey Krepak': 'alexey-krepak',
  'Oleg Volos': 'oleg-volos',
  'Alexey Kulikov': 'alexey-kulikov',
  Dniprorudne: 'dniprorudne',
  'SL Studio': 'sl-studio',
}

// Единые логотипы используются и в Tape Room, и в обычном портфолио.
const ARTIST_LOGOS = {
  temperatura: { src: '/images/bands/temperatura.webp', variant: 'light' },
  'bleuler-band': { src: '/images/bands/bleuler-band.webp', variant: 'dark' },
  idillia: { src: '/images/bands/idillia.webp', variant: 'dark' },
  paradox: { src: '/images/bands/paradox.webp', variant: 'color' },
  'red-sky-syndrome': { src: '/images/bands/red-sky-syndrome.webp', variant: 'dark' },
}
const BRANDS = ['sony', 'tdk', 'basf', 'maxell', 'denon', 'blank']

function getArtistName(track) {
  const caption = track.captionEn || track.captionPl || ''
  const captionName = caption.split('—')[0].trim()
  const rawName = captionName || BAND_NAMES[track.band] || 'SL Studio'
  return ARTIST_NAME_ALIASES[rawName] || rawName
}

function getArtistId(name) {
  return ARTIST_IDS[name] || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'sl-studio'
}

const BASE_GENRES = portfolioSections.map((section, sectionIndex) => {
  const genreName = GENRE_NAMES[section.genre] || section.labelEn
  return {
    id: section.genre,
    name: genreName,
    tracks: section.tracks.map((track, trackIndex) => {
      const artist = getArtistName(track)
      const artistId = getArtistId(artist)
      const artistLogo = ARTIST_LOGOS[artistId] || null
      return {
        id: track.slug,
        brand: BRANDS[(sectionIndex + trackIndex) % BRANDS.length],
        title: track.title,
        artist,
        artistId,
        artistLogo: artistLogo?.src || null,
        artistLogoVariant: artistLogo?.variant || null,
        audio: track.file,
        duration: track.duration,
        cover: track.cover,
        genreId: section.genre,
        genreName,
      }
    }),
  }
})

const ALL_TRACKS = BASE_GENRES.flatMap((genre) => genre.tracks)

// Кураторская пятёрка. Состав меняется одной строкой без копирования MP3.
export const HIT_TRACK_IDS = [
  'temperatura-nekhilo',
  'bleuler-kapitan',
  'idillia-adrenalin',
  'red-sky-black-sun',
  'kofe-aromat',
]

const hitTracks = HIT_TRACK_IDS.map((id) => ALL_TRACKS.find((track) => track.id === id)).filter(Boolean)

export const GENRES = [
  {
    id: 'hits',
    name: 'Highlights',
    featured: true,
    tracks: hitTracks,
  },
  ...BASE_GENRES,
]

const artistsById = new Map()
for (const track of ALL_TRACKS) {
  let artist = artistsById.get(track.artistId)
  if (!artist) {
    artist = {
      id: track.artistId,
      name: track.artist,
      displayName: track.artist === 'SL Studio' ? 'Other recordings' : track.artist,
      logo: track.artistLogo,
      logoVariant: track.artistLogoVariant,
      tracks: [],
    }
    artistsById.set(track.artistId, artist)
  }
  artist.tracks.push(track)
}

export const ARTISTS = [...artistsById.values()]
