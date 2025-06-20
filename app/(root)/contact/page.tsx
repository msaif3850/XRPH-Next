//'use client'
import Placeholder from "@/components/layout/Placeholder";
import {FaEnvelope} from "react-icons/fa6";
import {SocialLinks} from "@/variables";
import Link from "next/link";
import MyButton from "@/components/layout/MyButton";
import Logo from "@/components/layout/Logo";

import React from "react";
const emails = [
    {
        mailto: "mailto:support@xrphealthcare.com",
        title: (<>Technical <span className="font-sans">&</span> App</>),
        prefix: "support"
    },
    {mailto: "mailto:info@xrphealthcare.com", title: "General", prefix: "info"},
    {mailto: "mailto:press@xrphealthcare.com", title: "Media", prefix: "press"},
];
import { Metadata } from "next";

import GhostSignupContactPage from "@/components/layout/GhostSignupContactPage";
export const generateMetadata = (): Metadata => {
    return {
        title: "Links",
        description: "Contact XRP Healthcare built on the XRP Ledger, enhances access with a US Prescription Card and expands African healthcare via AI-driven acquisitions.",
        alternates: { canonical: "https://www.xrphealthcare.ai/contact" },
    };
};
export default function Contact() {
    return (
        <>
            <Placeholder title={'Contact Us'} key={'contact'} description={''}/>
            <div className=" mx-auto px-10 lg:px-40" id="contact">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col items-center text-center space-y-5">
                        <div className="flex flex-col justify-center items-center gap-y-1">
                            <Link href="/">
                            <Logo
                                lightLogo="/logo.png"
                                darkLogo="/logo-dark.png"
                                width={400}
                                height={200}
                                className=""
                            />
                            </Link>
                            <p className="font-medium mt-1 sm:mt-6">Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai,
                                U.A.E.</p>
                        </div>
                        {/* Social Links */}
                        <ul className="flex justify-between gap-1 sm:gap-2">
                            {SocialLinks.map((social) => (
                                <li key={social.key}>
                                    <Link href={social.link} target={'_blank'}>
                                        <social.icon
                                            className="text-gray-400 hover:text-white border border-gray-400 hover:border-haraa hover:bg-gradient-to-r hover:from-haraa hover:to-jamni text-4xl p-2 rounded-full transition-all duration-300"/>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <MyButton buttonText={'Media Press Releases'} buttonUrl={'/media-center'} target={'_self'}/>
                    </div>
                    <div className="shadow border-t-haraa border-2 border-b-jamni p-5">
                        <h2 className="text-lg font-semibold mb-3">Emails:</h2>
                        {emails.map(({mailto, title, prefix}, index) => (
                            <div key={index} className="mb-5 group">
                                <Link href={mailto} className="flex items-center space-x-3 ">
                                    <div
                                        className="ring-0 h-12 w-12 flex items-center justify-center rounded-full bg-haraa/30 group-hover:bg-jamni transition-all duration-300">
                                        <FaEnvelope
                                            className="text-jamni group-hover:text-white transition-all duration-300 text-lg"/>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium ">{title}:</p>
                                        <p className="font-bold group-hover:text-jamni">{prefix}<span
                                            className="font-sans">@</span>xrphealthcare.com</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        {/* Subscription Form */}
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold mb-2">Subscribe to our newsletter:</h2>
                            <GhostSignupContactPage id={'ghost-signup-form-contact'}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
