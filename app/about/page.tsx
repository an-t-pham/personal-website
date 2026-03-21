"use client";

import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";
import aboutMeImage from "../../public/about-me-yuki.jpg";

const timeline = [
  {
    date: "2020",
    title: "Career Transition into Tech",
    description:
      "With a background in marketing and a passion for innovation, I transitioned from creating engaging experiences for an independent chocolate brand to building digital products. During the pandemic, I embraced the shift by completing a software engineering bootcamp at Flatiron School, laying the foundation for my career in tech.",
  },
  {
    date: "2021-2023",
    title: "Full-Stack Software Engineer, Profile Pensions",
    description:
      "Worked across the stack in a Node.js microservices environment, building scalable features for a digital pension platform. Developed event-driven systems using RabbitMQ, including automated customer messaging and internal workflow tools that improved transfer conversion rates and operational efficiency. Also contributed to secure client–operations communication and supported production systems.",
  },
  {
    date: "2024 – Present",
    title: "Backend Software Engineer, Moneyfarm",
    description:
      "Following the acquisition of Profile Pensions, focused on backend development within a microservices and event-driven architecture using TypeScript, Scala and Kafka. Contributed to a large-scale migration from legacy systems to a new ecosystem, building backend scripts, supporting data transformation, and ensuring a smooth customer transition.\
      Continuing to deliver reliable, scalable systems with a focus on onboarding and platform stability.",
  },
];

export default function About() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-4xl mx-auto lg:mx-0 px-4">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            About me
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card - left (matches contact section, same size as photo on desktop) */}
            <div className="order-2 md:order-1 md:aspect-[3/4] md:min-h-[280px] min-h-0">
              <Card className="h-full min-h-0 overflow-hidden">
                <div className="h-full p-4 sm:p-6 md:p-8 flex flex-col justify-start overflow-auto min-w-0">
                  <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed break-words">
                  <p>
                    Hi, my name is An Pham. I'm a passionate developer with a strong interest
                    in building thoughtful, problem-driven solutions through
                    technology.
                  </p>
                  <p>
                    What began as a curiosity during the lockdown evolved into a
                    long-term commitment to learning, growth, and creativity in
                    tech. I enjoy turning ideas into practical applications and
                    continuously developing my skills in an ever-evolving
                    digital landscape.
                  </p>
                  <p>
                    When I'm not debugging my life choices, I'm probably
                    watching a movie, building a model or dragging my dog on a hike he didn't ask for.
                  </p>
                  </div>
                </div>
              </Card>
            </div>
            {/* Photo - right (same size as card on desktop) */}
            <div className="relative aspect-[3/4] min-h-[280px] order-1 md:order-2 w-full">
              <Image
                src={aboutMeImage}
                alt="An Pham"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top rounded-lg"
              />
            </div>
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
