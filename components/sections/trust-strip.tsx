"use client";

import { motion } from "framer-motion";
import { PretextDOM } from "@/components/pretext-render";

const promises = [
  {
    title: "Performance-Driven Strategy",
    description:
      "Every campaign is built to generate measurable growth, not vanity metrics.",
  },
  {
    title: "Fast & Efficient Execution",
    description:
      "Lean workflows, clear communication, and rapid delivery without compromising quality.",
  },
  {
    title: "Creative That Converts",
    description:
      "High-impact branding, content, and marketing designed to capture attention and drive action.",
  },
  {
    title: "Long-Term Brand Growth",
    description:
      "We build scalable digital systems that strengthen your brand over time.",
  },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border/60 bg-card py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* About snippet */}
        <div className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-12 lg:mb-16">
          <div className="flex -space-x-2">
            {["bg-primary", "bg-dark-teal", "bg-salmon"].map((bg, i) => (
              <div
                key={i}
                className={`h-12 w-12 rounded-full border-2 border-card ${bg}`}
              />
            ))}
          </div>

          <div className="max-w-2xl" id="about">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              About Us
            </p>

            <PretextDOM
              text="The world is hustling, but your brand should not. We make branding & marketing **a cakewalk for business ideas that deserve something iconic.**"
              font="400 36px Prata"
              lineHeight={44}
              className="heading-serif mt-2 text-2xl leading-snug sm:text-3xl lg:text-4xl"
              highlightClassName="text-primary"
              as="h2"
            />
          </div>
        </div>

        {/* Promise grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {promises.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border/60 bg-background/40 p-6 backdrop-blur-sm"
            >
              <h3 className="heading-serif text-xl leading-snug">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}