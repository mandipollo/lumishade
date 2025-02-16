"use client";
import { filterType } from "@/store/features/shopfilter/shopFilterSlice";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { Dummy_Data } from "./Dummy-data";
import React from "react";

const ShopFilter = () => {
	const dispatch = useAppDispatch();
	const filter = useAppSelector(state => state.filter.filter);

	const handleFilter = (category: string) => {
		dispatch(filterType(category));
	};

	const categories = [
		{ name: "All", value: "all" },
		{ name: "Sunscreen", value: "sunscreen" },
		{ name: "Moisturizer", value: "moisturizer" },
		{ name: "Facewash", value: "facewash" },
		{ name: "Cream", value: "cream" },
	];

	return (
		<section
			className="flex w-full h-full gap-4 flex-col"
			aria-labelledby="shop-filter-heading"
		>
			<div className="flex w-full h-full items-center">
				<h2 id="shop-filter-heading" className="md:text-8xl text-4xl">
					{filter.toUpperCase()}
				</h2>
				<span
					className="flex md:w-20 h-10 w-10 md:h-20 md:text-4xl text-2xl rounded-full justify-center items-center border border-borderColorDark"
					aria-live="polite"
				>
					{filter === "all"
						? Dummy_Data.length
						: Dummy_Data.filter(product => product.category === filter).length}
				</span>
			</div>

			<nav aria-label="Filter products">
				<ul className="flex flex-wrap text-sm gap-2">
					{categories.map(({ name, value }) => (
						<li key={value}>
							<button
								onClick={() => handleFilter(value)}
								className={`px-2 border border-borderColorDark rounded-2xl ${
									filter === value ? "bg-gray-800 text-white" : ""
								}`}
								aria-pressed={filter === value}
							>
								{name.toUpperCase()} (
								{
									Dummy_Data.filter(product =>
										value === "all" ? true : product.category === value
									).length
								}
								)
							</button>
						</li>
					))}
				</ul>
			</nav>
		</section>
	);
};

export default ShopFilter;
