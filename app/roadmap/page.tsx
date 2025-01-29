import PageTitleImage from "@/components/layout/PageTitleImage";
import Image from "next/image";
export default function Roadmap() {
    return (
        <>
            <PageTitleImage image={'/xrph-logos/logo-36-month-roadmap.webp'} alt={'36 month roadmap'}/>
            <ul className="timeline timeline-vertical">
                <li>
                    <div className="timeline-start timeline-box">
                        <h1>Q1 2025</h1>
                        <ul>
                            <li>XRP Healthcare Global Announcement</li>
                            <li>XRPH AI App launched on Google Play and Apple Store</li>
                            <li>Encryption layer implemented to ensure user data protection</li>
                            <li>1.2M XRPH distributed as staking rewards</li>
                        </ul>
                    </div>
                    <div className="timeline-middle">
                        <Image src={'/icon.png'} alt={'logo'} width={50} height={50}/>
                    </div>
                    <hr className="bg-jamni"/>
                </li>
                <li>
                    <hr className="bg-primary"/>
                    <div className="timeline-middle">
                        <Image src={'/icon.png'} alt={'logo'} width={50} height={50}/>
                    </div>
                    <div className="timeline-end timeline-box">
                        <h1>Q2 2025</h1>
                        <ul>
                            <li>XRP Healthcare Global Announcement</li>
                            <li>XRPH AI App launched on Google Play and Apple Store</li>
                            <li>Encryption layer implemented to ensure user data protection</li>
                            <li>1.2M XRPH distributed as staking rewards</li>
                        </ul>
                    </div>
                    <hr className="bg-primary"/>
                </li>
                <li>
                    <hr className="bg-primary"/>
                    <div className="timeline-start timeline-box">
                        <h1>Q3 2025</h1>
                        <ul>
                            <li>XRP Healthcare Global Announcement</li>
                            <li>XRPH AI App launched on Google Play and Apple Store</li>
                            <li>Encryption layer implemented to ensure user data protection</li>
                            <li>1.2M XRPH distributed as staking rewards</li>
                        </ul>
                    </div>
                    <div className="timeline-middle">
                        <Image src={'/icon.png'} alt={'logo'} width={50} height={50}/>
                    </div>
                    <hr/>
                </li>
                
            </ul>
        </>
    )
}