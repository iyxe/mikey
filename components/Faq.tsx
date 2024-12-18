import {
  FeatherIcon,
  MessageCircleQuestionIcon,
  SunMoonIcon,
} from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RevealAnimation from "./framer/RevealAnimation";

const FaqData = [
  {
    id: "1",
    question: "How can i get in touch with support after I bought the product?",
    answer:
      "To get in touch with support after making a purchase, you can use the built-in ticketing system. Simply visit the contact page to submit your details and we will get back to you ASAP.",
  },
  {
    id: "2",
    question: "Can I make payments using my preferred method?",
    answer:
      "Yes, we support a wide range of payment methods, including popular fiat options like Credit Cards as well as various cryptocurrencies. This enables you to make payments using the method that is most convenient for you.",
  },
  {
    id: "3",
    question: "Is it safe to make payments?",
    answer:
      "Yes, we take security very seriously. We use advanced fraud prevention measures to protect against fraudulent transactions and we securely store all payment information.",
  },
  {
    id: "4",
    question: "How do I make a purchase?",
    answer:
      "Making a purchase is easy. Simply browse the available products and add the ones you wish to purchase to your cart. When you are ready to checkout, you will be prompted to enter your payment information and complete the transaction.",
  },
  {
    id: "5",
    question: "What is the return policy for purchases?",
    answer:
      "The return policy for purchases will vary depending on the specific product being purchased. It is important to review the return policy for each product before making a purchase to ensure that you understand the terms and conditions.",
  },
];

const Faq = () => {
  return (
    <div id="faq" className="px-4 mt-20">
      <div className="middle flex items-center flex-col">
        <RevealAnimation screenReveal>
          <div className="flex flex-row items-center gap-2 text-sm text-transparent bg-clip-text brand_gradient">
            <MessageCircleQuestionIcon size={16} className="text-[#9B4DCA]" />
            <div className="font-semibold">Asked Questions</div>
          </div>
        </RevealAnimation>
        <RevealAnimation screenReveal delay={0.2}>
          <div className="mt-4 text-4xl font-semibold">FAQ</div>
        </RevealAnimation>
        {/* faq */}
        <Accordion type="single" collapsible className="w-full">
          {FaqData.map((faq, index) => (
            <RevealAnimation screenReveal delay={index * 0.2} key={faq.id}>
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-lg text-start">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-base text-muted-foreground">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </RevealAnimation>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
