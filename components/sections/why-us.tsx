"use client";

import { motion } from "framer-motion";
import { Target, Palette, Zap, BarChart, Layers, Shield } from "lucide-react";
import { PretextDOM } from "@/components/pretext-render";

const reasons = [
  {
    icon: Target,
    title: "Strategic Creativity",
    description:
      "Marketing ideas that break the cookie-cutter approach. We craft unique strategies that differentiate your brand and deliver tangible growth.",
  },
  {
    icon: BarChart,
    title: "Real Results",
    description:
      "Campaigns that don't just look good — they perform. Data-backed concepts paired with high-impact creative execution.",
  },
  {
    icon: Palette,
    title: "Authentic Brand Expression",
    description:
      "Your brand, your voice — without compromise. We help you show up confidently, consistently, and unmistakably in your market.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Speed without sacrifice. We deliver high-quality work on timelines that keep your business moving forward.",
  },
  {
    icon: Shield,
    title: "Transparent Reporting",
    description:
      "No vanity metrics, no fluff. Clear dashboards and honest reporting so you always know exactly where your investment goes.",
  },
  {
    icon: Layers,
    title: "Custom Solutions",
    description:
      "No templates, no one-size-fits-all packages. Every strategy is built from scratch for your specific goals and audience.",
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
            text="Strategy-first execution with creative + performance balance"
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
