"use client";
import Image from "next/image";
import React from "react";
import LinkButton from "../../common/ui/LinkButton";
import Link from "next/link";

const InfoFooter = () => {
	return (
		<section className="h-96  flex justify-center items-center relative w-full overflow-hidden">
			<div className="z-10 absolute top-0 left-0 flex gap-10  flex-row p-2 ">
				<nav>
					<ul className="flex flex-col  ">
						<li>
							<LinkButton href="/" text="HOME" />
						</li>
						<li>
							<LinkButton href="/shop" text="SHOP" />
						</li>
						<li>
							<LinkButton href="/about" text="ABOUT US" />
						</li>
					</ul>
				</nav>

				<nav>
					<ul className="flex flex-col">
						<li>
							<LinkButton href="/contact" text="CONTACT" />
						</li>
						<li>
							<LinkButton href="/contact" text="PRIVACY POLICY" />
						</li>
						<li>
							<LinkButton href="/contact" text="TERMS & CONDITIONS" />
						</li>
					</ul>
				</nav>
			</div>

			<div className="z-10 absolute bottom-0 left-0 flex gap-10  flex-row p-2 ">
				<Link
					href="http://www.mandipollo.uk"
					target="_blank"
					className="text-sm"
				>
					MADE BY: MANDIPOLLO
				</Link>
			</div>

			<div className="flex w-full h-full relative ">
				<Image
					loading="lazy"
					className="sm:object-top object-cover"
					src="/images/intro.jpg"
					fill
					alt="lotion showcase"
				></Image>
			</div>
		</section>
	);
};

export default InfoFooter;
