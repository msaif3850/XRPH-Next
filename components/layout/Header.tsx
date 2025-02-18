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
import ThemeToggler from "@/components/layout/ThemeToggler";
import ThemeToggleMobile from "@/components/layout/ThemeTogglerMobile";
import Logo from "@/components/layout/Logo";
import {SheetMenu} from "@/variables";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isSheetOpen, setIsSheetOpen] = useState<boolean | undefined>()

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
                            <nav className="mt-2 mb-4 text-center text-lg --space-y-4">
                                {NavLinks.map((link) => (
                                    <Link key={link.key} href={link.link} className="block py-2 border-b"
                                          onClick={() => setIsSheetOpen(false)}>
                                        {link.text}
                                    </Link>
                                ))}
                            </nav>

                            <ThemeToggleMobile/>

                            <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 my-4">
                                {SheetMenu.map((menu, index) => (
                                    <span key={menu.key} className="flex items-center text-sm">
                                        <Link href={menu.link} target={menu.blank ? "_blank" : "_self"} className="font-medium transition-colors  hover:underline">{menu.text}</Link>
                                        {index !== SheetMenu.length - 1 && <span className="text-gray-500 pl-2 pr-1">•</span>}
                                    </span>
                                ))}
                            </div>
                            <ul className="flex flex-wrap items-center justify-between gap-1">
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
                    <div className="hidden lg:flex flex-row items-center text-lg gap-0">
                        {NavLinks.map((link) => (
                            <Link key={link.key} href={link.link}
                                  className="font-medium text-lg px-3 py-1 rounded-full text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-gradient-to-r hover:from-haraa hover:to-jamni transition-all duration-0">{link.text}</Link>
                        ))}
                        <ThemeToggler/>
                    </div>
                    {/*<Button><Link href={"/XRPH-Wallet"} className="">App</Link></Button>*/}
                </div>
        </>
    );
}
