"use client";
import { useEffect } from "react";

export default function GhostSignup({id='ghost-signup-form-contact'}: {id: string}) {
    useEffect(() => {
        // Create the script element dynamically
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/ghost/signup-form@~0.2/umd/signup-form.min.js";
        script.setAttribute("data-button-color", "#b63afc");
        script.setAttribute("data-button-text-color", "#FFFFFF");
        script.setAttribute("data-site", "https://xrp-healthcare.ghost.io/");
        script.setAttribute("data-locale", "en");
        script.async = true;

        // Append to the container div
        const container = document.getElementById("ghost-signup-form-contact");
        if (container) {
            container.appendChild(script);
        }

        return () => {
            // Cleanup: Remove script if component unmounts
            if (container) {
                container.innerHTML = "";
            }
        };
    }, []);

    return (
        <div id={id} className="w-full max-w-full min-h-[58px] signup-container">
            {/* The script will be injected here */}
        </div>
    );
}
