"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PretextDOM } from "@/components/pretext-render";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a full spectrum of digital marketing services including web design & development, Google Ads, Meta Ads, SEO, social media marketing, content creation, creative design, and analytics setup. We can handle individual services or build a complete growth system for your brand.",
  },
  {
    question: "Do you work with startups or local businesses?",
    answer:
      "Absolutely. We work with businesses of all sizes — from early-stage startups looking to establish their digital presence to established local businesses ready to scale. Our strategies are always tailored to your specific stage, budget, and growth goals.",
  },
  {
    question: "Do you handle both website and marketing?",
    answer:
      "Yes, and that's one of our biggest advantages. Having your website and marketing under one roof means everything works together seamlessly — from design to ads to analytics. No finger-pointing between agencies.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the scope. A landing page can be delivered in 1-2 weeks. A full website build typically takes 4-8 weeks. Marketing campaigns are usually launched within 2 weeks of onboarding. We'll give you a clear timeline before any work begins.",
  },
  {
    question: "Do you offer monthly retainers?",
    answer:
      "Yes, we offer flexible monthly retainer packages for ongoing marketing, content, and optimization work. This is ideal for businesses that want consistent growth without managing multiple freelancers or agencies.",
  },
  {
    question: "How do you measure and report results?",
    answer:
      "We set up proper tracking from day one — GA4, conversion tracking, UTM parameters, the works. You'll get access to a live dashboard and receive detailed monthly reports breaking down performance, insights, and next steps.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <p className="text-sm font-medium tracking-wider text-primary uppercase">
              FAQ
            </p>
            <PretextDOM
              text="Questions? We've got answers."
              font="400 44px Prata"
              lineHeight={52}
              className="heading-serif mt-3 text-3xl leading-snug sm:text-4xl lg:text-5xl"
              as="h2"
            />
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about working with us. Can&apos;t find
              what you&apos;re looking for? Reach out directly.
            </p>
          </div>

          {/* Right */}
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
