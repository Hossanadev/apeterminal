"use client"

import React, {useEffect, useState} from "react";
import Image from "next/image";
import icon1 from "../../public/assets/icons/icon1.svg";
import forwardPress from "../../public/assets/icons/nexticon.svg"
import {UpcomingLaunchesCard} from "@/components/UpcomingLaunchesCard";
import {CompletedSalesCard} from "@/components/CompletedSalesCard";
import footerImage from "../../public/assets/images/footer_img.webp"
import bodyBG from "../../public/assets/images/body_bg.webp"
import {ArrowLeft, ArrowRight} from "react-feather";
import {CompletedSalesData} from "@/utils/CompletedSalesData";
import {UpcomingLaunchesData} from "@/utils/UpcomingLaunchesData";

export const Body: React.FC = () => {
    const [upcomingLaunches, setUpcomingLaunches] = useState(UpcomingLaunchesData)
    const [completedSales, setCompletedSales] = useState(CompletedSalesData);
    const [startIndex, setStartIndex] = useState(0);
    const [groupSize, setGroupSize] = useState<number>(1);

    const totalGroups = Math.ceil(completedSales.length / groupSize);
    const currentGroup = Math.floor(startIndex / groupSize) + 1;

    const handleClickNext = () => {
        if (startIndex + groupSize < completedSales.length) {
            setStartIndex(startIndex + groupSize);
        } else {
            setStartIndex(0);
        }
    };

    const handleClickPrev = () => {
        if (startIndex - groupSize >= 0) {
            setStartIndex(startIndex - groupSize);
        } else {
            setStartIndex(completedSales.length - groupSize)
        }
    };

    function handleResize() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) {
            setGroupSize(1);
        } else if (screenWidth >= 768 && screenWidth <= 1024) {
            setGroupSize(2);
        } else {
            setGroupSize(3);
        }
    }

    if (typeof window !== 'undefined') {
        window.onload = handleResize;
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleClickNext();
        }, 5000);
        return () => clearInterval(intervalId);
    }, [startIndex]);

    return (
            <section
                className={"relative bg-white flex flex-col justify-center w-full items-center align-middle mt-5 md:mt-20"}>
                <p className={"text-center font-semibold text-xl lg:text-3xl text-black z-30"}>Featured Launch</p>
                <div className={"lg:flex px-2.5 lg:px-[100px] md:px-40 xl:px-52 w-full z-30"}>
                    <div
                        className={"bg-black max-lg:rounded-md lg:rounded-l-md px-6 lg:px-12 py-10 max-lg:my-2 lg:my-4 w-full lg:w-[65%]"}>
                        <div className={""}>
                            <div className={"flex items-center gap-2"}>
                                <Image src={icon1} alt={"Nuklai"} className={"h-15 w-15"}/>
                                <p className={"text-white font-bold text-xl md:text-2xl"}>Nuklai</p>
                            </div>
                            <div className={"flex items-center gap-1 my-6"}>
                                <Image src={icon1} alt={"Nuklai"} className={"h-6 w-6"}/>
                                <Image src={icon1} alt={"Nuklai"} className={"h-6 w-6"}/>
                                <Image src={icon1} alt={"Nuklai"} className={"h-6 w-6"}/>
                                <Image src={icon1} alt={"Nuklai"} className={"h-6 w-6"}/>
                            </div>
                            <div className={"flex items-center gap-2"}>
                                <p className={"bg-[#141414] text-[#ff7722] rounded text-xs w-fit px-1 py-0.5"}>AI</p>
                                <p className={"bg-[#141414] text-[#ff7722] rounded text-xs w-fit px-1 py-0.5"}>Layer
                                    1</p>
                            </div>
                            <div className={"my-6"}>
                                <p className={"text-white font-medium text-2xl md:text-3xl"}>Power the Next Wave of <br
                                    className={"hidden lg:block"}/> AI with
                                    World-Class <br/> Data</p>
                            </div>
                            <div className={"space-y-2"}>
                                <p className={"text-white"}>Total Raise: <span
                                    className={"text-[#6feb7c]"}>$360,000</span>
                                </p>
                                <p className={"text-white"}>Registration Ends in: <span className={"text-[#6feb7c]"}>4d 18h 34m 55s</span>
                                </p>
                            </div>
                            <div className={"my-6"}>
                                <p className={"text-white text-xs"}>No KYC required to opt-in</p>
                            </div>
                            <button className={"bg-[#6feb7c] flex items-center gap-4 text-black px-7 py-3 rounded-3xl"}>
                                <p>{"Participate"}</p>
                                <Image src={forwardPress} alt="forward"/>
                            </button>
                        </div>
                    </div>
                    <div className={"hidden lg:block bg-black rounded-r-lg my-4 w-full"}>
                        <video loop autoPlay preload={"auto"} muted className="w-full h-full object-cover"
                               style={{borderTopRightRadius: 6, borderBottomRightRadius: 6}}>
                            <source
                                src={"https://dl.dropboxusercontent.com/scl/fi/ebq3fzgcqq6dkwiisnl08/video2.mp4?rlkey=1qc0yiivyrp4wvy9f5ip0ql76&dl=0"}
                                type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <p className={"text-center font-semibold text-xl lg:text-3xl text-black mt-5 md:mt-12 mb-2 md:mb-5 z-30"}>Live
                    and Upcoming Launches</p>
                <div
                    className={"relative grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 z-30 gap-5 w-full px-2.5 lg:pb-10 lg:px-[100px] md:px-40 xl:px-52"}>
                    {
                        upcomingLaunches.map((upcomingLaunch, index) => {
                            return <div key={index}>
                                <UpcomingLaunchesCard
                                    videoURL={upcomingLaunch.videoURL}
                                    imageSRC={upcomingLaunch.imageSRC}
                                    imageALT={upcomingLaunch.imageALT}
                                    tags={upcomingLaunch.tags}
                                    name={upcomingLaunch.name}
                                    iconSRC={upcomingLaunch.iconSRC}
                                    endsIn={upcomingLaunch.endsIn}
                                    marketMaker={upcomingLaunch.marketMaker}
                                    salesType={upcomingLaunch.salesType}
                                    totalRaise={upcomingLaunch.totalRaise}
                                    buttonURL={upcomingLaunch.buttonURL}
                                    buttonText={upcomingLaunch.buttonText}/>
                            </div>
                        })
                    }
                    <Image src={bodyBG} alt={"bgIMG"} className={"hidden lg:block absolute -z-10 w-screen h-full"}/>
                </div>
                <div className={"bg-[#121212] py-3 mt-10 lg:mt-0 w-full px-5 sm:px-24 lg:px-[100px] md:px-24 xl:px-52 z-30"}>
                    <p className={"text-center font-medium text-xl lg:text-3xl text-white my-5 md:my-10"}><span
                        className={"bg-gradient-to-r from-[#ff741e] to-[#6feb7c] lg:text-3xl text-transparent bg-clip-text"}>Completed</span> Sales
                    </p>
                    <div className={`grid ${groupSize == 1 ? "grid-cols-1" : ""} ${groupSize == 2 ? "grid-cols-2" : ""} ${groupSize == 3 ? "grid-cols-3" : ""} gap-10`}>
                        {
                            completedSales.slice(startIndex, startIndex + groupSize).map((completeSale, index) => {
                                return <div key={index}>
                                    <CompletedSalesCard
                                        icon={completeSale.icon}
                                        name={completeSale.name}
                                        authROI={completeSale.authROI}
                                        salesType={completeSale.salesType}
                                        totalRaise={completeSale.totalRaise}
                                        ticker={completeSale.ticker}
                                        linkURL={completeSale.linkURL}/>
                                </div>
                            })
                        }
                    </div>
                    <div className={"text-white text-lg py-8 flex justify-center items-center text-[#ffffff90] gap-x-5"}>
                        <div className={"hover:bg-[#1a1a1a] rounded-4xl px-3 py-1 rounded-3xl"}>
                            <ArrowLeft onClick={handleClickPrev} className={"cursor-pointer size-8"} />
                        </div>
                        {currentGroup} / {totalGroups}
                        <div className={"hover:bg-[#1a1a1a] rounded-4xl px-3 py-1 rounded-3xl"}>
                            <ArrowRight onClick={handleClickNext} className={"cursor-pointer size-8"} />
                        </div>
                    </div>
                </div>
                <section className={"relative bg-black flex justify-center max-lg:h-[600px] items-center overflow-hidden w-full"}>
                    <Image src={footerImage} alt={"footerbackgroundImg"}
                           className={"w-full z-10 h-full lg:h-[60%]  object-cover"}/>
                    <div
                        className="absolute top-1/2 right-0 left-0 transform lg:-translate-y-1/6 z-10 px-5 text-white text-center">
                        <div className={"text-5xl xl:text-6xl font-semibold text-black"}>
                            <p>
                                Launch on <br className={"hidden xl:block"}/>
                                Ape Terminal
                            </p>
                            <span className={"text-sm block lg:text-lg xl:text-xl font-normal leading-1 max-sm: my-5"}>Don’t miss the chance and super-charge your IDO launch!
                            </span>
                        </div>
                        <div className={"flex justify-center mt-2 lg:mt-8"}>
                            <button
                                className={"bg-[#ff7722] max-sm:text-sm rounded-3xl px-6 font-semibold py-3 border text-black border-black"}>
                                Apply for Launchpad
                            </button>
                        </div>
                    </div>
                </section>
            </section>
    )
}
