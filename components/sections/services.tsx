"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PretextDOM } from "@/components/pretext-render";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Web Design & Development",
    description:
      "Custom websites built for performance, conversion, and brand experience. No templates — every project starts from zero.",
    bullets: [
      "Custom UI/UX design",
      "Next.js & modern frameworks",
      "Mobile-first responsive builds",
      "Speed & SEO optimized",
    ],
    num: "01",
  },
  {
    title: "Performance Marketing",
    description:
      "Data-backed campaigns across Google Ads and Meta Ads that don't just look good — they perform. ROI-focused from day one.",
    bullets: [
      "Google Ads management",
      "Meta & social advertising",
      "Conversion tracking setup",
      "A/B testing & optimization",
    ],
    num: "02",
  },
  {
    title: "Social Media & Content",
    description:
      "Your brand, your voice — amplified. Creative strategy and content that builds presence and drives engagement.",
    bullets: [
      "Content strategy & calendar",
      "Social media management",
      "Creative design & video",
      "Community engagement",
    ],
    num: "03",
  },
  {
    title: "SEO & Organic Growth",
    description:
      "Rank higher, attract quality traffic, and build authority. Long-term growth strategies that compound over time.",
    bullets: [
      "Technical SEO audits",
      "Keyword strategy",
      "Content optimization",
      "Link building",
    ],
    num: "04",
  },
  {
    title: "Analytics & Tracking",
    description:
      "Know exactly what's working. Full analytics setup, custom dashboards, and reporting that drives smarter decisions.",
    bullets: [
      "GA4 & GTM setup",
      "Custom dashboards",
      "Attribution modeling",
      "Monthly reporting",
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
            text="At our agency, we don't do templates. Every project **starts from zero** and ends with impact."
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
