import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

import {PressReleases} from "@/press-releases-data";
import {DayOfDate, MonthOfDate} from "@/variables";
import {RiContactsLine, RiDownloadLine} from "react-icons/ri";

const logos = [
    {name: "XRP Healthcare logo black horizontal", imgSrc: "/logo.png"},
    {name: "XRP Healthcare logo white horizontal", imgSrc: "/logo-dark.png"},
    {name: "XRP Healthcare logo black vertical", imgSrc: "/xrph-logos/logo-v.png"},
    {name: "XRP Healthcare logo white vertical", imgSrc: "/xrph-logos/logo-v-dark.png"},
    {name: "XRP Healthcare Africa logo black horizontal", imgSrc: "/xrph-logos/africa.png"},
    {name: "XRP Healthcare Africa logo white horizontal", imgSrc: "/xrph-logos/africa-dark.png"},
    {name: "XRP Healthcare Africa logo black vertical", imgSrc: "/xrph-logos/africa-v.png"},
    {name: "XRP Healthcare Africa logo white vertical", imgSrc: "/xrph-logos/africa-v-dark.png"}
];
import {FixText} from "@/components/FixText";
import React from "react";
import {Metadata} from "next";
import MediaStickyButtons from "@/components/layout/MediaStickyButtons";
import Logo from "@/components/layout/Logo";

export const generateMetadata = (): Metadata => {
    return {
        title: "Media Center",
        description: "Stay updated with the latest news, press releases, and media coverage about XRP Healthcare. Explore our Media Center for insights and updates.",
        alternates: {canonical: "https://www.xrphealthcare.ai/media-center"},
    };
};
export default function MediaCenter() {
    return (
        <>
            <div className="px-6 pb-10 pt-32 sm:pt-22 sm:pb-20 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-5xl font-semibold tracking-tight  sm:text-6xl ">Media Center</h1>
                </div>
            </div>
            <div className="px-6">
                <div className="pb-20" id='press-releases'>
                    <div className="container max-w-full mx-auto ">
                        <div className="text-center pb-8">
                            <h2 className="inline-block"><Logo lightLogo={'/logo.png'} darkLogo={'/logo-dark.png'} width={150} height={50}/></h2>
                            <h3 className="mt-0 font-semibold text-2xl md:text-4xl">
                                Press <span className="text-jamni">Releases</span>
                            </h3>
                        </div>
                        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8">
                            {PressReleases.map((post, index) => (
                                <Link href={post.link} key={index + 1} target="_blank">
                                    <div className="group break-inside-avoid mb-6">
                                        <div
                                            className="rounded relative border border-gray-200 dark:border-gray-700 border-b-2 border-b-white group-hover:border-b-jamni shadow-lg group-hover:shadow-2xl dark:bg-gray-800 overflow-hidden">
                                            <div className="h-auto flex items-center ">
                                                <Image src={post.img} alt={post.title}
                                                       width={250} height={150}
                                                       className="font-sans group-hover:scale-105 duration-300 transition-all w-full mx-auto"
                                                />
                                            </div>
                                            <div
                                                className="absolute right-0 top-0 bg-gradient-to-b from-haraa to-jamni px-2 py-0.5 text-white flex flex-col items-center gap-0 z-10">

                                                <span
                                                    className="font-sans text-2xl font-semibold">{DayOfDate(post.date)}</span>
                                                <span className="text-xs">{MonthOfDate(post.date)}</span>
                                                <span
                                                    className="text-xs font-sans">{new Date(post.date).getFullYear()}</span>

                                            </div>
                                            <div className="text-center pt-6 lg:pt-12 p-6">
                                                <div className="font-normal text-base">{FixText(post.title)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div id='logos'>
                    <div className="container mx-auto py-16">
                        <div className="text-center pb-8">
                            <h2 className="text-[0.7rem] font-semibold tracking-wide px-5 py-2 bg-jamni2/10 text-jamni inline-block uppercase rounded-full">
                                XRP Healthcare Logos
                            </h2>
                            <h3 className="mt-3 font-semibold text-2xl md:text-4xl">
                                XRP Healthcare {FixText('&')} XRP Healthcare Africa <span className="text-jamni">Registered Trademarks</span>
                            </h3>
                            <p className="mt-4 mx-auto lg:w-3/5">The XRP Healthcare logo is a registered trademark and
                                represents the molecule that promotes health. Do not attempt to use or recreate our
                                registered trademark without our permission.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-0">
                            {logos.map((logo, index) => (
                                <a key={index} href={logo.imgSrc} download
                                   className="group block basis-[48%] sm:basis-[25%]" title={logo.name}>
                                    <div
                                        className="shadow-lg transition hover:shadow-xl relative p-0.5 bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-jamni group-hover:to-haraa">
                                        <div
                                            className="min-h-32 md:min-h-48 p-3 bg-gray-500 dark:bg-gray-700 flex justify-center items-center">
                                            <Image src={logo.imgSrc} alt={logo.name} width={250} height={100}
                                                   className="object-cover group-hover:scale-95 duration-300 transition-all"/>
                                        </div>
                                        <div className="absolute top-0.5 right-0.5">
                                            <Button className="bg-gray-600  rounded-none">
                                                <RiDownloadLine
                                                    className="group-hover:scale-150 duration-300 transition-all"/>
                                            </Button>
                                        </div>
                                        {/*<div className="text-center hidden group-hover:block absolute bottom-0 left-0 right-0">
                                        <Button className="w-full bg-gradient-to-r from-haraa to-jamni sm:py-2 py-0 text-lg shadow-md">
                                            Download <FaAngleRight
                                            className="group-hover:translate-x-2 duration-300 transition-all"/></Button>
                                    </div>*/}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div id='images'>
                    <div className="container mx-auto py-16">
                        <div className="text-center pb-8">
                            <h2 className="text-[0.7rem] font-semibold tracking-wide px-5 py-2 bg-jamni2/10 text-jamni inline-block uppercase rounded-full">
                                XRP Healthcare Owners
                            </h2>
                            <h3 className="mt-3 font-semibold text-2xl md:text-4xl">
                                Laban Roomes {FixText('&')} <span className="text-jamni">Kain Roomes</span>
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                            {/* First Three Images (Each in One Column) */}
                            <div className="lg:col-span-1">
                                <Image src={"/owners/laban-roomes.jpg"} alt="Laban Roomes" width={500} height={500} className="w-full h-auto object-cover"/>
                            </div>
                            <div className="lg:col-span-1">
                                <Image src={"/owners/kain-roomes.jpg"} alt="Kain Roomes" width={500} height={500} className="w-full h-auto object-cover"/>
                            </div>
                            <div className="lg:col-span-1">
                                <Image src={"/owners/laban-kain-3.jpg"} alt="Laban Roomes and Kain Roomes" width={500} height={500} className="w-full h-auto object-cover"/>
                            </div>

                            {/* Last Two Images Stacked in One Column */}
                            <div className="lg:col-span-1 flex flex-col gap-1">
                                <Image src={"/owners/laban-kain-1.jpg"} alt="Laban Roomes and Kain Roomes" width={500} height={500} className="w-full h-auto object-cover"/>
                                <Image src={"/owners/laban-kain-2.jpg"} alt="Laban Roomes and Kain Roomes" width={500} height={500} className="w-full h-auto object-cover"/>
                            </div>
                        </div>

                    </div>
                </div>
                <div id='about'>
                    <div className="container mx-auto py-16">
                        <div className="text-center pb-8">
                            <h2 className="text-[0.7rem] font-semibold tracking-wide px-5 py-2 bg-jamni2/10 text-jamni inline-block uppercase rounded-full">
                                Press {FixText('&')} Media
                            </h2>
                            <h3 className="mt-3 font-semibold text-2xl md:text-4xl">
                                About <span className="text-jamni">XRP Healthcare</span>
                            </h3>
                            <p className="mt-4 mx-auto lg:w-3/5">The first Pharma and Healthcare platform to be built on
                                the XRP Ledger {FixText('-')} XRP Healthcare ❲XRPH❳ is an innovative, scalable solutions
                                company utilizing Web3 technology to revolutionize the way people access and afford
                                healthcare services globally.</p>
                        </div>
                        <div className="lg:w-2/4 md:w-1/2 w-full mx-auto">
                            <div
                                className="flex items-center justify-between gap-2 flex-wrap border-gray-200 dark:border-gray-700 border p-8 group shadow-lg hover:shadow-2xl dark:bg-gray-800">
                                <div><h3 className="text-2xl mb-2">{FixText('Press & Media contact')}</h3></div>
                                <div className="h-full flex items-center ">
                                    {/*<Image alt={"Press & Media contact"} width={64} height={64} className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={'/icon.png'}/>*/}
                                    <RiContactsLine
                                        className="flex-shrink-0 mr-4 ring-2 ring-gray-500 p-2 rounded-lg text-5xl text-gray-500 group-hover:text-jamni"/>

                                    <div className="flex-grow">
                                        <Link href={'mailto:press@xrphealthcare.com'} target={'_blank'}>
                                            <h2 className="text-lg/normal font-medium group-hover:underline">{FixText('Press@xrphealthcare.com')}</h2>
                                            <p className="text-gray-600">Hellen Mucheru</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MediaStickyButtons/>
        </>
    )
}