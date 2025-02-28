import { ProductProps } from "@/types/ProductType";
import Image from "next/image";
import React from "react";

const ProductCard: React.FC<ProductProps> = ({
	id,
	title,
	size,
	image,
	price,
	category,
}) => {
	return (
		<li className="flex flex-col justify-center items-center">
			<Image
				src={image}
				width={100}
				height={100}
				alt={`Image showcasing product - ${title}`}
				className="aspect-square"
			/>

			<div className="flex flex-col w-full items-center justify-center">
				<p>{title}</p>
				<div className="flex gap-2 justify-center items-center">
					<p>{size}</p>
					<span className="h-4 w-1 border-black border-l"></span>
					<p className="font-medium">{price}£</p>
				</div>
			</div>
			<button className="border border-black px-4 py-2 mt-10 text-sm">
				Add To Bag
			</button>
		</li>
	);
};

export default ProductCard;
