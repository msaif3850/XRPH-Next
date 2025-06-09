import PageTitleImage from "@/components/layout/PageTitleImage";
import RoadmapTimeline from "@/components/layout/RoadmapTimeline";
//import React from "react";

import { Metadata } from "next";
export const generateMetadata = (): Metadata => {
    return {
        title: "Roadmap", // Change based on the page
        description: "XRP Healthcare 36 month roadmap built on the XRP Ledger, enhances access with a US Prescription Card and expands African healthcare via AI-driven acquisitions.",
        alternates: { canonical: "https://www.xrphealthcare.ai/roadmap" },
    };
};
export default function Roadmap() {
    return (
        <>
            <PageTitleImage image={'/xrph-logos/36-month-roadmap.png'} imageDark={'/xrph-logos/36-month-roadmap-dark.png'} alt={'36 month roadmap'}/>
            <main className="min-h-screen">
                <div className="mx-auto max-w-full px-6">
                    <RoadmapTimeline/>
                </div>
            </main>
        </>
    )
}