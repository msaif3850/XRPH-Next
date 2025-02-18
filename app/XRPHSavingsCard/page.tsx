import React from "react";
import {FaPlayCircle} from "react-icons/fa";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import MyButton from "@/components/layout/MyButton";
import YouTubeEmbed from "@/components/layout/YouTubeEmbed";
import AppleDownloadButton from "@/components/layout/AppleDownloadButton";
import GoogleDownloadButton from "@/components/layout/GoogleDownloadButton";
import HeadTag from "@/components/HeadTag";

export default function XRPHSavingsCard() {
    return (
        <>
            <HeadTag title="XRPH Prescription Savings Card & App" canonical="https://www.xrphealthcare.ai/XRPHSavingsCard"/>
            <div className="px-6 py-24 sm:py-22 lg:px-8">
                <div className="mx-auto max-w-5xl text-center">
                    <h1 className="text-3xl lg:text-5xl lg:leading-[1.2] -text-5xl font-semibold tracking-tight text-gradient ">XRPH Prescription
                        Savings Card <span className="font-sans">&</span> App</h1>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center px-6">
                <div className="w-full md:w-1/2">
                    <div
                        className="bg-gradient-to-r from-haraa to-jamni p-4 flex mb-4 md:mb-0 hover:shadow-lg transition-shadow"
                    >
                        <div
                            className="w-full bg-thumbnail bg-center bg-cover flex min-h-[200px] sm:min-h-[360px] items-center justify-center rounded-lg shadow-md relative"
                        style={{boxShadow: "6px 6px 7px 0 rgba(0, 0, 0, 0.8"}}>
                            <Dialog>
                                <DialogTrigger><FaPlayCircle
                                    className="ring-[20px] ring-haraa/20 rounded-full text-7xl text-jamni hover:text-jamni/80 hover:ring-haraa/50"/></DialogTrigger>
                                <DialogContent className="max-w-screen-lg p-3 border border-black bg-gradient-to-r from-haraa to-jamni ">
                                    <DialogHeader>
                                        <DialogDescription>
                                            <YouTubeEmbed videoId="98D3KBayHgw" />
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>

                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div>
                        <ul className="list-none space-y-4">
                            <li className="text-2xl leading-snug flex items-start gap-2">
                                <Image width={'20'} height={'20'} src={"/arrow-gradient.png"} alt={"arrow"}
                                       className="w-5 mt-2"/>
                                <div>
                                    Unlock Savings of Up to 80<span className="font-sans">%</span> on
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
                            <AppleDownloadButton link={'https://apps.apple.com/gb/app/xrph-wallet/id6451218628'}/>
                            <GoogleDownloadButton link={'https://play.google.com/store/apps/details?id=com.xrphwallet'}/>
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
            <div className="flex flex-col lg:flex-row items-center gap-8 px-6 py-24 sm:py-22">
                <div className="w-full lg:w-7/12">
                    <h6 className="font-normal mb-2 text-gray-500 uppercase">
                        Introducing Brochure
                    </h6>
                    <h1 className="font-bold text-4xl mb-4">Affordable Healthcare</h1>
                    <p className="text-2xl mb-6">
                        At XRP Healthcare, we believe everyone deserves access to affordable
                        medication. Our Prescription Savings Card offers significant discounts
                        on medication and prescription drugs, helping you save money and manage
                        your health more effectively. With the XRPH Wallet, you can easily
                        access your savings card and manage your health expenses seamlessly.
                        <br/>
                        <br/>
                        Our Prescription Savings Card is simple to use. Present it at any
                        participating pharmacy to receive discounts on your prescriptions. No
                        insurance is needed, and the card is available to everyone, regardless
                        of income or health status. This card is for anyone that needs or may
                        need medication from a U.S. pharmacy.
                    </p>
                    <MyButton buttonText={'Read More'} buttonUrl={'/docs/XRPH-Prescription-Savings-Card.pdf'}
                              target={'_blank'}/>
                </div>
                <div className="w-full lg:w-5/12 p-4 pl-0">
                    <Link
                        href={"/docs/XRPH-Prescription-Savings-Card.pdf"}
                        target={"_blank"}
                        title="XRP Healthcare Prescription Savings Card Brochure"
                    >
                        <div style={{boxShadow: "15px 15px 0px 0px #dadada"}}>
                            <Image
                                src="/psca/XRPH-Prescription-Savings-Card.png"
                                alt="XRP Healthcare Prescription Savings Card"
                                width={600}
                                height={400}
                                className="w-full h-auto shadow-lg"
                            />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8 px-6 ">
                <div className="w-full lg:w-5/12 p-4 pl-0">
                    <Image
                        src="/psca/XRPHSavingsCard.png"
                        alt="XRP Healthcare Prescription Savings Card"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                    />

                </div>
                <div className="w-full lg:w-7/12">
                    <h6 className="font-normal mb-2 text-gray-500 uppercase">
                        Introducing Brochure
                    </h6>
                    <h1 className="font-bold text-4xl mb-4">Affordable Healthcare</h1>
                    <p className="text-2xl mb-6">
                        <b>NOTE: </b> When picking up your prescription or medication from any one of the 68,000
                        pharmacies
                        we have partnered with, make sure to give them your unique ID number located on image of your
                        card
                        in the XRPH App.
                        <br/><br/>
                        <b>PAYMENTS:</b>
                        You will receive <span className="font-sans">$1</span> worth of XRPH each time your card is used.
                        Payments
                        are made automatically to your wallet every 60 days.
                        <br/><br/>
                        <b>DISCLAIMER:</b> All XRPH rewards will be distributed
                        solely by XRP Healthcare. This program<span className="font-sans">/</span>card
                        is a drug coupon. This is not a Medicare prescription drug plan and is privately supported. This
                        is
                        not a
                        government run<span className="font-sans">/</span>affiliated<span className="font-sans">/</span>funded
                        program.
                        Discounts
                        are only available at participating pharmacies. This program is not
                        insurance.</p>
                </div>
            </div>
        </>
    )
}