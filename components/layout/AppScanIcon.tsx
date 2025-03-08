import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {FaMobileAlt} from "react-icons/fa";
import Image from "next/image";
import AppleDownloadButton from "@/components/layout/AppleDownloadButton";
import GoogleDownloadButton from "@/components/layout/GoogleDownloadButton";
import React from "react";

export default function AppScanIcon() {
    return (
        <>
            <HoverCard>
                <HoverCardTrigger>
                    <FaMobileAlt className="cursor-pointer text-jamni2 bg-gray-200 dark:bg-gray-800 rounded p-1 text-2xl"/>
                </HoverCardTrigger>
                <HoverCardContent className="w-[320px]">
                    <div className="text-center">
                        <h2 className="text-base mb-2">
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
                        <div className="flex justify-center gap-1">
                            <AppleDownloadButton size={'sm'} link={'https://apps.apple.com/us/app/xrph-ai/id6739782817'}/>
                            <GoogleDownloadButton size={'sm'}
                                                  link={'https://play.google.com/store/apps/details?id=ai.xrph'}/>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </>
    )
}


{/*<DropdownMenu>
                        <DropdownMenuTrigger>
                            <FaMobileAlt className="cursor-pointer text-jamni2 bg-gray-200 dark:bg-gray-800 rounded p-1 text-2xl"/>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[320px] absolute right-0">
                            <div className="text-center p-2">
                                <h2 className="text-base mb-2">
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
                                <div className="flex justify-center gap-1">
                                    <AppleDownloadButton size={'sm'} link={'https://apps.apple.com/us/app/xrph-ai/id6739782817'}/>
                                    <GoogleDownloadButton size={'sm'}
                                                          link={'https://play.google.com/store/apps/details?id=ai.xrph'}/>
                                </div>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>*/}