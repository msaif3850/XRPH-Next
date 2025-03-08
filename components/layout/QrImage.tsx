import Image from "next/image";

export default function QrImage({ type, width = 200, height = 200, className = "" }:{ type: string, width?: number, height?: number, className?: string}) {
    // Define the image source based on type
    const imageSrc = type === "ai" ? "/icons/qr-ai.svg" : "/icons/qr-wallet.svg";
    const altText = type === "ai" ? "Download XRPH AI" : "Download XRPH Wallet";

    return (
        <Image
            src={imageSrc}
            alt={altText}
            width={width}
            height={height}
            className={`mx-auto border p-2 bg-gradient-to-r from-haraa to-jamni ${className}`}
        />
    );
}
