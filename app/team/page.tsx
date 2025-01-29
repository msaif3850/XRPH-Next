import Placeholder from "@/components/layout/Placeholder";
import {TeamMembers} from "@/variables";
import Link from "next/link";
import Image from "next/image";

export default function Exchanges() {
    return (
        <>
            <Placeholder title={'Meet Our Team'} key={'team'} description={''}/>
            <div className="pb-20 pt-14 px-2">
                <div className="max-w-6xl mx-auto ">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                        {TeamMembers.map((member, index) => (
                            <div key={index+1} className="group text-center ">
                                <div className="flex justify-center items-center mb-2">
                                    <Image src={member.img} alt={member.name} width={200} height={200}
                                           className="rounded-full " />
                                </div>
                                <div>
                                    <h2 className="text-2xl">{member.name}</h2>
                                    <h3 className="uppercase">{member.role}</h3>
                                </div>
                                <Link href={member.link} key={member.link} target="_blank">{member.name}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}