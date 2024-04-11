import React from "react";
import Image from "next/image";
import logo from "../../public/assets/images/apeterminallogo.svg"
import {ArrowRight, Instagram, Twitter} from "react-feather";
import Link from "next/link";

export const Footer: React.FC = () => {
    return (
        <div className={"text-white bg-[#121212] px-2.5 md:px-16 lg:px-[100px] transition-all duration-500  py-10"}>
          <Image src={logo} alt={"logo"} />
          <div className={"my-5 max-lg:space-y-3 lg:flex justify-between items-center"}>
              <div className={"bg-[#1a1a1a] w-fit flex items-center p-1.5 gap-1 rounded-3xl text-sm"}>
                  <p className={"bg-black py-1.5 px-4 max-sm:text-[10px] rounded-3xl cursor-pointer hover:text-[#FF741E] transition-all duration-500"}>Affiliates</p>
                  <p className={"bg-black py-1.5 px-4 max-sm:text-[10px] rounded-3xl cursor-pointer hover:text-[#FF741E] transition-all duration-500"}>FAQ</p>
                  <p className={"bg-black py-1.5 px-4 max-sm:text-[10px] rounded-3xl cursor-pointer hover:text-[#FF741E] transition-all duration-500"}>Yield App</p>
                  <p className={"bg-black py-1.5 px-4 max-sm:text-[10px] rounded-3xl cursor-pointer hover:text-[#FF741E] transition-all duration-500"}>Transparency</p>
              </div>
              <div className={"flex items-center space-x-3"}>
                  <p className={"text-[#e5e7e7] max-sm:text-xs"}>Join our community</p>
                  <div className={"bg-[#1a1a1a] w-fit flex items-center p-1.5 gap-1 rounded-3xl text-sm"}>
                      <Twitter className={"bg-black p-1 rounded-3xl h-7 w-12"} />
                      <Instagram className={"bg-black p-1 rounded-3xl h-7 w-12"} />
                  </div>
              </div>
          </div>
            <div className={"text-[#7e8182] text-sm max-lg:space-y-3 max-sm:text-xs lg:flex justify-between my-3"}>
                <p>Ape Terminal © 2024 . All rights reserved.</p>
                <div className={"flex items-center gap-x-3"}>
                    <Link href={"#"}><div className={"flex items-center cursor-pointer hover:text-[#FF741E] transition-all duration-500"}>
                        <p>Terms & Conditions</p>
                        <ArrowRight className="mx-2 size-5 rotate-45"/>
                    </div> </Link>
                    <Link href={"#"}><div className={"flex items-center cursor-pointer hover:text-[#FF741E] transition-all duration-500"}>
                        <p>Privacy Policy</p>
                        <ArrowRight className="mx-2 size-5 rotate-45"/>
                    </div></Link>
                </div>
            </div>
        </div>
    )
}