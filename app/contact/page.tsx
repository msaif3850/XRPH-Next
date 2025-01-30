import Placeholder from "@/components/layout/Placeholder";
import Image from "next/image";
import {FaEnvelope} from "react-icons/fa6";
import {SocialLinks} from "@/variables";
import Link from "next/link";
import MyButton from "@/components/layout/MyButton";
import NewsletterSignup from "@/components/layout/NewsletterSignup";

const emails = [
    {
        mailto: "mailto:support@xrphealthcare.com",
        title: (<>Technical <span className="font-sans">&</span> App</>),
        prefix: "support"
    },
    {mailto: "mailto:info@xrphealthcare.com", title: "General", prefix: "info"},
    {mailto: "mailto:press@xrphealthcare.com", title: "Media", prefix: "press"},
];
export default function Contact() {
    return (
        <>
            <Placeholder title={'Contact Us'} key={'contact'} description={''}/>
            <section className="py-5" id="contact">
                <div className=" mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="flex flex-col items-center text-center space-y-5">
                            <Image src="/logo.png" width={800} height={500} alt="XRP Healthcare"
                                   className="w-36 md:w-64"/>
                            <p className="font-medium">
                                Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.
                            </p>

                            {/* Social Links */}
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

                            <MyButton buttonText={'Media Press Releases'} buttonUrl={'/media-center'} target={'_self'}/>
                        </div>

                        <div>
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
                                            <p className="text-sm text-black font-medium ">{title}:</p>
                                            <p className="font-bold group-hover:text-jamni">{prefix}<span
                                                className="font-sans">@</span>xrphealthcare.com</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}

                            {/* Subscription Form */}
                            <div className="mt-6">
                                <h2 className="text-lg font-semibold mb-2">Subscribe to our newsletter:</h2>
                                <NewsletterSignup/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}