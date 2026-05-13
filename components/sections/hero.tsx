"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { PretextDOM } from "@/components/pretext-render";

const heroSlides = [
  {
    image: "/images/hero1.png",
    alt: "Digital marketing growth visual",
  },
  {
    image: "/images/hero2.png",
    alt: "Marketing workflow visual",
  },
  {
    image: "/images/hero3.png",
    alt: "Brand strategy visual",
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
      {/* background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-primary" />
              100+ projects delivered
            </div>

            <PretextDOM
              text="Digital marketing strategy has **never been easier!**"
              font="400 64px Prata"
              lineHeight={72}
              className="heading-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
              highlightClassName="text-primary"
              as="h1"
            />

            <PretextDOM
              text="New-age, impactful digital marketing for the AI era. Rewriting the strategy playbook to boost your brand's organic performance."
              font="400 18px DM Sans"
              lineHeight={28}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
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
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group gap-2 rounded-full border-border bg-background/40 px-8 text-base backdrop-blur-md"
                asChild
              >
                <Link href="#work">
                  <Play className="h-4 w-4" />
                  View Work
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative mt-10 lg:mt-0"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl shadow-black/20 sm:max-w-md lg:max-w-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.image}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                <Image
  src={slide.image}
  alt={slide.alt}
  fill
  priority
  loading="eager"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
  className="object-cover"
/>
                  {/* subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
                </motion.div>
              </AnimatePresence>

              {/* slide indicators */}
              <div className="absolute right-6 bottom-6 z-20 flex items-center gap-2">
                {heroSlides.map((item, index) => (
                  <button
                    key={item.image}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${index === activeSlide
                        ? "w-8 bg-white"
                        : "w-2 bg-white/35 hover:bg-white/70"
                      }`}
                    aria-label={`Show slide ${index + 1}`}
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