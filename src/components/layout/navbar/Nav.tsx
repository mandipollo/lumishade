"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Overlay from "./Overlay";

const Nav: FC<{ handleOpen: () => void; isOpen: boolean }> = ({
	handleOpen,
	isOpen,
}) => {
	const pathname = usePathname();

	// links

	const links = [
		{ href: "/", link: "HOME" },

		{ href: "/shop", link: "SHOP" },

		{
			href: "/contact",
			link: "CONTACT",
		},
		{
			href: "/cart",
			link: "CART",
		},
		{ href: "/about", link: "ABOUT US" },
	];
	const spanClass =
		"block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-highlight";

	const linkClass = " group transition duration-300 ";

	// animation
	const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

	const height = {
		initial: {
			height: 0,
		},
		enter: {
			height: "calc(100vh - 3rem)",
			transition,
		},
		exit: {
			height: 0,
			transition,
		},
	};

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delay: 0.2,
			},
		},
		exit: { opacity: 0, transition: { duration: 0.3 } },
	};

	return (
		<motion.div
			className="flex flex-col w-full z-10 "
			variants={height}
			initial="initial"
			animate="enter"
			exit="exit"
		>
			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="flex w-full md:flex-row flex-col h-1/3 bg-primaryWhite "
			>
				<nav className="flex p-2 md:w-1/2 w-full  md:justify-center md:items-center ">
					<ul className="flex w-full flex-wrap flex-row gap-4 text-primary">
						{links.map(link => (
							<motion.li
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								onClick={handleOpen}
								className={linkClass}
								key={link.link}
							>
								<Link
									href={link.href}
									className=" text-xl md:text-2xl lg:text-4xl xl:text-6xl font-extralight"
								>
									{pathname === link.href ? <em>{link.link}</em> : link.link}
									<span className={spanClass}></span>
								</Link>
							</motion.li>
						))}
					</ul>
				</nav>

				<motion.div
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="flex md:w-1/2 h-full justify-end items-center"
				></motion.div>
			</motion.div>

			<Overlay handleOpen={handleOpen} />
		</motion.div>
	);
};

export default Nav;
