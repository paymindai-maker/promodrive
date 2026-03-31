"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, BarChart3, Share2, Search, LineChart } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
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
    icon: BarChart3,
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
    icon: Share2,
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
    icon: Search,
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
    icon: LineChart,
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
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium tracking-wider text-primary uppercase">
            Our Services
          </p>
          <h2 className="heading-serif mt-3 text-3xl leading-snug sm:text-4xl lg:text-5xl">
            At our agency, we don&apos;t do templates. Every project{" "}
            <span className="text-primary">starts from zero</span> and ends with
            impact.
          </h2>
        </div>

        {/* Services Accordion-style list */}
        <div className="divide-y divide-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group py-8 lg:py-10"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
                {/* Number & Title */}
                <div className="flex items-start gap-4 lg:w-1/3">
                  <span className="text-sm font-medium text-muted-foreground">
                    {service.num}
                  </span>
                  <div>
                    <h3 className="heading-serif text-xl lg:text-2xl">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="lg:w-1/3">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* Bullets */}
                <div className="lg:w-1/3">
                  <ul className="space-y-2">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
