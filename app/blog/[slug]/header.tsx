"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
  date?: string;
};

export function BlogPostHeader({ title, date }: Props) {
  return (
    <header className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-zinc-900/0 backdrop-blur duration-200">
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <Link
            href="/blog"
            className="duration-200 text-zinc-400 hover:text-zinc-100"
          >
            Blog
          </Link>
          <Link
            href="/blog"
            className="duration-200 text-zinc-400 hover:text-zinc-100"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="container mx-auto relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {date && (
            <time
              dateTime={new Date(date).toISOString()}
              className="block text-sm text-zinc-500 mb-2"
            >
              {Intl.DateTimeFormat(undefined, { dateStyle: "long" }).format(
                new Date(date)
              )}
            </time>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-display">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
}
