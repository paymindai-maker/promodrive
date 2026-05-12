"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { PretextDOM } from "@/components/pretext-render";

const heroSlides = [
  {
    label: "Featured Project",
    title: "Brand Growth Strategy",
    description:
      "Full-funnel marketing strategy that increased engagement by 250%",
    stat: "693",
    statLabel: "Marketing strategies executed",
    accent: "bg-salmon",
    panel: "from-dark-teal via-[#174452] to-[#6c1828]",
  },
  {
    label: "Website System",
    title: "Conversion-Ready Launch",
    description:
      "A fast campaign website built around clear offers and measurable leads",
    stat: "3.4x",
    statLabel: "Increase in qualified inquiries",
    accent: "bg-light-blue",
    panel: "from-[#102d36] via-[#1d5968] to-[#a42038]",
  },
  {
    label: "Campaign Engine",
    title: "Paid Media Momentum",
    description:
      "Creative testing, landing pages, and tracking aligned into one growth loop",
    stat: "41%",
    statLabel: "Lower acquisition cost",
    accent: "bg-primary",
    panel: "from-[#0a0a0a] via-[#102d36] to-[#f29696]",
  },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              100+ projects delivered
            </div>

            {/* Pretext-powered headline — pre-measured to prevent layout shift */}
            <PretextDOM
              text="Digital marketing strategy has **never been easier!**"
              font="400 64px Prata"
              lineHeight={72}
              className="heading-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
              highlightClassName="text-primary"
              as="h1"
            />

            <PretextDOM
              text="New-age, impactful digital marketing for the AI era. Rewriting the strategy playbook to boost your brand's organic performance. Give us 30 mins, and you'll think about your business differently."
              font="400 18px DM Sans"
              lineHeight={28}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
              as="p"
            />

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="group gap-2 rounded-full bg-foreground px-8 text-base text-background hover:bg-foreground/90"
                asChild
              >
                <Link href="#contact">
                  Schedule a Call
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group gap-2 rounded-full border-border px-8 text-base"
                asChild
              >
                <Link href="#work">
                  <Play className="h-4 w-4" />
                  View Work
                </Link>
              </Button>
            </div>


          </motion.div>

          {/* Right - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-dark-teal shadow-2xl shadow-dark-teal/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`absolute inset-0 bg-gradient-to-br ${slide.panel}`}
                >
                  <div className="absolute inset-x-8 top-8 grid grid-cols-3 gap-3">
                    {[0, 1, 2].map((item) => (
                      <div
                        key={item}
                        className="h-20 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm"
                      />
                    ))}
                  </div>

                  <div className="absolute top-36 right-8 left-8 rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="h-3 w-28 rounded-full bg-white/35" />
                      <div className={`h-3 w-14 rounded-full ${slide.accent}`} />
                    </div>
                    <div className="space-y-3">
                      {[86, 64, 72].map((width, index) => (
                        <div
                          key={width}
                          className="h-3 rounded-full bg-white/20"
                          style={{ width: `${width}%` }}
                        >
                          <motion.div
                            initial={{ width: "20%" }}
                            animate={{ width: `${width}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`h-full rounded-full ${slide.accent}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute right-8 bottom-40 left-8 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                      <p className="heading-serif text-4xl text-white">
                        {slide.stat}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-white/70">
                        {slide.statLabel}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                      <div className="mb-4 grid grid-cols-4 items-end gap-2">
                        {[36, 58, 46, 76].map((height) => (
                          <div
                            key={height}
                            className={`${slide.accent} rounded-t-md`}
                            style={{ height }}
                          />
                        ))}
                      </div>
                      <p className="text-xs leading-relaxed text-white/70">
                        Live campaign signal
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-8 pt-28">
                    <div className="space-y-3">
                      <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                        {slide.label}
                      </div>
                      <h3 className="heading-serif text-3xl text-white">
                        {slide.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/70">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute right-8 bottom-8 flex items-center gap-2">
                {heroSlides.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeSlide
                        ? "w-8 bg-white"
                        : "w-2 bg-white/35 hover:bg-white/70"
                    }`}
                    aria-label={`Show ${item.title}`}
                    aria-current={index === activeSlide}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
