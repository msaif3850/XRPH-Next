
import Link from "next/link";
import Image from "next/image";
export default function GoogleDownloadButton({link}: {link: string}) {
    return (
        <Link href={link} target={'_blank'}
              className="flex flex-nowrap items-center justify-between gap-1 border-black dark:border-white hover:bg-black hover:text-white border-2 p-2 rounded-md transition-all"
        >
            {/*<FaGooglePlay className="text-3xl" />*/}
            <Image src="/icons/google-play.svg" width={35} height={35} alt="Google Play"/>
            <div className="text-left ">
                <p className="text-sm font-medium leading-none">Get It on</p>
                <p className="text-xl font-bold leading-none">Google Play</p>
            </div>
        </Link>
    );
}
