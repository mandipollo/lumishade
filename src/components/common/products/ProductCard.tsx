import { ProductProps } from "@/types/ProductType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
	handleAddToCart: (product: ProductProps) => void;
	product: ProductProps;
}

const ProductCard: React.FC<ProductCardProps> = ({
	product,
	handleAddToCart,
}) => {
	return (
		<li className="flex flex-col justify-center items-center">
			<Link
				href={`/shop/${product._id}`}
				className="relative aspect-square w-full h-auto"
			>
				<Image
					sizes="(max-width: 768px) 100vw, 50vw"
					src={product.image}
					fill
					alt={`Image showcasing product - ${product.title}`}
					className="aspect-square"
				/>
			</Link>

			<div className="flex flex-col w-full items-center justify-center">
				<p>{product.title}</p>
				<div className="flex gap-2 justify-center items-center">
					<p>{product.size}</p>
					<span className="h-4 w-1 border-black border-l"></span>
					<p className="font-medium">{product.price}£</p>
				</div>
			</div>
			<button
				onClick={() => handleAddToCart(product)}
				className="border border-black px-4 py-2 mt-10 text-sm"
			>
				Add To Bag
			</button>
		</li>
	);
};

export default ProductCard;
