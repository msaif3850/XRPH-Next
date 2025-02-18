import Head from "next/head";

const HeadTag = ({
                 title = "XRP Healthcare  | AI | Mergers & Acquisitions",
                 description = "XRP Healthcare, built on the XRP Ledger, enhances access with a US Prescription Card and expands African healthcare via AI-driven acquisitions",
                 keywords = "XRP Healthcare, blockchain healthcare, crypto health, XRP Healthcare, XRPH AI, XRP Healthcare AI, Mergers & Acquisitions, Healthcare Solutions, XRP Healthcare, XRPH, AI scalable solutions provider, revolutionizing the Pharma, Healthcare industry, Pharma, Healthcare services, AI, XRPH AI, XRP Healthcare, XRPH, AI,XRPH AI, scalable solutions provider, revolutionizing the Pharma, Healthcare industry, Pharma, Healthcare services",
                 canonical = "https://www.xrphealthcare.ai"
             }: {
    title?: string,
    description?: string,
    keywords?: string,
    canonical?: string
}) => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "XRP Healthcare",
        "url": "https://www.xrphealthcare.ai",
        "logo": "https://www.xrphealthcare.ai/logo.png",
        "sameAs": [
            "https://twitter.com/XRPHealthcare",
            "https://www.linkedin.com/company/xrphealthcare",
            "https://www.facebook.com/XRPHealthcare"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-123-456-7890",
            "contactType": "customer service",
            "areaServed": "Global",
            "availableLanguage": "English"
        }
    };

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
            {"@type": "ListItem", "position": 1, "name": "XRP Healthcare", "item": "https://xrphealthcare.ai/"},
            {"@type": "ListItem", "position": 2, "name": "XRPH AI", "item": "https://xrph.ai/"},
            {"@type": "ListItem", "position": 3, "name": "Roadmap", "item": "https://www.xrphealthcare.ai/roadmap"},
            {"@type": "ListItem", "position": 4, "name": "Magazine", "item": "https://xrphmagazine.ai/magazine/"},
            {"@type": "ListItem", "position": 5, "name": "Blog", "item": "https://www.xrphealthcare.ai/blog"},
            {"@type": "ListItem", "position": 6, "name": "News", "item": "https://www.xrphealthcare.ai/news"},
            {"@type": "ListItem", "position": 7, "name": "Exchanges", "item": "https://www.xrphealthcare.ai/buy-xrph"},
            {
                "@type": "ListItem",
                "position": 8,
                "name": "Savings Card",
                "item": "https://www.xrphealthcare.ai/XRPHSavingsCard"
            },
            {"@type": "ListItem", "position": 9, "name": "Team", "item": "https://www.xrphealthcare.ai/team"},
            {"@type": "ListItem", "position": 10, "name": "Africa", "item": "https://www.xrphealthcare.ai/africa"},
            {"@type": "ListItem", "position": 11, "name": "Contact", "item": "https://www.xrphealthcare.ai/contact"}
        ]
    };
    return (
        <Head>
            <title>{title ? `${title} | XRP Healthcare` : "XRP Healthcare | AI | Mergers & Acquisitions"}</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta name="robots" content="index, follow"/>

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={canonical}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content="/HeadTag/meta-image.png"/>

            {/* Twitter HeadTag */}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content="/HeadTag/meta-image.png"/>

            {/* Canonical URL */}
            <link rel="canonical" href={canonical}/>

            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(organizationSchema)}}/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(websiteSchema)}}/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbSchema)}}/>
        </Head>
    );
};

export default HeadTag;
