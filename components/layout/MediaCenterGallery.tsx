'use client';

import React from 'react';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-fullscreen.css';

const galleryImages = [
    {
        src: '/owners/1.jpg',
        thumb: '/owners/thumbs/1.webp',
        alt: 'Laban Roomes',
    },
    {
        src: '/owners/2.jpg',
        thumb: '/owners/thumbs/2.webp',
        alt: 'Kain Roomes',
    },
    {
        src: '/owners/3.jpg',
        thumb: '/owners/thumbs/3.webp',
        alt: 'Kain Roomes and Laban Roomes',
    },
    {
        src: '/owners/4.jpg',
        thumb: '/owners/thumbs/4.webp',
        alt: 'Kain Roomes and Laban Roomes',
    },
    {
        src: '/owners/5.jpg',
        thumb: '/owners/thumbs/5.webp',
        alt: 'Laban Roomes and Kain Roomes',
    },
];

export default function MediaGallery() {
    return (
        <LightGallery
            plugins={[lgThumbnail, lgZoom, lgFullscreen]}
            mode="lg-fade"
            speed={500}
            selector=".gallery-item"
            download={true}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 items-center">
                {/* First 3 images */}
                {galleryImages.slice(0, 3).map((img, i) => (
                    <a
                        key={i}
                        href={img.src}
                        className="gallery-item lg:col-span-1"
                        data-lg-size="1600-2400"
                        data-sub-html={`<h4>${img.alt}</h4>`}
                        data-download-url={img.src}
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={img.thumb}
                                alt={img.alt}
                                className="w-full h-auto object-cover hover:scale-110 transition-all duration-300"
                            />
                        </div>
                    </a>
                ))}

                {/* Last 2 images stacked vertically in 1 column */}
                <div className="flex flex-col gap-2 lg:col-span-1">
                    {galleryImages.slice(3).map((img, i) => (
                        <a
                            key={i + 3}
                            href={img.src}
                            className="gallery-item"
                            data-lg-size="1600-2400"
                            data-sub-html={`<h4>${img.alt}</h4>`}
                            data-download-url={img.src}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={img.thumb}
                                    alt={img.alt}
                                    className="w-full h-auto object-cover hover:scale-110 transition-all duration-300"
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </LightGallery>
    );
}
