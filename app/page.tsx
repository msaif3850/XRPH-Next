'use client'
import PageTitleImage from "@/components/layout/PageTitleImage";
import Image from "next/image";

import Link from "next/link";
import MyButton from "@/components/layout/MyButton";
import {NewsData} from "@/news-data";
//import format from "dateformat";
import {Exchanges} from "@/variables";

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

export default function Home() {

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full">
                <PageTitleImage/>
            </div>
            <PageTitleImage image={'/xrph-logos/logo-xrph-ai.webp'}/>
            <div className="px-6">
                <div className="pb-20">
                    <div className="max-w-full mx-auto">
                        <PageTitleImage image={'/xrph-logos/logo-news.webp'}/>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                            {NewsData.slice(0, 3).map((post, index) => (
                                <Link href={post.link} key={index + 1} target="_blank">
                                    <div className="group">
                                        <div
                                            className="border-2-border-gray-100 group-hover:border-t-jamni h-80 relative ">
                                            <div
                                                className={`min-h-32 flex items-center bg-gray-100 p-2 ${post.imgClass}`}>
                                                <Image
                                                    src={post.img}
                                                    alt={post.title}
                                                    width={350}
                                                    height={150}
                                                    className="group-hover:scale-95 duration-300 transition-all mx-auto"
                                                />
                                            </div>
                                            {/*<div
                                                className="absolute right-0 top-0 bg-gradient-to-b from-haraa to-jamni  px-1.5 py-0.5 text-white flex flex-col items-center gap-0 z-10">
                                            <span
                                                className="font-sans text-sm font-semibold">{DayOfDate(post.date)}</span>
                                                <span className="text-xs">{MonthOfDate(post.date)}</span>
                                            </div>*/}
                                            <div className="px-6">
                                                <div
                                                    className="flex justify-between items-center my-2 font-bold text-sm">
                                                    {/*<div>{fixText(format(post.date, "dd mmmm yyyy"))}</div>*/}
                                                    <div>{fixText(post.date.slice(0,10))}</div>
                                                    <div>By admin</div>
                                                </div>
                                                <div
                                                    className="font-bold text-lg leading-6 text-jamni mb-2">{fixText(post.title)}</div>
                                                <div className="font-normal text-sm">{fixText(post.description)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="pb-20 ">
                    <div className="max-w-6xl mx-auto ">
                        <div className="flex flex-col items-center justify-center space-y-5">
                            <Image src={'/xrph-logos/logo-buy-xrph.webp'} alt={'buy xrph'} width={'500'} height={150}/>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-md:max-w-md-mx-auto w-full">
                                {Exchanges.map((exchange) => (
                                    <div className="basis-1/3 group " key={exchange.id}>
                                        <Link href={exchange.link} title={exchange.name}>
                                            <Image src={exchange.image} alt={exchange.name} width={300} height={200}
                                                   className="transition-all duration-300 group-hover:scale-110 p-1 object-fill"/>
                                        </Link>
                                    </div>

                                ))}
                            </div>

                            <MyButton buttonText={'View All Exchanges'} buttonUrl={'buy-xrph'} target={'_self'}/>
                        </div>
                    </div>
                    <div className="pt-24 max-w-4xl mx-auto">
                        <script src="https://static.elfsight.com/platform/platform.js" async></script>
                        <div className="elfsight-app-5c0edd23-a297-4195-a5da-5c8fee6a789a" data-elfsight-app-lazy></div>
                    </div>
                </div>
            </div>
        </>
    );
}
