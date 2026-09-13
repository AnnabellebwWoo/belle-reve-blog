import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPostProps } from "./types";

const root = process.cwd();

export async function getFiles() {
  return fs.readdirSync(path.join(root, "public", "posts"), "utf-8");
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(root, "public", "posts", `${slug}.md`);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    categories: data.categories,
    title: data.title,
    slug: slug,
    markdownBody: content,
    publishedDate: data.publishedDate,
    excerpt: data.excerpt,
    tags:
      typeof data.tags === "string"
        ? data.tags.split(",").map((tag: string) => ` ${tag.trim()}`)
        : Array.isArray(data.tags)
        ? data.tags.map((tag: string) => ` ${tag}`)
        : [],
    thumbnail: data.thumbnail,
  };
}

export async function getAllPosts(): Promise<BlogPostProps[]> {
  const files = fs.readdirSync(path.join(root, "public", "posts"));

  const posts = files.map((postSlug) => {
    const filePath = path.join(root, "public", "posts", postSlug);
    const source = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(source);

    return {
      categories: data.categories,
      title: data.title,
      slug: postSlug.replace(".md", ""),
      markdownBody: content,
      publishedDate: data.publishedDate,
      excerpt: data.excerpt,
      tags:
        typeof data.tags === "string"
          ? data.tags.split(",").map((tag: string) => ` ${tag.trim()}`)
          : Array.isArray(data.tags)
          ? data.tags.map((tag: string) => ` ${tag}`)
          : [],
      thumbnail: data.thumbnail,
    };
  });

  return posts.sort((a, b) => {
    return (
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
  });
}

export async function getPostsByCategory(
  category: string
): Promise<BlogPostProps[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.categories.includes(category));
}

export async function getAdjacentPosts(
  slug: string
): Promise<{ previous: BlogPostProps | null; next: BlogPostProps | null }> {
  const posts = await getAllPosts();
  const index = posts.findIndex((p) => p.slug === slug);

  const previous = index > 0 ? posts[index - 1] : null;
  const next = index < posts.length - 1 ? posts[index + 1] : null;

  return { previous, next };
}

export async function getRecentPosts(count = 2): Promise<BlogPostProps[]> {
  const allPosts = await getAllPosts();

  const sorted = allPosts.sort((a, b) => {
    return (
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
  });

  return sorted.slice(0, count);
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  
    const categoriesSet = new Set<string>();
  
  posts.forEach((post) => {
    if (Array.isArray(post.categories)) {
      post.categories.forEach((cat) => categoriesSet.add(cat.trim()));
    } else if (typeof post.categories === "string") {
      (post.categories as string)
        .split(",")
        .forEach((cat) => categoriesSet.add(cat.trim()));
    }
  });

  return Array.from(categoriesSet);
}