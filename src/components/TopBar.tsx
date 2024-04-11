"use client"
import React, {useState, useEffect} from 'react';
import Image from "next/image";
import logo from "../../public/assets/images/apeterminallogo.svg"
import icon1 from "../../public/assets/icons/icon1.svg"
import {TopBarCard} from "@/components/TopBarCard";
import Link from "next/link";
import {Menu, X} from "react-feather";
import {MobileNav} from "@/components/MobileNav";

export const TopBar: React.FC = () => {
    const [showMobileNavbar, setShowMobileNavbar] = useState(false);
    const [scrolledToTop, setScrolledToTop] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos === 0) {
                setScrolledToTop(true);
            } else if (currentScrollPos > prevScrollPos) {
                setScrolledToTop(false);
            } else {
                setScrolledToTop(true);
            }
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <>
            <header
                className={`z-50 flex justify-between px-2.5 md:px-16 lg:px-[100px] transition-all duration-500 py-[12px] ${prevScrollPos == 0 ? "bg-opacity-100" : "backdrop-filter bg-opacity-30 backdrop-blur-lg"} bg-black z-10 fixed w-full top-0`}>
                <Link href={"#"}>
                    <Image src={logo} alt={"ape terminal logo"} className={"h-[40px] w-[130px]"}/>
                </Link>
                <div className={"gap-2 hidden lg:flex"}>
                    <TopBarCard name={"Launchpad"} borderColor={"#ff741e40"} icon={icon1} textColor={"#ff741e"}
                                linkURL={"#"}
                                className={"cursor-pointer hover:text-[#FF741E] transition-all duration-500"}/>
                    <TopBarCard name={"Transparency"} borderColor={"#f4fdab40"} icon={icon1} textColor={"#f4fdab"}
                                linkURL={"#"}/>
                    <TopBarCard name={"Connect Wallet"} borderColor={"#ffffff"} icon={icon1} textColor={"#000000"}
                                backgroundColor={"#ffffff"} borderRadius={"3px"} className={"border-0"} linkURL={"#"}/>
                </div>

                {/*    mobile nav*/}
                <div className={"hidden max-lg:flex text-sm items-center space-x-6"}>
                    <TopBarCard hideIcon icon={""} name={"Connect Wallet"} borderColor={"#ffffff"} textColor={"#000000"}
                                backgroundColor={"#ffffff"} borderRadius={"26px"} linkURL={"#"}
                                className={"py-0 px-4 font-semibold"}/>

                    {
                        !showMobileNavbar ?
                            <Menu onClick={() => setShowMobileNavbar(!showMobileNavbar)}
                                  className={"cursor-pointer font-semibold size-8 text-[#b2b4b3] bg-blend-color z-50"}/>
                            : <X onClick={() => setShowMobileNavbar(!showMobileNavbar)}
                                    className={"cursor-pointer font-semibold size-8 text-[#b2b4b3] bg-blend-color z-50"}/>
                    }
                </div>
            </header>
            <div className={`transition-all duration-500 ease-in-out`}>
                {
                    showMobileNavbar && <MobileNav showMobileNavbar={showMobileNavbar} setShowMobileNavbar={setShowMobileNavbar} />
                }
            </div>
        </>
    )
}
