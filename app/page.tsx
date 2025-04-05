import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Aboutus } from "@/components/Aboutus"
import { Features } from "@/components/Features"
import Products from "@/components/Products"
import { Faq } from "@/components/Faq"
import { Footer } from "@/components/Footer"
import { TopNotification } from "@/components/TopNotification"
import { Crisp } from "@/components/Crisp"

export default async function Home() {
  // Fetch reviews from SellAuth API
  const reviews = await fetch(`https://api.sellauth.app/v1/reviews?timestamp=${Date.now()}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SELLAUTH_API_KEY}`,
    },
    cache: "no-store",
  }).then((res) => res.json() as Promise<any>)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TopNotification />
      <Header />
      <Hero />
      <Aboutus reviews={reviews} />
      <Features />
      <Products />
      <Faq />
      <Footer />
      <Crisp />
    </main>
  )
}

