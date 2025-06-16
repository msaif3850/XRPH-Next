import Image from "next/image";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import {FaAngleRight} from "react-icons/fa6";
import React from "react";

const AfricaPosts = [
    {
        img: '/africa/aaj-capital-3-corp.webp',
        imgDark: '/africa/aaj-capital-3-corp.webp',
        link: 'https://xrphealthcare.ai/blog/xrp-healthcare-signs-loi-for-qualifying-transaction-with-aaj-capital-3-corp-to-list-on-tsx-venture-exchange/',
        title: 'XRP Healthcare Signs LOI for Qualifying Transaction with AAJ Capital 3 Corp., to List on TSX Venture Exchange',
        paragraph: 'XRP Healthcare Signs LOI for Qualifying Transaction with AAJ Capital 3 Corp., to List on TSX Venture Exchange...'
    },
    {
        img: '/africa/issue_5.webp',
        imgDark: '/africa/issue_5.webp',
        link: 'https://www.prnewswire.com/news-releases/xrp-healthcare-to-become-public-company-via-ipo-by-q3-2025-accelerating-ai-and-ma-expansion-302410028.html',
        title: 'XRP Healthcare to Become Public Company via IPO by Q3 2025, Accelerating AI and M&A Expansion',
        paragraph: 'XRP Healthcare, a fast-growing innovator in AI-driven healthcare and mergers & acquisitions, has announced it will be a public company by Q3 2025.'
    },
    {
        img: '/africa/pharma-ville.webp',
        imgDark: '/africa/pharma-ville.webp',
        link: 'https://www.prnewswire.com/news-releases/xrp-healthcare-acquires-pharma-ville-a-retail-and-wholesale-pharmacy-chain-in-uganda-302399508.html',
        title: 'XRP Healthcare Acquires Pharma Ville, a Retail and Wholesale Pharmacy Chain in Uganda',
        paragraph: 'XRP Healthcare, a pioneering force in healthcare innovation, has officially acquired Pharma Ville, a leading retail and wholesale pharmacy chain in Uganda.'
    },
    {
        img: '/africa/redefining-african-healthcare-xrp-healthcares-bold-vision.webp',
        imgDark: '/africa/redefining-african-healthcare-xrp-healthcares-bold-vision.webp',
        link: 'https://medium.com/@XRPHealthcare/redefining-african-healthcare-xrp-healthcares-bold-vision-da3de51b8eed',
        title: 'Redefining African Healthcare: XRP Healthcare’s Bold Vision',
        paragraph: 'XRP Healthcare has made significant strides in reshaping the healthcare sector in Africa. Over the past year, we have successfully established XRP Healthcare Africa in Uganda'
    },
    {
        img: '/africa/xrph-ai.webp', imgDark: '/africa/xrph-ai.webp',
        link: 'https://www.prnewswire.com/news-releases/xrp-healthcare-enters-the-limitless-world-of-ai-302242671.html',
        title: 'XRP Healthcare Enters the Limitless World of AI',
        paragraph: 'XRP Healthcare is taking bold steps to become a leader in the integration of artificial intelligence (AI) and blockchain within the healthcare industry',
    },
    {

        img: '/africa/whitney-lynn.webp', imgDark: '/africa/whitney-lynn.webp', link: 'team#whitney-lynn',
        title: 'Whitney Lynn the 10 Billion Dollar M&A Specialist joins XRP Healthcare',
        paragraph: 'XRP Healthcare appoint 1st Lieutenant veteran Whitney Lynn to head Africa Expansion',
    },
    {
        img: '/africa/dr-peter-waiswa.png', imgDark: '/africa/dr-peter-waiswa.png', link: 'team#dr-peter-waiswa',
        title: 'Dr. Peter Waiswa joins the XRP Healthcare team',
        paragraph: 'Dr. Peter Waiswa, Ass. Prof, (HEALTHCARE INDUSTRY EXPERT) possessed with over 20+ years in the health...',
    },
    {
        img: '/africa/keith-errey.webp', imgDark: '/africa/keith-errey.webp', link: 'team#keith-errey',
        title: 'XRP Healthcare Appoints Digital Healthcare Evangelist and Isansys Founder Keith Errey as Strategic Advisor',
        paragraph: 'XRP Healthcare, a leading player in the healthcare industry, is proud to announce the appointment of Keith Errey ...   ',
    },
    {
        img: '/africa/xrph-trademark-uganda.webp', imgDark: '/africa/xrph-trademark-uganda-dark.webp',
        link: 'https://finance.yahoo.com/news/xrp-healthcare-solidifies-presence-uganda-053000736.html',
        title: 'Successful registration of the XRP Healthcare Trademark in Uganda',
        paragraph: 'XRP Healthcare Solidifies Presence in Uganda with Trademark Registration Success',
    },
    {
        img: '/africa/xrph-africa.webp', imgDark: '/africa/xrph-africa.webp',
        link: 'https://uk.finance.yahoo.com/news/xrp-healthcare-move-forward-one-053000889.html',
        title: 'XRP Healthcare move forward as one entity for African M&A venture',
        paragraph: 'XRP Healthcare is excited to announce the incorporation of XRP Healthcare Africa, in Uganda...',
    },
    {
        img: '/africa/xrph-isnansys.webp', imgDark: '/africa/xrph-isnansys.webp',
        link: 'https://finance.yahoo.com/news/xrp-healthcare-partner-nhs-collaborator-053000188.html',
        title: 'XRP Healthcare Partner with NHS collaborator Isansys Lifecare to Revolutionize Healthcare Services in Uganda',
        paragraph: 'XRP Healthcare is thrilled to announce a strategic partnership with Isansys Lifecare, a leading innovator in the digital healthcare ....',
    },
    {
        img: '/africa/xrph-spiritus.webp', imgDark: '/africa/xrph-spiritus.webp',
        link: 'https://finance.yahoo.com/news/xrp-healthcare-spiritus-medical-partner-073000511.html',
        title: 'XRP Healthcare and Spiritus Medical Partner to Revolutionize Healthcare in Africa',
        paragraph: 'XRP Healthcare and Spiritus Medical is thrilled to announce their strategic collaboration, set to transform ...',
    }
]
import {Metadata} from "next";
import Logo from "@/components/layout/Logo";
import {FixText} from "@/components/FixText";
import {RiContactsLine} from "react-icons/ri";

export const generateMetadata = (): Metadata => {
    return {
        title: "Africa",
        description: "XRP Healthcare africa, Discover XRPH Healthcare’s impact in Africa. Learn about our initiatives, partnerships, and efforts to enhance healthcare accessibility and innovation across the continent.",
        alternates: {canonical: "https://www.xrphealthcare.ai/africa"},
    };
};
export default function Africa() {
    return (
        <>
            <Image src="/africa/xrph-africa-top.webp" alt={'XRP Healthcare Africa'} width={1500} height={1200} className="pt-16"/>
            <div className="px-6">
                <div className="py-24 sm:py-16 lg:px-8">
                    <div className="mx-auto max-w-7xl-- text-center">
                        <p className="text-xl mt-2">XRP Healthcare is making significant advancements in Africa,
                            concentrating
                            efforts in Uganda to transform the private healthcare sector through mergers, acquisitions,
                            and
                            blockchain technology. Follow our progress here:</p>
                    </div>
                </div>

                <div className="bg-map dark:bg-waves-dark bg-fixed bg-center bg-cover  py-20">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                            {AfricaPosts.map((post, index) => (
                                <Link href={post.link} key={index + 1} title={post.title} target={'_blank'}>
                                    <div className="text-center group">
                                        <Card className="rounded-none border-0">
                                            <div className="dark:border-gray-700 group-hover:border-b-jamni border-b relative overflow-hidden">
                                                <Logo alt={post.title} lightLogo={post.img} darkLogo={post.imgDark} width={1500} height={1103} className="group-hover:scale-105 duration-300 transition-all"/>
                                            </div>
                                            <CardHeader>
                                                <CardTitle
                                                    className="line-clamp-2 h-[3.5rem] text-lg/normal overflow-hidden">{FixText(post.title)}</CardTitle>
                                                <CardDescription
                                                    className="line-clamp-2">{FixText(post.paragraph)}</CardDescription>
                                            </CardHeader>
                                            <CardFooter>
                                                <div className="w-[160px] mx-auto rounded-full p-2 bg-gradient-to-r from-haraa to-jamni group-hover:from-jamni group-hover:to-haraa">
                                                    <div className="text-center font-bold flex items-center justify-between text-white px-3">
                                                        Read More <FaAngleRight className="group-hover:translate-x-2 duration-300 transition-all"/>
                                                    </div>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-full mx-auto pt-20">
                    <h2 className="text-jamni text-4xl mb-2">About XRP Healthcare</h2>
                    <p>XRP Healthcare is the first healthcare platform built on the XRPL, transforming global health
                        with mergers, acquisitions, blockchain and AI.</p>
                    <div className="lg:w-1/3 md:w-1/2 w-full mx-auto- mt-6">
                        <h2 className="text-jamni text-4xl mb-2">{FixText('Press & Media contact')}</h2>
                        <Link href={'mailto:press@xrphealthcare.com'} target={'_blank'}>
                            <div
                                className="h-full flex items-center border-gray-200 dark:border-gray-700 border p-4 rounded-lg group shadow-lg hover:shadow-2xl dark:bg-gray-800">
                                {/*<Image alt={"Press & Media contact"} width={64} height={64} className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={'/icon.png'}/>*/}
                                <RiContactsLine
                                    className="flex-shrink-0 mr-4 ring-2 ring-gray-500 p-2 rounded-lg text-5xl text-gray-500 group-hover:text-jamni"/>

                                <div className="flex-grow">
                                    <h2 className="text-lg/normal font-medium group-hover:underline">{FixText('Press@xrphealthcare.com')}</h2>
                                    <p className="text-gray-600">Hellen Mucheru</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
