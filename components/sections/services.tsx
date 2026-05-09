"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PretextDOM } from "@/components/pretext-render";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Website Design & Development",
    description:
      "Every website built your way. Faster & professional for an unforgettable brand experience.",
    bullets: [
      "UI/UX Design for better conversion",
      "Landing pages for campaigns",
      "Optimised App development",
      "Scalable infrastructure with integrations",
    ],
    num: "01",
  },
  {
    title: "Social Media Marketing",
    description:
      "Creating your brand's unique voice in the overwhelming noise. Content that drives engagement and builds a loyal fanbase.",
    bullets: [
      "Graphic designing & content optimisation",
      "Profile optimisation & strategy for growth",
      "High impact content creation",
      "Accurate branding & community building",
    ],
    num: "02",
  },
  {
    title: "Performance Marketing",
    description:
      "Omnichannel marketing through impactful campaigns that actually perform. ROI-first approach from day one.",
    bullets: [
      "Highly converting pay per click ads",
      "Email marketing & lead generation",
      "Ad funnel & campaign strategy",
      "Retargeting and conversion scaling",
    ],
    num: "03",
  },
  {
    title: "SEO & Organic Growth",
    description:
      "Levelling up your Google SERP presence through a targeted approach. Sustainable strategies that compound authority over time.",
    bullets: [
      "Google My Business & digital presence optimisation",
      "On-page, Off-page, and Technical SEO",
      "Keyword & search intent strategy for content-led growth",
      "Authority building and backlinking",
    ],
    num: "04",
  },
  {
    title: "Growth Analysis & Tracking",
    description:
      "End-to-end strategy & result analysis to find what actually works. Making smarter moves with data-backed quarterly analysis.",
    bullets: [
      "Dashboard setup and data tracking",
      "Customer journey analysis & growth audits",
      "Scaling insights & strategy optimisation",
      "Quality lead generation through ad funnels",
    ],
    num: "05",
  },
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? services.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % services.length);
  };

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium tracking-wider text-primary uppercase">
            Our Services
          </p>
          <PretextDOM
            text="Our digital marketing services start from zero — **customised for your brand,** built for impact."
            font="400 44px Prata"
            lineHeight={52}
            className="heading-serif mt-3 text-3xl leading-snug sm:text-4xl lg:text-5xl"
            highlightClassName="text-primary"
            as="h2"
          />
        </div>

        <div className="grid items-center gap-4 lg:grid-cols-[auto_1fr_auto] lg:gap-8">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={showPrevious}
            className="order-2 h-11 w-11 rounded-full lg:order-none"
            aria-label="Show previous service"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>

          <div className="relative min-h-[430px] overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:min-h-[360px] lg:p-10">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeService.title}
                initial={{ opacity: 0, x: 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -48 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="grid h-full gap-8 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="flex min-h-72 flex-col justify-between">
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {activeService.num}
                    </span>
                    <h3 className="heading-serif mt-4 max-w-xl text-3xl leading-tight sm:text-4xl lg:text-5xl">
                      {activeService.title}
                    </h3>
                    <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                      {activeService.description}
                    </p>
                  </div>

                  <Link
                    href="#contact"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="grid content-end gap-4 sm:grid-cols-2">
                  {activeService.bullets.map((bullet, i) => (
                    <motion.div
                      key={bullet}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.06 }}
                      className="rounded-2xl border border-border bg-background/70 p-5"
                    >
                      <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                        {i + 1}
                      </span>
                      <p className="text-sm font-medium leading-relaxed">
                        {bullet}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="absolute right-6 bottom-6 flex items-center gap-2 sm:right-8 lg:right-10 lg:bottom-10">
              {services.map((service, i) => (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                  aria-label={`Show ${service.title}`}
                  aria-current={i === activeIndex}
                />
              ))}
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={showNext}
            className="order-3 h-11 w-11 rounded-full lg:order-none"
            aria-label="Show next service"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
