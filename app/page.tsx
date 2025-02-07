'use client'
import PageTitleImage from "@/components/layout/PageTitleImage";
import Image from "next/image";

import Link from "next/link";
import MyButton from "@/components/layout/MyButton";
import {NewsData} from "@/news-data";
//import format from "dateformat";
import {Exchanges} from "@/variables";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {FaPlayCircle} from "react-icons/fa";
import React from "react";

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
            <section id="xrph-ai-banner" className="bg-waves-ai bg-cover bg-center bg-no-repeat py-20 sm:py-16">
                <div className="mx-auto md:px-32">
                    <div className="flex flex-col md:flex-row items-center gap-8 pt-0 lg:pt-12">
                        {/* Left Column */}
                        <div className="text-center w-full md:w-1/2 lg:w-2/5">
                            <h1 className="text-4xl font-extrabold mb-0">XRPH AI APP</h1>
                            <h4 className="text-xl lg:text-2xl font-light px-4 md:px-0">
                                Holistic <span className="font-sans font-normal">&amp;</span> Traditional
                                Medical Insights, Powered by AI
                            </h4>
                            {/* App Store Buttons (Hidden on Mobile) */}
                            <div className="hidden md:flex justify-center  gap-4 mt-4">
                                <Link
                                    href="https://apps.apple.com/us/app/xrph-ai/id6739782817"
                                    target="_blank"
                                    title="Download XRPH Wallet on the App Store"
                                >
                                    <Image
                                        src="/app-store-o.png"
                                        alt="App Store"
                                        width={150}
                                        height={50}
                                        className="w-40 h-auto hover:scale-95 hover:drop-shadow-lg transition-all"
                                    />
                                </Link>
                                <Link
                                    href="https://play.google.com/store/apps/details?id=com.xrphwallet"
                                    target="_blank"
                                    title="Get XRPH Wallet on Google Play"
                                >
                                    <Image
                                        src="/google-play-o.png"
                                        alt="Google Play"
                                        width={150}
                                        height={50}
                                        className="w-40 h-auto hover:scale-95 hover:drop-shadow-lg transition-all"
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* Center Column (Image) */}
                        <div className="w-full md:w-1/2 lg:w-2/5 text-center">
                            <div className="flex justify-center">
                                <div className="w-10/12 md:w-full">
                                    <Image
                                        src="/ai/xrph-ai-new-app.webp"
                                        alt="XRPH AI APP"
                                        width={400}
                                        height={400}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>

                            {/* App Store Buttons (Visible on Mobile) */}
                            <div className="md:hidden flex justify-center gap-4 mt-4">
                                <Link
                                    href="https://apps.apple.com/us/app/xrph-ai/id6739782817"
                                    target="_blank"
                                    title="Download XRPH Wallet on the App Store"
                                >
                                    <Image
                                        src="/app-store-o.png"
                                        alt="App Store"
                                        width={150}
                                        height={50}
                                        className="w-40 h-auto hover:scale-95 hover:drop-shadow-lg transition-all"
                                    />
                                </Link>
                                <Link
                                    href="https://play.google.com/store/apps/details?id=com.xrphwallet"
                                    target="_blank"
                                    title="Get XRPH Wallet on Google Play"
                                >
                                    <Image
                                        src="/google-play-o.png"
                                        alt="Google Play"
                                        width={150}
                                        height={50}
                                        className="w-40 h-auto hover:scale-95 hover:drop-shadow-lg transition-all"
                                    />
                                </Link>
                            </div>
                            {/* Horizontal Separator (Visible on Mobile) */}
                            <div className="md:hidden mt-4">
                                <Image
                                    src="/separator-horizontal.webp"
                                    alt="Separator"
                                    width={300}
                                    height={10}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        {/* Right Column (List) */}
                        <div className="w-full md:w-1/2 lg:w-2/5 px-4 md:px-0">
                            <ul className="list-none space-y-4">
                                <li className="text-xl lg:text-2xl flex items-start gap-3">
                                    <Image
                                        src="/arrow-check.webp"
                                        alt="Arrow"
                                        width={25}
                                        height={25}
                                        className="mt-2"
                                    />
                                    <div>
                                        First healthcare platform built on the{" "}
                                        <span className="font-bold">XRP Ledger</span>
                                    </div>
                                </li>
                                <li className="text-xl lg:text-2xl flex items-start gap-3">
                                    <Image
                                        src="/arrow-check.webp"
                                        alt="Arrow"
                                        width={25}
                                        height={25}
                                        className="mt-2"
                                    />
                                    <div>
                                        First crypto project with a{" "}
                                        <span className="font-bold">prescription savings card</span>
                                    </div>
                                </li>
                                <li className="text-xl lg:text-2xl flex items-start gap-3">
                                    <Image
                                        src="/arrow-check.webp"
                                        alt="Arrow"
                                        width={25}
                                        height={25}
                                        className="mt-2"
                                    />
                                    <div>
                                        First project on the XRP Ledger to{" "}
                                        <span className="font-bold">Integrate AI</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="px-6 py-20 lg:px-28">
                <div className="mx-auto max-w-7xl text-center mb-8 ">
                    <h1 className="text-2xl sm:text-3xl lg:flex content-center items-center gap-2 justify-center ">
                        Introducing the <Image className="sm:w-full w-72 mx-auto" src={'/logo.png'}
                                               alt={'XRP Healthcare'} width={400} height={200}/> <span
                        className="underline underline-offset-8">Prescription Savings Card:</span>
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-5/12">
                        <div>
                            <ul className="list-none space-y-5">
                                <li className="text-xl leading-snug flex items-start gap-2">
                                    <Image width={'20'} height={'20'} src={"/arrow-gradient.png"} alt={"arrow"}
                                           className="w-5 mt-2"/>
                                    <div>
                                        Unlock Savings of Up to 80<span className="font-sans">%</span> on
                                        Your Prescription and Medications with Unlimited Usage.
                                    </div>
                                </li>
                                <li className="text-xl leading-snug flex items-start gap-2">
                                    <Image width={'20'} height={'20'} src={"/arrow-gradient.png"} alt={"arrow"}
                                           className="w-5 mt-2"/>
                                    <div>
                                        Accepted at More Than 68,000 Pharmacies Across the United States,
                                        including Walgreens, CVS, and Walmart.
                                    </div>
                                </li>
                                <li className="text-xl leading-snug flex items-start gap-2">
                                    <Image width={'20'} height={'20'} src={"/arrow-gradient.png"} alt={"arrow"}
                                           className="w-5 mt-2"/>
                                    <div>
                                        Earn XRPH Rewards Every Time You Use Your Card – Straight to Your
                                        Wallet.
                                    </div>
                                </li>
                                <li className="text-xl leading-snug flex items-start gap-2">
                                    <Image width={'20'} height={'20'} src={"/arrow-gradient.png"} alt={"arrow"}
                                           className="w-5 mt-2"/>
                                    <div>
                                        Get Your Free XRPH Prescription Savings Card by <b>Downloading</b> it Today<span
                                        className="font-mono">!</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-7/12">
                        <div
                            className="bg-gradient-to-r from-haraa to-jamni p-4 flex mb-4 md:mb-0 hover:shadow-lg transition-shadow"
                        >
                            <div
                                className="w-full bg-thumbnail bg-center bg-cover flex min-h-[200px] sm:min-h-[300px] items-center justify-center rounded-lg shadow-md relative"
                                style={{boxShadow: "6px 6px 7px 0 rgba(0, 0, 0, 0.8"}}>
                                <Dialog>
                                    <DialogTrigger><FaPlayCircle
                                        className="ring-[20px] ring-haraa/20 rounded-full text-7xl text-jamni hover:text-jamni/80 hover:ring-haraa/50"/></DialogTrigger>
                                    <DialogContent className="max-w-screen-lg">
                                        <DialogHeader>
                                            <DialogTitle></DialogTitle>
                                            <DialogDescription>
                                                <iframe width="100%" height="550"
                                                        src="https://www.youtube.com/embed/98D3KBayHgw?rel=0"
                                                        title="XRPH Prescription Savings Card | Up to 80% Savings @ CVS, Walgreens Walmart | XRP Healthcare | Video"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        referrerPolicy="strict-origin-when-cross-origin"
                                                        allowFullScreen></iframe>
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center mt-8">
                    <div className="w-full md:w-5/12 lg:pl-7">
                        <div className="flex justify-center md:justify-start gap-5">
                            <div>
                                <Link href={"https://apps.apple.com/gb/app/xrph-wallet/id6451218628"}
                                      target={"_blank"} rel="noopener noreferrer"
                                      title="Download XRPH Wallet on the App Store">
                                    <Image height={'200'} width={'300'} src={"/app-store-o.png"} alt={"app-store"}
                                           className="w-48 h-auto hover:scale-95 transition-all duration-200"
                                    />
                                </Link>
                            </div>
                            <div>
                                <Link href={"https://play.google.com/store/apps/details?id=com.xrphwallet"}
                                      target={"_blank"} rel="noopener noreferrer"
                                      title="Get XRPH Wallet on Google Play">
                                    <Image height={'200'} width={'300'} src={"/google-play-o.png"} alt={"google play"}
                                           className="w-48 h-auto hover:scale-95 transition-all duration-200"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-7/12">
                        <div className="flex justify-center items-center md:justify-between ">
                            <div>
                                <Image height={'100'} width={'200'} src={"/psca/csv.webp"} alt={"csv"}
                                       className="w-40 h-auto"/>
                            </div>
                            <div>
                                <Image height={'100'} width={'200'} src={"/psca/walgreens.webp"} alt={"walgreens"}
                                       className="w-50 h-auto"/>
                            </div>
                            <div>
                                <Image height={'100'} width={'200'} src={"/psca/walmart.webp"} alt={"walmart"}
                                       className="w-50 h-auto"/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <PageTitleImage image={'/xrph-logos/logo-xrph-ai.webp'}/>
            <div className="px-6">
                <div className="pb-32">
                    <div className="max-w-full mx-auto ">
                        <div className="flex justify-center items-center h-40 md:h-52 w-60 lg:w-full mx-auto">
                            <Image src={'/xrph-logos/logo-news.webp'} alt={'xrph news'} width={'500'} height={'150'}/>
                        </div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                            {NewsData.slice(0, 3).map((post, index) => (
                                <Link href={post.link} key={index + 1} target="_blank">
                                    <div className="group">
                                        <div
                                            className="border-2 border-white group-hover:border-b-jamni h-80 relative ">
                                            <div
                                                className={`min-h-32 flex items-center -bg-gray-100 p-2 ${post.imgClass}`}>
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
                                            <div className="lg:px-6">
                                                <div
                                                    className="flex justify-between items-center my-2 font-bold text-sm">
                                                    {/*<div>{fixText(format(post.date, "dd mmmm yyyy"))}</div>*/}
                                                    <div>{fixText(post.date.slice(0, 10))}</div>
                                                    <div>By admin</div>
                                                </div>
                                                <div
                                                    className="font-bold text-lg leading-6 text-jamni mb-2 line-clamp-3">{fixText(post.title)}</div>
                                                <div
                                                    className="font-normal text-sm line-clamp-3">{fixText(post.description)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center justify-center mt-10">
                            <MyButton buttonText={'XRPH News'} buttonUrl={'buy-xrph'} target={'_self'}/>
                        </div>
                    </div>
                </div>
                <div className="pb-32">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="flex justify-center items-center h-40 md:h-52 w-60 lg:w-full mx-auto">
                            <Image src={'/xrph-logos/logo-buy-xrph.webp'} alt={'buy xrph'} width={'500'}
                                   height={'150'}/>
                        </div>
                        <div className="grid grid-cols-4 md:grid-cols-6 gap-6 place-items-center">
                            {Exchanges.map((exchange, index) => {
                                let extraClass = "col-span-2";

                                if (Exchanges.length === 4 && index === 3) {
                                    extraClass = "col-span-2 justify-self-end";
                                } else if (Exchanges.length === 5 && index === 4) {
                                    extraClass = "col-span-2 justify-self-start";
                                } else if (index >= 3 && Exchanges.length % 3 !== 0) {
                                    extraClass = "lg:col-span-3 col-span-2 justify-self-end";
                                }

                                return (
                                    <div className={`group ${extraClass}`} key={exchange.id}>
                                        <Link href={exchange.link} title={exchange.name}>
                                            <Image
                                                src={exchange.image}
                                                alt={exchange.name}
                                                width={300}
                                                height={200}
                                                className="transition-all duration-300 group-hover:scale-90 -object-fill "
                                            />
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>


                        <div className="flex items-center justify-center mt-10">
                            <MyButton
                                buttonText={'View All Exchanges'} buttonUrl={'buy-xrph'} target={'_self'}/>
                        </div>
                    </div>

                    {/*<div className="pt-24 max-w-4xl mx-auto">
                        <script src="https://static.elfsight.com/platform/platform.js" async></script>
                        <div className="elfsight-app-5c0edd23-a297-4195-a5da-5c8fee6a789a" data-elfsight-app-lazy></div>
                    </div>*/}
                </div>
            </div>
        </>
    );
}
