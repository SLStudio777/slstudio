import RelatedPosts from "@/app/components/blog/RelatedPosts";
import BlogJsonLd from "@/app/components/blog/BlogJsonLd";
import BlogHeader from "@/app/components/blog/BlogHeader";
import ReadingProgress from "@/app/components/blog/ReadingProgress";
import StemChecklistForm from "@/app/components/blog/StemChecklistForm";

const IMG = "/images/blog/stems";
const PDF = "/downloads/sl-studio-track-prep-checklist-ru.pdf";

export const metadata = {
  title:
    "\u041a\u0430\u043a \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0435\u043c\u044b \u0438 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0442\u0440\u0435\u043a \u043a \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044e (\u0447\u0435\u043a-\u043b\u0438\u0441\u0442 2026)",
  alternates: {
    canonical:
      "https://www.slstudio.pro/blog/how-to-export-stems-for-mixing-ru",
    languages: {
      en: "https://www.slstudio.pro/blog/how-to-export-stems-for-mixing",
      pl: "https://www.slstudio.pro/pl/blog/how-to-export-stems-for-mixing",
      ru: "https://www.slstudio.pro/blog/how-to-export-stems-for-mixing-ru",
      "x-default":
        "https://www.slstudio.pro/blog/how-to-export-stems-for-mixing",
    },
  },
  description:
    "\u0427\u0442\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u0443 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f: \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 WAV, \u043f\u043e\u0447\u0435\u043c\u0443 \u043b\u0438\u043c\u0438\u0442\u0435\u0440 \u043d\u0430\u0434\u043e \u0441\u043d\u044f\u0442\u044c \u0441 \u043c\u0430\u0441\u0442\u0435\u0440-\u0448\u0438\u043d\u044b, \u043a\u0430\u043a \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0435\u043c\u044b \u0438\u0437 FL Studio, Ableton, Logic \u0438 Reaper, \u043a\u0430\u043a \u043d\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0444\u0430\u0439\u043b\u044b - \u0438 \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c, \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u043f\u0438\u0441\u044c \u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0438\u043b\u0438 \u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u0438\u0437 Suno. \u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 PDF-\u0447\u0435\u043a-\u043b\u0438\u0441\u0442 \u0432\u043d\u0443\u0442\u0440\u0438.",
  openGraph: {
    title:
      "\u041a\u0430\u043a \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0435\u043c\u044b \u0438 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0442\u0440\u0435\u043a \u043a \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044e",
    description:
      "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 WAV, \u0441\u0442\u0435\u043c\u044b \u0438\u0437 \u043b\u044e\u0431\u043e\u0439 DAW, \u0438\u043c\u0435\u043d\u0430 \u0444\u0430\u0439\u043b\u043e\u0432, \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 - \u0438 \u043f\u043e\u0447\u0435\u043c\u0443 \u0437\u0430\u043f\u0438\u0441\u044c \u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 - \u0442\u043e\u0436\u0435 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442. \u0421 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u043c PDF-\u0447\u0435\u043a-\u043b\u0438\u0441\u0442\u043e\u043c \u043d\u0430 \u043e\u0434\u043d\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.",
    type: "article",
    url: "https://www.slstudio.pro/blog/how-to-export-stems-for-mixing-ru",
    siteName: "SL Studio",
    images: [`${IMG}/stems-cover-ru.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "\u041a\u0430\u043a \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0435\u043c\u044b \u0438 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0442\u0440\u0435\u043a \u043a \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044e",
    description:
      "\u0413\u0430\u0439\u0434 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u044e\u0449\u0435\u0433\u043e \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u0430: \u0444\u043e\u0440\u043c\u0430\u0442\u044b, \u0437\u0430\u043f\u0430\u0441 \u0433\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u0438, \u0441\u0442\u0435\u043c\u044b \u0438\u0437 \u043b\u044e\u0431\u043e\u0439 DAW \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430. \u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 PDF-\u0447\u0435\u043a-\u043b\u0438\u0441\u0442.",
  },
  keywords: [
    "\u043a\u0430\u043a \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0435\u043c\u044b",
    "\u043a\u0430\u043a \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0442\u0440\u0435\u043a \u043a \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044e",
    "\u0447\u0442\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0438 \u043c\u0430\u0441\u0442\u0435\u0440\u0438\u043d\u0433",
    "wav \u0438\u043b\u0438 mp3 \u0434\u043b\u044f \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f",
    "\u0441\u0442\u0435\u043c\u044b \u0434\u043b\u044f \u043c\u0430\u0441\u0442\u0435\u0440\u0438\u043d\u0433\u0430",
    "\u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u0434\u043e\u0440\u043e\u0436\u0435\u043a \u0434\u043b\u044f \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f",
  ],
  other: {
    "article:published_time": "2026-07-20",
  },
};

// ─── FAQ ────────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: "\u041c\u043d\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u043e \u043d\u0443\u0436\u043d\u044b \u0441\u0442\u0435\u043c\u044b \u0438\u043b\u0438 \u0445\u0432\u0430\u0442\u0438\u0442 \u0441\u0442\u0435\u0440\u0435\u043e-\u043c\u0438\u043a\u0441\u0430?",
    a: "\u0421\u0442\u0435\u0440\u0435\u043e-\u043c\u0438\u043a\u0441\u0430 \u0445\u0432\u0430\u0442\u0438\u0442 \u0434\u043b\u044f \u0441\u0442\u0430\u0440\u0442\u0430: \u0434\u043b\u044f \u043c\u0430\u0441\u0442\u0435\u0440\u0438\u043d\u0433\u0430 \u044d\u0442\u043e \u0432\u0441\u0451, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e, \u0430 \u0434\u043b\u044f \u043e\u0446\u0435\u043d\u043a\u0438 \u043c\u0438\u043a\u0441\u0430 - \u0442\u0435\u043c \u0431\u043e\u043b\u0435\u0435. \u0421\u0442\u0435\u043c\u044b \u043f\u0440\u043e\u0441\u0442\u043e \u0434\u0430\u044e\u0442 \u0431\u043e\u043b\u044c\u0448\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f: \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u043e\u043a\u0430\u043b, \u043f\u043e\u0447\u0438\u043d\u0438\u0442\u044c \u043d\u0438\u0437 \u0438\u043b\u0438 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u043b\u0430\u0431\u044b\u0439 \u0437\u0432\u0443\u043a \u0431\u0430\u0440\u0430\u0431\u0430\u043d\u0430, \u0430 \u043d\u0435 \u043e\u0431\u0445\u043e\u0434\u0438\u0442\u044c \u0435\u0433\u043e. \u041f\u0440\u0438\u0441\u044b\u043b\u0430\u0439 \u0447\u0442\u043e \u0435\u0441\u0442\u044c; \u0435\u0441\u043b\u0438 \u0441\u0442\u0435\u043c\u044b \u0440\u0435\u0430\u043b\u044c\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442, \u044f \u0441\u043a\u0430\u0436\u0443 \u043e\u0431 \u044d\u0442\u043e\u043c \u0434\u043e \u0432\u0441\u044f\u043a\u0438\u0445 \u0434\u0435\u043d\u0435\u0433.",
  },
  {
    q: "\u0410 \u0435\u0441\u043b\u0438 \u0443 \u043c\u0435\u043d\u044f \u0442\u043e\u043b\u044c\u043a\u043e mp3 \u0438\u043b\u0438 \u0437\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u0434\u0438\u043a\u0442\u043e\u0444\u043e\u043d \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430?",
    a: "\u041f\u0440\u0438\u0441\u044b\u043b\u0430\u0439. \u0413\u043e\u0432\u043e\u0440\u044e \u0431\u0435\u0437 \u0438\u0440\u043e\u043d\u0438\u0438: \u0434\u0435\u043c\u043a\u0438 \u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430, \u0437\u0430\u043f\u0438\u0441\u0438 \u0441 \u0440\u0435\u043f\u0435\u0442\u0438\u0446\u0438\u0439 \u0438 \u0441\u0442\u0430\u0440\u044b\u0435 mp3 - \u0437\u0434\u0435\u0441\u044c \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u043e\u0447\u043a\u0430 \u0432\u0445\u043e\u0434\u0430, \u0430 \u043d\u0435 \u043f\u043e\u0432\u043e\u0434 \u0441\u0442\u0435\u0441\u043d\u044f\u0442\u044c\u0441\u044f. \u042f \u0447\u0435\u0441\u0442\u043d\u043e \u0441\u043a\u0430\u0436\u0443, \u0447\u0442\u043e \u0438\u0437 \u044d\u0442\u043e\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0436\u0430\u0442\u044c: \u0438\u043d\u043e\u0433\u0434\u0430 \u044d\u0442\u043e \u043d\u0435\u043e\u0436\u0438\u0434\u0430\u043d\u043d\u043e \u0445\u043e\u0440\u043e\u0448\u0430\u044f \u0440\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0438\u044f, \u0438\u043d\u043e\u0433\u0434\u0430 - \u0441\u043e\u0432\u0435\u0442, \u043a\u0430\u043a \u0434\u0451\u0448\u0435\u0432\u043e \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u0430\u0442\u044c \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0442\u0438\u044e. \u0412 \u043b\u044e\u0431\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044f, \u0442\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0442\u0435\u0440\u044f\u0435\u0448\u044c.",
  },
  {
    q: "\u0421 \u043a\u0430\u043a\u0438\u043c\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c WAV?",
    a: "WAV 24 \u0431\u0438\u0442 \u043d\u0430 \u0442\u043e\u0439 \u0447\u0430\u0441\u0442\u043e\u0442\u0435 \u0434\u0438\u0441\u043a\u0440\u0435\u0442\u0438\u0437\u0430\u0446\u0438\u0438, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0443\u0436\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043f\u0440\u043e\u0435\u043a\u0442 (44,1 \u0438\u043b\u0438 48 \u043a\u0413\u0446 - \u043d\u0435 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u0439). \u0421\u043d\u0438\u043c\u0438 \u043b\u0438\u043c\u0438\u0442\u0435\u0440 \u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u0439\u0437\u0435\u0440 \u0441 \u043c\u0430\u0441\u0442\u0435\u0440-\u0448\u0438\u043d\u044b, \u043e\u0441\u0442\u0430\u0432\u044c \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e 3-6 \u0434\u0411 \u0437\u0430\u043f\u0430\u0441\u0430 \u0438 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439 \u043f\u043e\u043b\u043d\u0443\u044e \u0434\u043b\u0438\u043d\u0443 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0445\u0432\u043e\u0441\u0442\u043e\u043c \u0440\u0435\u0432\u0435\u0440\u0431\u0435\u0440\u0430\u0446\u0438\u0438 \u0432 \u043a\u043e\u043d\u0446\u0435.",
  },
  {
    q: "\u041c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u0441\u043b\u0430\u0442\u044c \u0442\u0440\u0435\u043a \u0438\u0437 Suno \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0418\u0418-\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430?",
    a: "\u0414\u0430 - \u0418\u0418-\u0442\u0440\u0435\u043a\u0438 \u0434\u0430\u0432\u043d\u043e \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u043c\u043e\u0435\u0439 \u0440\u0430\u0431\u043e\u0442\u044b. \u041f\u0440\u0438\u0448\u043b\u0438 \u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u0432 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0434\u0430\u0451\u0442 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 (\u043b\u0443\u0447\u0448\u0435 WAV), \u043f\u043b\u044e\u0441 \u0442\u0435\u043a\u0441\u0442 \u043f\u0435\u0441\u043d\u0438 \u0438 \u043f\u0430\u0440\u0443 \u0441\u043b\u043e\u0432 \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u0432 \u0437\u0432\u0443\u043a\u0435 \u043c\u0435\u0448\u0430\u0435\u0442. \u0415\u0441\u043b\u0438 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u043e\u0442\u0434\u0430\u0451\u0442 \u0441\u0442\u0435\u043c\u044b - \u0437\u0430\u0431\u0435\u0440\u0438 \u0438 \u0438\u0445, \u043e\u043d\u0438 \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u043c\u043e\u0433\u0430\u044e\u0442.",
  },
  {
    q: "\u041a\u0430\u043a \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0444\u0430\u0439\u043b\u044b?",
    a: "WeTransfer (\u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u0434\u043e 2 \u0413\u0411, \u0431\u0435\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430) \u0438\u043b\u0438 \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0430\u043f\u043a\u0443 Google Drive \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e. \u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043e\u0431\u0435\u0440\u0438 \u043f\u0430\u043f\u043a\u0443 \u0441\u043e \u0441\u0442\u0435\u043c\u0430\u043c\u0438 \u0432 zip, \u0447\u0442\u043e\u0431\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043f\u043e\u0442\u0435\u0440\u044f\u043b\u043e\u0441\u044c, \u043f\u0440\u043e\u0432\u0435\u0440\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u0438\u043d\u043a\u043e\u0433\u043d\u0438\u0442\u043e \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u044c \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432 \u0441 \u043f\u0430\u0440\u043e\u0439 \u0441\u0442\u0440\u043e\u043a \u043e \u043f\u0435\u0441\u043d\u0435.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

// ─── Pro Tip block ───────────────────────────────────────────────────────────────
function ProTip({ children }) {
  return (
    <div
      className="rounded-xl p-5 flex gap-3 items-start"
      style={{
        background: "rgba(201,168,76,0.07)",
        border: "1px solid rgba(201,168,76,0.25)",
      }}
    >
      <span
        className="text-base flex-shrink-0 font-bold"
        style={{ color: "#C9A84C" }}
      >
        ★
      </span>
      <div>
        <p
          className="text-xs font-bold uppercase tracking-widest mb-1.5"
          style={{ color: "#C9A84C" }}
        >
          Совет профи
        </p>
        <p className="text-white/70 text-base leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

// ─── Image block ─────────────────────────────────────────────────────────────────
function ArticleImage({ src, alt }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/5">
      <img
        loading="lazy"
        decoding="async"
        src={src}
        alt={alt}
        className="w-full object-cover"
      />
    </div>
  );
}

// ─── Table of contents ────────────────────────────────────────────────────────────
const TOC = [
  { id: "the-only-rule", label: "Единственное правило: присылай что есть" },
  { id: "formats", label: "Файлы и форматы: WAV бьёт всё" },
  { id: "limiter", label: "Сними лимитер, оставь запас" },
  { id: "stems", label: "Стемы: как экспортировать из любой DAW" },
  { id: "naming", label: "Имена файлов, чтобы ничего не потерялось" },
  { id: "special-cases", label: "Демки с телефона, репетиции и ИИ-треки" },
  { id: "sending", label: "Как отправить (и что написать)" },
];

function TableOfContents() {
  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <p className="text-white font-semibold text-base mb-4">Содержание</p>
      <ol className="flex flex-col gap-2">
        {TOC.map((item, i) => (
          <li key={item.id} className="flex items-baseline gap-2.5">
            <span
              className="text-xs flex-shrink-0 w-5 text-right"
              style={{ color: "rgba(201,168,76,0.5)" }}
            >
              {i + 1}.
            </span>
            <a
              href={`#${item.id}`}
              className="text-sm text-white/50 hover:text-white transition leading-snug"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

// ─── Section header ──────────────────────────────────────────────────────────────────
function SectionHeader({ number, title }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
        style={{
          background: "rgba(201,168,76,0.15)",
          color: "#C9A84C",
        }}
      >
        {number}
      </span>
      <h2 className="text-xl md:text-2xl font-semibold text-white">{title}</h2>
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────────
export default function HowToExportStemsForMixingPageRu() {
  return (
    <div id="top" className="mt-16 mb-20">
      <BlogJsonLd slug="how-to-export-stems-for-mixing-ru" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ReadingProgress />
      <div className="max-w-3xl mx-auto">
        <BlogHeader
          topic="Продакшен"
          date="20 июля 2026"
          title="Как экспортировать стемы и подготовить трек к сведению"
          description="Практичный гайд без снобизма: форматы, запас громкости, стемы из любой DAW, имена файлов и отправка - плюс что делать, когда есть только запись с телефона. Внутри бесплатный PDF-чек-лист на одну страницу."
        />

        <div className="blog-prose flex flex-col gap-14 text-white/70 text-[16px] leading-relaxed">
          {/* Intro */}
          <div className="flex flex-col gap-5">
            <p>
              <strong className="text-white">
                Сразу договоримся: мне можно прислать что угодно. Голосовую
                заметку с телефона, шумную запись с репетиции, mp3 десятилетней
                давности, экспорт из Suno - всё это полноценные точки старта, и
                ничего из этого не нужно "чинить" перед тем, как я послушаю.
              </strong>
            </p>
            <p>
              Зачем тогда этот гайд? Потому что подготовка - не барьер, а
              множитель. Одна и та же песня, отправленная двумя разными
              способами, даёт мне разное количество пространства для работы.
              Каждая минута, которую я трачу на раскопки передавленного экспорта
              или угадывание, какой из пяти файлов правильный, - это минута, не
              потраченная на твой звук. Десять минут подготовки с твоей стороны
              регулярно покупают слышимо лучший результат за те же деньги.
            </p>
            <p>
              Ниже - всё, что действительно важно: форматы, главная ошибка с
              лимитером, которую делают почти все, экспорт стемов из любой DAW,
              имена файлов и отправка. А если удобнее держать всё это на одном
              листе рядом с DAW - в конце ждёт{" "}
              <a
                href="#checklist"
                className="underline decoration-[rgba(201,168,76,0.4)] underline-offset-4 hover:text-white transition"
                style={{ color: "#C9A84C" }}
              >
                бесплатный PDF-чек-лист
              </a>
              .
            </p>
          </div>

          {/* Table of Contents */}
          <div className="[@media(min-width:1280px)]:hidden">
            <TableOfContents />
          </div>

          {/* ── 1. Единственное правило ── */}
          <div id="the-only-rule" className="flex flex-col gap-5">
            <SectionHeader
              number="1"
              title="Единственное правило: присылай что есть"
            />
            <p>
              Куча студий публикует "требования к материалу", которые читаются
              как таможенная декларация, - и куча музыкантов из-за них так
              никуда свою песню и не отправляет. Моё правило обратное, и оно
              единственное на этой странице без исключений:{" "}
              <strong className="text-white">
                та версия, которая у тебя есть прямо сейчас, уже достаточно
                хороша, чтобы её отправить.
              </strong>
            </p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>Запись с телефона - ты и гитара? Присылай.</li>
              <li>Дубль с репетиции, где барабаны слишком громко? Присылай.</li>
              <li>Старый mp3 песни, которую так и не доделал? Присылай.</li>
              <li>ИИ-трек, который звучит почти правильно? Присылай.</li>
            </ul>
            <p>
              Я послушаю и честно скажу, что с этим можно сделать и сколько это
              будет стоить - такая оценка бесплатна и ни к чему не обязывает.
              Всё, что ниже этой точки, - просто способ дать мне <em>больше</em>{" "}
              материала, когда есть возможность.
            </p>
            <ProTip>
              Если колеблешься между "отправить черновик сегодня" и "подготовить
              как положено когда-нибудь" - отправляй черновик сегодня. Инерция
              движения доделала больше песен, чем перфекционизм за всю историю.
            </ProTip>
          </div>

          {/* ── 2. Форматы ── */}
          <div id="formats" className="flex flex-col gap-5">
            <SectionHeader number="2" title="Файлы и форматы: WAV бьёт всё" />
            <p>
              Когда выбор всё-таки есть, вот порядок предпочтений и настройки,
              которые имеют значение:
            </p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>
                <strong className="text-white">WAV (или AIFF), 24 бит.</strong>{" "}
                Лосслесс-форматы сохраняют всё, что было в проекте. 24 бита -
                студийный стандарт; 16 бит приемлемо, 32-bit float тоже
                полностью нормально, если твоя DAW так умеет.
              </li>
              <li>
                <strong className="text-white">
                  Сохраняй частоту дискретизации проекта.
                </strong>{" "}
                Сессия в 44,1 кГц - экспортируй 44,1; в 48 - экспортируй 48.
                Конвертация вверх до 96 кГц не добавляет ничего, кроме размера
                файла, а вниз - выбрасывает информацию.
              </li>
              <li>
                <strong className="text-white">
                  Никогда не конвертируй mp3 в WAV.
                </strong>{" "}
                Качество это не вернёт - только спрячет, чем файл является на
                самом деле. Если кроме mp3 ничего нет - присылай сам mp3, в
                идеале оригинал с максимальным битрейтом.
              </li>
              <li>
                <strong className="text-white">
                  Экспортируй полную длину.
                </strong>{" "}
                Начни с самого начала и дай хвосту реверберации последнего
                аккорда дозвучать до конца. Обрезанные хвосты - самая частая
                мелкая трагедия в этом ремесле.
              </li>
            </ul>
          </div>

          {/* ── 3. Лимитер ── */}
          <div id="limiter" className="flex flex-col gap-5">
            <SectionHeader number="3" title="Сними лимитер, оставь запас" />
            <p>
              Если из всей страницы запомнишь ровно одну техническую вещь -
              пусть это будет эта. Перед экспортом микса на сведение или
              мастеринг{" "}
              <strong className="text-white">
                выключи все лимитеры, максимайзеры и клипперы на мастер-шине.
              </strong>{" "}
              Лимитер сплющивает пики музыки ради громкости - и это сплющивание
              на моей стороне не отменить. Прислать залимиченный файл - всё
              равно что отправить письмо, которое уже прошло через шредер:
              содержание технически там, но работать с ним уже нельзя.
            </p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>
                <strong className="text-white">Оставь 3-6 дБ запаса</strong> -
                самый громкий момент песни должен пиковать где-то между -6 и -3
                дБ на мастер-индикаторе.
              </li>
              <li>
                <strong className="text-white">Не нормализуй</strong> экспорт и
                не поднимай громкость файла, чтобы он "выглядел" громче. Тихо -
                нормально. Тихо - хорошо.
              </li>
              <li>
                <strong className="text-white">
                  EQ и компрессия на отдельных дорожках могут остаться
                </strong>{" "}
                - если они часть твоего звука. Уйти должна только обработка
                громкости на мастер-шине.
              </li>
            </ul>
            <p>
              Твой экспорт будет звучать тише коммерческих релизов. Это не баг -
              громкость и есть то, за что ты меня нанимаешь.
            </p>
            <ProTip>
              Быстрая самопроверка: если экспортированный файл пикует около -6
              дБ и звучит заметно тише треков в Spotify - ты всё сделал
              правильно. Если он упирается в 0 дБ и звучит "готово" - где-то всё
              ещё висит лимитер.
            </ProTip>
          </div>

          {/* ── 4. Стемы ── */}
          <div id="stems" className="flex flex-col gap-5">
            <SectionHeader
              number="4"
              title="Стемы: как экспортировать из любой DAW"
            />
            <p>
              Стемы - это твой микс, экспортированный группами: барабаны одним
              файлом, бас другим, гитары, вокал, синты, эффекты - каждая группа
              отдельно, все одной длины. Это разница между тем, чтобы{" "}
              <em>обойти</em> проблему, и тем, чтобы её <em>решить</em>. В любой
              DAW работают четыре правила:
            </p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>
                <strong className="text-white">
                  Каждый стем начинается с первого такта
                </strong>{" "}
                (0:00) - даже если инструмент вступает на третьей минуте. Один
                старт, одна длина у всех файлов. Именно благодаря этому всё
                сойдётся на моей стороне.
              </li>
              <li>
                <strong className="text-white">
                  Сохраняй свою креативную обработку.
                </strong>{" "}
                Если жёстко поджатая барабанная шина или вокал с "телефонным" EQ
                - часть звука, печатай так. Сомневаешься - экспортируй две
                версии, с обработкой и без, и подпиши их.
              </li>
              <li>
                <strong className="text-white">
                  Мастер-шина остаётся пустой
                </strong>{" "}
                - то же правило, что и раньше: никакого лимитера и "клея" на
                стереовыходе, пока печатаются стемы.
              </li>
              <li>
                <strong className="text-white">6-12 стемов достаточно</strong>{" "}
                для большинства песен. Бочка, рабочий, остальные барабаны, бас,
                гитары, клавиши, основной вокал, бэки, FX - такой детализации
                хватает для 95% задач сведения.
              </li>
            </ul>
            <p>Где живёт экспорт в большой четвёрке DAW:</p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>
                <strong className="text-white">FL Studio:</strong> File → Export
                → WAV, затем включи "Split mixer tracks" в окне экспорта. Каждый
                канал микшера станет отдельным файлом за один проход.
              </li>
              <li>
                <strong className="text-white">Ableton Live:</strong> File →
                Export Audio/Video, поставь "Rendered Track" в{" "}
                <em>All Individual Tracks</em>, выбери WAV 24-bit и рендери.
              </li>
              <li>
                <strong className="text-white">Logic Pro:</strong> File → Export
                → All Tracks as Audio Files - отметь "Include Volume/Pan
                Automation" и выбери 24-bit WAV.
              </li>
              <li>
                <strong className="text-white">Reaper:</strong> File → Render,
                Source → <em>Stems (selected tracks)</em>, выдели нужные папки
                дорожек, рендер в 24-bit.
              </li>
            </ul>
            <ProTip>
              Проверка перед отправкой: закинь все стемы в пустой проект, не
              трогай ни одного фейдера и нажми play. Звучит в точности как твой
              микс - экспорт правильный. Чего-то не хватает или что-то
              задвоилось - лучше обнаружишь ты сейчас, чем я через три дня.
            </ProTip>
          </div>

          {/* ── 5. Имена файлов ── */}
          <div id="naming" className="flex flex-col gap-5">
            <SectionHeader
              number="5"
              title="Имена файлов, чтобы ничего не потерялось"
            />
            <p>
              Ты удивишься, сколько студийного времени в мире уходит на
              выяснение, новее ли <em>final_FINAL_v3_этот.wav</em>, чем{" "}
              <em>final_v3_FINAL_точно.wav</em>. Тридцать секунд дисциплины
              решают это навсегда:
            </p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>
                <strong className="text-white">Папка:</strong>{" "}
                Artist_SongTitle_120bpm_Am - артист, песня, темп и тональность в
                имени папки отвечают на половину моих вопросов первого дня.
              </li>
              <li>
                <strong className="text-white">Стемы:</strong> пронумерованы и
                очевидны - 01_Kick, 02_Snare, 03_Drums_Rest, 04_Bass, 05_Gtr_L,
                06_Gtr_R, 07_LeadVox, 08_BVs, 09_FX. Никаких внутренних шуток -
                будущий ты их тоже не вспомнишь.
              </li>
              <li>
                <strong className="text-white">Одна песня = один zip.</strong>{" "}
                Заархивируй папку перед загрузкой - ничего не потеряется по
                дороге, а я получу твою структуру файлов ровно такой, какой ты
                её сделал.
              </li>
            </ul>
          </div>

          {/* ── 6. Особые случаи ── */}
          <div id="special-cases" className="flex flex-col gap-5">
            <SectionHeader
              number="6"
              title="Демки с телефона, репетиции и ИИ-треки"
            />
            <p>
              А теперь случаи, о которых "страницы с требованиями" не пишут
              никогда - и которые составляют половину того, что приходит мне на
              почту.
            </p>
            <p>
              <strong className="text-white">
                Записи с телефона и репетиций.
              </strong>{" "}
              Важны две вещи. Первое: пришли <em>оригинальный файл</em> с
              телефона, а не пересылку из мессенджера - голосовые в WhatsApp и
              Telegram беспощадно пересжимают звук, и эти потери необратимы.
              Отправь файл сам себе на почту или залей сразу на Drive. Второе:
              не "помогай" записи приложениями-улучшайзерами и EQ перед
              отправкой - любая автоматическая чистка выбрасывает информацию,
              которую я бы использовал лучше.
            </p>
            <p>
              <strong className="text-white">Suno и другие ИИ-треки.</strong>{" "}
              Скачай лучшее качество, которое даёт платформа - WAV, если тариф
              позволяет, - и забери стемы, если их можно экспортировать. Приложи
              текст песни и одно честное предложение о том, что тебя беспокоит в
              звуке ("припев звучит тонко", "вокал режет"). А если интересно,
              что живой инженер реально меняет в ИИ-треке, я провёл на эту тему{" "}
              <a
                href="/blog/ai-vs-human-mastering-blind-test-ru"
                className="underline decoration-[rgba(201,168,76,0.4)] underline-offset-4 hover:text-white transition"
                style={{ color: "#C9A84C" }}
              >
                публичный слепой тест
              </a>
              .
            </p>
          </div>

          {/* ── 7. Отправка ── */}
          <div id="sending" className="flex flex-col gap-5">
            <SectionHeader number="7" title="Как отправить (и что написать)" />
            <p>
              Никаких порталов и аккаунтов:{" "}
              <strong className="text-white">WeTransfer</strong> (бесплатно до 2
              ГБ, без регистрации) или ссылка на папку в{" "}
              <strong className="text-white">Google Drive</strong> - этого
              достаточно. Сначала zip, потом загрузка, а в конце открой свою же
              ссылку в режиме инкогнито - убедись, что она работает без входа в
              аккаунт.
            </p>
            <p>В самом сообщении пять строк бьют пять абзацев:</p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#C9A84C]">
              <li>
                Что за песня и что нужно (сведение? мастеринг? и то и то?)
              </li>
              <li>Один-два референса, чьё звучание тебе нравится</li>
              <li>Что беспокоит в текущей версии</li>
              <li>Дедлайн, если он есть</li>
              <li>Ссылка на скачивание</li>
            </ul>
            <p>
              Отправь через{" "}
              <a
                href="/contact"
                className="underline decoration-[rgba(201,168,76,0.4)] underline-offset-4 hover:text-white transition"
                style={{ color: "#C9A84C" }}
              >
                страницу контактов
              </a>{" "}
              - а если хочешь услышать, что я сделаю с твоим треком, до того как
              потратишь хоть что-то,{" "}
              <a
                href="/free-track-preview"
                className="underline decoration-[rgba(201,168,76,0.4)] underline-offset-4 hover:text-white transition"
                style={{ color: "#C9A84C" }}
              >
                бесплатное превью
              </a>{" "}
              существует ровно для этого.
            </p>
          </div>

          {/* ── Форма PDF-чек-листа ── */}
          <StemChecklistForm
            pdfHref={PDF}
            lang="ru"
            labels={{
              title: "Забери чек-лист подготовки трека (PDF)",
              text: "Одна страница, удобно распечатать: форматы, лимитер, стемы, имена файлов, отправка. Оставь почту - и скачивание откроется прямо здесь.",
              placeholder: "your@email.com",
              button: "Пришли мне чек-лист →",
              sending: "Отправляю...",
              successTitle: "Готово - чек-лист ждёт.",
              successText:
                "Скачивай PDF ниже. Писать буду только когда есть что-то действительно полезное - никакого спама.",
              download: "Скачать PDF-чек-лист",
              error:
                "Что-то пошло не так - попробуй ещё раз или напиши мне напрямую.",
              invalid: "Укажи корректный адрес почты.",
            }}
          />

          {/* ── FAQ ── */}
          <div id="faq" className="flex flex-col gap-5">
            <SectionHeader number="?" title="FAQ" />
            <div className="flex flex-col gap-3">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 flex flex-col gap-2"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p className="text-white font-medium text-sm">{item.q}</p>
                  <p className="text-white/65 text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <RelatedPosts slug="how-to-export-stems-for-mixing-ru" lang="ru" />
        </div>
      </div>
    </div>
  );
}
