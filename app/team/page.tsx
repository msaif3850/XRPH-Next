'use client';
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

export default function Exchanges() {

    return (
        <>
            <Placeholder title={'Meet Our Team'} key={'team'} description={''}/>
            <div className="pb-20 px-2">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-10 lg:gap-y-20 lg:gap-x-16">
                        {TeamMembers.map((member, index) => (
                            <div key={index + 1} className="group text-center">
                                <div className="flex justify-center items-center mb-0.5">
                                    <Image src={member.img} alt={member.name} width={200} height={200}
                                           className="rounded-full grayscale group-hover:grayscale-0"/>
                                </div>
                                <div className="mb-3">
                                    <h2 className="text-2xl font-bold text-gradient uppercase mb-2">{member.name}</h2>
                                    <h3 className="uppercase text-sm font-bold">{member.role}</h3>
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <Link href={member.link} key={member.link} target="_blank" className="text-xl">
                                        <member.icon className="h-5 w-5" aria-hidden="true"/>
                                    </Link>
                                    <span className="font-sans">|</span>

                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="outline"
                                                    className="border-0  shadow-none hover:bg-transparent">Read
                                                Bio<FaAngleRight
                                                    className="group-hover:translate-x-2 duration-300 transition-all"/></Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-7xl">
                                            <DialogHeader>
                                                <div className="flex items-center gap-2">
                                                    <div>
                                                        {<Image src={member.img} alt={member.name} height={40}
                                                                width={40} className="rounded-full "/>}
                                                    </div>
                                                    <div>
                                                        <DialogTitle
                                                            className="text-left text-black">{member.name}</DialogTitle>
                                                        <h3 className="uppercase text-sm font-medium">{member.role}</h3>
                                                    </div>
                                                </div>
                                            </DialogHeader>
                                            <DialogDescription
                                                className="min-h-72 max-h-96 overflow-y-auto py-3 pr-2 text-base text-black text-left">{member.description}
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

/*<Drawer open={openStates[index] || false} onOpenChange={(isOpen) => handleOpenChange(index, isOpen)}>
                                            <DrawerTrigger className="underline hover:no-underline">Read Bio</DrawerTrigger>
                                            <DrawerContent>
                                                <DrawerHeader>
                                                    <div className="flex justify-between items-center">
                                                        <DrawerTitle>{member.name}</DrawerTitle>
                                                        <DrawerClose>
                                                            <Button variant="destructive">Close</Button>
                                                        </DrawerClose>
                                                    </div>
                                                    <DrawerDescription >{member.description}</DrawerDescription>
                                                </DrawerHeader>
                                            </DrawerContent>
                                        </Drawer>*/