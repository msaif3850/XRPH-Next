import React, {JSX} from 'react';
import Image from "next/image";

export default function PageTitleImage({
                                           image = '/logo.png',
                                           alt = 'XRP Healthcare',
                                           description = ''
                                       }: { image?: string, alt?: string, description?: string }): JSX.Element {
    return (
        <div className="px-6 py-24 sm:py-22 lg:px-8 flex flex-col justify-center items-center w-full">
            <div className="mx-auto max-w-3xl text-center">
                <Image className="text-center" src={image} alt={alt}
                       width={500} height={200}/>
                <h2 className="mt-2 text-pretty text-lg sm:text-xl/8">{description}</h2>
            </div>
        </div>
    )
        ;
}