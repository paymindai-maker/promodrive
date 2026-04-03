"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArticleEditor } from "@/components/admin/article-editor";
import {
  getArticleById,
  updateArticle,
  type Article,
} from "@/lib/firestore-articles";
import { Loader2 } from "lucide-react";

export default function EditArticlePage() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!id) return;
    getArticleById(id).then((a) => {
      setArticle(a);
      setLoading(false);
    });
  }, [id]);

  const handleSave = async (data: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverColor: string;
    category: string;
    tags: string[];
    author: string;
    published: boolean;
  }) => {
    setSaving(true);
    try {
      await updateArticle(id, data);
      router.push("/admin/articles");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="py-20 text-center">
        <p className="heading-serif text-2xl">Article not found</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="heading-serif mb-8 text-2xl lg:text-3xl">
        Edit Article
      </h1>
      <ArticleEditor article={article} onSave={handleSave} saving={saving} />
    </div>
  );
}
