"use client";
import Image from "next/image";
import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import AuthState from "./AuthState";

const Navbar = () => {
	// cart items

	const cartItems = useAppSelector(state => state.cart.items);
	// handle menu state
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	// opacity

	const opacity = {
		initial: {
			opacity: 0,
		},
		open: {
			opacity: 1,
			transition: { duration: 0.7 },
		},
		closed: {
			opacity: 0,
			transition: { duration: 0.7 },
		},
	};

	return (
		<header className=" fixed top-0 left-0 right-0 z-40 flex flex-col text-sm  flex-1 w-full items-center border border-b border-gray-400 border-opacity-25">
			<div className="bg-primaryWhite  flex justify-between p-2 w-full h-12  text-primaryDarkText">
				<nav className="flex w-1/4 flex-row gap-2 items-center">
					<Link href="/" className="flex justify-center items-center">
						<Image
							loading="lazy"
							src="/svg/logo.svg"
							width={10}
							height={10}
							alt="logo"
							className="h-8 w-8 "
						/>
						<p className="text-md  underline underline-offset-2 decoration-[#D39032]">
							Lumishade.
						</p>
					</Link>
				</nav>

				<button
					type="button"
					onClick={handleOpen}
					className="flex justify-center items-center"
				>
					<div className=" flex relative  justify-center items-center gap-1">
						<span
							className={`${
								isOpen ? "-rotate-45 -translate-y-1  " : ""
							} transition-transform duration-700 absolute top-[2px] right-1 h-1 border-b  w-6 border-borderColorDark`}
						></span>
						<span
							className={`${
								isOpen ? "rotate-45 translate-x-1 translate-y-1 " : ""
							} transition-transform duration-700 absolute -top-[6px] right-1 h-1 border-b  w-6 border-borderColorDark `}
						></span>
					</div>

					<div className="flex relative font-extralight  bg-gray-400">
						<motion.p
							className="flex absolute -top-2"
							variants={opacity}
							animate={isOpen ? "closed" : "open"}
						>
							MENU
						</motion.p>
						{isOpen && (
							<motion.p
								className="flex absolute -top-2"
								variants={opacity}
								animate={isOpen ? "open" : "closed"}
							>
								CLOSE
							</motion.p>
						)}
					</div>
				</button>

				<motion.nav
					variants={opacity}
					animate={isOpen ? "closed" : "open"}
					className="flex items-center gap-2 justify-end w-1/4"
				>
					<Link
						href="/cart"
						className="flex flex-row justify-center items-center"
					>
						<Image
							loading="lazy"
							src="/svg/cart.svg"
							width={4}
							height={4}
							alt="logo"
							className="h-4 w-4 "
						/>
						<p className="font-extralight">CART ({cartItems})</p>
					</Link>

					<AuthState />
				</motion.nav>
			</div>

			<AnimatePresence mode="wait">
				{isOpen && <Nav handleOpen={handleOpen} isOpen={isOpen} />}
			</AnimatePresence>
		</header>
	);
};

export default Navbar;
