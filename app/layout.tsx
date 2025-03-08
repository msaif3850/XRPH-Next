import ClientProvider from "@/components/ClientProvider";
import type {Metadata} from "next";
//import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import localFont from 'next/font/local'
import {ThemeProvider} from "@/components/theme-provider";

const biennale = localFont({
    src: [
        {
            path: './fonts/biennale-black.otf',
            weight: '900',
            style: 'normal',
        },
        {
            path: './fonts/biennale-blackit.otf',
            weight: '900',
            style: 'italic',
        },
        {
            path: './fonts/biennale-bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './fonts/biennale-boldit.otf',
            weight: '700',
            style: 'italic',
        },

        {
            path: './fonts/biennale-light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './fonts/biennale-lightit.otf',
            weight: '300',
            style: 'italic',
        },
        {
            path: './fonts/biennale-medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/biennale-mediumit.otf',
            weight: '500',
            style: 'italic',
        },
        {
            path: './fonts/biennale-regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/biennale-regularit.otf',
            weight: '400',
            style: 'italic',
        },
        {
            path: './fonts/biennale-semibold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './fonts/biennale-semiboldit.otf',
            weight: '600',
            style: 'italic',
        },
        {
            path: './fonts/biennale-thin.otf',
            weight: '100',
            style: 'normal',
        },
        {
            path: './fonts/biennale-thinit.otf',
            weight: '100',
            style: 'italic',
        },
    ],
});


/*const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});*/

export const metadata: Metadata = {
    title: {
        default: "XRP Healthcare | AI | Mergers & Acquisitions",
        template: "%s | XRP Healthcare",
    },
    description: "XRP Healthcare, built on the XRP Ledger, enhances access with a US Prescription Card and expands African healthcare via AI-driven acquisitions.",
    keywords: "XRP Healthcare, blockchain healthcare, crypto health, XRP Healthcare, XRPH AI, AI-driven acquisitions, Healthcare solutions, XRPH roadmap, Africa",
    alternates: { canonical: "https://www.xrphealthcare.ai" },
    robots: "index, follow",

    // Open Graph (Facebook, LinkedIn)
    openGraph: {
        type: "website",
        url: "https://www.xrphealthcare.ai",
        title: "XRP Healthcare | AI | Mergers & Acquisitions",
        description: "XRP Healthcare, built on the XRP Ledger, enhances access with a US Prescription Card and expands African healthcare via AI-driven acquisitions.",
        siteName: "XRP Healthcare",
        images: [{ url: "https://www.xrphealthcare.ai/meta-image.png", width: 1200, height: 630 }],
    },

    // Twitter
    twitter: {
        card: "summary_large_image",
        site: "@XRPHealthcare",
        title: "XRP Healthcare | AI | Mergers & Acquisitions",
        description: "XRP Healthcare, built on the XRP Ledger, enhances access with a US Prescription Card and expands African healthcare via AI-driven acquisitions.",
        images: ["https://www.xrphealthcare.ai/meta-image.png"],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "XRP Healthcare",
        "url": "https://www.xrphealthcare.ai",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.xrphealthcare.ai/search?q={search_term}",
            "query-input": "required name=search_term"
        }
    };
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "XRP Healthcare", "item": "https://xrphealthcare.ai/" },
            { "@type": "ListItem", "position": 2, "name": "XRPH AI", "item": "https://xrph.ai/" },
            { "@type": "ListItem", "position": 3, "name": "Roadmap", "item": "https://www.xrphealthcare.ai/roadmap" },
            { "@type": "ListItem", "position": 4, "name": "Magazine", "item": "https://xrphmagazine.ai/magazine/" },
            { "@type": "ListItem", "position": 5, "name": "Blog", "item": "https://www.xrphealthcare.ai/blog" },
            { "@type": "ListItem", "position": 6, "name": "News", "item": "https://www.xrphealthcare.ai/news" },
            { "@type": "ListItem", "position": 7, "name": "Exchanges", "item": "https://www.xrphealthcare.ai/buy-xrph" },
            { "@type": "ListItem", "position": 8, "name": "Savings Card", "item": "https://www.xrphealthcare.ai/XRPHSavingsCard" },
            { "@type": "ListItem", "position": 9, "name": "Contact", "item": "https://www.xrphealthcare.ai/contact" },
            { "@type": "ListItem", "position": 10, "name": "Team", "item": "https://www.xrphealthcare.ai/team" },
            { "@type": "ListItem", "position": 11, "name": "Africa", "item": "https://www.xrphealthcare.ai/africa" }
        ]
    };
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "XRP Healthcare",
        "url": "https://www.xrphealthcare.ai",
        "logo": "https://www.xrphealthcare.ai/logo.png",
        "sameAs": [
            "https://twitter.com/XRPHealthcare",
            "https://t.me/XRPHealthcare",
            "https://www.linkedin.com/company/xrphealthcare/",
            "https://discord.gg/3ykhjxGMpG",
            "https://www.youtube.com/@XRPHealthcare",
            "https://medium.com/@XRPHealthcare",
            "https://www.tiktok.com/@xrphealthcare",
            "https://www.instagram.com/xrphealthcare/"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "support@xrphealthcare.com",
            "contactType": "customer service",
            "areaServed": "Global",
            "availableLanguage": "English"
        }
    };
    return (
        <html lang="en" >
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <ClientProvider />
        </body>
        </html>
    );
}
