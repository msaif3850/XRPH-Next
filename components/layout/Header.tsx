'use client'
import {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";


import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import {FaWindowClose} from "react-icons/fa";

const NavLinks = [
    {key: 1, text: 'XRPH AI', link: 'https://xrph.ai/'},
    {key: 2, text: 'Roadmap', link: 'roadmap'},
    {key: 3, text: 'Magazine', link: 'https://xrphmagazine.ai/magazine/'},
    {key: 4, text: 'News', link: 'news'},
    {key: 5, text: 'Savings Card', link: 'XRPHSavingsCard'},
    {key: 6, text: 'Exchanges', link: 'buy-xrph'},
    {key: 7, text: 'Africa', link: 'africa'},
    {key: 8, text: 'Team', link: 'team'},
    {key: 9, text: 'Blog', link: 'https://xrphealthcare.ai/blog/'},
    {key: 10, text: 'FAQ', link: 'faq'},
    {key: 11, text: 'Contact', link: 'contact'},
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [closed, setClosed] = useState(false);

    return (
        <>
            {closed? '':
            <div
                className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gradient-to-r from-haraa to-jamni px-6 py-1 sm:px-3.5 sm:before:flex-1">
                <div aria-hidden="true" className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl">
                    <div
                        style={{
                            clipPath:
                                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                        }}
                        className="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                    />
                </div>
                <div aria-hidden="true" className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl">
                    <div
                        style={{
                            clipPath:
                                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                        }}
                        className="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                    />
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <p className="text-sm/6 text-white">
                        <strong className="font-semibold">XRPH AI App</strong>
                        <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
                            <circle r={1} cx={1} cy={1}/>
                        </svg>
                        Available at App Store and Google Play
                    </p>
                    <a
                        href="#"
                        className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    >
                        Download Now <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
                <div className="flex flex-1 justify-end">
                    <Button type="button" className="-m-3 bg-transparent border-0 shadow-none hover:bg-transparent p-3 focus-visible:outline-offset-[-4px]"
                    onClick={()=>setClosed(true)}>
                        <span className="sr-only">Dismiss</span>
                        <FaWindowClose aria-hidden="true" className="size-5 text-gray-900 " />
                    </Button>
                </div>
            </div>
            }
            <div
                className={`flex items-center justify-between bg-white px-6 fixed w-full z-50 transition-all duration-100 ${
                    scrolled ? "shadow-sm top-0 lg:py-1 py-2" : "py-2"
                }`}
            >
                <Link href="/">
                    <Image priority={false} src="/logo.png" alt="logo" width={250} height={150}
                           className="transition-transform duration-300"/>
                </Link>
                <div className="hidden lg:flex flex-row items-center text-lg gap-3">
                    {NavLinks.map((link) => (
                        <Link key={link.key} href={link.link}
                              className=" font-medium p-2 text-gray-900 hover:bg-gradient-to-r hover:from-haraa hover:to-jamni">{link.text}</Link>
                    ))}
                </div>
                <Button><Link href={"/XRPH-Wallet"} className="">App</Link></Button>
                {/* Mobile Menu Button */}
                <Sheet>
                    <SheetTrigger asChild className="order-last">
                        <button className="lg:hidden text-gray-900">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
                            </svg>
                        </button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-white p-6">
                        <SheetHeader>
                            <Image className="-mt-3" src="/logo/logo-black-colored.png" alt="logo" width={150}
                                   height={150}/>
                        </SheetHeader>
                        <nav className="mt-6 space-y-4">
                            <Link href={"/about"} className="block text-gray-900 hover:text-gray-950">About Us</Link>
                            <Link href={"/mac-repair"} className="block text-gray-900 hover:text-gray-950">Mac
                                Repairs</Link>
                            <Link href={"/watch-repair"} className="block text-gray-900 hover:text-gray-950">Watch
                                Repairs</Link>
                            <Link href={"/ipod-repair"} className="block text-gray-900 hover:text-gray-950">iPod
                                Repairs</Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
}
