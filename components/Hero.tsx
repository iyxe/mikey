"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import RevealAnimation from "./framer/RevealAnimation";
import { LINKS } from "./config";

// Dynamically import Lottie to disable SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Import your Lottie animation data
import DiscordNitroLottieAnimation from "@/assests/LOTTIE/discord-nitro-lottie.json";

const Hero = () => {
  return (
    <div className="px-4 pt-10 lg:pt-0">
      <div className="middle relative">
        <RevealAnimation>
          <div className="flip-horizontally absolute lg:left-[-20px] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:top-[140px] h-[140px] w-[140px]">
            <Lottie animationData={DiscordNitroLottieAnimation} loop={true} />
          </div>
        </RevealAnimation>
        <div className="flex w-full flex-col items-center gap-4 py-24 lg:flex-row">
          {/* Left Container */}
          <div className="relative flex flex-col items-center gap-4 text-center lg:w-[60%] lg:items-start lg:text-start">
            {/* gradient shadow */}
            <div className="h-[300px] w-[300px] brand_gradient blur-[150px] absolute rounded-full opacity-50"></div>
            <div className="flex flex-col text-4xl font-semibold sm:text-[55px] sm:leading-[68px] z-10">
              <RevealAnimation delay={0.2}>
                <span>Automate Your</span>
              </RevealAnimation>
              <div className="flex flex-col md:flex-row items-center md:gap-4">
                <RevealAnimation delay={0.4}>Discord </RevealAnimation>
                <RevealAnimation className="inline-block" delay={0.6}>
                  <span className="discord-shadow brand_gradient bg-clip-text text-transparent">
                    Server Boosts
                  </span>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.8}>
                <span>at Discounted Rates!</span>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={1}>
              <div className="max-w-[550px] text-center text-muted-foreground sm:text-start">
                {`Reliant Services is the Fastest and Cheapest option  to buy high quality Server Boosts & Nitro. We offer the most budget and user friendly options to help you get the product you are looking for.`}
              </div>
            </RevealAnimation>
            <div className="mt-3 flex flex-row items-center gap-4">
              <RevealAnimation delay={1.2}>
                <Link href={`/#products`}>
                  <Button
                    variant={"brand"}
                    className="flex flex-row items-center gap-2"
                  >
                    <span>Shop Now</span>
                    <ChevronRight size={16} />
                  </Button>
                </Link>
              </RevealAnimation>
              <RevealAnimation delay={1.4}>
                <Link href={LINKS.DISCORD}>
                  <Button
                    variant={"outline"}
                    className="flex flex-row items-center gap-2"
                  >
                    <span>Join Discord</span>
                    <DiscordLogoIcon />
                  </Button>
                </Link>
              </RevealAnimation>
            </div>
          </div>
          {/* Right Container */}
          <div className="relative hidden w-[40%] lg:flex">
            <div className="absolute flex h-[600px] w-full justify-center blur-2xl opacity-30">
              <Image
                className="relative h-max w-[500px] top-[-50px]"
                alt="Mobile phone image"
                src={"/PNG/phone_shadow.png"}
                width={1250}
                height={2410}
                priority
                draggable={false}
              />
            </div>
            {/* mobile div */}
            <div className="relative flex h-[600px] w-full justify-center">
              <Image
                className="relative h-max w-[500px] top-[-50px]"
                alt="Mobile phone image"
                src={"/PNG/phone.png"}
                width={1250}
                height={2410}
                priority
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
