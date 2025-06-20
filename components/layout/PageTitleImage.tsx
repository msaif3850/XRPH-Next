import React, {JSX} from 'react';
import Logo from "@/components/layout/Logo";
export default function PageTitleImage({
                                           image = '/logo.png',
                                           imageDark = '/logo-dark.png',
                                           alt = 'XRP Healthcare',
                                           description = ''
                                       }: { image?: string, imageDark?: string, alt?: string, description?: string }): JSX.Element {
    return (
        <div className="px-6 pt-24 pb-10 sm:py-22 lg:px-8 w-full">
            <div className="max-w-3xl mx-auto text-center flex flex-col justify-center items-center">
                <Logo lightLogo={image} darkLogo={imageDark} alt={alt} width={400} height={180} className={'text-center w-60 sm:w-96'}/>
                {/*<Image className="text-center" src={image} alt={alt} width={500} height={200}/>*/}
                {description && <h2 className="mt-2 text-pretty text-lg sm:text-xl/8 font-semibold">{description}</h2>}
            </div>
        </div>
    )
        ;
}
