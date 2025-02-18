"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ThemeLogoProps {
    lightLogo: string;
    darkLogo?: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
}

export default function Logo({
                                      lightLogo,
                                      darkLogo,
                                      alt = "Logo",
                                      width = 300,
                                      height = 200,
                                      className = "",
                                  }: ThemeLogoProps) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <Image
            src={theme === "dark" && darkLogo ? darkLogo : lightLogo}
            alt={alt}
            width={width}
            height={height}
            priority
            className={className}
        />
    );
}
