import Hero from "../components/pages/contact/Hero";

export const metadata = {
    title: "Contact",
    alternates: {
        canonical: "https://www.slstudio.pro/contact"
    },
    description: "Get in touch with SL Studio. Send your track and let's make something great together. First consultation is always free.",
};

export default function ContactPage() {
    return (
        <div className="mt-16 mb-20">
            <Hero />
        </div>
    )
}