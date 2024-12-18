import React from "react";
import RevealAnimation from "./framer/RevealAnimation";
import { BitcoinIcon, ShoppingBagIcon } from "lucide-react";
import DisplayProducts from "./DisplayProducts";
import Script from "next/script";

const Products = async () => {
  let productsData = await fetch(
    `https://dev.sellix.io/v1/groups?timestamp=${Date.now()}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SELLIX_API_KEY}`, // Replace YOUR_API_KEY HERE with your Sellix API key
      },
    }
  ).then((res) => res.json() as Promise<any>);

  return (
    <div id="products" className="pt-24 flex flex-col items-center px-4 middle">
      <Script
        src="https://cdn.sellix.io/static/js/embed.js"
        strategy="beforeInteractive"
      />
      <link
        href="https://cdn.sellix.io/static/css/embed.css"
        rel="stylesheet"
      />
      <RevealAnimation screenReveal>
        <div className="flex flex-row items-center gap-2 text-sm text-transparent bg-clip-text brand_gradient">
          <ShoppingBagIcon size={16} className="text-[#9B4DCA]" />
          <div className="font-semibold">Explore the products</div>
        </div>
      </RevealAnimation>
      <RevealAnimation screenReveal delay={0.2}>
        <div className="mt-4 text-4xl font-semibold">Products</div>
      </RevealAnimation>
      <DisplayProducts products={productsData} />
    </div>
  );
};

export default Products;
