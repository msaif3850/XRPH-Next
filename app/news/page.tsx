import PageTitleImage from "@/components/layout/PageTitleImage";
import {NewsSlider} from "@/components/layout/NewsSlider";

import {NewsData} from "@/news-data";
import Link from "next/link";
import Image from "next/image";
import {DayOfDate, MonthOfDate} from "@/variables";

function fixText(text: string) {
    return (
        <>
            {text.split("").map((char, i) =>
                /[-!@#$%^&*(/)4]/.test(char) ? (
                    <span key={i} className="font-sans">{char}</span>
                ) : (
                    char
                )
            )}
        </>
    );
}

export default function News() {
    return (
        <>
            <PageTitleImage image={'/xrph-logos/logo-news.webp'} alt={'XRPHealthcare news'}/>
            <div className="px-2">
                <h2 className="text-jamni text-2xl">As featured in:</h2>
                <div className="border-t border-b border-black">
                    <NewsSlider/>
                </div>
            </div>

            <div className="pb-20 pt-14 px-2">
                <div className="max-w-full mx-auto ">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                        {NewsData.map((post, index) => (
                            <Link href={post.link} key={index + 1} target="_blank">
                                <div className="group">
                                    <div className="border-2 border-gray-100 group-hover:border-b-jamni h-72 relative ">
                                        <div className={`min-h-32 flex items-center bg-gray-100 p-2 ${post.imgClass}`}>
                                            <Image
                                                src={post.img}
                                                alt={post.title}
                                                width={250}
                                                height={150}
                                                className="group-hover:scale-95 duration-300 transition-all mx-auto"
                                            />
                                        </div>
                                        <div
                                            className="absolute right-[-2px] top-[-2px] bg-gradient-to-b from-haraa to-jamni  px-1.5 py-0.5 text-white flex flex-col items-center gap-0 z-10">
                                            <span
                                                className="font-sans text-sm font-semibold">{DayOfDate(post.date)}</span>
                                            <span className="text-xs">{MonthOfDate(post.date)}</span>
                                        </div>
                                        <div className="text-center p-2 pt-3">
                                            <div className="font-normal text-base">{fixText(post.title)}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}