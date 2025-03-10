import Link from "next/link";
import Image from "next/image";
export default function AppAndroid({link}: {link: string}) {
    return (
        <Link href={link} target={'_blank'}
              className="flex flex-nowrap items-center justify-between gap-x-0.5 p-2 pl-1 rounded-md transition-all border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black">
            {/*<FaGooglePlay className="text-3xl" />*/}
            <Image src="/icons/google-play.svg" width={35} height={35} alt="Google Play"/>
            <div className="text-left ">
                <p className="text-sm font-medium leading-none">Get It on</p>
                <p className="text-xl font-bold leading-none">Google Play</p>
            </div>
        </Link>
    );
}