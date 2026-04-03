"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArticleEditor } from "@/components/admin/article-editor";
import { createArticle, generateSlug } from "@/lib/firestore-articles";

export default function NewArticlePage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

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
      await createArticle({
        ...data,
        slug: data.slug || generateSlug(data.title),
        readTime: Math.max(
          1,
          Math.ceil(data.content.trim().split(/\s+/).length / 200)
        ),
      });
      router.push("/admin/articles");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <h1 className="heading-serif mb-8 text-2xl lg:text-3xl">
        New Article
      </h1>
      <ArticleEditor onSave={handleSave} saving={saving} />
    </div>
  );
}
