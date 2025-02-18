import Placeholder from "@/components/layout/Placeholder";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

import {PressReleases} from "@/press-releases-data";
import {DayOfDate, MonthOfDate} from "@/variables";
import { RiContactsLine } from "react-icons/ri";

const logos = [
    {name: "XRP Healthcare logo black horizontal", imgSrc: "/logo.png"},
    {name: "XRP Healthcare logo white horizontal", imgSrc: "/logo-dark.png"},
    {name: "XRP Healthcare logo black vertical", imgSrc: "/xrph-logos/logo-v.png"},
    {name: "XRP Healthcare logo white vertical", imgSrc: "/xrph-logos/logo-v-dark.png"},
    {name: "XRP Healthcare Africa logo black horizontal", imgSrc: "/xrph-logos/africa.png"},
    {name: "XRP Healthcare Africa logo white horizontal", imgSrc: "/xrph-logos/africa-dark.png"},
    {name: "XRP Healthcare Africa logo black vertical", imgSrc: "/xrph-logos/africa-v.png"},
    {name: "XRP Healthcare Africa logo white vertical", imgSrc: "/xrph-logos/logo-v-dark.png"},
];
import {FixText} from "@/components/FixText";
import HeadTag from "@/components/HeadTag";
import React from "react";
export default function MediaCenter() {
    return (
        <>
            <HeadTag title="Media Center" canonical="https://www.xrphealthcare.ai/media-center"/>
            <Placeholder title={'Media Center'} key={'media'} description={''}/>
            <div className="pb-20 pt-14 px-6">
                <div className="container mx-auto">
                    <h2 className="text-jamni text-4xl mb-2">About Us</h2>
                    <p>The first Pharma and Healthcare platform to be built on the XRP Ledger <span
                        className="font-sans">-</span> XRP Healthcare ❲XRPH❳ is an innovative, scalable solutions
                        company utilizing Web3 technology to revolutionize the way people access and afford healthcare
                        services globally.</p>
                </div>
            </div>

            <div className="bg-gray-900 dark:bg-black">
                <div className="container mx-auto py-16 px-6">
                    <header className="text-center mb-6">
                        <h2 className="text-gradient font-bold text-2xl md:text-4xl">
                            XRP Healthcare <span className="font-sans">&amp;</span> XRP Healthcare Africa Registered
                            Trademarks
                        </h2>
                        <p className="text-white mt-3 text-lg px-0 lg:px-20">
                            The XRP Healthcare logo is a registered trademark and represents the molecule that
                            promotes health. Do not
                            attempt to use or recreate our registered trademark without our permission.
                        </p>
                    </header>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {logos.map((logo, index) => (
                            <a key={index} href={logo.imgSrc} download className="group block basis-[48%] sm:basis-[24%]">
                                <div
                                    className="rounded-lg shadow-lg transition hover:shadow-xl relative p-0.5 bg-gradient-to-r from-haraa to-jamni group-hover:from-jamni group-hover:to-haraa">
                                    <div
                                        className="min-h-32 md:min-h-48 p-3 bg-gray-600 dark:bg-gray-700 flex justify-center items-center rounded-lg ">
                                        <Image src={logo.imgSrc} alt={logo.name} width={250} height={100}
                                               className="object-contain group-hover:scale-95 duration-300 transition-all"/>
                                    </div>
                                    <div className="absolute top-0.5 right-0.5">
                                        <Button className="bg-gradient-to-r from-haraa to-jamni group-hover:from-jamni group-hover:to-haraa text-sm">
                                            Download
                                            {/*<FaDownload className="group-hover:scale-125 duration-300 transition-all"/>*/}
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

            <div className="pb-20 pt-14 px-6">
                <div className="max-w-full mx-auto ">
                    <h2 className="text-jamni text-4xl mb-4">Press Releases</h2>
                    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
                        {PressReleases.map((post, index) => (
                            <Link href={post.link} key={index + 1} target="_blank">
                                <div className="group break-inside-avoid mb-6">
                                    <div
                                        className="relative border border-gray-200 dark:border-gray-700 border-b-2 border-b-haraa group-hover:border-b-jamni shadow-lg group-hover:shadow-2xl dark:bg-gray-800 overflow-hidden">
                                        <div className="h-auto flex items-center ">
                                            <Image src={post.img} alt={post.title}
                                                   width={250} height={150}
                                                   className="group-hover:scale-105 duration-300 transition-all w-full mx-auto"
                                            />
                                        </div>
                                        <div
                                            className="absolute right-0 top-0 bg-gradient-to-b from-haraa to-jamni px-2 py-0.5 text-white flex flex-col items-center gap-0 z-10">

                                            <span className="font-sans text-2xl font-semibold">{DayOfDate(post.date)}</span>
                                            <span className="text-xs">{MonthOfDate(post.date)}</span>
                                            <span className="text-xs font-sans">{new Date(post.date).getFullYear()}</span>

                                        </div>
                                        <div className="text-center pt-12 p-6">
                                            <div className="font-normal text-base">{FixText(post.title)}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="lg:w-1/3 md:w-1/2 w-full mx-auto- mt-16">
                        <h2 className="text-jamni text-4xl mb-2">{FixText('Press & Media contact')}</h2>
                        <Link href={'mailto:press@xrphealthcare.com'} target={'_blank'}>
                        <div className="h-full flex items-center border-gray-200 dark:border-gray-700 border p-4 rounded-lg group shadow-lg hover:shadow-2xl dark:bg-gray-800">
                            {/*<Image alt={"Press & Media contact"} width={64} height={64} className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={'/icon.png'}/>*/}
                            <RiContactsLine className="flex-shrink-0 mr-4 ring-2 ring-gray-500 p-2 rounded-lg text-5xl text-gray-500 group-hover:text-jamni" />

                            <div className="flex-grow">
                                <h2 className="text-lg/normal font-medium group-hover:underline">{FixText('Press@xrphealthcare.com')}</h2>
                                <p className="text-gray-600">Hellen Mucheru</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}