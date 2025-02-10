import { FaApple } from "react-icons/fa";
import Link from "next/link";

export default function AppleDownloadButton({link}: {link: string}) {
    return (
        <Link href={link} target={'_blank'}
              className="flex flex-nowrap items-center justify-between gap-1 border-black dark:border-white hover:bg-black hover:text-white border-2 p-2  rounded-md transition-all"
        >
            <FaApple className="text-3xl"/>
            <div className="text-left ">
                <p className="text-sm font-medium leading-none">Download on the</p>
                <p className="text-xl font-bold leading-none">Apple Store</p>
            </div>
        </Link>
    );
}
