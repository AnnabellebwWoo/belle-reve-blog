import React from "react";
import { getPostsByCategory, getAllCategories } from "../../../../lib/utils";
import BlogCard from "../../../../components/BlogCard/BlogCard";
import styles from "./page.module.css";

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    slug: category,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const posts = await getPostsByCategory((await params).slug);
  return (
    <div>
      <div className={styles.row}>
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
