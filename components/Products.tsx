import RevealAnimation from "./framer/RevealAnimation"
import { ShoppingBagIcon } from "lucide-react"
import DisplayProducts from "./DisplayProducts"

const Products = async () => {
  // Fetch products from SellAuth API
  const productsData = await fetch(`https://api.sellauth.app/v1/products?timestamp=${Date.now()}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SELLAUTH_API_KEY}`,
    },
    cache: "no-store",
  }).then((res) => res.json() as Promise<any>)

  // Format the data to match the expected structure for DisplayProducts
  const formattedData = {
    data: {
      groups: [
        {
          title: "All Products",
          products_bound: productsData.data?.products || [],
        },
      ],
    },
  }

  return (
    <div id="products" className="pt-24 flex flex-col items-center px-4 middle">
      <RevealAnimation screenReveal>
        <div className="flex flex-row items-center gap-2 text-sm text-transparent bg-clip-text brand_gradient">
          <ShoppingBagIcon size={16} className="text-[#e43f81]" />
          <div className="font-semibold">Explore the products</div>
        </div>
      </RevealAnimation>
      <RevealAnimation screenReveal delay={0.2}>
        <div className="mt-4 text-4xl font-semibold">Products</div>
      </RevealAnimation>
      <DisplayProducts products={formattedData} />
    </div>
  )
}

export default Products

