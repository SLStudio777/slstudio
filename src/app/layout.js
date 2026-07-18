import Script from 'next/script';
import { Outfit, Playfair_Display } from 'next/font/google'
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import HtmlLang from "./components/common/HtmlLang";
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

export const metadata = {
    metadataBase: new URL('https://www.slstudio.pro'),
    title: {
        default: 'SL Studio | Mixing, Mastering & Music Production',
        template: '%s | SL Studio',
    },
    openGraph: {
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "SL Studio — Mixing, Mastering & Arrangement, Warsaw",
            },
        ],
    },
    icons: {
        icon: '/favicon.svg',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${outfit.className} ${playfair.variable} min-h-screen flex flex-col`}>
                <ScrollToTop />
                <HtmlLang />
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-4N695F98F0"
                    strategy="afterInteractive"
                />
                <Script id="ga-init" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-4N695F98F0');
                    `}
                </Script>
                <Header />
                <main className="container flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
