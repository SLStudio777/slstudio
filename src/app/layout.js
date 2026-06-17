// import Script from 'next/script';
import { Outfit, Playfair_Display } from 'next/font/google'
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
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
    icons: {
        icon: '/favicon.svg',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-4N695F98F0" 
                    strategy="afterInteractive"
                /> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-4N695F98F0"></script>
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-4N695F98F0');
                    `}
                </script>
            </head>
            <body className={`${outfit.className} ${playfair.variable} min-h-screen flex flex-col`}>
                <Header />
                <main className="container flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}