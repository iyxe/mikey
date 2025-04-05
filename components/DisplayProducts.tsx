"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DotIcon, InfinityIcon } from "lucide-react"
import RevealAnimation from "./framer/RevealAnimation"
import { cn } from "@/lib/utils"

const DisplayProducts = ({ products }: { products: any }) => {
  const productGroups = products?.data?.groups

  const getProductFeatures = (product: any) => {
    // SellAuth might store features differently, adjust as needed
    // This assumes features are stored in a description field and separated by |
    if (!product?.description) return []
    return product?.description?.split("|")
  }

  // will set the array in ascending order of their price tag
  const setProductsInAscendingOrder = (products: any) => {
    return products.sort((a: any, b: any) => a.price - b.price)
  }

  const handlePurchase = (productId: string) => {
    // Implement SellAuth purchase flow
    // This might involve redirecting to their checkout page or using their API
    window.open(`https://sellauth.app/checkout/${productId}`, "_blank")
  }

  return (
    <div className="px-4 mt-10">
      <div className="middle">
        <Tabs defaultValue={productGroups[0]?.title} className="w-full flex flex-col items-center">
          <TabsList className="flex flex-col gap-2 sm:flex-row">
            {productGroups?.map((group: any, index: number) => (
              <TabsTrigger key={index} value={group?.title} className="w-full">
                {group?.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {productGroups.map((group: any, index: number) => (
            <TabsContent className="mt-5" key={index} value={group?.title}>
              <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
                {setProductsInAscendingOrder(group?.products_bound)?.map((product: any, index: number) => (
                  <RevealAnimation delay={index * 0.1} screenReveal={true} key={index}>
                    <div key={index} className="bg-[#1f1f20] rounded-lg p-4 w-full min-w-[308px] h-full">
                      <div className="">
                        <div className="text-xl font-semibold">{`${product?.title || product?.name}`}</div>
                        <div className="flex flex-row justify-between items-end mt-2">
                          <div className="text-3xl font-semibold brand_gradient text-transparent bg-clip-text">
                            {`$${product?.price}`}
                          </div>
                          <div className="flex flex-row items-center">
                            <div className="text-xs text-muted-foreground">{`Stock:`}</div>
                            {product?.stock !== -1 ? (
                              <div
                                className={cn("text-xs ml-1", product?.stock == 0 ? "text-red-500" : "text-green-500 ")}
                              >
                                {product?.stock}
                              </div>
                            ) : (
                              <InfinityIcon size={16} className="text-green-500 ml-1" />
                            )}
                          </div>
                        </div>
                        <div className="w-full border-t border-[1px] border-muted-foreground/20 my-2"></div>
                        <div className="text-muted-foreground/80 text-sm">Features</div>
                        <div className="flex flex-col gap-1">
                          {getProductFeatures(product)?.map((feature: any, index: number) => (
                            <div key={index} className="flex flex-row items-center">
                              <DotIcon size={25} className="text-[#ec3f76]" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 brand_gradient rounded-md p-[1px]">
                          <button
                            onClick={() => handlePurchase(product?.id || product?.uniqid)}
                            type="button"
                            className="w-full rounded-md bg-[#1f1f20] py-2 text-sm hover:bg-gradient-to-tr from-[#ff4059] to-[#a73cde] duration-200"
                          >
                            Purchase
                          </button>
                        </div>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default DisplayProducts

