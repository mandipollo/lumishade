"use client";

import "./globals.css";
import React, { FC, useEffect } from "react";
import Lenis from "lenis";
import Hero from "../components/home/Hero";
import Products from "../components/home/Products";
import About from "../components/home/About";

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
		<section className="flex flex-col h-full w-full ">
			<Hero />
			<Products />
			<About />
		</section>
	);
};

export default HomePage;
