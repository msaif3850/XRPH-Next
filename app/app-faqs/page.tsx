'use client'
import Placeholder from "@/components/layout/Placeholder";
import Link from "next/link";

const faqs = [
    {
        key:1, question: "Where can I download the XRPH Mobile Wallet?",
        answer: (<>Our app is available on the <Link href={'https://apps.apple.com/us/app/xrph-wallet/id6451218628'} target={'_blank'} className="underline hover:no-underline">Apple App Store</Link> and the <Link href={'https://play.google.com/store/apps/details?id=com.xrphwallet'} target={'_blank'} className="underline hover:no-underline">Google Play Store</Link>.</>)
    },
    {
        key:2, question: "What information does XRP Healthcare store?",
        answer: "We only store your general account information including your wallet address, prescription savings card ID, account name, and account password. All other information, like your padlock combination, are stored from within your device itself, which is why it is essential that they are written down when your account is created."
    },
    {
        key:3,
        question: "How do I know my padlock combination is secure? What if someone guesses it?",
        answer: (<>Your padlock is secure <span className="font-sans">-</span> in order to get into the app you must enter a 6<span className="font-sans">-</span>digit pin, and you only have 8 attempts. Even if this were to be bypassed, your password is still required to send transactions. If someone attempted to guess your padlock combination it would take years <span className="font-sans">-</span> there are over 10<span className="font-sans">^48</span> possible combinations.</>)
    },
    {
        key:4, question: "I have forgotten or lost my padlock combination but I’m still allowed in my account. What should I do?",
        answer: "We advise you to create another account and make sure to keep the new padlock combination secure. Then transfer your tokens over to this account."
    },
    {
        key:5, question: (<>My tokens disappeared from my wallet<span className="font-sans">!</span> Where did they go?</>),
        answer: "If this happens, it is likely due to rate limiting by the XRPL (XRP Ledger). Wait a little bit then click the “Refresh” button."
    },
    {
        key:6, question: "I am interested in looking at the code. Where can I find it?",
        answer: (<>You can find our open source code <Link href={'https://github.com/XRPHealthcare/XRPH-Mobile-Wallet/tree/main'} target={'_blank'} className="underline hover:no-underline">here</Link>. We aim to use this as a template for future wallets as well as a resource for new developers on the XRPL.</>)
    },
    {
        key:7, question: "Where can I request my account to be deleted or my password changed?",
        answer: (<>You can find the form <Link href={'https://forms.gle/qppz1ueygWPwtdsZ9'} target={'_blank'} className="underline hover:no-underline">here</Link>.</>)
    },
    {
        key:8, question: "I am experiencing bugs! How can I report them?",
        answer: (
            <>
            You can share your experience <Link href={'https://forms.gle/d45X6uS4SR6Etfi86'} target={'_blank'} className="underline hover:no-underline">here</Link>. Please include the following information before sending:
            <ul>
                <li>Any screenshots and screen recordings of the issue</li>
                <li>An explanation of your experience with this issue</li>
                <li>Your phone operating system (Apple or Android)</li>
                <li>Your phone model, which can be found in Settings under the About section on most devices.</li>
            </ul>
            We will look at this information and make updates depending on the severity of the issue. We appreciate any and all feedback as we are determined to make your app experience the best it can possibly be.
        </>
        )
    },
    {
        key:9, question: "What are some updates I can expect soon?",
        answer: "We have a ton of features we are excited to add soon, including automatic balance refreshes, staking, exchanges to and from FIAT, a new rewards page, and more."
    },
];

export default function AppFAQs() {
    return (
        <>
            <Placeholder title={'XRPH Mobile Wallet Frequently Asked Questions'} key={'app-faq'} description={''}/>
            <div className="px-6 mx-auto max-w-screen-lg">
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
                                <h3 className="text-lg font-semibold">{faq.question}</h3>
                                <p className="text-lg mt-4">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}