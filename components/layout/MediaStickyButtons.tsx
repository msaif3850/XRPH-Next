'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

export default function MediaStickyButtons() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.scrollY - 50,
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            className={`fixed z-50 transition-all duration-300 rounded
                lg:left-[70px] lg:top-1/3 flex items-center justify-between gap-1 lg:flex lg:flex-col
                top-14 left-1/2 transform -translate-x-1/2 w-full lg:w-auto p-2
                ${isScrolled ? "bg-gradient-to-r from-haraa/90 to-jamni/90 shadow-md p-1" : "bg-gradient-to-r from-haraa to-jamni"}
            `}
        >
            <Link className="w-full uppercase" href={"#press-releases"} onClick={(e) => smoothScroll(e, "#press-releases")}>
                <Button className="w-full" variant={'secondary'}>Press Releases</Button>
            </Link>
            <Link className="w-full uppercase" href={"#logos"} onClick={(e) => smoothScroll(e, "#logos")}>
                <Button className="w-full" variant={'secondary'}>XRPH Logos</Button>
            </Link>
            <Link className="w-full uppercase" href={"#images"} onClick={(e) => smoothScroll(e, "#images")}>
                <Button className="w-full" variant={'secondary'}>Images</Button>
            </Link>
        </div>
    );
}
