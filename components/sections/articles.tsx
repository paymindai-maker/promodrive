"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Loader2 } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getRecentArticles, type Article } from "@/lib/firestore-articles";

export function ArticlesSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecentArticles(3).then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  // Don't render the section at all if no articles exist
  if (!loading && articles.length === 0) return null;

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
            href="/articles"
            className="hidden items-center gap-1 rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-foreground hover:text-background sm:inline-flex"
          >
            View all
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/articles/${article.slug}`}>
                  <div
                    className={`${article.coverColor || "bg-dark-teal"} aspect-[4/3] overflow-hidden rounded-2xl`}
                  >
                    <div className="flex h-full items-center justify-center p-8">
                      <p className="heading-serif text-center text-2xl leading-snug text-white/90">
                        {article.title}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="secondary"
                        className="rounded-full text-xs"
                      >
                        {article.category}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {article.readTime} min
                      </span>
                    </div>
                    <h3 className="mt-2 font-medium transition-colors group-hover:text-primary">
                      {article.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {article.excerpt}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {article.createdAt.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}

        {/* Mobile "View all" link */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/articles"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary"
          >
            View all articles
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
