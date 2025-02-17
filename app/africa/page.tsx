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
import SEO from "@/components/SEO";
import React from "react";

const AfricaPosts = [
    {
        img: '/africa/redefining-african-healthcare-xrp-healthcares-bold-vision.webp',
        img_alt: 'Redefining African Healthcare XRP Healthcare’s Bold Vision',
        link: 'https://medium.com/@XRPHealthcare/redefining-african-healthcare-xrp-healthcares-bold-vision-da3de51b8eed',
        title: 'Redefining African Healthcare: XRP Healthcare’s Bold Vision',
        title_div: 'Redefining African Healthcare: XRP Healthcare’s Bold Vision',
        paragraph: 'XRP Healthcare has made significant strides in reshaping the healthcare sector in Africa. Over the past year, we have successfully established XRP Healthcare Africa in Uganda'
    },
    {
        img: '/africa/xrph-ai.webp', img_alt: 'XRP Healthcare Enters the Limitless World of AI', img_style: '',
        link: 'https://www.prnewswire.com/news-releases/xrp-healthcare-enters-the-limitless-world-of-ai-302242671.html',
        title: 'XRP Healthcare Enters the Limitless World of AI',
        title_div: 'XRP Healthcare Enters the Limitless World of AI',
        paragraph: (<>XRP Healthcare is taking bold steps to become a leader in the integration of artificial intelligence <span className="font-sans">(</span>AI<span className="font-sans">)</span> and blockchain within the healthcare industry</>),
    },
    {

        img: '/africa/whitney-lynn.webp', img_alt: 'Whitney Lynn', img_style: '', link: 'team#whitney-lynn',
        title: (<>Whitney Lynn the 10 Billion Dollar M<span className="font-sans">&</span>A Specialist joins XRP Healthcare</>),
        title_div: 'Whitney Lynn the 10 Billion Dollar M&A Specialist joins XRP Healthcare',
        paragraph: 'XRP Healthcare appoint 1st Lieutenant veteran Whitney Lynn to head Africa Expansion',
    },
    {
        img: '/africa/dr-peter-waiswa.webp', img_alt: 'Peter Waiswa', img_style: '', link: 'team#dr-peter-waiswa',
        title: 'Dr. Peter Waiswa joins the XRP Healthcare team',
        title_div: 'Dr. Peter Waiswa joins the XRP Healthcare team',
        paragraph: (<>Dr. Peter Waiswa, Ass. Prof, <span className="font-sans">(</span>HEALTHCARE INDUSTRY EXPERT<span className="font-sans">)</span> possessed with over 20<span className="font-sans">+</span> years in the health...</>),
    },
    {
        img: '/africa/keith-errey.webp', img_alt: 'Keith Errey', img_style: '', link: 'team#keith-errey',
        title: 'XRP Healthcare Appoints Digital Healthcare Evangelist and Isansys Founder Keith Errey as Strategic Advisor',
        title_div: 'XRP Healthcare Appoints Digital Healthcare Evangelist and Isansys Founder Keith Errey as Strategic Advisor',
        paragraph: 'XRP Healthcare, a leading player in the healthcare industry, is proud to announce the appointment of Keith Errey ...   ',
    },
    {
        img: '/africa/xrph-trademark-uganda.webp', img_alt: 'XRP Healthcare Trademark in Uganda', img_style: '',
        link: 'https://finance.yahoo.com/news/xrp-healthcare-solidifies-presence-uganda-053000736.html',
        title: 'Successful registration of the XRP Healthcare Trademark in Uganda',
        title_div: 'Successful registration of the XRP Healthcare Trademark in Uganda',
        paragraph: 'XRP Healthcare Solidifies Presence in Uganda with Trademark Registration Success',
    },
    {
        img: '/africa/xrph-africa.webp', img_alt: 'XRP Healthcare africa', img_style: '',
        link: 'https://uk.finance.yahoo.com/news/xrp-healthcare-move-forward-one-053000889.html',
        title: (<>XRP Healthcare move forward as one entity for African M<span className="font-sans">&</span>A venture</>),
        title_div: 'XRP Healthcare move forward as one entity for African M&A venture',
        paragraph: 'XRP Healthcare is excited to announce the incorporation of XRP Healthcare Africa, in Uganda...',
    },
    {
        img: '/africa/xrph-isnansys.webp', img_alt: 'xrph isnansys', img_style: '',
        link: 'https://finance.yahoo.com/news/xrp-healthcare-partner-nhs-collaborator-053000188.html',
        title: 'XRP Healthcare Partner with NHS collaborator Isansys Lifecare to Revolutionize Healthcare Services in Uganda',
        title_div: 'XRP Healthcare Partner with NHS collaborator Isansys Lifecare to Revolutionize Healthcare Services in Uganda',
        paragraph: 'XRP Healthcare is thrilled to announce a strategic partnership with Isansys Lifecare, a leading innovator in the digital healthcare ....',
    },
    {
        img: '/africa/xrph-spiritus.webp', img_alt: 'xrph spiritus', img_style: '',
        link: 'https://finance.yahoo.com/news/xrp-healthcare-spiritus-medical-partner-073000511.html',
        title: 'XRP Healthcare and Spiritus Medical Partner to Revolutionize Healthcare in Africa',
        title_div: 'XRP Healthcare and Spiritus Medical Partner to Revolutionize Healthcare in Africa',
        paragraph: 'XRP Healthcare and Spiritus Medical is thrilled to announce their strategic collaboration, set to transform ...',
    }
]
export default function Africa() {
    return (
        <>
            <SEO title="Africa" canonical="https://www.xrphealthcare.ai/africa" />
            <div className="px-6 py-24 sm:py-16 lg:px-8">
                <div className="mx-auto max-w-7xl text-center">
                    <Image src="/africa/xrph-africa-banner.webp" alt={'XRPH Africa'} width={1500} height={1200}/>
                    <p className="text-lg">XRP Healthcare is making significant advancements in Africa, concentrating
                        efforts in Uganda to transform the private healthcare sector through mergers, acquisitions, and
                        blockchain technology. Follow our progress here:</p>
                </div>
            </div>

            <div className="bg-map bg-fixed bg-center bg-cover py-20">
                <div className="max-w-screen-xl mx-auto ">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                        {AfricaPosts.map((post, index) => (
                            <Link href={post.link} key={index + 1} title={post.title_div} target={'_blank'}>
                                <div className="text-center group">
                                    <Card className="rounded-none border-white group-hover:border-b-jamni group-hover:border-t-haraa border-2">
                                        <div className="border-b relative">
                                            <Image src={post.img} alt={post.img_alt} width={1500} height={1103}
                                                   className="group-hover:scale-95 duration-300 transition-all"/>
                                            {/*<Image src={'/icon.png'} alt={'icon'} height={50} width={50} className="absolute  group-hover:scale-95 duration-300 transition-all"/>*/}
                                        </div>
                                        <CardHeader>
                                            <CardTitle
                                                className="line-clamp-2 h-[3.5rem] text-lg/normal overflow-hidden">{post.title}</CardTitle>
                                            <CardDescription className="line-clamp-2">{post.paragraph}</CardDescription>
                                        </CardHeader>
                                        <CardFooter>
                                            <div
                                                className="w-[160px] mx-auto rounded-full p-2 bg-gradient-to-r from-haraa to-jamni group-hover:from-jamni group-hover:to-haraa">
                                                <div
                                                    className="text-center font-bold flex items-center justify-between text-white px-3">
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
        </>
    )
}