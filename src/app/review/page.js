import ReviewLauncher from '../components/pages/review/ReviewLauncher'

export const metadata = {
  title: 'Google Review — SL Studio',
  description: 'Leave a Google review for SL Studio.',
  alternates: { canonical: 'https://www.slstudio.pro/review' },
  robots: { index: false, follow: false },
}

export default function ReviewPage() {
  return <ReviewLauncher />
}
