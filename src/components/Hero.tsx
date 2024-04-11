"use client"
import React, {useState, useEffect} from "react";
import bgMobileImg from "../../public/assets/images/mobileHero.webp"
import backgroundImg from "../../public/assets/images/hero_img.webp"
import backgroundPPLImg from "../../public/assets/images/hero_ppl.svg"
import Image from "next/image";

export const Hero: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile]);

  return (
    <section className={"relative pt-12 bg-black flex justify-center items-center overflow-hidden"}>
        <Image src={isMobile ? bgMobileImg : backgroundImg} alt={"backgroundImg"} className={"w-full z-10 object-cover transition-all duration-500"}/>
        <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
            <p className={"text-7xl md:text-6xl lg:text-7xl xl:text-8xl text-black font-semibold transition-all duration-500"}>Ape, <br /> Launch</p>
            <p className={"text-[16px] lg:text-[20px] xl-text-[24px] font-normal text-black"}>
                   Claim first access to the most important tokens in crypto, <br className={"hidden lg:block"}/>
                        and then supercharge them with cutting-edge MEV tech.
                    </p>
        </div>
        <Image src={backgroundPPLImg} alt={"backgroundImg"} className={"absolute w-full top-20 z-30 object-cover hero_anim"}/>
    </section>
  )
};
