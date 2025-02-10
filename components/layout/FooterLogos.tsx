import Image from "next/image";

const footerLogos = [
    {img: '/footer-logos/shonubi.png', alt: 'shonubi'},
    {img: '/footer-logos/safeway.png', alt: 'safeway'},
    {img: '/footer-logos/una.jpeg', alt: 'una'},
    {img: '/footer-logos/walmart.jpeg', alt: 'walmart_pharmacy'},
    {img: '/footer-logos/mind.png', alt: 'mind'},
    {img: '/footer-logos/nhs.png', alt: 'nhs'},
    {img: '/footer-logos/xrp_ledger.png', alt: 'xrp_ledger'},
    {img: '/footer-logos/walgreens.png', alt: 'walgreens'},
    {img: '/footer-logos/cision.png', alt: 'cision'},
    {img: '/footer-logos/cvs.png', alt: 'cvs'},
    {img: '/footer-logos/eldano-society.webp', alt: 'eldano-society'},
    {img: '/footer-logos/ace-group.png', alt: 'ace-group'},
    {img: '/footer-logos/spiritus-logo.jpg', alt: 'spiritus-logo'},
    {img: '/footer-logos/nasa-jpl-logo.png', alt: 'nasa-jpl'},
    {img: '/footer-logos/isansys.webp', alt: 'isansys'},
    {img: '/footer-logos/expogroup.webp', alt: 'expogroup'},
    {img: '/footer-logos/riteaid.png', alt: 'riteaid'},
    {img: '/footer-logos/genesis.png', alt: 'genesis'},
    {img: '/xrph-logos/logo-africa.webp', alt: 'XRPHealthcare Africa'},
];
export default function FooterLogos() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-screen-5xl  px-6 lg:px-8">
                <div className="flex items-center justify-center">
                    <hr className="w-1/3 border-black"/>
                </div>
                <div
                    className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-7">
                    {footerLogos.map((logo, index) => (
                        <Image key={index} src={logo.img} alt={logo.alt} width={200} height={150}
                               className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"/>
                    ))}
                </div>
            </div>
        </div>
    )
}
