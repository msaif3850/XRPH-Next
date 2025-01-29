import Placeholder from "@/components/layout/Placeholder";
import Image from "next/image";
import {FaAngleRight} from "react-icons/fa6";
import Link from "next/link";
import {Exchanges} from "@/variables";

export default function BuyExchanges() {
    return (
        <>
            <Placeholder title={'Buy XRPH.'} key={'buy'} description={'Exchanges where you can buy XRPH'}/>
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-md:max-w-md-mx-auto">
                    {Exchanges.map((exchange) => (
                        <Link href={exchange.link} key={exchange.id} title={exchange.name}>
                            <div className="relative h-[150px] group ">
                                <div
                                    className="bg-gradient-to-r from-haraa to-jamni group-hover:from-jamni group-hover:to-haraa p-1 rounded-2xl ">
                                    <div className="bg-white rounded-2xl overflow-hidden transition-all flex items-center justify-center h-[125px] ">
                                        <Image src={exchange.image} alt={exchange.name} width={300} height={200}
                                               className="transition-all duration-300 group-hover:scale-110 p-1 object-fill"/>
                                    </div>
                                </div>
                                <div
                                    className="absolute left-0 right-0 bottom-0 w-[160px] mx-auto rounded-full p-2 bg-gradient-to-r from-haraa to-jamni group-hover:from-jamni group-hover:to-haraa">
                                    <div
                                        className="text-center font-bold flex items-center justify-between text-white px-3">
                                        BUY XRPH <FaAngleRight className="group-hover:translate-x-2 duration-300 transition-all"/>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}