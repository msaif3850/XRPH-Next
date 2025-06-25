import Link from "next/link";
import {FaApple} from "react-icons/fa";

export default function AppiOS({link}: { link: string }) {
    return (
        <Link href={link} target={'_blank'}
              className="flex flex-nowrap items-center justify-between gap-x-0.5 p-2 pl-1 rounded-md transition-all border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:scale-95 ">
            <FaApple className="text-3xl sm:text-4xl"/>
            <div className="text-left ">
                <p className="text-sm font-medium leading-none">Download on the</p>
                <p className="text-xl font-bold leading-none">Apple Store</p>
            </div>
        </Link>
    );
}
