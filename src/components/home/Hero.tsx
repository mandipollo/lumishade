"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { useScroll, useTransform, motion } from "framer-motion";
import Button from "../common/ui/Button";
import Link from "next/link";

const Hero = () => {
	const container = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["0%", "95%"]);
	return (
		<section className=" flex justify-start items-center relative w-screen overflow-hidden">
			<div className="flex flex-col gap-4 absolute z-10 md:left-20 left-10 md:top-20 top-10 ">
				<h1 className="md:text-8xl text-4xl">Lumishade.</h1>
				<p className="flex w-60 ">Love your skin!</p>
				<Link href="/shop">
					<Button text="EXPLORE PRODUCTS" />
				</Link>
			</div>
			<motion.div
				ref={container}
				style={{ y: y }}
				className="flex h-full bg-gray-400  w-screen relative "
			>
				<video
					className=" w-full h-full object-cover"
					src="/videos/sunscreen-beach.mp4"
					typeof="video/mp4"
					autoPlay
					loop={false}
					muted
				></video>
			</motion.div>
		</section>
	);
};

export default Hero;
