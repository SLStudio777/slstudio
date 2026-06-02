import BlogClient from "./BlogClient";

export const metadata = {
    title: "Blog — Mixing, Mastering & Music Production | SL Studio",
    alternates: {
        canonical: "https://www.slstudio.pro/blog"
    },
    description: "Tutorials, honest reviews, and practical tips on mixing, mastering, plugins, and music production. Written by a working engineer.",
    keywords: [
        "mixing blog",
        "mastering tips",
        "music production blog",
        "audio engineering",
        "mixing plugins",
        "music production tutorials",
    ],
    openGraph: {
        title: "Blog | SL Studio",
        description: "Tutorials, reviews, and honest insights on mixing, mastering, and music production.",
        type: "website",
        url: "https://www.slstudio.pro/blog",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | SL Studio",
        description: "Tutorials, reviews, and honest insights on mixing, mastering, and music production.",
    },
};

export default function BlogPage() {
    return <BlogClient />;
}