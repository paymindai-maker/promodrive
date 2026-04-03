"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getArticleBySlug, getRecentArticles, type Article } from "@/lib/firestore-articles";
import { ArrowLeft, Clock, Loader2, ArrowUpRight } from "lucide-react";

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const [article, setArticle] = useState<Article | null>(null);
  const [related, setRelated] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    Promise.all([
      getArticleBySlug(slug),
      getRecentArticles(4),
    ]).then(([art, recent]) => {
      setArticle(art);
      setRelated(recent.filter((r) => r.slug !== slug).slice(0, 3));
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="flex min-h-screen items-center justify-center pt-20">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </>
    );
  }

  if (!article) {
    return (
      <>
        <Header />
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 pt-20">
          <p className="heading-serif text-3xl">Article not found</p>
          <p className="text-muted-foreground">
            This article may have been removed or the link is incorrect.
          </p>
          <Button asChild variant="outline" className="mt-4 rounded-full">
            <Link href="/articles">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Article Header */}
        <section className="border-b border-border py-12 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Link
              href="/articles"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Articles
            </Link>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="rounded-full">
                {article.category}
              </Badge>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                {article.readTime} min read
              </span>
            </div>
            <h1 className="heading-serif mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {article.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-teal text-sm font-semibold text-white">
                {article.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-medium">{article.author}</p>
                <p className="text-xs text-muted-foreground">
                  {article.createdAt.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cover */}
        <div
          className={`${article.coverColor || "bg-dark-teal"} mx-auto -mt-px aspect-[21/9] max-w-5xl`}
        >
          <div className="flex h-full items-center justify-center p-12">
            <p className="heading-serif text-center text-3xl text-white/20 lg:text-5xl">
              {article.title}
            </p>
          </div>
        </div>

        {/* Article Body */}
        <section className="py-12 lg:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div
              className="prose prose-lg prose-neutral max-w-none dark:prose-invert
                prose-headings:heading-serif prose-headings:font-normal
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </section>

        {/* Tags */}
        {article.tags.length > 0 && (
          <section className="pb-12">
            <div className="mx-auto max-w-3xl px-6">
              <Separator className="mb-8" />
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
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
          </section>
        )}

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="border-t border-border bg-card py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="heading-serif mb-10 text-2xl lg:text-3xl">
                More articles
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <Link key={r.id} href={`/articles/${r.slug}`}>
                    <article className="group cursor-pointer">
                      <div
                        className={`${r.coverColor || "bg-dark-teal"} aspect-[4/3] overflow-hidden rounded-2xl`}
                      >
                        <div className="flex h-full items-center justify-center p-8">
                          <p className="heading-serif text-center text-xl leading-snug text-white/90">
                            {r.title}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          {r.createdAt.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                        <h3 className="mt-1 font-medium transition-colors group-hover:text-primary">
                          {r.title}
                        </h3>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="heading-serif text-2xl lg:text-3xl">
              Ready to grow your brand?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Let&apos;s build a strategy that turns insights into results.
            </p>
            <Button
              className="group mt-6 gap-2 rounded-full bg-foreground px-8 text-background hover:bg-foreground/90"
              asChild
            >
              <Link href="/#contact">
                Get Started
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
