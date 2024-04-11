import React from "react";
import Image from "next/image";
import icon1 from "../../public/assets/icons/icon1.svg";
import authROiIcon from "../../public/assets/icons/metrixicon.svg"
import tickerIcon from "../../public/assets/icons/tickericon.svg"
import totalRaiseIcon from "../../public/assets/icons/totalRaiseicon.svg"
import salesTypeIcon from "../../public/assets/icons/saleTypeIcon.svg"
import Link from "next/link";
import {Facebook, Instagram, Twitter} from "react-feather";

type CompletedSalesCardType = {
    icon: string;
    name: string;
    authROI: string;
    ticker: string;
    totalRaise: string;
    salesType: string;
    linkURL: string;
}

export const CompletedSalesCard: React.FC<CompletedSalesCardType> = (props) => {
    const {icon, name, salesType, ticker, totalRaise, authROI, linkURL} = props;
    return (
        <div className={"border border-gray-700 rounded-3xl py-8 px-5 flex flex-col justify-center"}>
            <div className={"flex flex-col align-middle items-center justify-center space-y-3"}>
                <Image src={icon} alt={"icon"}/>
                <p className={"text-white md:text-xl font-semibold"}>{name}</p>
            </div>
            <div className={"space-y-4 mt-14 text-sm text-[#b1b4b3]"}>
                <div className={"flex justify-between items-center border-b-[0.5px] border-gray-700 py-3"}>
                    <div className={"flex items-center gap-1"}>
                        <Image src={authROiIcon} alt={"authROiIcon"} className={"h-5 w-5"}/>
                        <p className={"text-xs"}>ATH ROI</p>
                    </div>
                    <p className={"text-white"}>{authROI}</p>
                </div>
                <div className={"flex justify-between items-center border-b-[0.5px] border-gray-700 py-3"}>
                    <div className={"flex items-center gap-1"}>
                        <Image src={tickerIcon} alt={"tickerIcon"} className={"h-5 w-5"}/>
                        <p className={"text-xs"}>Ticker</p>
                    </div>
                    <p className={"text-[#ff7722]"}>{ticker}</p>
                </div>
                <div className={"flex justify-between items-center border-b-[0.5px] border-gray-700 py-3"}>
                    <div className={"flex items-center gap-1"}>
                        <Image src={totalRaiseIcon} alt={"totalRaiseIcon"} className={"h-5 w-5"}/>
                        <p className={"text-xs"}>Total Raise</p>
                    </div>
                    <p className={"text-white"}>{totalRaise}</p>
                </div>
                <div className={"flex justify-between items-center border-b-[0.5px] border-gray-700 py-3"}>
                    <div className={"flex items-center gap-1"}>
                        <Image src={salesTypeIcon} alt={"salesTypeIcon"} className={"h-5 w-5"}/>
                        <p className={"text-xs"}>Sales Type</p>
                    </div>
                    <p className={"text-white"}>{salesType}</p>
                </div>
            </div>
            <Link href={linkURL}>
                <button className={"hover:bg-gray-500 transition-all duration-800 text-white px-6 py-3 rounded-3xl w-full text-[13px] mt-6 border border-gray-700"}>
                  Details
               </button>
            </Link>
            <div className={"flex items-center justify-center"}>
                <div className={"bg-black rounded-3xl px-6 py-3 flex items-center mt-6 w-fit gap-3"}>
                    <Instagram className={"h-5 w-5 text-[#B1B4B3]"}/>
                    <Facebook className={"h-5 w-5 text-[#B1B4B3]"}/>
                    <Twitter className={"h-5 w-5 text-[#B1B4B3]"}/>
                </div>
            </div>
        </div>
    )
}