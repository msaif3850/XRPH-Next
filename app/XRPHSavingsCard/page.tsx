import React from "react";
import {FaPlayCircle} from "react-icons/fa";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";

export default function Exchanges() {
    return (
        <>
            <div className="px-6 py-24 sm:py-22 lg:px-8">
                <div className="mx-auto max-w-5xl text-center">
                    <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gradient">XRPH Prescription
                        Savings Card <span className="font-sans">&</span> App</h1>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center px-6">
                <div className="w-full md:w-1/2">
                    <div
                        className="bg-gradient-to-r from-haraa to-jamni p-3 flex mb-4 md:mb-0 hover:shadow-lg transition-shadow"
                    >
                        <div
                            className="w-full bg-thumbnail bg-center bg-cover flex min-h-[200px] sm:min-h-[400px] items-center justify-center rounded-lg shadow-md relative">
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

                {/* Right Column */}
                <div className="w-full md:w-1/2">
                    <div>
                        <ul className="list-none space-y-4">
                            <li className="text-2xl leading-snug flex items-start gap-2">
                                <Image width={'20'} height={'20'} src={"/arrow-gradient.png"} alt={"arrow"}
                                       className="w-5 mt-2"/>
                                <div>
                                    Unlock Savings of Up to 80<span className="font-special">%</span> on
                                    Your Prescription and Medications with Unlimited Usage.
                                </div>
                            </li>
                            <li className="text-2xl leading-snug flex items-start gap-2">
                                <Image width={'20'} height={'20'} src={"/arrow-gradient.png"} alt={"arrow"}
                                       className="w-5 mt-2"/>
                                <div>
                                    Accepted at More Than 68,000 Pharmacies Across the United States,
                                    including Walgreens, CVS, and Walmart.
                                </div>
                            </li>
                            <li className="text-2xl leading-snug flex items-start gap-2">
                                <Image width={'20'} height={'20'} src={"/arrow-gradient.png"} alt={"arrow"}
                                       className="w-5 mt-2"/>
                                <div>
                                    Earn XRPH Rewards Every Time You Use Your Card – Straight to Your
                                    Wallet.
                                </div>
                            </li>
                            <li className="text-2xl leading-snug flex items-start gap-2">
                                <Image width={'20'} height={'20'} src={"/arrow-gradient.png"} alt={"arrow"}
                                       className="w-5 mt-2"/>
                                <div>
                                    Get Your Free XRPH Prescription Savings Card by <b>Downloading</b> it Today<span
                                    className="font-mono">!</span>
                                </div>
                            </li>
                        </ul>
                        <div className="flex justify-center md:justify-start gap-4 mt-6">
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
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center px-6">
                <div className="w-full md:w-1/2">
                    <div className="flex justify-center items-center md:justify-between gap-4 mt-6">
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
                <div className="w-full md:w-1/2">
                </div>
            </div>
        </>
    )
}