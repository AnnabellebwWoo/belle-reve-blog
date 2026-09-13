import BlogLayout from "../../../../components/BlogLayout/BlogLayout";
import {
  getFiles,
  getPostBySlug,
  getAdjacentPosts,
} from "../../../../lib/utils";
import { parseMarkdownToSections } from "../../../../lib/parseMarkdown";
import type { Section } from "../../../../lib/types";


export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const { previous, next } = await getAdjacentPosts(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const sections: Section[] = parseMarkdownToSections(post.markdownBody);

  return (
    <BlogLayout
      post={post}
      previous={previous}
      next={next}
      sections={sections}
    ></BlogLayout>
  );
}

export async function generateStaticParams() {
  const posts = await getFiles();

  return posts.map((filename: string) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}
