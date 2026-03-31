"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const projects = [
  {
    title: "Brand Growth Strategy",
    client: "Dalal Group",
    category: "Full-funnel Marketing",
    description:
      "Full brand marketing strategy that increased engagement by 250% and generated 3x ROI on ad spend.",
    tags: ["Strategy", "Paid Media", "Creative"],
    color: "bg-dark-teal",
    year: "2025",
    featured: true,
  },
  {
    title: "Product Launch Campaign",
    client: "TechStart Inc",
    category: "Digital Campaign",
    description:
      "Multi-channel product launch campaign with 180% over target in first-month sales.",
    tags: ["Google Ads", "Social Media", "Web Design"],
    color: "bg-primary",
    year: "2025",
    featured: false,
  },
  {
    title: "E-Commerce Redesign",
    client: "ModernHome",
    category: "Web Development",
    description:
      "Complete website overhaul that boosted conversion rates by 185% and reduced bounce rate by 40%.",
    tags: ["Web Dev", "UI/UX", "SEO"],
    color: "bg-brand-black",
    year: "2024",
    featured: false,
  },
];

export function FeaturedWorkSection() {
  return (
    <section id="work" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium tracking-wider text-primary uppercase">
              Selected Work
            </p>
            <h2 className="heading-serif mt-3 text-3xl sm:text-4xl lg:text-5xl">
              Selected
              <br />
              Work
            </h2>
          </div>
          <p className="heading-serif text-6xl text-muted-foreground/20 sm:text-8xl lg:text-9xl">
            2025
          </p>
        </div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative mb-8 overflow-hidden rounded-3xl"
        >
          <div
            className={`${projects[0].color} relative aspect-[16/9] sm:aspect-[21/9]`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            <div className="absolute top-8 right-8 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              PROJECT 01
            </div>
            <div className="absolute bottom-0 left-0 p-8 sm:p-12">
              <p className="text-sm text-white/70">{projects[0].category}</p>
              <h3 className="heading-serif mt-2 text-2xl text-white sm:text-4xl">
                {projects[0].client}
              </h3>
              <p className="mt-3 max-w-md text-sm text-white/70">
                {projects[0].description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {projects[0].tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-full border-none bg-white/10 text-white hover:bg-white/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className={`${project.color} aspect-[16/10]`}>
                <div className="flex h-full items-center justify-center">
                  <span className="heading-serif text-3xl text-white/20">
                    {project.client}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-muted-foreground uppercase">
                  PROJECT 0{i + 2} · {project.category}
                </p>
                <h3 className="heading-serif mt-2 text-xl">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-full"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Stories teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid items-center gap-8 rounded-2xl border border-border bg-card p-8 sm:grid-cols-3 lg:p-12"
        >
          <div className="sm:col-span-1">
            <h3 className="heading-serif text-2xl lg:text-3xl">
              Success
              <br />
              Stories
            </h3>
          </div>
          <div className="flex gap-8 sm:col-span-1 sm:justify-center">
            <div className="text-center">
              <p className="heading-serif text-3xl lg:text-4xl">35+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="heading-serif text-3xl lg:text-4xl">20+</p>
              <p className="text-sm text-muted-foreground">Industries</p>
            </div>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm text-muted-foreground">
              Our sales skyrocketed within months. Their data-driven approach,
              creativity, and clear communication exceeded expectations.
            </p>
            <div className="mt-4 flex items-center gap-1">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
