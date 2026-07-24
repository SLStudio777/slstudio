import SectionIndicator from "../../components/blog/SectionIndicator";
import ArticleCover from "../../components/blog/ArticleCover";
import ArticleCTA from "../../components/blog/ArticleCTA";

// Mirrors src/app/blog/layout.js - the Polish articles sit outside /blog, so
// they need their own mount to get the same rail and automatic cover.
export default function PlBlogLayout({ children }) {
    return (
        <>
            <SectionIndicator />
            <ArticleCover />
            {children}
            <ArticleCTA />
        </>
    );
}
