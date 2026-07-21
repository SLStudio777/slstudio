import SectionIndicator from "../components/blog/SectionIndicator";
import ArticleCover from "../components/blog/ArticleCover";

export default function BlogLayout({ children }) {
    return (
        <>
            <SectionIndicator />
            <ArticleCover />
            {children}
        </>
    );
}
