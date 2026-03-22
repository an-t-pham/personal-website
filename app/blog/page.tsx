import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export const revalidate = 60;

export default function BlogPage() {
  const posts = allBlogs
    .filter((p) => p.published)
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Blog
          </h2>
          <p className="mt-4 text-zinc-400">
            Loose notes on tech, tools, and stuff. Coherence sold separately!
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-6 mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <article className="p-4 md:p-6">
                  <time
                    dateTime={post.date ? new Date(post.date).toISOString() : undefined}
                    className="text-xs text-zinc-500"
                  >
                    {post.date
                      ? Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(post.date))
                      : "Soon"}
                  </time>
                  <h3 className="mt-2 text-lg font-semibold text-zinc-200 group-hover:text-white">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                    {post.description}
                  </p>
                  <p className="mt-4 text-xs text-zinc-500 group-hover:text-zinc-400">
                    Read more →
                  </p>
                </article>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
