'use client';
import {motion, useScroll, useTransform} from 'framer-motion';
import {FaCircle, FaCheckCircle, FaCheckDouble} from 'react-icons/fa';
import {useRef} from 'react';
import {FixText} from "@/components/FixText";

const milestones = [
    {
        date: 'Q1 2025',
        description: (
            <ul className="space-y-3">
                {[
                    {text: 'XRP Healthcare Global Announcement', checked: true},
                    {text: 'XRPH AI App launched on Google Play and Apple Store', checked: true},
                    {text: 'Encryption layer implemented to ensure user data protection', checked: true},
                    {text: '1.2M XRPH distributed as staking rewards', checked: true},
                ].map((item, i) => (
                    <li key={i} className="flex items-start">
                        <div>
                            {item.checked ? (
                                <FaCheckDouble className="text-xs text-purple-500 mr-2 mt-1.5"/>
                            ) : (
                                <FaCircle className="text-xs mr-2 mt-1.5"/>
                            )}
                        </div>
                        <div>
                            {FixText(item.text)}
                        </div>
                    </li>
                ))}
            </ul>
        ),
        completed: true,
    },
    {
        date: 'Q2 2025',
        description: (
            <ul className="space-y-3">
                {[
                    {text: "USD $3 Million raised to fund mergers and acquisitions (M&A)", checked: true},
                    {text: 'First batch of Pharmacies acquired', checked: true},
                    {text: 'Existing teams retained and overseen by corporate management', checked: true},
                    {text: 'Upgrades initiated for acquired businesses services, and equipment', checked: true},
                    {text: 'Image feature launched on the XRPH AI App for mobile and web platforms', checked: true},
                    {text: 'XRPH & RLUSD token ready to use as a digital payment method for products and services within the ecosystem', checked: true},
                    {text: 'Streamlined M&A operations to achieve cost savings and efficiency', checked: true},
                    {text: 'Ongoing upgrades to healthcare facilities', checked: true},
                    {text: '700K XRPH distributed as staking rewards in March', checked: true},
                    {text: '870K XRPH distributed as staking rewards in April', checked: false},
                ].map((item, i) => (
                    <li key={i} className="flex items-start">
                        <div>
                            {item.checked ? (
                                <FaCheckDouble className="text-xs text-purple-500 mr-2 mt-1.5"/>
                            ) : (
                                <FaCircle className="text-xs mr-2 mt-1.5"/>
                            )}
                        </div>
                        <div>
                            {FixText(item.text)}
                        </div>
                    </li>
                ))}
            </ul>
        ),
        completed: true,
    },
    {
        date: 'Q3 2025',
        description: (
            <ul className="space-y-3">
                {[
                    {
                        text: "Doctor search and connect feature launched in the XRPH AI App for mobile and web platforms",
                        checked: false
                    },
                    {
                        text: "Expanded due diligence conducted for identifying new healthcare investment targets",
                        checked: false
                    },
                    {text: "Partnerships established with international healthcare organizations", checked: true},
                    {
                        text: "Further development and feature enhancements for the XRPH AI App and XRPH Wallet",
                        checked: false
                    },
                    {text: "804K XRPH distributed as staking rewards in May", checked: false},
                    {text: "1.1M XRPH distributed as staking rewards in June", checked: false},

                ].map((item, i) => (
                    <li key={i} className="flex items-start">
                        <div>
                            {item.checked ? (
                                <FaCheckDouble className="text-xs text-purple-500 mr-2 mt-1.5"/>
                            ) : (
                                <FaCircle className="text-xs mr-2 mt-1.5"/>
                            )}
                        </div>
                        <div>
                            {FixText(item.text)}
                        </div>
                    </li>
                ))}
            </ul>
        ),
        completed: false,
    },
    {
        date: 'Q4 2025',
        description: (
            <ul className="space-y-3">
                {[
                    {text: "Pharmacies rebranded under the XRP Healthcare Trademark", checked: false},
                    {text: "‘Super Fund’ established to accelerate M&A activities", checked: false},
                    {text: "Strategic promotion and marketing of M&A activities across Africa", checked: false},
                    {text: "Continued upgrades to healthcare facilities, services, and equipment", checked: false},
                    {text: "XRPH token usage expanded across the growing healthcare network", checked: false},
                    {
                        text: "Strengthened international partnerships to solidify the XRP Healthcare ecosystem",
                        checked: false
                    },
                    {text: "285K XRPH distributed as staking rewards in July", checked: false},

                ].map((item, i) => (
                    <li key={i} className="flex items-start">
                        <div>
                            {item.checked ? (
                                <FaCheckDouble className="text-xs text-purple-500 mr-2 mt-1.5"/>
                            ) : (
                                <FaCircle className="text-xs mr-2 mt-1.5"/>
                            )}
                        </div>
                        <div>
                            {FixText(item.text)}
                        </div>
                    </li>
                ))}
            </ul>
        ),
        completed: false,
    },
    {
        date: 'Q1/Q2/Q3/Q4 2026',
        description: (
            <ul className="space-y-3">
                {[
                    {
                        text: "Increase the value of our portfolio by implementation of growth strategies",
                        checked: false
                    },
                    {
                        text: "Expand into new markets and territories by diversifying the XRP Healthcare portfolio",
                        checked: false
                    },
                    {text: "Grow revenue and profitability of the company", checked: false},
                    {
                        text: "XRPH token accepted for payment and services rendered at all XRP Healthcare pharmacies, medical centres and hospitals",
                        checked: false
                    },
                ].map((item, i) => (
                    <li key={i} className="flex items-start">
                        <div>
                            {item.checked ? (
                                <FaCheckDouble className="text-xs text-purple-500 mr-2 mt-1.5"/>
                            ) : (
                                <FaCircle className="text-xs mr-2 mt-1.5"/>
                            )}
                        </div>
                        <div>
                            {FixText(item.text)}
                        </div>
                    </li>
                ))}
            </ul>
        ),
        completed: false,
    },
    {
        date: 'Q1/Q2/Q3/Q4 2027',
        description: (
            <ul className="space-y-3">
                {[
                    {text: "Preparation begins to prepare XRP Healthcare for IPO", checked: true},
                    {text: "Work closely with our legal advisors and investment bankers to optimize valuation", checked: true},
                    {text: "Execute exit plan and achieve the best outcome for investors, shareholders and token holders", checked: false},
                ].map((item, i) => (
                    <li key={i} className="flex items-start">
                        <div>
                            {item.checked ? (
                                <FaCheckDouble className="text-xs text-purple-500 mr-2 mt-1.5"/>
                            ) : (
                                <FaCircle className="text-xs mr-2 mt-1.5"/>
                            )}
                        </div>
                        <div>
                            {FixText(item.text)}
                        </div>
                    </li>
                ))}
            </ul>
        ),
        completed: false,
    },
];

export default function RoadmapTimeline() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({target: timelineRef, offset: ['start center', 'end center']});
    const lineColor = useTransform(scrollYProgress, [0, 0.5], ['#D1D5DB', '#9333EA']);

    return (
        <>
            <div ref={timelineRef} className="relative h-full min-h-screen">
                <motion.div className="absolute md:left-1/2 sm:left-0 w-1 h-full -translate-x-1/2 "
                            style={{backgroundColor: lineColor}}/>
                {milestones.map((milestone, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: false, margin: '0px 0px -100px 0px'}}
                        transition={{duration: 0.5, delay: index * 0.15}}
                        className={`relative mb-12 flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-start sm:justify-end'}`}
                    >
                        <div
                            className={`z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-gray-800 ring-4 
                            ${milestone.completed ? 'ring-haraa/30' : 'ring-jamni/20'} shadow-lg absolute md:left-1/2 sm:left-0 -translate-x-6`}>
                            {milestone.completed ? <FaCheckCircle className="h-6 w-6 text-haraa"/> :
                                <FaCircle className="h-6 w-6 text-jamni dark:text-purple-400"/>}
                        </div>
                        <div
                            className={`w-[90%] ml-auto md:ml-0 rounded-xl bg-white/90 dark:bg-gray-800/90 md:p-6 p-4 shadow-xl backdrop-blur-sm sm:w-[calc(50%-6rem)]  ${index % 2 === 0 ? 'sm:mr-16' : 'sm:ml-16'} transition-all hover:shadow-2xl hover:scale-[1.02] dark:hover:bg-gray-700/90`}>
                            <div
                                className="flex items-center gap-2 text-2xl font-semibold text-purple-600 dark:text-purple-300">
                                <span>{FixText(milestone.date)}</span>
                                {milestone.completed ? <span
                                        className="rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-1 text-xs text-green-700 dark:text-green-400">Completed</span> :
                                    <span
                                        className="rounded-full bg-purple-400/20 dark:bg-gray-100/30 px-2 py-1 text-xs text-purple-500 dark:text-black">Upcoming</span>}
                            </div>
                            <div className="mt-2 text-black dark:text-gray-300">{milestone.description}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="">
                <h3 className="text-2xl">Staking Rewards and Token Supply:</h3>
                <p>
                    To date, XRP Healthcare has distributed 2.{FixText('4')}M XRPH in staking rewards, with an
                    additional 6.9M XRPH
                    distributed over the course of this roadmap, culminating in 9.3M XRPH rewards provided to our
                    community by July 2025.
                    <br/><br/>To ensure the long{FixText('-')}term sustainability of XRP Healthcare and to preserve the
                    value of XRPH
                    tokens, the staking facility has now been discontinued. This strategic decision protects the finite
                    supply of tokens and aligns with our commitment to maintaining the token’s integrity. <br/><br/>
                </p>
                <h3 className="text-2xl">Scarce Token Supply:</h3>
                <p>The XRPH token is a scarce asset, with only 100 million tokens ever created. The XRPH account has
                    been blackholed, ensuring that no additional tokens can ever be minted. This guarantees the token’s
                    limited supply and reinforces its value as a deflationary digital asset.
                    Our focus remains on building trust and delivering long{FixText('-')}term value to our ecosystem, ensuring that
                    XRP Healthcare continues to grow while honoring the commitments made to our community.</p>
            </div>
        </>
    );
}