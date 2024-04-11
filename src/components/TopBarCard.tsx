import React from "react";
import Image from "next/image";
import Link from "next/link";

type TopBarCardType = {
    name: string;
    borderColor: string;
    textColor: string;
    linkURL: string;
    icon: string;
    hideIcon?: boolean;
    borderRadius?: string;
    backgroundColor?: string
    className?: string
}

export const TopBarCard: React.FC<TopBarCardType> = ({icon, name, borderColor,
                                                         textColor, backgroundColor, borderRadius, linkURL, className, hideIcon}) => {
    return (
        <Link href={linkURL}>
                <div style={{borderColor: borderColor, backgroundColor: backgroundColor, borderRadius: borderRadius}} className={`flex gap-x-2 py-2.5 px-5 border-[0.5px] rounded-xl font-medium` +
            className}>
                <Image src={icon} alt={name} className={`${hideIcon ? "hidden" : ""} inline-block h-[20px] w-[20px]`}/>
                <p style={{color: textColor}} className={"inline-block text-[14px]"}>{name}</p>
                </div>
        </Link>
    )
}