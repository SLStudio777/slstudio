import Hero from "./components/sections/Hero";
import BeforeAfter from "./components/sections/BeforeAfter";
import YouTube from "./components/sections/YouTube";

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
      // canonical: "https://slstudio-dev.vercel.app"
    },  
    type: "website",
    url: "https://slstudio-dev.vercel.app",
    images: [
      {
        url: "/images/og-home.jpg",
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
    // images: ["/images/og-home.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <BeforeAfter />
      <YouTube />
    </>
  );
}