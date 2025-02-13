import React, {JSX} from 'react';

export default function Placeholder(
    {
        title = 'XRP Healthcare',
        description = 'Localized health advice with holistic and traditional insights, backed by trusted sources.'
    }:
        { title?: string | undefined, description?: string | undefined }
): JSX.Element {
    return (
        <div className="px-6 py-24 sm:pt-22 sm:pb-8 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-5xl font-semibold tracking-tight  sm:text-6xl ">{title}</h1>
                <h2 className="mt-2 text-pretty text-lg sm:text-xl/8">{description}</h2>
            </div>
        </div>
    );
}