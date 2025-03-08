import Image from "next/image";
import AppleDownloadButton from "@/components/layout/AppleDownloadButton";
import GoogleDownloadButton from "@/components/layout/GoogleDownloadButton";
import HeadTag from "@/components/HeadTag";
import React from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import QrImage from "@/components/layout/QrImage";
import AppiOS from "@/components/layout/AppiOS";
import AppAndroid from "@/components/layout/AppAndroid";
import { Metadata } from "next";
export const generateMetadata = (): Metadata => {
    return {
        title: "Apps",
        description: "Download and explore XRPH Wallet, your secure and efficient solution for managing XRP Healthcare transactions. Now featuring both XRPH AI and XRPH Wallet apps.",
        alternates: { canonical: "https://www.xrphealthcare.ai/XRPH-Wallet" },
    };
};
export default function XrphWallet() {
    return (
        <>
            <HeadTag title="Wallet" canonical="https://www.xrphealthcare.ai/"/>
            <div className="max-w-6xl mx-auto text-center pt-24 px-6 sm:px-0">
                <Tabs defaultValue="xrph-ai" className="">
                    <TabsList className="w-full flex justify-center bg-jamni/20 dark:bg-jamni/20 px-0">
                        <TabsTrigger
                            value="xrph-ai"
                            className="text-black dark:text-white w-1/2 py-3 text-md rounded-md transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-haraa data-[state=active]:to-jamni data-[state=active]:text-white data-[state=active]:shadow-xl"
                        >
                            XRPH AI App
                        </TabsTrigger>
                        <TabsTrigger
                            value="xrph-wallet"
                            className="text-black dark:text-white w-1/2 py-3 text-md rounded-md transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-haraa data-[state=active]:to-jamni data-[state=active]:text-white data-[state=active]:shadow-xl"
                        >
                            XRPH Wallet
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="xrph-ai" className="pt-10 sm:pt-20">
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                            <div className="w-full lg:w-1/3">
                                <div className="border-4 border-light rounded-3xl shadow-lg dark:bg-gray-900">
                                    <div
                                        className="p-6 lg:py-12 card border-0 text-center rounded-3xl flex flex-col justify-center items-center">
                                        <Image
                                            src={"/icon.png"}
                                            alt="XRPH Wallet"
                                            width={150}
                                            height={150}
                                            className="mb-6"
                                        />
                                        <h3 className="text-2xl font-bold bg-gradient-to-r from-haraa to-jamni bg-clip-text text-transparent">
                                            XRPH AI
                                        </h3>
                                        <p className="mt-2 ">
                                            Holistic <span className="font-sans">&</span> Traditional Medical Insights,
                                            Powered by AI
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="text-center px-6 lg:px-8">
                                    <h2 className="text-lg sm:text-2xl font-semibold mb-6">Scan to download the app</h2>
                                    <div>
                                        <QrImage type={'ai'} width={200} height={200} className={'w-1/3'}/>
                                    </div>
                                    <div className="my-4 relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-2 border-jamni"></div>
                                        </div>
                                        <div className="relative flex justify-center">
                                            <span className="bg-white dark:bg-black px-2 ">OR</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-1 sm:gap-4">
                                        <AppiOS link={'https://apps.apple.com/gb/app/xrph-wallet/id6451218628'}/>
                                        <AppAndroid link={'https://play.google.com/store/apps/details?id=com.xrphwallet'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="xrph-wallet" className="pt-10 sm:pt-20">
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                            <div className="w-full lg:w-1/3 order-1 lg:order-2">
                                <div className="border-4 border-light rounded-3xl shadow-lg dark:bg-gray-900">
                                    <div
                                        className="p-6 lg:py-12 card border-0 text-center rounded-3xl flex flex-col justify-center items-center">
                                        <Image
                                            src={"/icon.png"}
                                            alt="XRPH Wallet"
                                            width={150}
                                            height={150}
                                            className="mb-6"
                                        />
                                        <h3 className="text-2xl font-bold bg-gradient-to-r from-haraa to-jamni bg-clip-text text-transparent">
                                            XRPH Wallet
                                        </h3>
                                        <p className="mt-2 ">
                                            The XRP Healthcare Decentralized Mobile Wallet is a non
                                            <span className="font-sans">-</span>custodial wallet backed
                                            by the XRP Ledger.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 order-2 lg:order-1">
                                <div className="text-center px-6 lg:px-8">
                                    <h2 className="text-lg sm:text-2xl font-semibold mb-6">Scan to download the app</h2>
                                    <div>
                                        <QrImage type={'wallet'} width={200} height={200} className={'w-1/3'}/>
                                    </div>
                                    <div className="my-4 relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-2 border-jamni"></div>
                                        </div>
                                        <div className="relative flex justify-center">
                                            <span className="bg-white dark:bg-black px-2 ">OR</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-1 sm:gap-4">
                                        <AppiOS link={'https://apps.apple.com/gb/app/xrph-wallet/id6451218628'}/>
                                        <AppAndroid link={'https://play.google.com/store/apps/details?id=com.xrphwallet'}/>
                                        {/*<AppleDownloadButton link={'https://apps.apple.com/gb/app/xrph-wallet/id6451218628'}/>
                                        <GoogleDownloadButton link={'https://play.google.com/store/apps/details?id=com.xrphwallet'}/>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            <div className="hidden">
                <div className="flex items-center pt-24 pb-20 sm:py-22">
                    <div className="w-full text-center">
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                            <div className="w-full lg:w-1/3  px-6 sm:px-10">
                                <div className="border-4 border-light rounded-3xl shadow-lg dark:bg-gray-900">
                                    <div
                                        className="p-6 lg:py-12 card border-0 text-center rounded-3xl flex flex-col justify-center items-center">
                                        <Image
                                            src={"/icon.png"}
                                            alt="XRPH Wallet"
                                            width={150}
                                            height={150}
                                            className="mb-6"
                                        />
                                        <h3 className="text-2xl font-bold bg-gradient-to-r from-haraa to-jamni bg-clip-text text-transparent">
                                            XRPH AI
                                        </h3>
                                        <p className="mt-2 ">
                                            Holistic <span className="font-sans">&</span> Traditional Medical Insights,
                                            Powered by AI
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 ">
                                <div className="text-center px-6 lg:px-8">
                                    <h2 className="text-2xl font-bold mb-6">
                                        Scan to download the app
                                    </h2>
                                    <div>
                                        <Image
                                            src={"/XRPHWalletQRCode.svg"}
                                            alt={"Download XRPH Wallet"}
                                            width={200}
                                            height={200}
                                            className="w-1/2 mx-auto border p-2 bg-gradient-to-r from-haraa to-jamni"
                                        />
                                    </div>
                                    <div className="my-4 relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-2 border-jamni"></div>
                                        </div>
                                        <div className="relative flex justify-center">
                                            <span className="bg-white dark:bg-black px-2 ">OR</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-1 sm:gap-4">
                                        <AppleDownloadButton
                                            link={'https://apps.apple.com/us/app/xrph-ai/id6739782817'}/>
                                        <GoogleDownloadButton
                                            link={'https://play.google.com/store/apps/details?id=ai.xrph'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center sm:pb-22">
                    <div className="w-full text-center">
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                            <div className="w-full lg:w-1/3 order-1 lg:order-2 px-6 sm:px-10">
                                <div className="border-4 border-light rounded-3xl shadow-lg dark:bg-gray-900">
                                    <div
                                        className="p-6 lg:py-12 card border-0 text-center rounded-3xl flex flex-col justify-center items-center">
                                        <Image
                                            src={"/icon.png"}
                                            alt="XRPH Wallet"
                                            width={150}
                                            height={150}
                                            className="mb-6"
                                        />
                                        <h3 className="text-2xl font-bold bg-gradient-to-r from-haraa to-jamni bg-clip-text text-transparent">
                                            XRPH Wallet
                                        </h3>
                                        <p className="mt-2 ">
                                            The XRP Healthcare Decentralized Mobile Wallet is a non
                                            <span className="font-sans">-</span>custodial wallet backed
                                            by the XRP Ledger.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 order-2 lg:order-1">
                                <div className="text-center px-6 lg:px-8">
                                    <h2 className="text-2xl font-bold mb-6">
                                        Scan to download the app
                                    </h2>
                                    <div>
                                        <Image
                                            src={"/XRPHWalletQRCode.svg"}
                                            alt={"Download XRPH Wallet"}
                                            width={200}
                                            height={200}
                                            className="w-1/2 mx-auto border p-2 bg-gradient-to-r from-haraa to-jamni"
                                        />
                                    </div>
                                    <div className="my-4 relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-2 border-jamni"></div>
                                        </div>
                                        <div className="relative flex justify-center">
                                            <span className="bg-white dark:bg-black px-2 ">OR</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-1 sm:gap-4">
                                        <AppleDownloadButton
                                            link={'https://apps.apple.com/gb/app/xrph-wallet/id6451218628'}/>
                                        <GoogleDownloadButton
                                            link={'https://play.google.com/store/apps/details?id=com.xrphwallet'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}