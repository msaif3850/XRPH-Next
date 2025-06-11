'use client'
import Link from "next/link";

import {FooterMenu1} from "@/variables";
import {FooterMenu2} from "@/variables";
import FooterLogos from "@/components/layout/FooterLogos";
import {SocialLinks} from "@/variables";
import BackToTopButton from "@/components/layout/BackToTopButton";
import Logo from "@/components/layout/Logo";
//import SecurityBadges from "@/components/layout/SecurityBadges";
import React, {useCallback} from "react";
import GhostSignup from "@/components/layout/GhostSignup";
import {FixText} from "@/components/FixText";
import Image from "next/image";

/*import dynamic from "next/dynamic";
const GhostSignup = dynamic(() => import("@/components/layout/GhostSignup"), { ssr: false });*/
export default function Footer() {
    const openSiteLock = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        window.open(
            "https://www.sitelock.com/verify.php?site=www.xrphealthcare.ai",
            "SiteLock",
            "width=600,height=600,left=160,top=170"
        );
    }, []);
    return (
        <>
            <FooterLogos/>
            <footer className="bg-footerbg dark:bg-transparent pt-12 pb-6 px-6 tracking-wide ">
                <div className="container-fluid mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 lg:gap-16 gap-8 items-start">
                        <div className="lg:flex-lg:items-start col-span-12 sm:col-span-4">
                            <Link href="/">
                                <Logo
                                    lightLogo="/logo.png"
                                    darkLogo="/logo-dark.png"
                                    width={300}
                                    height={100}
                                    className="custom-class"
                                />
                            </Link>
                            <div className="flex items-center gap-x-2 mt-6">
                                <a id="sitelock-badge" href="#" onClick={openSiteLock}
                                   className="transition-all duration-300 hover:scale-95">
                                    <Image width={100} height={70} className="w-[60px] sm:w-[90px] h-auto"
                                           alt={"SiteLock"} title={"SiteLock"}
                                           src={"https://shield.sitelock.com/shield/www.xrphealthcare.ai"}/>
                                </a>
                                <a id="dmca-badge"
                                   href="//www.dmca.com/Protection/Status.aspx?ID=b23b657b-f720-4c9a-9cdf-89fe291b0155"
                                   target="_blank" rel="noopener noreferrer"
                                   className="transition-all duration-300 hover:scale-95">
                                    <Image width={100} height={50} className="w-[60px] sm:w-[94px] h-auto"
                                           alt={"DMCA.com Protection Status"} title={"DMCA.com Protection Status"}
                                           src={"https://images.dmca.com/Badges/dmca-badge-w100-5x1-09.png?ID=b23b657b-f720-4c9a-9cdf-89fe291b0155"}/>
                                </a>
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                            <h4 className="text-xl mb-3">Company:</h4>
                            <ul className="space-y-1">
                                {FooterMenu1.map((menu) => (
                                    <li key={menu.key}>
                                        <Link href={menu.link} target={menu.blank ? '_blank' : '_self'}
                                              className="text-gray-400 font-normal hover:underline">
                                            {menu.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                            <h4 className="text-xl mb-3">Support:</h4>
                            <ul className="space-y-1">
                                {FooterMenu2.map((menu) => (
                                    <li key={menu.key}>
                                        <Link href={menu.link} target={menu.blank ? '_blank' : '_self'}
                                              className="text-gray-400 font-normal hover:underline ">
                                            {menu.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-12 sm:col-span-4">
                            <h4 className="text-xl mb-3">Social Media:</h4>
                            <ul className="flex justify-start gap-1">
                                {SocialLinks.map((social) => (
                                    <li key={social.key}>
                                        <Link href={social.link} target={'_blank'}>
                                            <social.icon
                                                className="text-gray-400 hover:text-white border border-gray-400 hover:bg-gray-400 text-4xl p-2 rounded-full transition-all duration-300"/>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <h4 className="text-xl mt-3 mb-1">XRP Healthcare:</h4>
                            <ul className="space-y-1">
                                <li>
                                    <Link href={'https://xrphmagazine.ai/magazine/'} target={'_blank'}
                                          className="text-gray-400 font-normal hover:underline ">
                                        Magazine
                                    </Link>
                                </li>
                            </ul>
                            <div className="mt-6 flex justify-center">
                                <GhostSignup id={'ghost-signup-form'}/>
                            </div>
                        </div>
                    </div>
                    <p className='text-gray-600 text-lg mt-10 text-center'>
                        XRP HEALTHCARE L.L.C {FixText('|')} License Number:
                        2312867.01 {FixText('|')} Dubai {FixText('|')} ©
                        Copyright {new Date().getFullYear()} {FixText('|')} All Rights Reserved
                    </p>
                </div>
            </footer>
            <BackToTopButton/>
            {/*<SecurityBadges/>*/}
        </>
    )
}
