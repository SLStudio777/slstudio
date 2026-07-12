import Hero from "../components/pages/free-track-preview/Hero";

export const metadata = {
    title: "Free Track Preview",
    alternates: {
        canonical: "https://www.slstudio.pro/free-track-preview",
    },
    description:
        "Send your track and hear a free processed preview before you pay anything. Rough demos, phone recordings, stems — any format, any quality. Warsaw-based mixing, mastering and production studio.",
    keywords: [
        "free mixing preview",
        "free mastering preview",
        "free track preview",
        "send your track",
        "free mix demo",
        "mixing mastering warsaw",
    ],
    openGraph: {
        title: "Free Track Preview | SL Studio",
        description:
            "Send your track and hear a free processed preview before you pay anything. Any format, any quality.",
        type: "website",
        url: "https://www.slstudio.pro/free-track-preview",
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Track Preview | SL Studio",
        description:
            "Send your track and hear a free processed preview before you pay anything. Any format, any quality.",
    },
};

export default function FreeTrackPreviewPage() {
    return <Hero />;
}
