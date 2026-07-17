import SectionIndicator from "../../components/blog/SectionIndicator";

// Mirrors src/app/blog/layout.js — the Polish articles sit outside /blog, so
// they need their own mount to get the same side rails.
export default function PlBlogLayout({ children }) {
    return (
        <>
            <SectionIndicator />
            {children}
        </>
    );
}
