"use client";

import { cn } from "@/lib/utils";
import {
  HandCoinsIcon,
  GemIcon,
  BookCheckIcon,
  ScaleIcon,
  MessageCircleMoreIcon,
  SunMoonIcon,
  WorkflowIcon,
} from "lucide-react";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import RevealAnimation from "./framer/RevealAnimation";

const FeaturesData = [
  {
    icon: <HandCoinsIcon size={30} className="text-[#9B4DCA]" />,
    textColor: "text-white",
    title: "Seamless Payment",
    description:
      "Ordering from us is a breeze. We accept all major cryptocurrencies, Cash App, PayPal, Venmo, cards, and gift cards for your convenience.",
  },
  {
    icon: <GemIcon size={30} className="text-[#9B4DCA]" />,
    textColor: "text-white",
    title: "Cheap Prices",
    description:
      "Our ultimate motto is to ensure that everyone, regardless of their location, can access high-quality services at an affordable price.",
  },
  {
    icon: <BookCheckIcon size={30} className="text-[#9B4DCA]" />,
    textColor: "text-white",
    title: "Trusted & Reputated Seller",
    description:
      "Our customers consistently provide positive feedback, praising not only our top-tier services but also our premium support.",
  },
  {
    icon: <ScaleIcon size={30} className="text-[#9B4DCA]" />,
    textColor: "text-white",
    title: "Legal Methods",
    description:
      "Rest assured, every service we offer is acquired through entirely legal channels, ensuring you peace of mind without concerns about reversals.",
  },
  {
    icon: <MessageCircleMoreIcon size={30} className="text-[#9B4DCA]" />,
    textColor: "text-white",
    title: "24/7 Support",
    description:
      "Our unmatched chat support is available 24/7, ready to address any questions or concerns you may have, every single day.",
  },
  {
    icon: <WorkflowIcon size={30} className="text-[#9B4DCA]" />,
    textColor: "text-white",
    title: "Automatic Delivery",
    description:
      "Your order will be delivered in just around 30 seconds after placement, thanks to our ultra-fast automatic delivery system.",
  },
];

const Features = () => {
  const controls = useAnimation();
  const screenRef = useRef(null);
  const inScreenView = useInView(screenRef, {
    once: false,
    margin: "-50px 0px -100px 0px",
  });

  useEffect(() => {
    if (inScreenView) {
      controls.start("visible");
    }
  }, [inScreenView]);

  return (
    <div id="features" className="px-4 mt-20">
      <div className="middle flex items-center flex-col">
        <RevealAnimation screenReveal>
          <div className="flex flex-row items-center gap-2 text-sm text-transparent bg-clip-text brand_gradient">
            <SunMoonIcon size={16} className="text-[#9B4DCA]" />
            <div className="font-semibold">We Have Exciting Features</div>
          </div>
        </RevealAnimation>
        <RevealAnimation screenReveal delay={0.2}>
          <div className="mt-4 text-4xl font-semibold">Features</div>
        </RevealAnimation>

        {/* Features */}
        <div
          ref={screenRef}
          className="grid grid-cols-1 gap-4 sm:gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {FeaturesData.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              animate={controls}
              whileHover={{
                scale: 1.03,
                rotate: 1.5, // Slight tilt to the right
              }}
              transition={{
                duration: 0, // Instant tilt
              }}
              className={cn(
                FeaturesData.length - 1 === index
                  ? "sm:col-span-1 md:col-span-2 lg:col-span-1"
                  : "",
                "relative flex flex-col items-start p-8 rounded-lg bg-[#0f0f0f] transition-all ease-linear",
                "hover:bg-transparent hover:border-purple-500 hover:border-l-4 hover:shadow-lg"
              )}
            >
              <div className="p-3 rounded-full bg-[#9B4DCA]/10">
                {feature.icon}
              </div>
              <div
                className={cn(
                  "mt-4 font-semibold text-white transition-colors duration-200",
                  "hover:text-purple-500"
                )}
              >
                {feature.title}
              </div>
              <div className="mt-2 text-sm text-start text-muted-foreground">
                {feature.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
