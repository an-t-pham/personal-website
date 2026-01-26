import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { BlogPostHeader } from "./header";
import "./mdx.css";

export const revalidate = 60;

type Props = {
  params: { slug?: string };
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return allBlogs
    .filter((p) => p.published)
    .map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const slug = params?.slug;
  const post = allBlogs.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <BlogPostHeader title={post.title} date={post.date} />
      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless max-w-3xl">
        <Mdx code={post.body.code} />
      </article>
    </div>
  );
}
