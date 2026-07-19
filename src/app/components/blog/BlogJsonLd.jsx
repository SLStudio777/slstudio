import { posts } from "@/data/posts";

const SITE = "https://www.slstudio.pro";

function toIsoDate(dateString) {
    const parsed = new Date(dateString);
    if (isNaN(parsed)) return undefined;
    const pad = (n) => String(n).padStart(2, "0");
    // full ISO 8601 in UTC, as required for Article rich results
    // (a fixed +01:00 offset is wrong during Warsaw DST, so we use Z instead)
    return `${parsed.getFullYear()}-${pad(parsed.getMonth() + 1)}-${pad(parsed.getDate())}T10:00:00Z`;
}

// dateModified / breadcrumbLabel are optional: articles that don't pass them
// keep the previous output (no dateModified, full title as the last crumb).
export default function BlogJsonLd({ slug, dateModified, breadcrumbLabel }) {
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
        ...(dateModified ? { dateModified: toIsoDate(dateModified) } : {}),
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
            { "@type": "ListItem", position: 3, name: breadcrumbLabel ?? post.title, item: url },
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
