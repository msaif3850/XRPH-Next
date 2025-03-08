import { FaApple } from "react-icons/fa";
import Link from "next/link";

interface AppleDownloadButtonProps {
    link: string;
    size?: "sm" | "md" | "lg";
}

export default function AppleDownloadButton({ link, size = "md" }: AppleDownloadButtonProps) {
    const sizes1 = {
        sm: "text-xs px-2 py-1 text-sm",
        md: "text-sm",
        lg: "text-base px-4 py-3 text-lg",
    };
    const sizes2 = {
        sm: "text-xs px-2 py-1 text-sm",
        md: "text-md ",
        lg: "text-base px-4 py-3 text-lg",
    };
    const iconSizes = {
        sm: "text-2xl", // Smaller icon
        md: "text-3xl", // Default icon size
        lg: "text-4xl", // Larger icon
    };

    return (
        <Link
            href={link}
            target="_blank"
            className={`p-2 flex flex-nowrap items-center justify-between gap-x-1 rounded-md transition-all border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black `}
        >
            <FaApple className={iconSizes[size]} />
            <div className="text-left">
                <p className={`leading-none ${sizes1[size]}`}>Download on the</p>
                <p className={`leading-none ${sizes2[size]}`}>Apple Store</p>
            </div>
        </Link>
    );
}
