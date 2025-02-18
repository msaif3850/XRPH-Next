"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SecurityBadges = () => {
    const [showBadges, setShowBadges] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBadges(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const openSiteLock = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        window.open(
            "https://www.sitelock.com/verify.php?site=www.xrphealthcare.ai",
            "SiteLock",
            "width=600,height=600,left=160,top=170"
        );
    }, []);

    return (
        <>
            {/* SiteLock Badge */}
            <a
                id="sitelock-badge"
                href="#"
                onClick={openSiteLock}
                className={`fixed bottom-1 sm:bottom-5 right-0 sm:left-0.5 transition-opacity duration-300 hover:scale-95 ${
                    showBadges ? "opacity-100" : "opacity-0"
                }`}
            >
                <Image width={100} height={70}
                    className="w-[60px] sm:w-[90px] h-auto"
                    alt={"SiteLock"}
                    title={"SiteLock"}
                    src={"https://shield.sitelock.com/shield/www.xrphealthcare.ai"}
                />
            </a>

            {/* DMCA Badge */}
            <a
                id="dmca-badge"
                href="//www.dmca.com/Protection/Status.aspx?ID=b23b657b-f720-4c9a-9cdf-89fe291b0155"
                target="_blank"
                rel="noopener noreferrer"
                className={`fixed bottom-0.5 left-0 transition-opacity duration-300 hover:scale-95 ${
                    showBadges ? "opacity-100" : "opacity-0"
                }`}
            >
                <Image width={100} height={50}
                    className="w-[60px] sm:w-[94px] h-auto"
                    alt={"DMCA.com Protection Status"}
                    title={"DMCA.com Protection Status"}
                    src={"https://images.dmca.com/Badges/dmca-badge-w100-5x1-09.png?ID=b23b657b-f720-4c9a-9cdf-89fe291b0155"}
                />
            </a>
        </>
    );
};

export default SecurityBadges;
