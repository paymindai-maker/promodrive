"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { getAllArticles, type Article } from "@/lib/firestore-articles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Eye, EyeOff, Plus } from "lucide-react";

export default function AdminDashboard() {
  const { user } = useAuth();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getAllArticles().then(setArticles);
  }, []);

  const published = articles.filter((a) => a.published).length;
  const drafts = articles.filter((a) => !a.published).length;

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="heading-serif text-2xl lg:text-3xl">Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Welcome back, {user?.email}
          </p>
        </div>
        <Button className="gap-2 rounded-full" asChild>
          <Link href="/admin/articles/new">
            <Plus className="h-4 w-4" />
            New Article
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Articles
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="heading-serif text-3xl">{articles.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Published
            </CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="heading-serif text-3xl">{published}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Drafts
            </CardTitle>
            <EyeOff className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="heading-serif text-3xl">{drafts}</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Articles */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent Articles</h2>
          <Link
            href="/admin/articles"
            className="text-sm text-primary hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="mt-4 divide-y divide-border rounded-lg border border-border">
          {articles.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No articles yet. Create your first one!
            </div>
          ) : (
            articles.slice(0, 5).map((article) => (
              <Link
                key={article.id}
                href={`/admin/articles/${article.id}`}
                className="flex items-center justify-between p-4 transition-colors hover:bg-muted"
              >
                <div>
                  <p className="font-medium">{article.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {article.category} &middot;{" "}
                    {article.createdAt.toLocaleDateString()}
                  </p>
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    article.published
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                  }`}
                >
                  {article.published ? "Published" : "Draft"}
                </span>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
