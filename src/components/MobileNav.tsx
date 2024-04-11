import React from "react";
import {Instagram, Twitter} from "react-feather";

export const MobileNav: React.FC = () => {
    return (
        <div
            className={"text-center duration-500 transition-all space-y-6 backdrop bg-opacity-70 pt-[15%] sm:pt-[8%] text-white backdrop-blur-lg bg-black z-40 fixed w-full top-10 h-[40%] rounded-b-3xl"}>
            <a href={"#"} className={"hover:text-yellow-400 transition-all duration-500 block"}>Connect Wallet</a>
            <a href={"#"} className={"hover:text-yellow-400 transition-all duration-500 block"}>Launchpad</a>
            <a href={"#"} className={"hover:text-yellow-400 transition-all duration-500 block"}>Transparency</a>

            <div className={"flex flex-col items-center space-x-3"}>
                <p className={"text-[#e5e7e7] border-b border-gray-700 pb-2"}>Join our community!</p>
                <div className={"bg-[#1a1a1a] w-fit flex items-center p-1.5 gap-1 rounded-3xl text-sm mt-3"}>
                    <Twitter className={"bg-black p-1 rounded-3xl h-7 w-12 cursor-pointer hover:text-yellow-400"}/>
                    <Instagram className={"bg-black p-1 rounded-3xl h-7 w-12 cursor-pointer hover:text-yellow-400"}/>
                </div>
            </div>
        </div>
    )
}