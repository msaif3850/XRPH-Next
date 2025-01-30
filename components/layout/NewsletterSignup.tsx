import Script from 'next/script';

export default function NewsletterSignup() {
    return (
        <div className="relative w-full h-[58px] overflow-hidden">
            <div className="gh-signup-root w-full h-full">
                <iframe
                    srcDoc="<!DOCTYPE html>"
                    frameBorder="0"
                    title="signup frame"
                    className="w-full h-full absolute"
                ></iframe>
            </div>
            <Script
                src="https://cdn.jsdelivr.net/ghost/signup-form@~0.2/umd/signup-form.min.js"
                strategy="lazyOnload"
                data-button-color="#b63afc"
                data-button-text-color="#FFFFFF"
                data-site="https://xrp-healthcare.ghost.io/"
                data-locale="en"
                async
            />
        </div>
    );
}