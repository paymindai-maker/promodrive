import {
  collection,
  doc,
  getDocs,
  getDoc,
  getCount,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  serverTimestamp,
  Timestamp,
  type DocumentData,
  type QueryDocumentSnapshot,
  type QueryConstraint,
} from "firebase/firestore/lite";
import { db } from "./firebase";

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverColor: string;
  category: string;
  tags: string[];
  author: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  readTime: number;
}

export type ArticleInput = Omit<Article, "id" | "createdAt" | "updatedAt">;

const COLLECTION = "articles";

function toArticle(snap: QueryDocumentSnapshot<DocumentData>): Article {
  const data = snap.data();
  return {
    id: snap.id,
    title: data.title ?? "",
    slug: data.slug ?? "",
    excerpt: data.excerpt ?? "",
    content: data.content ?? "",
    coverColor: data.coverColor ?? "bg-dark-teal",
    category: data.category ?? "",
    tags: data.tags ?? [],
    author: data.author ?? "",
    published: data.published ?? false,
    createdAt:
      data.createdAt instanceof Timestamp
        ? data.createdAt.toDate()
        : new Date(),
    updatedAt:
      data.updatedAt instanceof Timestamp
        ? data.updatedAt.toDate()
        : new Date(),
    readTime: data.readTime ?? 5,
  };
}

/** Generate a URL-friendly slug from a title */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Estimate read time from content (words / 200 wpm) */
function estimateReadTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

// ─── Paginated Queries ──────────────────────────────────────────

export interface PaginatedResult {
  articles: Article[];
  /** Serialisable cursor — the createdAt ISO string of the last doc */
  cursor: string | null;
  hasMore: boolean;
  total: number;
}

/**
 * Fetch published articles with optional category filter and cursor pagination.
 * `cursor` is a createdAt ISO string from a previous result.
 */
export async function getPublishedArticles(opts: {
  pageSize?: number;
  cursor?: string | null;
  category?: string | null;
} = {}): Promise<PaginatedResult> {
  const { pageSize = 12, cursor = null, category = null } = opts;

  const constraints: QueryConstraint[] = [
    where("published", "==", true),
  ];

  if (category) {
    constraints.push(where("category", "==", category));
  }

  constraints.push(orderBy("createdAt", "desc"));

  if (cursor) {
    constraints.push(startAfter(Timestamp.fromDate(new Date(cursor))));
  }

  constraints.push(limit(pageSize + 1)); // fetch one extra to check hasMore

  const q = query(collection(db, COLLECTION), ...constraints);
  const snap = await getDocs(q);
  const docs = snap.docs.map(toArticle);

  const hasMore = docs.length > pageSize;
  const articles = hasMore ? docs.slice(0, pageSize) : docs;
  const lastArticle = articles[articles.length - 1];

  // Count total (for the category or all published)
  const countConstraints: QueryConstraint[] = [
    where("published", "==", true),
  ];
  if (category) countConstraints.push(where("category", "==", category));
  const countSnap = await getCount(
    query(collection(db, COLLECTION), ...countConstraints)
  );

  return {
    articles,
    cursor: lastArticle ? lastArticle.createdAt.toISOString() : null,
    hasMore,
    total: countSnap.data().count,
  };
}

/** Get all unique categories from published articles */
export async function getCategories(): Promise<string[]> {
  const q = query(
    collection(db, COLLECTION),
    where("published", "==", true),
    orderBy("createdAt", "desc")
  );
  const snap = await getDocs(q);
  const cats = new Set<string>();
  snap.docs.forEach((d) => {
    const cat = d.data().category;
    if (cat) cats.add(cat);
  });
  return Array.from(cats);
}

export async function getArticleBySlug(
  slug: string
): Promise<Article | null> {
  const q = query(
    collection(db, COLLECTION),
    where("slug", "==", slug),
    where("published", "==", true),
    limit(1)
  );
  const snap = await getDocs(q);
  if (snap.empty) return null;
  return toArticle(snap.docs[0]);
}

export async function getRecentArticles(count = 3): Promise<Article[]> {
  const q = query(
    collection(db, COLLECTION),
    where("published", "==", true),
    orderBy("createdAt", "desc"),
    limit(count)
  );
  const snap = await getDocs(q);
  return snap.docs.map(toArticle);
}

// ─── Admin Queries ──────────────────────────────────────────────

export interface AdminArticlesResult {
  articles: Article[];
  cursor: string | null;
  hasMore: boolean;
  total: number;
}

/**
 * Paginated admin query — supports filtering by published status.
 */
export async function getAdminArticles(opts: {
  pageSize?: number;
  cursor?: string | null;
  status?: "all" | "published" | "draft";
} = {}): Promise<AdminArticlesResult> {
  const { pageSize = 20, cursor = null, status = "all" } = opts;

  const constraints: QueryConstraint[] = [];

  if (status === "published") {
    constraints.push(where("published", "==", true));
  } else if (status === "draft") {
    constraints.push(where("published", "==", false));
  }

  constraints.push(orderBy("createdAt", "desc"));

  if (cursor) {
    constraints.push(startAfter(Timestamp.fromDate(new Date(cursor))));
  }

  constraints.push(limit(pageSize + 1));

  const q = query(collection(db, COLLECTION), ...constraints);
  const snap = await getDocs(q);
  const docs = snap.docs.map(toArticle);

  const hasMore = docs.length > pageSize;
  const articles = hasMore ? docs.slice(0, pageSize) : docs;
  const lastArticle = articles[articles.length - 1];

  // Count
  const countConstraints: QueryConstraint[] = [];
  if (status === "published")
    countConstraints.push(where("published", "==", true));
  else if (status === "draft")
    countConstraints.push(where("published", "==", false));
  const countSnap = await getCount(
    query(collection(db, COLLECTION), ...countConstraints)
  );

  return {
    articles,
    cursor: lastArticle ? lastArticle.createdAt.toISOString() : null,
    hasMore,
    total: countSnap.data().count,
  };
}

export async function getAllArticles(): Promise<Article[]> {
  const q = query(collection(db, COLLECTION), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(toArticle);
}

export async function getArticleById(id: string): Promise<Article | null> {
  const snap = await getDoc(doc(db, COLLECTION, id));
  if (!snap.exists()) return null;
  const data = snap.data();
  return {
    id: snap.id,
    title: data.title ?? "",
    slug: data.slug ?? "",
    excerpt: data.excerpt ?? "",
    content: data.content ?? "",
    coverColor: data.coverColor ?? "bg-dark-teal",
    category: data.category ?? "",
    tags: data.tags ?? [],
    author: data.author ?? "",
    published: data.published ?? false,
    createdAt:
      data.createdAt instanceof Timestamp
        ? data.createdAt.toDate()
        : new Date(),
    updatedAt:
      data.updatedAt instanceof Timestamp
        ? data.updatedAt.toDate()
        : new Date(),
    readTime: data.readTime ?? 5,
  };
}

export async function createArticle(input: ArticleInput): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION), {
    ...input,
    slug: input.slug || generateSlug(input.title),
    readTime: estimateReadTime(input.content),
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateArticle(
  id: string,
  input: Partial<ArticleInput>
): Promise<void> {
  const updates: Record<string, unknown> = {
    ...input,
    updatedAt: serverTimestamp(),
  };
  if (input.content) {
    updates.readTime = estimateReadTime(input.content);
  }
  if (input.title && !input.slug) {
    updates.slug = generateSlug(input.title);
  }
  await updateDoc(doc(db, COLLECTION, id), updates);
}

export async function deleteArticle(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}
