"use client";

import React, { FC, useEffect } from "react";
import "./globals.css";
import Lenis from "lenis";
import Hero from "@/components/home/Hero";
import Promo from "@/components/home/Promo";
import Products from "@/components/home/Products";
import About from "@/components/home/About";

const HomePage: FC = () => {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);
	return (
		<div className="flex flex-col h-full w-full  ">
			<Hero />
			{/* <Promo /> */}
			<Products />
			<About />
		</div>
	);
};

export default HomePage;
