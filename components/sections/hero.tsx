"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PretextDOM } from "@/components/pretext-render";

export function HeroSection() {
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
              text="Engaging **digital strategies** that turn visitors into clients"
              font="400 64px Prata"
              lineHeight={72}
              className="heading-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
              highlightClassName="text-primary"
              as="h1"
            />

            <PretextDOM
              text="We create data-driven marketing solutions that balance creativity, technology, and performance — built to scale your brand and accelerate growth."
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
                  Get Started
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

            {/* Trust micro-proof */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "bg-primary",
                  "bg-dark-teal",
                  "bg-salmon",
                  "bg-light-blue",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-background ${bg} text-xs font-semibold text-white`}
                  >
                    {["A", "R", "K", "M"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 fill-amber-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Trusted by 100+ businesses
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-dark-teal">
              {/* Abstract decorative pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-teal via-dark-teal to-primary/30" />
              <div className="absolute top-12 right-12 h-32 w-32 rounded-full bg-salmon/40 blur-2xl" />
              <div className="absolute bottom-24 left-8 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
              <div className="absolute top-1/3 left-1/4 h-24 w-24 rounded-full bg-light-blue/30 blur-xl" />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="space-y-3">
                  <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                    Featured Project
                  </div>
                  <h3 className="heading-serif text-3xl text-white">
                    Brand Growth Strategy
                  </h3>
                  <p className="text-sm text-white/70">
                    Full-funnel marketing strategy that increased engagement by
                    250%
                  </p>
                </div>
              </div>

              {/* Stats floating card */}
              <div className="absolute top-8 right-8 rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                <div className="text-center">
                  <p className="heading-serif text-3xl text-white">693</p>
                  <p className="text-xs text-white/70">
                    Marketing strategies
                    <br />
                    executed to perfection
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
