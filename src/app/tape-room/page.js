import TapeRoom from '../components/pages/tape-room/TapeRoom'

const SITE = 'https://www.slstudio.pro'
const TITLE = 'The Tape Room — Interactive Music Archive'
const DESCRIPTION =
  'Explore 62 recordings through an interactive cassette deck, genre boxes and the bands behind the music.'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/tape-room` },
  openGraph: {
    title: `${TITLE} | SL Studio`,
    description: DESCRIPTION,
    url: `${SITE}/tape-room`,
    siteName: 'SL Studio',
    type: 'website',
    images: [{ url: '/tape-room/room.webp', alt: 'The Tape Room at SL Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | SL Studio`,
    description: DESCRIPTION,
    images: ['/tape-room/room.webp'],
  },
}

export default function TapeRoomPage() {
  return <TapeRoom />
}
