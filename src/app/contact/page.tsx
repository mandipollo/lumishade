"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../hooks/useMousePosition";

export default function ContactPage() {
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const { x, y } = useMousePosition();
	const size = isHovered ? 200 : 40;

	return (
		<section className="relative w-full h-screen ">
			{x && y && (
				<motion.div
					className="absolute flex justify-center items-center  inset-0 bg-[#ec4e39] text-black"
					style={{
						WebkitMaskImage: `url("svg/mask.svg")`,
						WebkitMaskRepeat: "no-repeat",
						WebkitMaskSize: `${size}px`,
						WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
					}}
					animate={{
						WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
						WebkitMaskSize: `${size}px`,
					}}
					transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
				>
					<p
						className="w-full p-10 text-[#afa18f] text-4xl leading-tight cursor-default flex items-center justify-center h-60"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						Long ago, the four nations lived together in harmony. Then,
						everything changed when the Fire Nation attacked. Only the Avatar,
						master of all four elements, could stop them.
					</p>
				</motion.div>
			)}

			<span className="flex items-center justify-start h-1/2 p-2 ">
				<p className=" text-6xl md:text-8xl ">CONTACT</p>
			</span>
			<span className="flex items-center justify-end h-1/2  p-2">
				<p className=" text-6xl  md:text-8xl ">mandipollo.uk</p>
			</span>
		</section>
	);
}
