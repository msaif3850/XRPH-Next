import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ThemeLogoProps {
    lightLogo: string; // Light mode logo
    darkLogo?: string; // Optional dark mode logo (default: lightLogo)
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
}

export default function ThemeLogo({
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

    if (!mounted) return null; // Prevents hydration mismatch

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
