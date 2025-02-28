import React from "react";
import { Dummy_data } from "./ProductDummyData";
import ProductCard from "./ProductCard";
import { ProductProps } from "@/types/ProductType";

const ProductSection: React.FC<{ products: ProductProps[] }> = ({
	products,
}) => {
	return (
		<section className="flex flex-1 ">
			<ul className="grid grid-cols-3 gap-2 w-full">
				{products.map(product => (
					<ProductCard
						key={product.id}
						id={product.id}
						size={product.size}
						image={product.image}
						price={product.price}
						title={product.title}
					/>
				))}
			</ul>
		</section>
	);
};

export default ProductSection;
