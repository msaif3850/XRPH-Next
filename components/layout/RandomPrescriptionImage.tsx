'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
    '/psca/randoms/1.webp',
    '/psca/randoms/2.webp',
    '/psca/randoms/3.webp',
    '/psca/randoms/4.webp',
];

export default function RandomPrescriptionImage() {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setSelectedImage(images[randomIndex]);
    }, []);

    return (
        /*<div className="bg-gradient1 p-2 md:p-3 flex mb-4 md:mb-0 hover:shadow rounded-3"></div>*/
            <Image
                src={selectedImage}
                alt="Free XRPH Prescription Savings Card"
                width={700}
                height={500}
                className="rounded-xl w-full h-auto object-cover"
            />

    );
}
