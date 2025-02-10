import { FaGooglePlay } from "react-icons/fa";
import Link from "next/link";

export default function GoogleDownloadButton({link}: {link: string}) {
    return (
        <Link href={link} target={'_blank'}
              className="flex flex-nowrap items-center justify-between gap-1 border-black dark:border-white hover:bg-black hover:text-white border-2 p-2 rounded-md transition-all"
        >
            <FaGooglePlay className="text-3xl" />
            <div className="text-left ">
                <p className="text-sm font-medium leading-none">Get It on</p>
                <p className="text-xl font-bold leading-none">Google Play</p>
            </div>
        </Link>
    );
}
