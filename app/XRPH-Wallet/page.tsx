import Image from "next/image";
import AppleDownloadButton from "@/components/layout/AppleDownloadButton";
import GoogleDownloadButton from "@/components/layout/GoogleDownloadButton";
import SEO from "@/components/SEO";
import React from "react";
export default function XrphWallet() {
    return (
        <>
            <SEO title="Wallet" canonical="https://www.xrphealthcare.ai/XRPH-Wallet"/>
            <div className="flex items-center pt-24 pb-20 sm:py-22">
                <div className="w-full text-center">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                        <div className="w-full lg:w-1/3  px-6 sm:px-10">
                            <div className="border-4 border-light rounded-3xl shadow-lg ">
                                <div className="p-6 lg:py-12 card border-0 text-center rounded-3xl flex flex-col justify-center items-center">
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
                                    <p className="mt-2 text-gray-600">
                                        Holistic <span className="font-sans">&</span> Traditional Medical Insights, Powered by AI
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
                                        <span className="bg-white px-2 ">OR</span>
                                    </div>
                                </div>
                                <div className="flex justify-center gap-1 sm:gap-4">
                                    <AppleDownloadButton link={'https://apps.apple.com/us/app/xrph-ai/id6739782817'}/>
                                    <GoogleDownloadButton link={'https://play.google.com/store/apps/details?id=ai.xrph'}/>
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
                            <div className="border-4 border-light rounded-3xl shadow-lg">
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
                                    <p className="mt-2 text-gray-600">
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
                                        <span className="bg-white px-2 ">OR</span>
                                    </div>
                                </div>
                                <div className="flex justify-center gap-1 sm:gap-4">
                                    <AppleDownloadButton link={'https://apps.apple.com/gb/app/xrph-wallet/id6451218628'}/>
                                    <GoogleDownloadButton link={'https://play.google.com/store/apps/details?id=com.xrphwallet'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}