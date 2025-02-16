"use client";

import { FC } from "react";
import ShopFilter from "@/components/shop/ShopFilter";

import ShopContent from "@/components/shop/ShopContent";
const ShopPage: FC = () => {
	return (
		<section className="flex flex-col w-full h-full p-2 space-y-4">
			<ShopFilter />
			<ShopContent />
		</section>
	);
};

export default ShopPage;
