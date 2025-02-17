/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.xrphealthcare.ai", // Replace with your domain
    generateRobotsTxt: true, // Automatically generate robots.txt
    sitemapSize: 5000, // (Optional) Maximum number of URLs per sitemap file
    generateIndexSitemap: false, // (Optional) Generates a sitemap index if true
    exclude: ["/admin", "/dashboard"], // Exclude admin pages if needed
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: ["/admin"], // Block Googlebot from certain pages
            },
        ],
    },
};
