import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel"

export function NewsSlider() {
    return (
        <Carousel
            opts={{
                align: "start",
                loop:true,

            }}
            className="w-full max-w-7xl mx-auto"
        >
            <CarouselContent>
                {Array.from({ length: 13 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
                        <div className="">
                            <Card className="border-white shadow-none ">
                                <CardContent className="flex aspect-video items-center justify-center py-0 px-6">
                                    <Image src={`/news-slider/${index+1}.webp`} key={index} width={200} height={150} alt={'logo'}/>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
