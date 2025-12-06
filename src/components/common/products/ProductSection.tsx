import React from "react";
import ProductCard from "./ProductCard";
import { ProductProps } from "@/types/ProductType";

const ProductSection = ({ products }: { products: ProductProps[] }) => {
	return (
		<section className="flex flex-1 ">
			<ul className="grid grid-cols-3 gap-2 w-full">
				{products.map(product => (
					<ProductCard key={product._id} product={product} />
				))}
			</ul>
		</section>
	);
};

export default ProductSection;
