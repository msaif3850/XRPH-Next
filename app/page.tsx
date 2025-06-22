'use client'
import Image from "next/image";
import Link from "next/link";
import MyButton from "@/components/layout/MyButton";
import {NewsData} from "@/news-data";
import {Exchanges} from "@/variables";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader, DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
//import {FaPlayCircle} from "react-icons/fa";
import React from "react";
import Logo from "@/components/layout/Logo";
import {FixText} from "@/components/FixText";
import ElfsightWidget from "@/components/layout/ElfsightWidget";
//import YouTubeEmbed from "@/components/layout/YouTubeEmbed";
import GhostSignupISSUE5 from "@/components/layout/GhostSignupISSUE5";
import AppiOS from "@/components/layout/AppiOS";
import AppAndroid from "@/components/layout/AppAndroid";
import RandomPrescriptionImage from "@/components/layout/RandomPrescriptionImage";


export default function Home() {

    return (
        <>
            <div className="py-5 hidden">&nbsp;</div>
            <section id="xrph-ai-banner" className="bg-waves-ai dark:bg-waves-ai-dark bg-cover bg-center bg-no-repeat pt-24 sm:pt-28 pb-16 sm:pb-12 -sm:py-20">
                <div className="mx-auto xl:px-32 lg:px-20 md:px-16 px-0 ">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Left Column */}
                        <div className="text-center w-full md:w-1/2 lg:w-2/5">
                            <h1 className="text-4xl font-extrabold mb-0">XRPH AI APP</h1>
                            <h4 className="text-xl lg:text-2xl font-normal px-4 md:px-0">
                                Holistic {FixText('&')} Traditional
                                Medical Insights, Powered by AI
                            </h4>
                            {/* App Store Buttons (Hidden on Mobile) */}
                            <div className="hidden md:flex justify-center gap-3 mt-4">
                                <AppiOS link={'https://apps.apple.com/us/app/xrph-ai/id6739782817'}/>
                                <AppAndroid link={'https://play.google.com/store/apps/details?id=ai.xrph'}/>
                                {/*<AppleDownloadButton link={'https://apps.apple.com/us/app/xrph-ai/id6739782817'}/>
                                <GoogleDownloadButton
                                    link={'https://play.google.com/store/apps/details?id=com.xrphwallet'}/>*/}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-2/5 text-center">
                            <div className="flex justify-center">
                                <div className="w-11/12 md:w-full">
                                    <Image
                                        src={"/ai/xrph-ai-new-app.webp"}
                                        alt={"XRPH AI APP"}
                                        width={400}
                                        height={400}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>

                            {/* App Store Buttons (Visible on Mobile) */}
                            <div className="md:hidden flex justify-center gap-4 mt-4">
                                <AppiOS link={'https://apps.apple.com/us/app/xrph-ai/id6739782817'}/>
                                <AppAndroid link={'https://play.google.com/store/apps/details?id=ai.xrph'}/>
                                {/*<AppleDownloadButton link={'https://apps.apple.com/us/app/xrph-ai/id6739782817'}/>
                                <GoogleDownloadButton link={'https://play.google.com/store/apps/details?id=com.xrphwallet'}/>*/}
                            </div>
                            {/* Horizontal Separator (Visible on Mobile) */}
                            <div className="md:hidden mt-6">
                                <Image
                                    src="/separator-horizontal.webp"
                                    alt="Separator"
                                    width={300}
                                    height={10}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-2/5 px-12 md:px-0">
                            <p className="text-center text-xl lg:text-2xl"><span className="font-bold">XRP Healthcare</span> is an AI{FixText('-')}driven, M{FixText('&')}A{FixText('-')}focused healthcare company operating worldwide with a focus on emerging markets.</p>
                            <div className="hidden">
                            <ul className="list-none space-y-4 pl-0 sm:pl-4">
                                <li className="text-xl lg:text-2xl flex items-start gap-3">
                                    <Image
                                        src="/arrow-check.webp"
                                        alt="Arrow"
                                        width={25}
                                        height={25}
                                        className="mt-2"
                                    />
                                    <div>
                                        First healthcare platform built on the{" "}
                                        <span className="font-bold">XRP Ledger</span>
                                    </div>
                                </li>
                                <li className="text-xl lg:text-2xl flex items-start gap-3">
                                    <Image
                                        src={"/arrow-check.webp"}
                                        alt={"Arrow"}
                                        width={25}
                                        height={25}
                                        className="mt-2"
                                    />
                                    <div>
                                        First crypto project with a{" "}
                                        <span className="font-bold">prescription savings card</span>
                                    </div>
                                </li>
                                <li className="text-xl lg:text-2xl flex items-start gap-3">
                                    <Image
                                        src={"/arrow-check.webp"}
                                        alt={"Arrow"}
                                        width={25}
                                        height={25}
                                        className="mt-2"
                                    />
                                    <div>
                                        First project on the XRP Ledger to{" "}
                                        <span className="font-bold">Integrate AI</span>
                                    </div>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="px-6 py-20 lg:px-14 container-fluid mx-auto">
                <div className="mx-auto max-w-7xl text-center mb-8 ">
                    <h1 className="text-2xl sm:text-3xl lg:inline-flex content-center items-center gap-0 justify-center text-center">
                        Introducing the <Logo
                        lightLogo="/logo.png"
                        darkLogo="/logo-dark.png"
                        width={300}
                        height={100}
                        className="sm:w-full lg:w-72 sm:mx-2 mx-auto"
                    /><span
                        className="underline underline-offset-8">Prescription Savings Card:</span>
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-5/12 order-2 sm:order-1">
                        <ul className="list-none space-y-5">
                            <li className="text-xl leading-snug flex items-start gap-2">
                                <Image width={'20'} height={'20'} src={"/arrow-gradient.png"} alt={"arrow"}
                                       className="w-5 mt-1"/>
                                <div>
                                    Unlock Savings of Up to 80<span className="font-sans">%</span> on
                                    Your Prescription and Medications with Unlimited Usage.
                                </div>
                            </li>
                            <li className="text-xl leading-snug flex items-start gap-2">
                                <Image width={'20'} height={'20'} src={"/arrow-gradient.png"} alt={"arrow"}
                                       className="w-5 mt-1"/>
                                <div>
                                    Accepted at More Than 68,000 Pharmacies Across the United States,
                                    including Walgreens, CVS, and Walmart.
                                </div>
                            </li>
                            <li className="text-xl leading-snug flex items-start gap-2">
                                <Image width={'20'} height={'20'} src={"/arrow-gradient.png"} alt={"arrow"}
                                       className="w-5 mt-1"/>
                                <div>
                                    Powered by XRPH AI {FixText('-')} Your Personal Multi{FixText('-')}lingual Health Assistant.
                                </div>
                            </li>
                            <li className="text-xl leading-snug flex items-start gap-2">
                                <Image width={'20'} height={'20'} src={"/arrow-gradient.png"} alt={"arrow"}
                                       className="w-5 mt-1"/>
                                <div>
                                    Get Your Free XRPH Prescription Savings Card by <b>Downloading</b> it Today<span
                                    className="font-mono">!</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-7/12 order-1 sm:order-2">
                        <div
                            className="bg-gradient-to-r from-haraa to-jamni p-3 rounded-xl flex mb-4 md:mb-0 hover:shadow-lg transition-shadow">
                            <RandomPrescriptionImage/>
                            {/*<Dialog>
                                <div
                                    className="w-full bg-thumbnail bg-center bg-cover flex min-h-[200px] sm:min-h-[300px] items-center justify-center rounded-lg shadow-md relative"
                                    style={{boxShadow: "6px 6px 7px 0 rgba(0, 0, 0, 0.8"}}>
                                    <DialogTrigger>
                                        <FaPlayCircle
                                            className="ring-[20px] ring-haraa/20 rounded-full text-7xl text-jamni hover:text-jamni/80 hover:ring-haraa/50"/></DialogTrigger>
                                    <DialogContent
                                        className="max-w-screen-lg p-3 border border-black bg-gradient-to-r from-haraa to-jamni ">
                                        <DialogHeader>
                                            <DialogDescription>
                                                <YouTubeEmbed videoId="98D3KBayHgw"/>
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </div>
                            </Dialog>*/}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 items-center mt-8">
                    <div className="w-full md:w-5/12 lg:pl-7 order-2 sm:order-1">
                        <div className="flex justify-center md:justify-start gap-5">
                            <AppiOS link={'https://apps.apple.com/us/app/xrph-ai/id6739782817'}/>
                            <AppAndroid link={'https://play.google.com/store/apps/details?id=ai.xrph'}/>
                        </div>
                    </div>
                    <div className="w-full md:w-7/12 order-1 sm:order-2">
                        <div className="flex justify-center items-center md:justify-between ">
                            <div>
                                <Image height={'100'} width={'200'} src={"/psca/csv.webp"} alt={"csv"}
                                       className="w-32 h-auto"/>
                            </div>
                            <div>
                                <Image height={'100'} width={'200'} src={"/psca/walgreens.webp"} alt={"walgreens"}
                                       className="w-50 h-auto"/>
                            </div>
                            <div>
                                <Image height={'100'} width={'200'} src={"/psca/walmart.webp"} alt={"walmart"}
                                       className="w-40 h-auto"/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-waves-wallet dark:bg-waves-dark bg-cover bg-center bg-no-repeat">
                <div className="flex justify-center items-center h-40 md:h-52 w-60 lg:w-full mx-auto">
                    <Logo lightLogo={'/xrph-logos/wallet-app.png'} darkLogo={'/xrph-logos/wallet-app-dark.png'}
                          width={500} height={200}/>
                </div>
                <div className="max-w-7xl px-6 sm:py-10 py-0 mx-auto">
                    {/*<div className="lg:w-4/5 mx-auto flex flex-wrap items-center"></div>*/}
                    <div className="flex flex-col md:flex-row items-center--justify-center">
                        <div className="md:w-5/12 text-center order-2-sm:order-1">
                            <Image
                                src="/xrph-wallet-app-available-to-download.webp"
                                alt="The XRPH Wallet available to download"
                                width={1700} height={2500}
                                className="max-w-full sm:max-w-none md:w-[700px] sm:w-[500px] lg:w-[900px]"
                            />
                        </div>
                        <div className="md:w-7/12 text-center order-1-sm:order-2">
                            <div className="pt-0 md:pt-20">
                                <h2 className="hidden md:block text-gradient font-extrabold text-2xl md:text-4xl">The
                                    XRPH Wallet</h2>
                                <h3 className="hidden md:block text-gradient biennaleMedium text-xl md:text-3xl">
                                    available to download
                                </h3>
                            </div>
                            {/* App Store & Play Store Links */}
                            <div className="flex items-center justify-center gap-3 mt-6 md:mt-10">
                                <AppiOS link={'https://apps.apple.com/gb/app/xrph-wallet/id6451218628'}/>
                                <AppAndroid link={'https://play.google.com/store/apps/details?id=com.xrphwallet'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="px-6 sm:px-0">
                <div className="container py-10 mx-auto flex-flex-col">
                    <div className="flex justify-center items-center h-40 md:h-52 w-60 lg:w-full mx-auto">
                        <Logo lightLogo={'/xrph-logos/magazine.png'} darkLogo={'/xrph-logos/magazine-dark.png'} width={500} height={200}/>
                    </div>
                    <div className="lg:w-5/6 mx-auto">
                        <Dialog>
                            <div className="flex flex-col items-center sm:flex-row">
                                <div className="sm:w-1/3 text-center">
                                    {/*<DialogTrigger>
                                        <Image src={'/press-releases/xrp_healthcare_magazine_issue_5.webp'}
                                               className="hover:scale-95 transition-all duration-200"
                                               alt={'XRP Healthcare Magazine issue 5'} width={'500'} height={'150'}/>
                                    </DialogTrigger>*/}
                                    <Link
                                        href={'https://issuu.com/xrphealthcare/docs/xrp_healthcare_magazine_issue_5?fr=xKAE9_zU1NQ'}
                                        target={'_blank'}>
                                        <Image src={'/press-releases/xrp_healthcare_magazine_issue_5.webp'}
                                               className="hover:scale-95 transition-all duration-200"
                                               alt={'XRP Healthcare Magazine issue 5'} width={'300'} height={'500'}/>
                                    </Link>
                                </div>
                                <div className="sm:w-2/3">
                                    <p className="leading-relaxed text-lg mb-4">
                                        <b>XRP Healthcare: A Defining Moment:</b> XRP Healthcare continues to break new ground through strategic mergers and acquisitions across Africa. Our Special Edition Magazine is out now, offering an exclusive look at our latest milestones and vision for the future.
                                    </p>
                                    <p className="leading-relaxed text-lg mb-4">
                                        <b>Global Announcement Revealed:</b> In this issue, we announce our bold next step {FixText('-')} XRP Healthcare is officially on the path to going public, marking a major milestone in our mission to transform healthcare across the region.
                                    </p>
                                    <p className="leading-relaxed text-lg mb-4"><b>Read It Today:</b> <Link className="underline" href={'https://issuu.com/xrphealthcare/docs/xrp_healthcare_magazine_issue_5?fr=xKAE9_zU1NQ'} target={'_blank'}>Download</Link> your
                                        digital copy or <Link className="underline" href={'https://xrphealthcare.ai/blog/cart/?add-to-cart=48'} target={'_blank'}>order</Link> a physical version now. Don’t miss this landmark edition —
                                        the future of healthcare starts here.</p>
                                    <br/>
                                    <MyButton buttonText={'Access Now'}
                                              buttonUrl={'https://issuu.com/xrphealthcare/docs/xrp_healthcare_magazine_issue_5?fr=xKAE9_zU1NQ'}
                                              target={'_blank'}/>
                                </div>
                            </div>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle className="text-gradient text-xl">XRP Healthcare Magazine Issue
                                        5</DialogTitle>
                                    <DialogDescription className="text-lg text-black border-t border-gray-200 py-5">
                                        Subscribe here so you could be notified when ISSUE 5 is available.
                                        <div className="mt-3">
                                            <GhostSignupISSUE5 id={'ghost-signup-issue5'}/>
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <div className="container py-10 mx-auto">
                    <div className="flex justify-center items-center h-40 md:h-52 w-60 lg:w-full mx-auto">
                        <Logo lightLogo={'/xrph-logos/africa.png'} darkLogo={'/xrph-logos/africa-dark.png'}
                              width={500} height={200}/>
                    </div>
                    <div className="lg:w-5/6 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-2/3 w-full lg:pr-16 lg:py-6 mb-6 lg:mb-0 order-2 sm:order-1">
                            <p className="leading-relaxed text-lg mb-4">XRP Healthcare has completed its first retail and wholesale pharmacy chain acquisition in Africa, accelerating our expansion strategy.
                            </p>
                            <p className="leading-relaxed text-lg mb-4">
                                This strengthens our position by integrating medication, distribution, and pharmaceutical operations under one framework.
                            </p>
                            <p className="leading-relaxed text-lg mb-4">Through strategic acquisitions, we’re improving efficiency and expanding access to high{FixText('-')}quality care.
                            </p>
                            <p className="leading-relaxed text-lg mb-4">With AI{FixText('-')}driven integration, we’re building a connected, scalable healthcare ecosystem. Read more to see how this milestone drives our vision for healthcare in Africa.</p>
                            <br/><MyButton buttonText={'Read More'} buttonUrl={'/africa'} target={'_self'}/>
                        </div>
                        <Image
                            className="lg:w-1/3 w-full lg:h-auto h-64 object-cover-object-center rounded order-1 sm:order-2 mb-6 sm:mb-0"
                            src={'/africa/map-africa.webp'} width={'500'} height={'500'} alt={'Africa map'}/>
                    </div>
                </div>

                <div className="container py-10 mx-auto">
                    <div className="flex justify-center items-center h-40 md:h-52 w-60 lg:w-full mx-auto">
                        <Logo lightLogo={'/xrph-logos/xrphai.png'} darkLogo={'/xrph-logos/xrphai-dark.png'}
                              width={500} height={200}/>
                    </div>
                    <div className="lg:w-5/6 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-1/2 w-full lg:pr-16 lg:py-6 mb-6 lg:mb-0 order-2 sm:order-1">
                            <p className="leading-relaxed text-lg mb-4">XRP Healthcare is strategically positioning
                                itself to leverage the rapid expansion of AI in healthcare. By focusing on advanced AI
                                solutions, we are leading the way toward a smarter, more accessible future in
                                healthcare, with XRP Healthcare at the forefront.</p>
                            <ul className="list-disc list-inside text-lg mb-4--">
                                <li className="text-haraa2"><b>Annual Growth
                                    Rate:</b>{FixText(" Estimating a Compound Annual Growth Rate (CAGR) of about 40% in AI for healthcare.")}
                                </li>
                                <li className="text-jamni2"><b>Market
                                    Value:</b>{FixText(" Starting with a baseline value in 2024, with significant expansion expected through 2030.\n")}
                                </li>
                            </ul>
                        </div>
                        <Dialog>
                            <DialogTrigger className="lg:w-1/2 w-full order-1 sm:order-2 mb-6 sm:mb-0">
                                <Image className="object-cover object-center hover:scale-95 transition-all duration-300"
                                       src={'/ai/projected-growth-of-AI-in-healthcare-2024-2030.webp'} width={'500'}
                                       height={'500'} alt={'Projected growth of AI in healthcare 2024-2030'}/>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogDescription className="">
                                        <Image className="lg:h-auto h-64 object-cover-object-center"
                                               src={'/ai/projected-growth-of-AI-in-healthcare-2024-2030-graph.webp'}
                                               width={'1000'}
                                               height={'1000'} alt={'Projected growth of AI in healthcare 2024-2030'}/>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                <div className="container py-10 mx-auto">
                    <div className="flex justify-center items-center h-40 md:h-52 w-60 lg:w-full mx-auto">
                        <Logo lightLogo={'/xrph-logos/news.png'} darkLogo={'/xrph-logos/news-dark.png'}
                              width={500} height={200}/>
                    </div>
                    <div className="lg:w-5/6 mx-auto">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                            {NewsData.slice(0, 3).map((post, index) => (
                                <Link href={post.link} key={index + 1} target="_blank">
                                    <div className="group">
                                        <div
                                            className="h-80 relative ">
                                            <div
                                                className={`min-h-32 flex items-center dark:bg-gray-900 p-2 ${post.imgClass}`}>
                                                <Image
                                                    src={post.img}
                                                    alt={post.title}
                                                    width={350}
                                                    height={150}
                                                    className="group-hover:scale-95 duration-300 transition-all mx-auto"
                                                />
                                            </div>
                                            {/*<div
                                                className="absolute right-0 top-0 bg-gradient-to-b from-haraa to-jamni  px-1.5 py-0.5 text-white flex flex-col items-center gap-0 z-10">
                                            <span
                                                className="font-sans text-sm font-semibold">{DayOfDate(post.date)}</span>
                                                <span className="text-xs">{MonthOfDate(post.date)}</span>
                                            </div>*/}
                                            <div className="lg:px-6">
                                                <div
                                                    className="flex justify-between items-center my-2 font-bold text-sm">
                                                    <div>{FixText(post.date.slice(0, 10))}</div>
                                                    <div>By admin</div>
                                                </div>
                                                <div
                                                    className="font-bold text-lg leading-6 text-jamni mb-2 line-clamp-3">{FixText(post.title)}</div>
                                                <div
                                                    className="font-normal text-sm line-clamp-3">{FixText(post.description)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center justify-center mt-10">
                            <MyButton buttonText={'XRPH News'} buttonUrl={'news'} target={'_self'}/>
                        </div>
                    </div>
                </div>

                <div className="container py-10 mx-auto text-center">
                    <div className="flex justify-center items-center h-40 md:h-52 w-60 lg:w-full mx-auto">
                        <Logo lightLogo={'/xrph-logos/buy-xrph.png'} darkLogo={'/xrph-logos/buy-xrph-dark.png'}
                              width={500} height={200}/>
                    </div>
                    <div className="lg:w-5/6 mx-auto">
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-6">
                            {Exchanges.map((exchange) => (
                                <Link href={exchange.link} key={exchange.id} title={exchange.name}
                                      className="basis-full sm:basis-[48%] md:basis-[48%] lg:basis-[32%]">
                                    <div className="relative h-[130px] group">
                                        <div
                                            className="bg-gradient-to-r from-haraa to-jamni group-hover:from-jamni group-hover:to-haraa p-1 rounded-2xl">
                                            <div
                                                className="bg-white dark:bg-gray-400 rounded-2xl overflow-hidden transition-all flex items-center justify-center h-[125px]">
                                                <Image
                                                    src={exchange.image}
                                                    alt={exchange.name}
                                                    width={300}
                                                    height={200}
                                                    className="transition-all duration-300 group-hover:scale-90 object-contain"
                                                />
                                            </div>
                                        </div>
                                        {/*<div
                                        className="absolute left-0 right-0 bottom-0 w-[160px] mx-auto rounded-full p-2 bg-gradient-to-r from-haraa to-jamni group-hover:from-jamni group-hover:to-haraa">
                                        <div
                                            className="text-center font-bold flex items-center justify-between text-white px-3">
                                            BUY XRPH <FaAngleRight
                                            className="group-hover:translate-x-2 duration-300 transition-all"/>
                                        </div>
                                    </div>*/}
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center justify-center mt-10">
                            <MyButton buttonText={'View All Exchanges'} buttonUrl={'buy-xrph'} target={'_self'}/>
                        </div>
                    </div>
                </div>

                <div className="container pt-10 mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <ElfsightWidget/>
                    </div>
                </div>
            </div>
        </>
    );
}
