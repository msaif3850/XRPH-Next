import Placeholder from "@/components/layout/Placeholder";
import Link from "next/link";

const faqs = [
    {
        key:1,
        question: "Where can I find XRPH Mobile Wallet App FAQs?",
        answer: (<>You can find it <Link href={'/app-faqs'} className="underline hover:no-underline">here</Link>.</>)
    },
    {
        key:2,
        question: "How many XRPH tokens will be released to the public, and when?",
        answer: (<>Check the XRPH circulation schedule <Link target={'_blank'} href={'https://medium.com/@XRPHealthcare/xrphs-circulation-schedule-bc44e9d74ba7'} className="underline hover:no-underline">here</Link>.</>)
    },
    {
        key:3,
        question: "Where can I buy the XRPH token?",
        answer: (<>You can buy XRPH <Link href={'/buy-xrph'} className="underline hover:no-underline">here</Link>.</>)
    },
    {
        key:4,
        question: "What is XRP Healthcare?",
        answer: "XRP Healthcare is a Web3 scalable solutions provider, focused on revolutionizing the Pharma and Healthcare industry."
    },
    {
        key:5,
        question: "Is XRP Healthcare partnered with Ripple?",
        answer: (<>No. XRP Healthcare is not partnered with Ripple, read more <Link target={'_blank'} href={'https://medium.com/@XRPHealthcare/is-xrph-partnered-with-xrp-8983a30734e1'} className="underline hover:no-underline">here</Link>.</>)
    },
    {
        key:6,
        question: "Is XRP Healthcare partnered with XUMM?",
        answer: (<>No. XRP Healthcare is not partnered with XUMM, read more <Link href={'https://medium.com/@XRPHealthcare/is-xrph-partnered-with-xumm-7d500a28bd99'} target={'_blank'} className="underline hover:no-underline">here</Link>.</>)
    },
    {
        key:7,
        question: "Is XRP Healthcare a registered trademark?",
        answer: "Yes. XRP Healthcare is a registered trademark and represents the molecule that promotes health. Any unlawful or malicious use will result in a DMCA takedown or prosecution."
    },
    {
        key:8,
        question: "Is XRP Healthcare a scam?",
        answer: (<>No. XRP Healthcare is not a scam; read more <Link href={'https://medium.com/@XRPHealthcare/is-xrph-a-scam-78bfdf78ef67'} target={'_blank'} className="underline hover:no-underline">here</Link>.</>)
    },
    {
        key:9,
        question: "Does the XRPH token have a contract address?",
        answer: "The XRP Ledger does not use contract addresses as it operates differently from other blockchain networks. Instead, it uses a unique account-based system."
    },
    {
        key:10,
        question: "What is the issuing address of XRPH?",
        answer: (<>Our issuing address is: <code className="">rMaRxDn1tGXrPR1mZcMijGTMMnbSha7p9r</code></>)
    },
    {
        key:11,
        question: "What is the latest news on XRP Healthcare?",
        answer: (<>The latest news can be found <Link href={'/news'} className="underline hover:no-underline">here</Link>.</>)
    },
    {
        key:12,
        question: "Who’s responsible for XRP Healthcare’s press releases?",
        answer: (<>Please visit our media centre <Link href={'/media-center'} className="underline hover:no-underline">here</Link>.</>)
    },
    {
        key:13,
        question: "What is the total supply of the XRPH token?",
        answer: "Two weeks after inception, the XRP Healthcare issuing address was blackholed. The total supply is 100 million tokens."
    },
    {
        key:14,
        question: "Where is XRP Healthcare based?",
        answer: (<>XRP Healthcare was incorporated in London, United Kingdom. Please see how to get in touch <Link href={'/contact'} className="underline hover:no-underline">here</Link>.</>)
    },
    {
        key:15,
        question: "Does the XRPH token have a Legal Opinion?",
        answer: (<>XRP Healthcare has received a legal opinion that the token does not constitute securities. Read more <Link className="underline hover:no-underline" href={'docs/XRPH-Legal-opinion.pdf'} target={'_blank'}>here</Link>.</>)
    },
    {
        key:16,
        question: "I live in the USA; how can I save money on my medication?",
        answer: (<>You can save up to 80<span className="font-sans">%</span> on prescriptions with the XRPH Prescription Savings Card – <Link href={'/XRPHSavingsCard'} className="underline hover:no-underline">click here</Link>.</>)
    },
    {
        key:17,
        question: "How safe will the XRPH decentralized mobile wallet be?",
        answer:(<>The XRPH mobile wallet will be 100<span className="font-sans">%</span> safe with advanced security measures making unauthorized access impossible.</>)
    },
    {
        key:18,
        question: "Will code for the XRPH mobile wallet be open source?",
        answer: (<>Yes. The code is 100<span className="font-sans">%</span> open source and unique to XRP Healthcare. Check the XRPH Open Source code <Link href={'https://github.com/XRPHealthcare/XRPH-Mobile-Wallet'} target={'_blank'} className="underline hover:no-underline">here</Link>.</>)
    }
];

export default function FAQs() {
    return (
        <>
            <Placeholder title={'Frequently Asked Questions'} key={'faq'} description={''}/>
            <div className="bg-white px-6 mx-auto max-w-screen-lg">
                <div className="space-y-16 max-w-4xl">
                    {faqs.map((faq) => (
                        <div key={faq.key} className="flex items-start ">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-jamni" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-black">{faq.question}</h3>
                                <p className="text-lg text-black mt-4">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}