import { posts } from "@/data/posts";

const SITE = "https://www.slstudio.pro";

function toIsoDate(dateString) {
    const parsed = new Date(dateString);
    return isNaN(parsed) ? undefined : parsed.toISOString().split("T")[0];
}

export default function BlogJsonLd({ slug }) {
    const post = posts.find((p) => p.href === `/blog/${slug}`);
    if (!post) return null;

    const url = `${SITE}${post.href}`;

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: `${SITE}${post.image}`,
        datePublished: toIsoDate(post.date),
        mainEntityOfPage: url,
        author: {
            "@type": "Person",
            name: "Serhii Lazariev",
            url: SITE,
        },
        publisher: {
            "@type": "Organization",
            name: "SL Studio",
            logo: {
                "@type": "ImageObject",
                url: `${SITE}/images/SL-logo-mark-1024.png`,
            },
        },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}
