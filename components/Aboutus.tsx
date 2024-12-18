import { CheckIcon, StarIcon, VideoIcon } from "lucide-react";
import React from "react";
import RevealAnimation from "./framer/RevealAnimation";
import MobileScreenAnimation from "./framer/MobileScreenAnimation";

const Aboutus = () => {
  return (
    <div
      id="aboutus"
      className="pt-24 flex flex-col items-center px-4 middle overflow-hidden"
    >
      <RevealAnimation screenReveal>
        <div className="flex flex-row items-center gap-2 text-sm text-transparent bg-clip-text brand_gradient">
          <StarIcon size={16} className="text-[#9B4DCA]" />
          <div className="font-semibold">Want to know more about us?</div>
        </div>
      </RevealAnimation>
      <RevealAnimation screenReveal delay={0.2}>
        <div className="mt-4 text-4xl font-semibold">About Us</div>
      </RevealAnimation>
      <div className="flex flex-col-reverse lg:flex-row gap-10 w-full mt-20 lg:items-center">
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <MobileScreenAnimation />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-8">
          <RevealAnimation screenReveal>
            <div className="font-semibold text-4xl text-white">
              {`We're your top choice for Discord needs.`}
            </div>
          </RevealAnimation>
          <RevealAnimation screenReveal delay={0.2}>
            <div className="text-muted-foreground">
              {`With over 24 months of experience, our server boosting service stands as the pinnacle of reliability, respect, and renown in the industry.`}
            </div>
          </RevealAnimation>
          <div className="flex flex-col gap-3">
            <RevealAnimation screenReveal delay={0.4}>
              <div className="flex flex-row items-center gap-2">
                <CheckIcon size={16} className="text-[#9B4DCA]" />
                <div className="text-white font-medium">
                  {`24/7 Customer Support`}
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation screenReveal delay={0.6}>
              <div className="flex flex-row items-center gap-2">
                <CheckIcon size={16} className="text-[#9B4DCA]" />
                <div className="text-white font-medium">{`Instant Delivery`}</div>
              </div>
            </RevealAnimation>
            <RevealAnimation screenReveal delay={0.8}>
              <div className="flex flex-row items-center gap-2">
                <CheckIcon size={16} className="text-[#9B4DCA]" />
                <div className="text-white font-medium">
                  {`Most affordable pricing.`}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
