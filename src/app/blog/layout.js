import SectionIndicator from "../components/blog/SectionIndicator";
import ArticleCover from "../components/blog/ArticleCover";
import ArticleCTA from "../components/blog/ArticleCTA";

export default function BlogLayout({ children }) {
    return (
        <>
            <SectionIndicator />
            <ArticleCover />
            {children}
            <ArticleCTA />
        </>
    );
}
