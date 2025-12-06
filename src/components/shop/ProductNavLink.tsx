import Link from "next/link";
import React from "react";

interface ProductNavProps {
	link: string;
	productCat: string;
	isActive: boolean;
}
const ProductNavLink: React.FC<ProductNavProps> = ({
	link,
	productCat,
	isActive,
}) => {
	return (
		<Link
			href={link}
			className={`${
				isActive ? "bg-black text-white" : "bg-white text-black"
			} border border-black rounded-3xl px-4 py-2 `}
		>
			{productCat}
		</Link>
	);
};

export default ProductNavLink;
