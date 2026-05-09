"use client";

import { motion } from "framer-motion";
import { Target, Palette, Zap, BarChart, Layers, Shield } from "lucide-react";
import { PretextDOM } from "@/components/pretext-render";

const reasons = [
  {
    icon: Target,
    title: "Creative Strategy",
    description:
      "Ideas that you refuse to scroll past — that's how we make sure your brand stands out amidst the crowd.",
  },
  {
    icon: BarChart,
    title: "Result Oriented",
    description:
      "Not just another campaign with plenty of numbers to decode. We strategize to deliver results.",
  },
  {
    icon: Palette,
    title: "In-depth Branding",
    description:
      "Zero compromise on your brand voice. Our team works on creating an authentic brand personality that customers love.",
  },
  {
    icon: Zap,
    title: "Optimum Turnaround",
    description:
      "Efficient workflow to ensure timely delivery of work so your business growth only moves up.",
  },
  {
    icon: Shield,
    title: "Honest Reports",
    description:
      "No cover ups, no gaslighting! We present the data so you know exactly what you invested for.",
  },
  {
    icon: Layers,
    title: "Tailormade Solutions",
    description:
      "No template, only customised strategies built from scratch especially for you.",
  },
];

export function WhyUsSection() {
  return (
    <section className="bg-dark-teal py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium tracking-wider text-salmon uppercase">
            Why Choose Us
          </p>
          <PretextDOM
            text="Strategy-first approach with creative execution & smarter decisions"
            font="400 44px Prata"
            lineHeight={52}
            className="heading-serif mt-3 text-3xl leading-snug text-white sm:text-4xl lg:text-5xl"
            as="h2"
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10 lg:p-8"
            >
              <reason.icon className="mb-4 h-6 w-6 text-salmon" />
              <h3 className="heading-serif mb-2 text-xl">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
