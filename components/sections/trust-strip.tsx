"use client";

import { motion } from "framer-motion";
import { PretextDOM } from "@/components/pretext-render";

const stats = [
  { value: "693+", label: "Campaigns Launched" },
  { value: "$750M+", label: "Revenue Generated for Clients" },
  { value: "150+", label: "Websites Delivered" },
  { value: "35+", label: "Industries Served" },
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
            <p className="text-sm font-medium tracking-wider text-muted-foreground uppercase">
              About Us
            </p>
            <PretextDOM
              text="We partner only with brands that want to grow louder, scale faster, and **stand out without apologizing for being bold.**"
              font="400 36px Prata"
              lineHeight={44}
              className="heading-serif mt-2 text-2xl leading-snug sm:text-3xl lg:text-4xl"
              highlightClassName="text-primary"
              as="h2"
            />
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center lg:text-left"
            >
              <p className="heading-serif text-3xl sm:text-4xl lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
