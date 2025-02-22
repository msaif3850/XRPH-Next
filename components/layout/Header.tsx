'use client'
import React, {useState, useEffect} from "react";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";

import {NavLinks, SocialLinks} from "@/variables"
//import HeaderTopBar from "@/components/layout/HeaderTopBar";
import ThemeToggleMobile from "@/components/layout/ThemeTogglerMobile";
import Logo from "@/components/layout/Logo";
import {SheetMenu} from "@/variables";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Image from "next/image";
import AppleDownloadButton from "@/components/layout/AppleDownloadButton";
import GoogleDownloadButton from "@/components/layout/GoogleDownloadButton";
import {FaMobileAlt, FaBars} from "react-icons/fa";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {usePathname} from "next/navigation";


export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isSheetOpen, setIsSheetOpen] = useState<boolean | undefined>()
    const pathname = usePathname(); // Get current route
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            {/*<HeaderTopBar/>*/}
            <div
                className={`flex flex-wrap items-center justify-between -dark:bg-gray-900 px-6 fixed w-full z-50 transition-all duration-300 backdrop-blur ${
                    scrolled ? "shadow-sm top-0 lg:py-1 py-1" : "py-2"
                }`}
            >
                <Link href="/">
                    <Logo
                        lightLogo="/logo.png"
                        darkLogo="/logo-dark.png"
                        width={250}
                        height={100}
                    />
                </Link>
                <div className="hidden lg:flex flex-row items-center gap-0">
                    {NavLinks.map((link) => (
                        <Link key={link.key} href={link.link}
                              className={`font-medium text-base px-3 py-1 rounded-full transition-all duration-0 ${
                                  pathname === link.link ? "text-white bg-gradient-to-r from-haraa to-jamni" : "text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-gradient-to-r hover:from-haraa hover:to-jamni"
                              }`}>{link.text}</Link>
                    ))}
                </div>
                <div className="flex items-center gap-3">
                    <HoverCard>
                        <HoverCardTrigger>
                            <FaMobileAlt
                                className="cursor-pointer text-jamni2 bg-gray-200 dark:bg-gray-800 rounded p-1 text-2xl"/>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-[380px]">
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
                                    <AppleDownloadButton link={'https://apps.apple.com/us/app/xrph-ai/id6739782817'}/>
                                    <GoogleDownloadButton
                                        link={'https://play.google.com/store/apps/details?id=ai.xrph'}/>
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                    <div className="hidden lg:block">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div
                                    className="flex items-center justify-center gap-1 cursor-pointer border  border-gray-200 dark:border-gray-800 rounded-full px-2 py-1">
                                    <FaBars className=""/>
                                    <Image src={'/icon.png'} alt={'XRPH'} width={'20'} height={'20'}/>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="right-0 absolute w-[300px] px-3 py-6">
                                {/*<DropdownMenuLabel>XRP Healthcare</DropdownMenuLabel>*/}
                                <div className="flex items-center justify-center mb-4">
                                    <Logo lightLogo={'/xrph-logos/logo-v.png'} darkLogo={'/xrph-logos/logo-v-dark.png'}
                                          width={190} height={100} className=""/>
                                </div>
                                {/*<DropdownMenuSeparator />*/}
                                <ThemeToggleMobile/>
                                {/*<DropdownMenuSeparator/>*/}
                                <ul className="flex flex-wrap items-center justify-center gap-3 mt-4">
                                    {SocialLinks.map((social) => (
                                        <li key={social.key}>
                                            <Link href={social.link} target={'_blank'}>
                                                <social.icon
                                                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-xl  transition-all duration-300"/>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="sm:block lg:hidden">
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <div className="flex items-center justify-center gap-2 ">
                            <SheetTrigger asChild className="order-last">
                                <button className="lg:hidden " onClick={() => setIsSheetOpen(true)}>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
                                    </svg>
                                </button>
                            </SheetTrigger>
                        </div>
                        <SheetContent side="right" className="py-6 w-full h-full overflow-y-auto">
                            <SheetHeader>
                                <Link href="/" onClick={() => setIsSheetOpen(false)}>
                                    <Logo
                                        lightLogo="/logo.png"
                                        darkLogo="/logo-dark.png"
                                        width={190}
                                        height={100}
                                        className="-mt-4"
                                    />
                                </Link>
                            </SheetHeader>
                            <nav className="mt-4 mb-6 text-center text-lg">
                                {NavLinks.map((link) => (
                                    <Link key={link.key} href={link.link} className="block py-2 border-b"
                                          onClick={() => setIsSheetOpen(false)}>
                                        {link.text}
                                    </Link>
                                ))}
                            </nav>

                            <ThemeToggleMobile/>

                            <div className="flex flex-wrap items-center justify-center gap-1 my-4">
                                {SheetMenu.map((menu, index) => (
                                    <span key={menu.key} className="flex items-center text-sm">
                                        <Link href={menu.link} target={menu.blank ? "_blank" : "_self"}
                                              className="font-medium transition-colors  hover:underline">{menu.text}</Link>
                                        {index !== SheetMenu.length - 1 &&
                                            <span className="text-gray-500 pl-2 pr-1">•</span>}
                                    </span>
                                ))}
                            </div>
                            <ul className="flex flex-wrap items-center justify-center gap-4 border-t py-4">
                                {SocialLinks.map((social) => (
                                    <li key={social.key}>
                                        <Link href={social.link} target={'_blank'}>
                                            <social.icon
                                                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-xl  transition-all duration-300"/>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </>
    );
}
