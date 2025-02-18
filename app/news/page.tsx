import PageTitleImage from "@/components/layout/PageTitleImage";
import {NewsSlider} from "@/components/layout/NewsSlider";

import {NewsData} from "@/news-data";
import Link from "next/link";
import Image from "next/image";
import {DayOfDate, MonthOfDate} from "@/variables";
import {FixText} from "@/components/FixText";
import HeadTag from "@/components/HeadTag";
import React from "react";

export default function News() {
    return (
        <>
            <HeadTag title="News" canonical="https://www.xrphealthcare.ai/news"/>
            <PageTitleImage image={'/xrph-logos/news.png'} imageDark={'/xrph-logos/news-dark.png'} alt={'XRPHealthcare news'}/>
            <div className="px-6">
                <h2 className="text-jamni text-2xl">As featured in:</h2>
                <div className="border-t border-b border-black">
                    <NewsSlider/>
                </div>
            </div>
            <div className="pb-20 pt-14 px-6">
                <div className="max-w-full mx-auto ">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                        {NewsData.map((post, index) => (
                            <Link href={post.link} key={index + 1} target="_blank">
                                <div className="group">
                                    <div className="group-hover:border-t-jamni h-72 relative ">
                                        <div className={`min-h-32 flex items-center bg-gray-100 dark:bg-gray-900 p-2 ${post.imgClass}`}>
                                            <Image
                                                src={post.img}
                                                alt={post.title}
                                                width={250}
                                                height={150}
                                                className="group-hover:scale-95 duration-300 transition-all mx-auto"
                                            />
                                        </div>
                                        <div
                                            className="absolute right-0 top-0 bg-gradient-to-b from-haraa to-jamni  px-1.5 py-0.5 text-white flex flex-col items-center gap-0 z-10">
                                            <span
                                                className="font-sans text-sm font-semibold">{DayOfDate(post.date)}</span>
                                            <span className="text-xs">{MonthOfDate(post.date)}</span>
                                        </div>
                                        <div className="text-center-p-2 pt-3">
                                            <div className="font-normal text-base">{FixText(post.title)}</div>
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