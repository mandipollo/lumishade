"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { useScroll, useTransform, motion } from "framer-motion";

const Promo = () => {
	// parralex animation
	const avocadoContainer = useRef(null);

	// define when animation start and end to the viewport
	const { scrollYProgress: avocadoY } = useScroll({
		target: avocadoContainer,
		offset: ["start start", "end start"],
	});

	const avY = useTransform(avocadoY, [0, 1], ["20vh", "-5vh"]);

	//
	const orangeContainer = useRef(null);

	const { scrollYProgress } = useScroll({
		target: orangeContainer,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["30vh", "-10vh"]);

	return (
		<section className="flex flex-col md:flex-row gap-2 px-4 relative h-screen">
			<div className=" hidden md:flex md:w-2/5 h-full relative justify-center ">
				<motion.div
					ref={avocadoContainer}
					style={{ y: avY }}
					className="absolute left-0  h-80 w-60"
				>
					<Image
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						loading="lazy"
						src="/images/avocado.jpg"
						className="object-cover"
						alt="avocado"
						fill
					/>
				</motion.div>
				<motion.div
					ref={orangeContainer}
					style={{ y: y }}
					className=" absolute right-10 h-60 w-60 z-10"
				>
					<Image
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						loading="lazy"
						src="/images/oranges.jpg"
						className="object-cover"
						alt="oranges"
						fill
					/>
				</motion.div>
			</div>
			<div className="flex flex-col justify-center items-center h-full gap-6 md:w-3/5">
				<p className="tracking-widest text-3xl ">
					Glow Like Never Before! Discover your best skin yet with our
					all-natural, dermatologist-approved skincare line.
				</p>

				<div className="relative w-full h-80 ">
					<video
						loop
						src="/videos/sunscreen-video.mp4"
						autoPlay
						typeof="video/mp4"
					></video>
				</div>
			</div>
		</section>
	);
};

export default Promo;
