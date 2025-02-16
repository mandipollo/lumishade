"use client";
import React, { useRef } from "react";
import Image from "next/image";

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
			className=" flex justify-center items-center relative w-screen overflow-hidden bg-gray-500"
		>
			<div className="flex md:gap-6 gap-2 flex-col justify-center items-center absolute md:h-80 h-60 md:w-96 w-60 bg-white top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2  ">
				<p>Since</p>
				<p className="md:text-8xl text-4xl">2000</p>
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
				className="flex w-screen min-h-screen flex-1 relative  "
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
