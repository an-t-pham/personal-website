"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from 'next/image';
import HelloWorld from '../../public/about-pic.jpg'

export default function About() {
	return (
		<div className="relative pb-16">
			<Navigation />
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
            {/* <div className="container flex items-center justify-center min-h-screen px-4 mx-auto"> */}
                <div className="max-w-4xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl px-4">
                        About me
                    </h2>
                    {/* <div className="flex justify-between gap-2"> */}
                    <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                    <p className="mt-4 mr-8 text-zinc-400">
                    Full-stack software engineer with a background in marketing. Ready to take up a new challenge in a team that will value my ability to learn and willingness to push the boundaries of my comfort zone.
                    My main goal is to widen my knowledge and skills to be a positive impact.
                    </p>
                    <Image
                    // className={styles.imageStyle}
                    src={HelloWorld}
                    alt="An pic"
                    width={400}
                    // height={37}
                    // priority
                    />
                    </div>
                </div>
                <div className="w-full h-px bg-zinc-800" />
            </div>
		</div>
	);
}
