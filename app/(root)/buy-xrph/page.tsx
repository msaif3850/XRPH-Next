import Image from "next/image";
//import {FaAngleRight} from "react-icons/fa6";
import Link from "next/link";
import {Exchanges} from "@/variables";
import React from "react";
import { Metadata } from "next";
import PageTitleImage from "@/components/layout/PageTitleImage";
import CmcTickerWidget from "@/components/layout/CmcTickerWidget";
import MyButton from "@/components/layout/MyButton";
export const generateMetadata = (): Metadata => {
    return {
        title: "Buy XRPH",
        description: "Exchanges where you can buy XRPH built on the XRP Ledger, enhances access with a US Prescription Card and expands African healthcare via AI-driven acquisitions.",
        alternates: { canonical: "https://www.xrphealthcare.ai/buy-xrph" },
    };
};
export default function BuyExchanges() {
    return (
        <>
            <PageTitleImage image={'/xrph-logos/buy-xrph.png'} imageDark={'/xrph-logos/buy-xrph-dark.png'} alt={'XRPHealthcare news'} description={'Exchanges where you can buy XRPH'}/>
            {/*<Placeholder title={'Buy XRPH.'} key={'buy'} description={'Exchanges where you can buy XRPH'}/>*/}
            <div className="max-w-screen-xl mx-auto px-6">
                {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">*/}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-6">
                    {Exchanges.map((exchange) => (
                        <Link href={exchange.link} key={exchange.id} title={exchange.name}
                              className="basis-full sm:basis-[48%] md:basis-[48%] lg:basis-[32%]">
                            <div className="relative h-[150px] group">
                                <div
                                    className="bg-gradient-to-r from-haraa to-jamni group-hover:from-jamni group-hover:to-haraa p-1 rounded-2xl">
                                    <div
                                        className="bg-white group-hover:bg-transparent dark:bg-gray-400 rounded-2xl overflow-hidden transition-all duration-500 flex items-center justify-center h-[125px]">
                                        <Image
                                            src={exchange.image}
                                            alt={exchange.name}
                                            width={300}
                                            height={200}
                                            className="transition-all duration-300 group-hover:scale-90 object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="absolute left-0 right-0 bottom-0 mx-auto w-fit">
                                    <MyButton buttonText={'Buy XRPH'} buttonUrl={exchange.link} target={'_blank'}/>
                                </div>
                                {/*<div className="absolute left-0 right-0 bottom-0 w-[160px] mx-auto rounded-full p-2 bg-gradient-to-r from-haraa to-jamni group-hover:from-jamni group-hover:to-haraa">
                                    <div className="text-center font-bold flex items-center justify-between text-white px-3">BUY XRPH <FaAngleRight className="group-hover:translate-x-2 duration-300 transition-all"/></div>
                                </div>*/}
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
            <CmcTickerWidget/>
        </>
    )
}
