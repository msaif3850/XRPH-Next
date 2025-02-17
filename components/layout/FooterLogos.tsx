import Image from "next/image";
const footerLogos = [
    { img: '/footer-logos/walgreens.png', alt: 'walgreens', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/cvs.png', alt: 'cvs', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/una.jpeg', alt: 'una', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/walmart.jpeg', alt: 'walmart_pharmacy', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/nasa-jpl-logo.png', alt: 'nasa-jpl', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/mind.png', alt: 'mind', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/xrp_ledger.png', alt: 'xrp_ledger', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/nhs.png', alt: 'nhs', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/cision.png', alt: 'cision', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/safeway.png', alt: 'safeway', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/eldano-society.webp', alt: 'eldano-society', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/isansys.webp', alt: 'isansys', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/expogroup.webp', alt: 'expogroup', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/spiritus-logo.jpg', alt: 'spiritus-logo', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/genesis.png', alt: 'genesis', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/shonubi-musoke.png', alt: 'shonubi musoke', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/riteaid.png', alt: 'riteaid', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/ace-group.png', alt: 'ace-group', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/xrph-logos/africa.png', alt: 'XRPHealthcare Africa', width: 'w-full md:w-2/3 lg:w-1/6' },
];

export default function FooterLogos() {
    return (
        <div className="py-24 sm:pt-28 sm:pb-20">
            <div className="mx-auto max-w-screen-5xl  px-6 lg:px-8">
                <div className="flex items-center justify-center">
                    <hr className="w-1/3 border-black"/>
                </div>

                <div className="flex flex-wrap justify-center items-center  mt-10 mx-auto">
                    {footerLogos.map((logo, index) => (
                        <div key={index} className={`flex justify-center ${logo.width}`}>
                            <Image src={logo.img} alt={logo.alt} width={150} height={50}
                                className="object-contain"/>
                        </div>
                    ))}
                </div>
                {/*<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-7">
                    {footerLogos.map((logo, index) => (
                        <Image key={index} src={logo.img} alt={logo.alt} width={250} height={150}
                               className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"/>
                    ))}
                </div>*/}
            </div>
        </div>
    )
}
