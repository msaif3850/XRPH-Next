'use client'
import {useState, useEffect} from "react";
import Link from "next/link";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";

import {NavLinks} from "@/variables"
//import HeaderTopBar from "@/components/layout/HeaderTopBar";
import ModeToggler from "@/components/layout/ModeToggler";
import ThemeLogo from "@/components/layout/ThemeLogo";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

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
                    <ThemeLogo
                        lightLogo="/logo.png"
                        darkLogo="/logo-dark.png"
                        width={250}
                        height={100}
                    />
                </Link>
                <div className="hidden lg:flex flex-row items-center text-lg gap-0">
                    {NavLinks.map((link) => (
                        <Link key={link.key} href={link.link}
                              className="font-medium text-lg px-3 py-1 rounded-full text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-gradient-to-r hover:from-haraa hover:to-jamni transition-all duration-0">{link.text}</Link>
                    ))}
                </div>
                {/*<Button><Link href={"/XRPH-Wallet"} className="">App</Link></Button>*/}
                {/* Mobile Menu Button */}
                <Sheet>
                    <div className="flex items-center justify-center gap-2">
                        <ModeToggler/>
                        <SheetTrigger asChild className="order-last">
                            <button className="lg:hidden ">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
                                </svg>
                            </button>
                        </SheetTrigger>
                    </div>
                    <SheetContent side="right" className="p-6">
                        <SheetHeader>
                            <Link href="/">
                                <ThemeLogo
                                    lightLogo="/logo.png"
                                    darkLogo="/logo-dark.png"
                                    width={170}
                                    height={100}
                                    className="-mt-3"
                                />
                            </Link>
                        </SheetHeader>
                        <nav className="mt-6 text-center text-lg space-y-4">
                            {NavLinks.map((link) => (
                                <Link key={link.key} href={link.link}
                                      className="block">{link.text}</Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
}
