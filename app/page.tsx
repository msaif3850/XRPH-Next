'use client'
import Image from "next/image";
import Placeholder from "@/components/layout/Placeholder";

export default function Home() {

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <Placeholder title={(<>202<span className="font-sans">4</span></>)}/>
            <h2 className="font-extrabold text-7xl">XRPH <span className="font-sans">@</span> 202<span
                className="font-sans">4</span></h2>
            <Image src={'/waves.webp'} alt='XRPh' width={400} height={40}/>

        </div>
    );
}
