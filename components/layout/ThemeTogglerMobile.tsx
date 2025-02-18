"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ThemeToggleMobile() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null; // Prevents hydration issues

    return (
        <Tabs defaultValue={theme} onValueChange={(value) => setTheme(value)}>
            <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="light">Light</TabsTrigger>
                <TabsTrigger value="dark">Dark</TabsTrigger>
                <TabsTrigger value="system">System</TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
