"use client"

import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StarIcon } from "lucide-react"
import RevealAnimation from "./framer/RevealAnimation"

export const Aboutus = ({ reviews }: { reviews?: any }) => {
  const [reviewsData, setReviewsData] = useState<any>([])

  useEffect(() => {
    // Format reviews data from SellAuth
    if (reviews?.data?.reviews) {
      setReviewsData(reviews.data.reviews)
    }
  }, [reviews])

  return (
    <div id="aboutus" className="pt-24 flex flex-col items-center px-4 middle">
      <RevealAnimation screenReveal>
        <div className="flex flex-row items-center gap-2 text-sm text-transparent bg-clip-text brand_gradient">
          <StarIcon size={16} className="text-[#e43f81]" />
          <div className="font-semibold">About us</div>
        </div>
      </RevealAnimation>
      <RevealAnimation screenReveal delay={0.2}>
        <div className="mt-4 text-4xl font-semibold">About us</div>
      </RevealAnimation>
      <RevealAnimation screenReveal delay={0.3}>
        <div className="mt-4 text-center text-muted-foreground max-w-[800px]">
          We are a team of passionate developers who are dedicated to providing the best products and services to our
          customers. We have been in the industry for over 5 years and have helped thousands of customers achieve their
          goals.
        </div>
      </RevealAnimation>
      <RevealAnimation screenReveal delay={0.4}>
        <div className="mt-10 w-full">
          <Tabs defaultValue="reviews" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
            </TabsList>
            <TabsContent value="reviews">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {reviewsData?.map((review: any, index: number) => (
                  <div key={index} className="bg-[#1f1f20] rounded-lg p-4 flex flex-col">
                    <div className="flex flex-row items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-[#2a2a2b] flex items-center justify-center">
                        {review?.customer_name?.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <div className="text-sm font-semibold">{review?.customer_name}</div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(review?.created_at * 1000).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-1 mt-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarIcon
                          key={index}
                          size={16}
                          className={index < review?.rating ? "text-yellow-500" : "text-muted-foreground"}
                        />
                      ))}
                    </div>
                    <div className="mt-2 text-sm">{review?.message}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="team">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <div className="bg-[#1f1f20] rounded-lg p-4 flex flex-col">
                  <div className="flex flex-row items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#2a2a2b] flex items-center justify-center">J</div>
                    <div className="flex flex-col">
                      <div className="text-sm font-semibold">John Doe</div>
                      <div className="text-xs text-muted-foreground">CEO & Founder</div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    John is the CEO and founder of our company. He has been in the industry for over 10 years and has
                    helped thousands of customers achieve their goals.
                  </div>
                </div>
                <div className="bg-[#1f1f20] rounded-lg p-4 flex flex-col">
                  <div className="flex flex-row items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#2a2a2b] flex items-center justify-center">J</div>
                    <div className="flex flex-col">
                      <div className="text-sm font-semibold">Jane Doe</div>
                      <div className="text-xs text-muted-foreground">CTO & Co-Founder</div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    Jane is the CTO and co-founder of our company. She has been in the industry for over 8 years and has
                    helped thousands of customers achieve their goals.
                  </div>
                </div>
                <div className="bg-[#1f1f20] rounded-lg p-4 flex flex-col">
                  <div className="flex flex-row items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#2a2a2b] flex items-center justify-center">B</div>
                    <div className="flex flex-col">
                      <div className="text-sm font-semibold">Bob Smith</div>
                      <div className="text-xs text-muted-foreground">Lead Developer</div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    Bob is the lead developer of our company. He has been in the industry for over 5 years and has
                    helped thousands of customers achieve their goals.
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </RevealAnimation>
    </div>
  )
}

