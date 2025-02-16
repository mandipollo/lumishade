import React, { FC } from "react";
import Link from "next/link";

const LinkButton: FC<{
	text: string;

	href: string;
}> = ({ text, href }) => {
	return (
		<Link
			href={href}
			className={` h-10 w-20  text-xs flex group relative overflow-hidden `}
		>
			<span className="absolute inset-0 flex transform transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
				{text}
			</span>
			<span className=" absolute inset-0 flex  transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
				{text}
			</span>
		</Link>
	);
};

export default LinkButton;
