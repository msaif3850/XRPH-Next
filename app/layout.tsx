import type {Metadata} from "next";
//import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import localFont from 'next/font/local'
import {ThemeProvider} from "@/components/theme-provider";
import SEO from "@/components/SEO";

const biennale = localFont({
    src: [
        {
            path: './fonts/biennale-regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/biennale-semibold.otf',
            weight: '400',
            style: 'italic',
        },
    ],
})

/*const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});*/

export const metadata: Metadata = {
    title: "XRP Healthcare  | AI | Mergers & Acquisitions",
    description: "XRP Healthcare, built on the XRP Ledger, enhances access with a US Prescription Card and expands African healthcare via AI-driven acquisitions",
    keywords: "XRP Healthcare, XRPH AI, XRP Healthcare AI, Mergers & Acquisitions, Healthcare Solutions, XRP Healthcare, XRPH, AI scalable solutions provider, revolutionizing the Pharma, Healthcare industry, Pharma, Healthcare services, AI",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" >
        <SEO
            title="XRP Healthcare  | AI | Mergers & Acquisitions"
            description="XRP Healthcare, built on the XRP Ledger, enhances access with a US Prescription Card and expands African healthcare via AI-driven acquisitions"
            keywords="XRP, healthcare, blockchain, investments, XRP Healthcare, XRPH AI, XRP Healthcare AI, Mergers & Acquisitions, Healthcare Solutions, XRP Healthcare, XRPH, AI,XRPH AI, scalable solutions provider, revolutionizing the Pharma, Healthcare industry, Pharma, Healthcare services, AI"
            canonical="https://www.xrphealthcare.ai/"
        />
        {/*<body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >*/}
        <body className={`${biennale.className}  antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
        <Header/>
        {children}
        <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
