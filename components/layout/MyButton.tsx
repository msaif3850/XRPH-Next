import {JSX} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {FaArrowRightLong} from "react-icons/fa6";


export default function MyButton(
    {buttonText = 'Read More', buttonUrl = '/', target = '_blank', classes= ''}: {
        buttonText: string | undefined, buttonUrl: string, target: string | undefined, classes?: string
    }): JSX.Element {
    return (<>
        <Link href={buttonUrl} className="group" target={target} rel="noopener noreferrer">
            <Button
                className={` ${classes} bg-gradient-to-r from-haraa to-jamni group-hover:from-jamni group-hover:to-haraa text-white px-5 py-2 text-lg rounded-full shadow-md`}>
                {buttonText}
                <FaArrowRightLong className="group-hover:translate-x-2 group-hover:scale-105 duration-300 transition-all"/>
            </Button>
        </Link>
    </>)
}
