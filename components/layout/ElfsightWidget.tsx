"use client";
import { useEffect } from "react";

const ElfsightWidget = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="elfsight-app-5c0edd23-a297-4195-a5da-5c8fee6a789a" data-elfsight-app-lazy></div>
    );
};

export default ElfsightWidget;
