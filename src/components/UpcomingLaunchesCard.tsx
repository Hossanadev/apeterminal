"use client"

import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import forwardPress from "../../public/assets/icons/nexticon.svg";

type UpcomingLaunchesCardType = {
    videoURL: string;
    iconSRC: string;
    name: string;
    tags: string[];
    totalRaise: string;
    endsIn: string;
    salesType: string;
    marketMaker: string;
    buttonText: string;
    buttonURL: string;
    imageSRC: string,
    imageALT: string
}

export const UpcomingLaunchesCard: React.FC<UpcomingLaunchesCardType> = ({videoURL, iconSRC, name, salesType, marketMaker, tags,endsIn,
totalRaise, buttonURL, buttonText, imageSRC, imageALT}) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 1024);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile]);

    return (
        <>
            <div className={""}>
                {
                    isMobile ? <Image src={imageSRC} alt={imageALT} className={"w-full object-cover h-[239px] rounded-t-xl bg-black"} /> :
                        <video controls={false} height={239} autoPlay preload={"auto"} muted loop
                               className="w-full object-cover h-[239px] rounded-t-xl bg-black custom-video"
                               style={{borderTop: 6}}>
                            <source src={videoURL}
                                    type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                }
                <div className={"bg-black px-10 py-6 rounded-b-xl"}>
                    <div className={"flex items-center gap-2"}>
                        <Image src={iconSRC} alt={"Nuklai"} className={"h-10 w-10"}/>
                        <p className={"text-white font-bold text-xl"}>{name}</p>
                    </div>
                    <div className={"flex flex-row items-center gap-2 my-4 w-full"}>
                    {
                       tags?.length > 1 && tags?.map((tag: string, index: number) => {
                           return (
                               <p key={index} className={"bg-[#141414] text-[#ff7722] rounded text-xs w-fit px-1.5 py-0.5"}>{tag}</p>
                           )
                        })
                    }
                    </div>
                    <div className={"space-y-4 text-sm text-[#b1b4b3]"}>
                        <div className={"flex justify-between items-center"}>
                        <p>Total Raise</p>
                            <p className={"text-white"}>{totalRaise}</p>
                        </div>
                        <div className={"flex justify-between items-center"}>
                            <p>Ends in</p>
                            <p className={"text-[#ff7722]"}>{endsIn}</p>
                        </div>
                        <div className={"flex justify-between items-center"}>
                            <p>Sales Type</p>
                            <p className={"text-white"}>{salesType}</p>
                        </div>
                        <div className={"flex justify-between items-center"}>
                            <p>Market Maker</p>
                            <p className={"text-white"}>{marketMaker}</p>
                        </div>
                    </div>
                    <Link href={buttonURL}>
                        <button className={"bg-[#6feb7c] flex justify-center items-center gap-4 text-black px-7 w-full py-3 my-6 rounded-3xl"}>
                            <p>{buttonText}</p>
                            <Image src={forwardPress} alt="forward"/>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}