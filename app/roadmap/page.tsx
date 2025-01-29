import PageTitleImage from "@/components/layout/PageTitleImage";
import RoadmapTimeline from "@/components/layout/RoadmapTimeline";
export default function Roadmap() {
    return (
        <>
            <PageTitleImage image={'/xrph-logos/logo-36-month-roadmap.webp'} alt={'36 month roadmap'}/>
            <main className="min-h-screen">
                <div className="mx-auto max-w-full px-4 ">
                    <RoadmapTimeline/>
                </div>
            </main>
        </>
    )
}