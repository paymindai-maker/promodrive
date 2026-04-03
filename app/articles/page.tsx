"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PretextDOM } from "@/components/pretext-render";
import {
  getPublishedArticles,
  getCategories,
  type Article,
} from "@/lib/firestore-articles";
import { ArrowUpRight, Clock, Loader2, Search, X } from "lucide-react";

const PAGE_SIZE = 12;

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [cursor, setCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);
  const [total, setTotal] = useState(0);

  // Filters
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchQuery), 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Load categories once
  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  // Fetch articles when filters change
  const fetchArticles = useCallback(async () => {
    setLoading(true);
    const res = await getPublishedArticles({
      pageSize: PAGE_SIZE,
      category: activeCategory,
    });
    setArticles(res.articles);
    setCursor(res.cursor);
    setHasMore(res.hasMore);
    setTotal(res.total);
    setLoading(false);
  }, [activeCategory]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const loadMore = async () => {
    if (!cursor) return;
    setLoadingMore(true);
    const res = await getPublishedArticles({
      pageSize: PAGE_SIZE,
      cursor,
      category: activeCategory,
    });
    setArticles((prev) => [...prev, ...res.articles]);
    setCursor(res.cursor);
    setHasMore(res.hasMore);
    setLoadingMore(false);
  };

  // Client-side search filter
  const filtered = debouncedSearch
    ? articles.filter((a) => {
        const q = debouncedSearch.toLowerCase();
        return (
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q)) ||
          a.category.toLowerCase().includes(q)
        );
      })
    : articles;

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero — compact */}
        <section className="border-b border-border py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-medium tracking-wider text-primary uppercase">
              Blog & Insights
            </p>
            <PretextDOM
              text="Ideas, strategies, and stories from the **marketing frontlines**"
              font="400 48px Prata"
              lineHeight={56}
              className="heading-serif mt-3 max-w-3xl text-3xl sm:text-4xl lg:text-5xl"
              highlightClassName="text-primary"
              as="h1"
            />
          </div>
        </section>

        {/* Sticky Filters Bar */}
        <section className="sticky top-16 z-30 border-b border-border bg-background/80 backdrop-blur-xl lg:top-20">
          <div className="mx-auto max-w-7xl px-6 py-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              {/* Category pills */}
              <div className="no-scrollbar flex items-center gap-2 overflow-x-auto">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    !activeCategory
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  All
                  {!activeCategory && total > 0 && (
                    <span className="ml-1.5 text-xs opacity-70">{total}</span>
                  )}
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() =>
                      setActiveCategory(activeCategory === cat ? null : cat)
                    }
                    className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                      activeCategory === cat
                        ? "bg-foreground text-background"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-9 pl-9 pr-9 text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-10 lg:py-14">
          <div className="mx-auto max-w-7xl px-6">
            {loading ? (
              <div className="flex min-h-[30vh] items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : filtered.length === 0 ? (
              <div className="flex min-h-[30vh] flex-col items-center justify-center gap-4 text-center">
                <p className="heading-serif text-2xl">
                  {debouncedSearch
                    ? "No articles match your search"
                    : "No articles yet"}
                </p>
                <p className="text-muted-foreground">
                  {debouncedSearch
                    ? "Try a different search term or clear the filters."
                    : "Check back soon — we're cooking up something great."}
                </p>
                {(debouncedSearch || activeCategory) && (
                  <Button
                    variant="outline"
                    className="mt-2 rounded-full"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory(null);
                    }}
                  >
                    Clear filters
                  </Button>
                )}
              </div>
            ) : (
              <>
                {/* Result count */}
                <p className="mb-6 text-sm text-muted-foreground">
                  {debouncedSearch
                    ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""}`
                    : `Showing ${articles.length} of ${total} articles`}
                </p>

                {/* Uniform grid — compact cards, easy to scan */}
                <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filtered.map((article, i) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: Math.min(i * 0.03, 0.24),
                      }}
                    >
                      <Link href={`/articles/${article.slug}`}>
                        <article className="group">
                          {/* Cover — compact 3:2 ratio */}
                          <div
                            className={`${article.coverColor || "bg-dark-teal"} aspect-[3/2] overflow-hidden rounded-xl`}
                          >
                            <div className="flex h-full items-center justify-center p-6">
                              <p className="heading-serif line-clamp-3 text-center text-lg leading-snug text-white/90">
                                {article.title}
                              </p>
                            </div>
                          </div>

                          {/* Meta */}
                          <div className="mt-3">
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="secondary"
                                className="rounded-full px-2 py-0 text-[11px]"
                              >
                                {article.category}
                              </Badge>
                              <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                {article.readTime} min
                              </span>
                            </div>
                            <h3 className="mt-1.5 line-clamp-2 text-sm font-medium leading-snug transition-colors group-hover:text-primary">
                              {article.title}
                            </h3>
                            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                              {article.excerpt}
                            </p>
                            <p className="mt-1.5 text-[11px] text-muted-foreground">
                              {article.createdAt.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                        </article>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Load More */}
                {hasMore && !debouncedSearch && (
                  <div className="mt-12 text-center">
                    <Button
                      variant="outline"
                      className="rounded-full px-8"
                      onClick={loadMore}
                      disabled={loadingMore}
                    >
                      {loadingMore && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      Load More Articles
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
