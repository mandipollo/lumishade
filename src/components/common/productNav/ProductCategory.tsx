"use client";

import React from "react";
import ProductNavLink from "./ProductNavLink";
import { usePathname } from "next/navigation";
import ProductNavButton from "./ProductNavLink";
const ProductCategory = () => {
	// set the active nav
	const pathname = usePathname();
	return (
		<nav className="flex w-full text-xs h-20">
			<ul className="flex flex-row gap-2 items-center justify-center w-full">
				<ProductNavButton
					productCat="All"
					isActive={pathname === "/shop" && true}
					link="/shop"
				/>
				<ProductNavLink
					productCat="Best Sellers"
					isActive={pathname === "/shop/bestSeller" && true}
					link="/shop/bestSeller"
				/>
				<ProductNavLink
					productCat="New Products"
					isActive={pathname === "/shop/newProducts" && true}
					link="/shop/newProducts"
				/>
				<ProductNavLink
					productCat="Skin Care"
					isActive={pathname === "/shop/skincare" && true}
					link="/shop/skincare"
				/>
				<ProductNavLink
					productCat="Body Care"
					isActive={pathname === "/shop/bodycare" && true}
					link="/shop/bodycare"
				/>
				<ProductNavLink
					productCat="Hand Care"
					isActive={pathname === "/shop/handcare" && true}
					link="/shop/handcare"
				/>
			</ul>
		</nav>
	);
};

export default ProductCategory;
