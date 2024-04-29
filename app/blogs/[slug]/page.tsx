import markdownToHtml from "@/utils/markdownToHtml";
import { getAllPosts, getPostBySlug } from "@/utils/posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Params = {
  params: {
    slug: string;
  }
}

export default async function BlogPost({ params }: Params) {

  const post = getPostBySlug(params.slug);
  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <div>
      <h1>Blog Post: {post.title}</h1>
      <p
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
    </div>
  )
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
