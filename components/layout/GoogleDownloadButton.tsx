import Link from "next/link";
import Image from "next/image";

interface GoogleDownloadButtonProps {
    link: string;
    size?: "sm" | "md" | "lg";
}

export default function GoogleDownloadButton({ link, size = "md" }: GoogleDownloadButtonProps) {
    const sizes = {
        sm: "text-xs px-2 py-1 text-sm",
        md: "text-sm px-3 py-2 text-base",
        lg: "text-base px-4 py-3 text-lg",
    };

    const iconSizes = {
        sm: 25, // Small icon size
        md: 35, // Default icon size
        lg: 45, // Large icon size
    };

    return (
        <Link
            href={link}
            target="_blank"
            className={`flex flex-nowrap items-center justify-between gap-x-1 rounded-md transition-all border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black ${sizes[size]}`}
        >
            <Image src="/icons/google-play.svg" width={iconSizes[size]} height={iconSizes[size]} alt="Google Play" />
            <div className="text-left">
                <p className="leading-none font-medium">Get it on</p>
                <p className="leading-none font-bold">Google Play</p>
            </div>
        </Link>
        /*<Link href={link} target={'_blank'}
              className="flex flex-nowrap items-center justify-between gap-x-0.5 p-2 pl-1 rounded-md transition-all border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black">
<Image src="/icons/google-play.svg" width={35} height={35} alt="Google Play"/>
<div className="text-left ">
    <p className="text-sm font-medium leading-none">Get It on</p>
    <p className="text-xl font-bold leading-none">Google Play</p>
</div>
</Link>*/
    );
}
