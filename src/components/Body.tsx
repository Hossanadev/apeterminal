import React from "react";
import Image from "next/image";
import icon1 from "../../public/assets/icons/icon1.svg";
import icon2 from "../../public/assets/icons/migos.svg"
import icon3 from "../../public/assets/icons/catmoto.svg"
import icon4 from "../../public/assets/icons/spin.svg"
import icon5 from "../../public/assets/icons/mores.svg"
import icon6 from "../../public/assets/icons/xcard.svg"
import forwardPress from "../../public/assets/icons/nexticon.svg"

import {UpcomingLaunchesCard} from "@/components/UpcomingLaunchesCard";
import {CompletedSalesCard} from "@/components/CompletedSalesCard";
import footerImage from "../../public/assets/images/footer_img.webp"
import bodyBG from "../../public/assets/images/body_bg.webp"

export const Body: React.FC = () => {
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
                        <video autoPlay={true} loop={true} className="w-full h-full object-cover"
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
                    <UpcomingLaunchesCard
                        videoURL={"https://dl.dropboxusercontent.com/scl/fi/ebq3fzgcqq6dkwiisnl08/video2.mp4?rlkey=1qc0yiivyrp4wvy9f5ip0ql76&dl=0"}
                        tags={["AI", "TECH"]}
                        name={"Ponder"}
                        iconSRC={icon1}
                        endsIn={"2d 11h 14m 23s"}
                        marketMaker={"TBA"}
                        salesType={"Ape Launch"}
                        totalRaise={"$200,000"}
                        buttonURL={"#"}
                        buttonText={"Participate Now"}/>
                    <UpcomingLaunchesCard
                        videoURL={"https://dl.dropboxusercontent.com/scl/fi/e716x8pa9lx7et0cpp7pd/VID_20240309_031317_941-1.mp4?rlkey=83rcy2m0i5ze5v0q5ts1uh6uk&dl=0"}
                        tags={["AI", "TECH"]}
                        name={"Kadoshid"}
                        iconSRC={icon2}
                        endsIn={"2d 11h 14m 23s"}
                        marketMaker={"TBA"}
                        salesType={"Ape Launch"}
                        totalRaise={"$200,000"}
                        buttonURL={"#"}
                        buttonText={"Participate Now"}/>
                    <UpcomingLaunchesCard
                        videoURL={"https://dl.dropboxusercontent.com/scl/fi/fv94vl58tcz09tnayxdw0/2_5449705408564315062-1-1.mp4?rlkey=27isvajf46v4vsdj4yhqdarau&dl=0"}
                        tags={["AI", "TECH"]}
                        name={"Kadoshid"}
                        iconSRC={icon3}
                        endsIn={"2d 11h 14m 23s"}
                        marketMaker={"TBA"}
                        salesType={"Ape Launch"}
                        totalRaise={"$200,000"}
                        buttonURL={"#"}
                        buttonText={"Participate Now"}/>
                    <UpcomingLaunchesCard
                        videoURL={"https://dl.dropboxusercontent.com/scl/fi/r9x62u9544gff2tbz14ic/Ai.mp4?rlkey=t1fonl0ms9vot0u1i80zl5ir1&dl=0"}
                        tags={["AI", "TECH"]}
                        name={"Kadoshid"}
                        iconSRC={icon4}
                        endsIn={"2d 11h 14m 23s"}
                        marketMaker={"TBA"}
                        salesType={"Ape Launch"}
                        totalRaise={"$200,000"}
                        buttonURL={"#"}
                        buttonText={"Participate Now"}/>
                    <UpcomingLaunchesCard
                        videoURL={"https://dl.dropboxusercontent.com/scl/fi/9xnry9xot0j9ksfmr68p6/cat.mp4?rlkey=p9k11rac1zvpsg119eibgnn5g&dl=0"}
                        tags={["AI", "TECH"]}
                        name={"Next Gem AI"}
                        iconSRC={icon5}
                        endsIn={"2d 11h 14m 23s"}
                        marketMaker={"TBA"}
                        salesType={"Ape Launch"}
                        totalRaise={"$200,000"}
                        buttonURL={"#"}
                        buttonText={"Participate Now"}/>
                    <UpcomingLaunchesCard
                        videoURL={"https://dl.dropboxusercontent.com/scl/fi/5kfuxzc6km6occ1z9l73k/techie.mp4?rlkey=ld65nf3yu010dox9gagj0kdfh&dl=0"}
                        tags={["AI", "TECH"]}
                        name={"Sharpe AI"}
                        iconSRC={icon6}
                        endsIn={"2d 11h 14m 23s"}
                        marketMaker={"TBA"}
                        salesType={"Ape Launch"}
                        totalRaise={"$200,000"}
                        buttonURL={"#"}
                        buttonText={"Participate"}/>

                    <Image src={bodyBG} alt={"bgIMG"} className={"hidden lg:block absolute -z-10 w-screen h-full"}/>
                </div>
                <div className={"bg-[#121212] py-3 mt-10 lg:mt-0 w-full px-2.5 lg:px-[100px] md:px-40 xl:px-52 z-30"}>
                    <p className={"text-center font-medium text-xl lg:text-3xl text-white my-5 md:my-10"}><span
                        className={"bg-gradient-to-r from-[#ff741e] to-[#6feb7c] lg:text-3xl text-transparent bg-clip-text"}>Completed</span> Sales
                    </p>
                    <div className={"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10"}>
                        <CompletedSalesCard
                            icon={icon1}
                            name={"BonusBlock"}
                            authROI={"30x"}
                            salesType={"Ape Launch"}
                            totalRaise={"$350,980"}
                            ticker={"2d 4h 22m 08s"}
                            linkURL={"#"}/>
                        <CompletedSalesCard
                            icon={icon6}
                            name={"SatoshiSync"}
                            authROI={"53x"}
                            salesType={"Ape Launch"}
                            totalRaise={"$950,980"}
                            ticker={"0d 14h 02m 25s"}
                            linkURL={"#"}/>
                        <div className={"hidden xl:block"}>
                            <CompletedSalesCard
                                icon={icon3}
                                name={"Artyfact"}
                                authROI={"13x"}
                                salesType={"Ape Launch"}
                                totalRaise={"$110,980"}
                                ticker={"10d 04h 23m 15s"}
                                linkURL={"#"}/>
                        </div>
                    </div>
                    <div className={"text-white text-lg py-8 text-center"}>{'<-  3 / 7  ->'}</div>
                </div>
                <section className={"relative bg-black flex justify-center max-lg:h-[600px] items-center overflow-hidden w-full"}>
                    <Image src={footerImage} alt={"footerbackgroundImg"}
                           className={"w-full z-10 h-full lg:h-[60%]  object-cover"}/>
                    <div
                        className="absolute top-1/2 right-0 left-0 transform lg:-translate-y-1/5 z-10 px-5 text-white text-center">
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
                                className={"bg-[#ff7722] max-sm:text-sm rounded-3xl px-6 py-3 border text-black border-black"}>
                                Apply for Launchpad
                            </button>
                        </div>
                    </div>
                </section>
            </section>
    )
}
