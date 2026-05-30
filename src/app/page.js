import Hero from "./components/sections/Hero";
import BeforeAfter from "./components/sections/BeforeAfter";
import YouTube from "./components/sections/YouTube";
import HowItWorks from "./components/sections/HowItWorks";
import Testimonials from "./components/sections/Testimonials";
import WhyChoose from "./components/sections/WhyChoose";
import Pricing from "./components/sections/Pricing";
import FinalCTA from "./components/sections/FinalCTA";

export const metadata = {
  title: "SL Studio | Mixing, Mastering & Music Production",
  description:
    "Professional mixing, mastering and music production services. I help artists turn rough recordings into polished, release-ready tracks with clarity, depth and emotion.",
  keywords: [
    "music production",
    "mixing",
    "mastering",
    "audio engineer",
    "studio",
    "music producer",
    "sound design",
    "mixing engineer",
  ],
  openGraph: {
    title: "SL Studio | Mixing & Mastering",
    description:
      "Your sound, elevated. Professional mixing and mastering services for modern artists.",
    alternates: {
      canonical: "https://www.slstudio.pro"
    },
    type: "website",
    url: "https://www.slstudio.pro",
    images: [
      {
        width: 1200,
        height: 630,
        alt: "SL Studio - Mixing & Mastering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SL Studio | Mixing & Mastering",
    description: "Professional music production, mixing and mastering services.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <BeforeAfter />
      <YouTube />
      <HowItWorks />
      <Testimonials />
      <WhyChoose />
      <Pricing />
      <FinalCTA />
    </>
  );
}