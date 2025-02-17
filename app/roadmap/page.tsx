import PageTitleImage from "@/components/layout/PageTitleImage";
import RoadmapTimeline from "@/components/layout/RoadmapTimeline";
import SEO from "@/components/SEO";
import React from "react";
export default function Roadmap() {
    return (
        <>
            <SEO title="Roadmap" canonical="https://www.xrphealthcare.ai/roadmap"/>
            <PageTitleImage image={'/xrph-logos/logo-36-month-roadmap.webp'} alt={'36 month roadmap'}/>
            <main className="min-h-screen">
                <div className="mx-auto max-w-full px-4 ">
                    <RoadmapTimeline/>
                </div>
            </main>
        </>
    )
}