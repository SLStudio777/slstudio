import Hero from "./components/sections/Hero";
import BeforeAfter from "./components/sections/BeforeAfter";
import YouTube from "./components/sections/YouTube";
import HowItWorks from "./components/sections/HowItWorks";
import Testimonials from "./components/sections/Testimonials";

import Pricing from "./components/sections/Pricing";
import FinalCTA from "./components/sections/FinalCTA";
import BlogPreview from "./components/sections/BlogPreview";

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
  alternates: {
    canonical: "https://www.slstudio.pro",
  },
  openGraph: {
    title: "SL Studio | Mixing & Mastering",
    description:
      "Your sound, elevated. Professional mixing and mastering services for modern artists.",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SL Studio",
  description:
    "Professional mixing, mastering, arrangement and music production services — online worldwide, based in Warsaw, Poland.",
  url: "https://www.slstudio.pro",
  image: "https://www.slstudio.pro/images/SL-logo-mark-1024.png",
  email: "serhii@slstudio.pro",
  founder: {
    "@type": "Person",
    name: "Serhii Lazariev",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Warsaw",
    addressCountry: "PL",
  },
  areaServed: ["Warsaw", "Poland", "Worldwide"],
  serviceType: ["Mixing", "Mastering", "Arrangement", "Music Production"],
  sameAs: [
    "https://www.youtube.com/@SLStudio_Guitar",
    "https://www.instagram.com/lazarev_serhii_sl",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <BeforeAfter />
      <YouTube />
      <HowItWorks />
      <Testimonials />
      
      <BlogPreview />
      <Pricing />
      <FinalCTA />
    </>
  );
}