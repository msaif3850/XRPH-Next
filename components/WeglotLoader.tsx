'use client';

import Script from 'next/script';

export default function WeglotLoader() {
    return (
        <>
            <Script
                src="https://cdn.weglot.com/weglot.min.js"
                strategy="afterInteractive"
                onLoad={() => {
                    if (typeof window !== 'undefined' && typeof Weglot !== 'undefined') {
                        Weglot.initialize({
                            api_key: 'wg_e93fe7efe0749c29fc237a28f32baf129',
                        });
                    }
                }}
            />
        </>
    );
}
