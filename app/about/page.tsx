"use client";

import { Navigation } from "../components/nav";
import Image from "next/image";
import HelloWorld from "../../public/about-me.png";

const timeline = [
  {
    date: "2020",
    title: "Started coding",
    description:
      "Picked up programming during the lockdown out of curiosity which has become the start of a long-term commitment to tech.",
  },
  {
    date: "2022",
    title: "Building in public",
    description:
      "Started shipping projects and turning ideas into practical applications.",
  },
  {
    date: "Present",
    title: "Here now",
    description:
      "Focusing on thoughtful, problem-driven solutions and continuous learning in an ever-evolving digital landscape.",
  },
];

export default function About() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0 px-4">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            About me
          </h2>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
            <p className="flex-1 text-zinc-400 md:min-w-0">
              Hi, I'm An - a passionate developer with a strong interest in building
              thoughtful, problem-driven solutions through technology. What
              began as a curiosity during the lockdown evolved into a long-term
              commitment to learning, growth, and creativity in tech. I enjoy
              turning ideas into practical applications and continuously
              developing my skills in an ever-evolving digital landscape.
            </p>
            <Image
              src={HelloWorld}
              alt="An pic"
              width={400}
              className="w-full shrink-0 md:w-[min(400px,40%)]"
            />
          </div>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="max-w-2xl mx-auto lg:mx-0 px-4">
          <h3 className="text-xl font-semibold tracking-tight text-zinc-200 mb-8">
            Timeline
          </h3>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-zinc-600 via-zinc-500 to-zinc-600"
              aria-hidden
            />
            <ul className="space-y-0">
              {timeline.map((item, i) => (
                <li key={i} className="relative flex gap-6 pb-10 last:pb-0">
                  {/* Node */}
                  <div
                    className="relative z-10 mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-zinc-500 bg-zinc-900 ring-4 ring-zinc-900"
                    aria-hidden
                  />
                  <div className="flex-1 pt-0 min-w-0">
                    <p className="text-sm font-medium tabular-nums text-amber-500/90">
                      {item.date}
                    </p>
                    <p className="mt-0.5 font-medium text-zinc-200">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
