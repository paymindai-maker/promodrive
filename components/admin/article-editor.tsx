"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generateSlug, type Article } from "@/lib/firestore-articles";
import { Loader2, Save } from "lucide-react";

const CATEGORIES = [
  "Marketing Strategy",
  "SEO",
  "Web Development",
  "Social Media",
  "Google Ads",
  "Meta Ads",
  "Analytics",
  "Content Marketing",
  "Branding",
  "Case Study",
];

const COVER_COLORS = [
  { label: "Dark Teal", value: "bg-dark-teal" },
  { label: "Crimson", value: "bg-primary" },
  { label: "Black", value: "bg-brand-black" },
  { label: "Salmon", value: "bg-salmon" },
];

interface ArticleEditorProps {
  article?: Article;
  onSave: (data: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverColor: string;
    category: string;
    tags: string[];
    author: string;
    published: boolean;
  }) => Promise<void>;
  saving: boolean;
}

export function ArticleEditor({ article, onSave, saving }: ArticleEditorProps) {
  const [title, setTitle] = useState(article?.title ?? "");
  const [slug, setSlug] = useState(article?.slug ?? "");
  const [excerpt, setExcerpt] = useState(article?.excerpt ?? "");
  const [content, setContent] = useState(article?.content ?? "");
  const [coverColor, setCoverColor] = useState(
    article?.coverColor ?? "bg-dark-teal"
  );
  const [category, setCategory] = useState(article?.category ?? "");
  const [tagsInput, setTagsInput] = useState(
    article?.tags?.join(", ") ?? ""
  );
  const [author, setAuthor] = useState(article?.author ?? "Promodrive Team");
  const [published, setPublished] = useState(article?.published ?? false);

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!article) {
      setSlug(generateSlug(value));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSave({
      title,
      slug: slug || generateSlug(title),
      excerpt,
      content,
      coverColor,
      category,
      tags: tagsInput
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      author,
      published,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Main content area */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left — main fields */}
        <div className="space-y-6 lg:col-span-2">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Article title"
              required
              className="mt-1.5 text-lg"
            />
          </div>

          <div>
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="url-friendly-slug"
              className="mt-1.5 font-mono text-sm"
            />
          </div>

          <div>
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Short summary for article cards and SEO meta description"
              rows={3}
              className="mt-1.5"
            />
          </div>

          <div>
            <Label htmlFor="content">
              Content{" "}
              <span className="text-muted-foreground">(HTML)</span>
            </Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="<h2>Introduction</h2><p>Write your article content here using HTML...</p>"
              rows={20}
              className="mt-1.5 font-mono text-sm"
            />
            <p className="mt-1.5 text-xs text-muted-foreground">
              Use HTML tags for formatting: &lt;h2&gt;, &lt;h3&gt;, &lt;p&gt;,
              &lt;ul&gt;, &lt;ol&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;a&gt;,
              &lt;blockquote&gt;, &lt;img&gt;
            </p>
          </div>
        </div>

        {/* Right — metadata sidebar */}
        <div className="space-y-6">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 font-semibold">Publishing</h3>

            <div className="flex items-center justify-between">
              <Label htmlFor="published">Published</Label>
              <Switch
                id="published"
                checked={published}
                onCheckedChange={setPublished}
              />
            </div>

            <Button
              type="submit"
              className="mt-6 w-full gap-2 rounded-full"
              disabled={saving || !title}
            >
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              {article ? "Update Article" : "Create Article"}
            </Button>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 font-semibold">Details</h3>

            <div className="space-y-4">
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="SEO, Marketing, Growth"
                  className="mt-1.5"
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  Comma-separated
                </p>
              </div>

              <div>
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label>Cover Color</Label>
                <div className="mt-2 grid grid-cols-4 gap-2">
                  {COVER_COLORS.map((color) => (
                    <button
                      key={color.value}
                      type="button"
                      onClick={() => setCoverColor(color.value)}
                      className={`aspect-square rounded-lg ${color.value} transition-all ${
                        coverColor === color.value
                          ? "ring-2 ring-primary ring-offset-2"
                          : "opacity-60 hover:opacity-100"
                      }`}
                      title={color.label}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 font-semibold">Preview</h3>
            <div
              className={`${coverColor} aspect-[4/3] overflow-hidden rounded-lg`}
            >
              <div className="flex h-full items-center justify-center p-4">
                <p className="heading-serif text-center text-sm leading-snug text-white/90">
                  {title || "Article Title"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
