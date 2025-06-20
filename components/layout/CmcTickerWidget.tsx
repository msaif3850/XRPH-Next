'use client';

import { useEffect } from 'react';

export default function CmcTickerWidget() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://files.coinmarketcap.com/static/widget/currency.js';
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div
            className="coinmarketcap-currency-widget coinmarketcap-ticker pt-16"
            data-currencyid="23365"
            data-base="USD"
            data-secondary=""
            data-ticker="true"
            data-rank="false"
            data-marketcap="false"
            data-volume="false"
            data-statsticker="false"
            data-stats="USD"
        />
    );
}
