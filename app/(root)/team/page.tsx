import Placeholder from "@/components/layout/Placeholder";
import {TeamMembers} from "@/variables";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {FaAngleRight} from "react-icons/fa6";
import { Metadata } from "next";
export const generateMetadata = (): Metadata => {
    return {
        title: "Team",
        description: "Meet the visionary team behind XRPH Healthcare. Learn about our experts, leaders, and innovators dedicated to transforming the future of healthcare and blockchain technology.",
        alternates: { canonical: "https://www.xrphealthcare.ai/team" },
    };
};
export default function Exchanges() {

    return (
        <>
            <Placeholder title={'Meet Our Team'} key={'team'} description={''}/>
            <div className="pb-20 px-2">
                <div className="max-w-6xl mx-auto">
                    {/*<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-10 lg:gap-y-20 lg:gap-x-16">*/}
                    <div className="flex flex-wrap justify-center gap-4 gap-y-10">
                        {TeamMembers.map((member, index) => (
                            <div key={index + 1} id={member.id} className="group text-center basis-full sm:basis-[32%]">
                                <div className="flex justify-center items-center mb-0.5">
                                    <Image src={member.img} alt={member.name} width={200} height={200}
                                           className="rounded-full grayscale group-hover:grayscale-0"/>
                                </div>
                                <div className="mb-3">
                                    <h2 className="text-2xl font-bold text-gradient uppercase mb-2">{member.name}</h2>
                                    <h3 className="uppercase text-sm font-bold">{member.role}</h3>
                                </div>
                                <div className="flex justify-center items-center gap-3">
                                    <Link href={member.link} key={member.link} target="_blank" className="text-xl">
                                        <member.icon className="h-5 w-5" aria-hidden="true"/>
                                    </Link>
                                    <span className="font-sans">|</span>

                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="outline"
                                                    className="border-0 px-0 shadow-none hover:bg-transparent hover:underline">Read
                                                Bio<FaAngleRight
                                                    className="group-hover:translate-x-2 duration-300 transition-all"/></Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-7xl">
                                            <DialogHeader>
                                                <div className="flex items-center gap-2">
                                                    <div>
                                                        {<Image src={member.img} alt={member.name} height={50}
                                                                width={50} className="rounded-full "/>}
                                                    </div>
                                                    <div>
                                                        <DialogTitle className="text-left">{member.name}</DialogTitle>
                                                        <h3 className="uppercase text-sm font-medium">{member.role}</h3>
                                                    </div>
                                                </div>
                                            </DialogHeader>
                                            <DialogDescription
                                                className="min-h-72 max-h-96 overflow-y-auto py-3 pr-2 text-base text-left">{member.description}
                                            </DialogDescription>
                                        </DialogContent>
                                    </Dialog>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
