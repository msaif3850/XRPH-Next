//import Image from "next/image";
import Logo from "@/components/layout/Logo";
const footerLogos = [
    { img: '/footer-logos/walgreens.png', imgDark: '/footer-logos/walgreens.png', alt: 'walgreens', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/cvs.png',imgDark: '/footer-logos/cvs.png', alt: 'cvs', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/una.png',imgDark: '/footer-logos/una.png', alt: 'una', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/walmart.png',imgDark: '/footer-logos/walmart.png', alt: 'walmart_pharmacy', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/nasa.png', imgDark: '/footer-logos/nasa.png',alt: 'nasa-jpl', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    // { img: '/footer-logos/mind.png', imgDark: '/footer-logos/mind.png',alt: 'mind', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/xrp_ledger.png',imgDark: '/footer-logos/xrp_ledger.png', alt: 'xrp_ledger', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/nhs.png',imgDark: '/footer-logos/nhs.png', alt: 'nhs', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/cision.png',imgDark: '/footer-logos/cision.png', alt: 'cision', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    //{ img: '/footer-logos/safeway.png',imgDark: '/footer-logos/safeway-dark.png', alt: 'safeway', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/eldano-society.png', imgDark: '/footer-logos/eldano-society-dark.png',alt: 'eldano-society', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/isansys.png',imgDark: '/footer-logos/isansys-dark.png', alt: 'isansys', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/expogroup.webp', imgDark: '/footer-logos/expogroup.webp',alt: 'expogroup', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/spiritus.jpg', imgDark: '/footer-logos/spiritus.jpg',alt: 'spiritus-logo', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/genesis.png', imgDark: '/footer-logos/genesis.png',alt: 'genesis', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/shonubi-musoke.png',imgDark: '/footer-logos/shonubi-musoke.png', alt: 'shonubi musoke', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/riteaid.png', imgDark: '/footer-logos/riteaid.png',alt: 'riteaid', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/footer-logos/ace-group.png', imgDark: '/footer-logos/ace-group-dark.png',alt: 'ace-group', width: 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6' },
    { img: '/xrph-logos/africa.png',imgDark: '/xrph-logos/africa-dark.png', alt: 'XRPHealthcare Africa', width: 'w-full md:w-2/3 lg:w-2/6' },
];

export default function FooterLogos() {
    return (
        <div className="py-24 sm:pt-28 sm:pb-20">
            <div className="mx-auto max-w-7xl-- px-6 container">
                <div className="flex items-center justify-center">
                    <hr className="w-1/3 border-black dark:border-gray-400"/>
                </div>
                <div className="flex flex-wrap justify-center items-center mt-10 mx-auto ">
                    {footerLogos.map((logo, index) => (
                        <div key={index} className={`group flex items-center overflow-hidden justify-center  bg-white dark:bg-transparent border border-gray-200 dark:border-gray-800 h-32 ${logo.width}`}>
                            {/*<Image src={logo.img} alt={logo.alt} width={180} height={80} className="object-cover w-full h-auto p-2"/>*/}
                            <Logo lightLogo={logo.img} darkLogo={logo.imgDark} alt={logo.alt} width={300} height={110} className="object-cover-- w-[90%] h-auto group-hover:scale-90 transition-all duration-300"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
