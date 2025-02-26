import React, { FC } from "react";
import { Dummy_Data } from "./Dummy-data";
import CategoryIndividualProduct from "./CategoryIndividualProduct";

const ShopCategory: FC<{ category: string }> = ({ category }) => {
	const categoryProducts = Dummy_Data.filter(
		product => product.category === category
	);

	return (
		<section className="flex flex-col gap-4 justify-center items-center w-full h-full ">
			<h5 className="text-2xl flex w-full"> SHOP {category.toUpperCase()}</h5>
			<ul
				role="list"
				className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 h-full w-full"
			>
				{categoryProducts.map(product => (
					<CategoryIndividualProduct key={product.id} product={product} />
				))}
			</ul>
		</section>
	);
};

export default ShopCategory;
