"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "Strategic storytelling for modern brands",
    subtitle: "How emotional storytelling drives conversions",
    date: "August 15, 2025",
    color: "bg-primary",
  },
  {
    title: "The power of minimalist campaign design",
    subtitle: "Why simple visuals often outperform complex ones",
    date: "August 10, 2025",
    color: "bg-dark-teal",
  },
  {
    title: "Boosting creativity with analytics",
    subtitle: "Balancing art and data for marketing excellence",
    date: "August 5, 2025",
    color: "bg-brand-black",
  },
];

export function ArticlesSection() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="heading-serif text-3xl sm:text-4xl">
              Latest articles
            </h2>
          </div>
          <Link
            href="#"
            className="hidden items-center gap-1 rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-foreground hover:text-background sm:inline-flex"
          >
            View all
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div
                className={`${article.color} aspect-[4/3] overflow-hidden rounded-2xl`}
              >
                <div className="flex h-full items-center justify-center p-8">
                  <p className="heading-serif text-center text-2xl leading-snug text-white/90">
                    {article.title}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs text-muted-foreground">{article.date}</p>
                <h3 className="mt-1 font-medium transition-colors group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {article.subtitle}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
