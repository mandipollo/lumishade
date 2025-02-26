"use client";
import React, { useRef } from "react";

import { useScroll, useTransform, motion } from "framer-motion";
import Button from "../common/ui/Button";
import Link from "next/link";

const About = () => {
	const container = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["0%", "95%"]);
	return (
		<section
			ref={container}
			className=" flex justify-center items-center relative w-full overflow-hidden"
		>
			<div className="flex flex-col justify-center items-center rounded-sm gap-2 md:gap-6 absolute w-96 p-4 bg-white top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2  ">
				<div className="flex flex-col gap-1 justify-center items-center">
					<p>Since</p>
					<p className="text-4xl md:text-6xl ">2000</p>
				</div>

				<p className="text-sm text-center">
					we craft high-quality, natural products designed to nurture and
					enhance your skin&apos;s natural beauty.
				</p>
				<Link href="/about" className="w-36">
					<Button text="About Us" />
				</Link>
			</div>
			<motion.div
				style={{ y }}
				className="flex w-screen h-screen flex-1 relative  "
			>
				<video
					className=" w-full h-full object-cover"
					src="/videos/wave2.mp4"
					typeof="video/mp4"
					autoPlay
					loop
					muted
				></video>
			</motion.div>
		</section>
	);
};

export default About;
