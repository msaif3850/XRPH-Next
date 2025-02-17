import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /*Minify & Optimize JavaScript*/
    reactStrictMode: true,
    //swcMinify: true, // Enables Next.js SWC minifier
    /* config options here */
    images: {
        domains: ['shield.sitelock.com', 'images.dmca.com'],
    },
};

export default nextConfig;
