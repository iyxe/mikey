import RevealAnimation from "./framer/RevealAnimation"
import { ShoppingBagIcon } from "lucide-react"
import DisplayProducts from "./DisplayProducts"

const Products = async () => {
  // Fetch products from SellAuth API with the correct endpoint structure
  // The shopId is required in the URL path
  const shopId = "1" // Replace with your actual shop ID

  let productsData
  try {
    const response = await fetch(`https://api.sellauth.com/v1/shops/${shopId}/products?timestamp=${Date.now()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SELLAUTH_API_KEY}`,
      },
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    const data = await response.json()

    // Transform the SellAuth API response to match the expected structure
    // Based on the API documentation, we need to organize products by groups
    const groupsMap = new Map()

    // First, collect all unique groups
    data.data.forEach((product) => {
      if (product.group && product.group.id) {
        if (!groupsMap.has(product.group.id)) {
          groupsMap.set(product.group.id, {
            id: product.group.id,
            title: product.group.name,
            products_bound: [],
          })
        }

        // Add product to its group
        const group = groupsMap.get(product.group.id)
        group.products_bound.push({
          id: product.id,
          title: product.name,
          price: Number.parseFloat(product.price),
          stock: product.stock_count,
          custom_fields: [
            {
              name: "Features",
              default: product.description || "No description available",
            },
          ],
        })
      }
    })

    // Convert the Map to an array of groups
    const groups = Array.from(groupsMap.values())

    // If there are no groups or some products don't have groups, create a default group
    const ungroupedProducts = data.data.filter((product) => !product.group || !product.group.id)
    if (ungroupedProducts.length > 0 || groups.length === 0) {
      groups.push({
        id: "default",
        title: "All Products",
        products_bound: ungroupedProducts.map((product) => ({
          id: product.id,
          title: product.name,
          price: Number.parseFloat(product.price),
          stock: product.stock_count,
          custom_fields: [
            {
              name: "Features",
              default: product.description || "No description available",
            },
          ],
        })),
      })
    }

    productsData = {
      data: {
        groups: groups,
      },
    }
  } catch (error) {
    console.error("Error fetching products:", error)

    // Fallback to mock data if the API request fails
    productsData = {
      data: {
        groups: [
          {
            title: "Discord Boosts",
            products_bound: [
              {
                id: "boost-1",
                title: "1 Month Discord Boost",
                price: 4.99,
                stock: 100,
                custom_fields: [
                  {
                    name: "Features",
                    default: "1 Month Discord Boost|Instant Delivery|24/7 Support",
                  },
                ],
              },
              {
                id: "boost-3",
                title: "3 Month Discord Boost",
                price: 12.99,
                stock: 75,
                custom_fields: [
                  {
                    name: "Features",
                    default: "3 Month Discord Boost|Instant Delivery|24/7 Support|10% Discount",
                  },
                ],
              },
            ],
          },
        ],
      },
    }
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
      <DisplayProducts products={productsData} />
    </div>
  )
}

export default Products

