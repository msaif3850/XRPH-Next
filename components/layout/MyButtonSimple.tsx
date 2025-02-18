import {JSX} from "react";
import {Button} from "@/components/ui/button";
import {FaAngleRight} from "react-icons/fa6";

export default function MyButton(
    {buttonText = 'Read More', classes= ''}: {
        buttonText: string | undefined, classes?: string
    }): JSX.Element {
    return (<>

            <Button
                className={` ${classes} bg-gradient-to-r from-haraa to-jamni group hover:from-jamni group hover:to-haraa text-white px-5 py-2 text-lg rounded-full shadow-md`}>
                {buttonText}
                <FaAngleRight className="group-hover:translate-x-2 duration-300 transition-all"/>
            </Button>

    </>)
}