'use client'
import Link from "next/link";

import {FooterMenu1} from "@/variables";
import {FooterMenu2} from "@/variables";
import FooterLogos from "@/components/layout/FooterLogos";
import {SocialLinks} from "@/variables";
import BackToTopButton from "@/components/layout/BackToTopButton";
import ThemeLogo from "@/components/layout/ThemeLogo";
import GhostSignup from "@/components/layout/GhostSignup";

export default function Footer() {
    return (
        <>
            <FooterLogos/>
            <footer className="bg-footerbg dark:bg-transparent pt-12 pb-6 px-6 tracking-wide">
                <div className="max-w-screen-xl- mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16 gap-8 items-start">
                        <div className="lg:flex lg:items-center">
                            <Link href="/">
                                <ThemeLogo
                                    lightLogo="/logo.png"
                                    darkLogo="/logo-dark.png"
                                    width={250}
                                    height={100}
                                    className="custom-class"
                                />
                            </Link>
                        </div>
                        <div>
                            <h4 className="text-xl mb-3">Company:</h4>
                            <ul className="space-y-1">
                                {FooterMenu1.map((menu) => (
                                    <li key={menu.key}>
                                        <Link href={menu.link} target={ menu.blank ? '_blank': '_self' } className="text-gray-400 font-normal hover:underline">
                                            {menu.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl mb-3">Support:</h4>
                            <ul className="space-y-1">
                                {FooterMenu2.map((menu) => (
                                    <li key={menu.key}>
                                        <Link href={menu.link} target={ menu.blank ? '_blank': '_self' } className="text-gray-400 font-normal hover:underline ">
                                            {menu.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl mb-3">Social Media:</h4>
                            <ul className="flex justify-between gap-1">
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
                                    <Link href={'/'} className="text-gray-400 font-normal hover:underline ">
                                        Magazine
                                    </Link>
                                </li>
                            </ul>
                            {/* Adjusting signup form container */}
                            <div className="mt-6 flex justify-center">
                                <GhostSignup id={'ghost-signup-form-1'}/>
                            </div>
                        </div>
                    </div>
                    <p className='text-gray-600 text-lg mt-10 text-center'>
                        XRP HEALTHCARE L.L.C <span className="font-sans">|</span> License Number:
                        2312867.01 <span className="font-sans">|</span> Dubai <span className="font-sans">|</span> ©
                        Copyright {new Date().getFullYear()} <span className="font-sans">|</span> All Rights Reserved
                    </p>
                </div>
            </footer>
            <BackToTopButton/>
        </>
    )
}