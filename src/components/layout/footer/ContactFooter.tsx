"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ContactFooter = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start center", "end end"],
	});

	const backgroundColor = useTransform(
		scrollYProgress,
		[0, 1],
		["#FFFFFF", "#FFEAB0"]
	);
	return (
		<motion.section
			ref={containerRef}
			style={{ backgroundColor: backgroundColor }}
			className="flex relative items-start min-h-screen w-full p-2 "
		>
			<article className="sticky top-20 text-4xl w-1/2">
				<p>This is a demo site.</p>
				<p>Get in touch with us at </p>
				<a
					className="hover:text-[#D39032]"
					href="http://www.mandipollo.uk"
					target="_blank"
				>
					mandipollo.uk
				</a>
			</article>
		</motion.section>
	);
};

export default ContactFooter;
