'use client';
import * as React from "react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function NewsSlider() {
    // Initialize the autoplay plugin
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false }) // Adjust delay as needed
    );

    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full max-w-screen mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {Array.from({ length: 13 }).map((_, index) => (
                    <CarouselItem
                        key={index}
                        className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 flex aspect-video items-center justify-center py-0 px-4"
                    >
                        <Image
                            src={`/news-slider/${index + 1}.webp`}
                            width={200}
                            height={150}
                            alt={`news-slide-${index + 1}`}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/*<CarouselPrevious />
            <CarouselNext />*/}
        </Carousel>
    );
}