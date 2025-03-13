"use client";
import React, { FC } from "react";
import { ProductProps } from "@/types/ProductType";
import UseCart from "@/hooks/UseCart";

interface AddToCartButtonProps {
	product: ProductProps;
	textColor: string;
	bgColor: string;
}
const AddToCartButton: FC<AddToCartButtonProps> = ({
	product,
	bgColor,
	textColor,
}) => {
	const { handleAddToCart, isSubmitting, error } = UseCart();

	return (
		<button
			disabled={isSubmitting}
			onClick={() => handleAddToCart(product)}
			className={`border border-black px-4 py-2 mt-10 text-sm ${bgColor} ${textColor} `}
		>
			Add To Bag
		</button>
	);
};

export default AddToCartButton;
