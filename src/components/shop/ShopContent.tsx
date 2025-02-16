"use client";
import React from "react";
import { Dummy_Data } from "./Dummy-data";
import Product from "./ShopProduct";
import { useAppSelector } from "@/store/hooks";

const ShopContent = () => {
	const filterType = useAppSelector(state => state.filter.filter);

	const filteredData =
		filterType === "all"
			? Dummy_Data
			: Dummy_Data.filter(products => products.category === filterType);

	return (
		<section
			className="flex w-full h-full"
			aria-labelledby="shop-content-heading"
		>
			<h2 id="shop-content-heading" className="sr-only">
				Product Listings
			</h2>
			<ul
				className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 h-full w-full"
				role="list"
			>
				{filteredData.map(product => (
					<Product key={product.id} product={product} />
				))}
			</ul>
		</section>
	);
};

export default ShopContent;
