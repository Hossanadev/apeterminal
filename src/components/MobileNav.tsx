import React, {Dispatch, MouseEventHandler, SetStateAction} from "react";
import {Instagram, Menu, Twitter, X} from "react-feather";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/images/apeterminallogo.svg";
import {TopBarCard} from "@/components/TopBarCard";
import icon1 from "../../public/assets/icons/icon1.svg";
import icon2 from "../../public/assets/icons/metrixicon.svg";

interface MobileNavType {
    showMobileNavbar: boolean;
    setShowMobileNavbar: (data: boolean) => void;
}

export const MobileNav: React.FC<MobileNavType> = ({showMobileNavbar, setShowMobileNavbar}) => {
    return (
        <div className={"backdrop py-[12px] bg-opacity-90 text-white backdrop-blur-lg bg-black z-50 fixed w-full min-h-screen"}>
            <div className={"flex justify-between items-center px-2.5 md:px-16 lg:px-[100px] transition-all duration-500 top-0"}>
                <Link href={"#"}>
                    <Image style={{height: "auto", width: "auto"}} src={logo} alt={"ape terminal logo"} className={"h-[40px] w-[130px]"}/>
                </Link>
                <div className={"hidden max-lg:flex text-sm items-center space-x-6"}>
                    <X onClick={() => setShowMobileNavbar(!showMobileNavbar)} className={"cursor-pointer font-semibold size-8 text-[#ffffff] bg-blend-color z-50"}/>
                </div>
            </div>
            <div className={"mt-14"}>
                <div className={"mx-20"}>
                    <TopBarCard hideIcon icon={icon1} name={"Connect Wallet"} borderColor={"#ffffff"} textColor={"#000000"}
                                backgroundColor={"#ffffff"} borderRadius={"26px"} linkURL={"#"}
                                className={"font-bold text-black px-5 py-2"}/>
                </div>

                <div className={"mx-4"}>
                    <div className={"bg-[#1a1a1a] py-2 px-3.5 space-y-4 rounded-3xl text-xs my-7"}>
                        <Link href={"#"} className={"block"}>
                            <div className={`flex items-center justify-center border-[#ff772250] gap-x-2 py-4 px-6 border-[0.5px] rounded-3xl font-medium`}>
                                <Image src={icon1} alt={"icon"} className={`inline-block h-[20px] w-[20px]`} />
                                <p className={"inline-block text-[14px] text-[#ff7722]"}>Launchpad</p>
                            </div>
                        </Link>
                        <Link href={"#"} className={"block"}>
                            <div className={`flex items-center bg-black justify-center gap-x-2 py-4 px-6 border-[0.5px] border-gray-700 rounded-3xl font-medium`}>
                                <Image src={icon2} alt={"icon"} className={`inline-block h-[20px] w-[20px]`} />
                                <p className={"inline-block text-[14px] text-[#ffffff]"}>Transparency</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className={"flex justify-center flex-col items-center space-y-4"}>
                    <p className={"text-[#e5e7e7] text-md"}>Join our community</p>
                    <div className={"bg-[#1a1a1a] w-fit flex items-center p-1.5 gap-1 rounded-3xl text-xs"}>
                        <Twitter className={"bg-black p-1 rounded-3xl h-10 w-24 hover:cursor-pointer hover:text-yellow-400"}/>
                        <Instagram className={"bg-black p-1 rounded-3xl h-10 w-24 hover:cursor-pointer hover:text-yellow-400"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}