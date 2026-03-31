"use client";

import { motion } from "framer-motion";
import { PretextDOM } from "@/components/pretext-render";

const steps = [
  {
    num: "01",
    title: "Discover",
    description:
      "We start by understanding your business, goals, audience, and competitive landscape. No assumptions — just deep research and honest conversations.",
  },
  {
    num: "02",
    title: "Plan",
    description:
      "We map out a tailored strategy covering channels, messaging, creative direction, and KPIs. You'll know exactly what we're doing and why before anything launches.",
  },
  {
    num: "03",
    title: "Build & Launch",
    description:
      "From websites to ad campaigns, we execute with precision and speed. Every deliverable goes through rigorous quality checks before it goes live.",
  },
  {
    num: "04",
    title: "Optimize",
    description:
      "We monitor, test, and iterate continuously. Monthly reports, performance reviews, and proactive recommendations to keep your growth compounding.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium tracking-wider text-primary uppercase">
            Our Process
          </p>
          <PretextDOM
            text="A proven framework that takes you from idea to impact"
            font="400 44px Prata"
            lineHeight={52}
            className="heading-serif mt-3 text-3xl leading-snug sm:text-4xl lg:text-5xl"
            as="h2"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-lg lg:p-8"
            >
              <span className="heading-serif text-5xl text-muted-foreground/15 lg:text-6xl">
                {step.num}
              </span>
              <h3 className="heading-serif mt-4 text-xl lg:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              {/* Progress connector */}
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-background text-muted-foreground lg:flex">
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
