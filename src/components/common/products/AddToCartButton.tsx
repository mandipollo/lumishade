"use client";
import React, { FC, useEffect, useState } from "react";
import { ProductProps } from "@/types/ProductType";
import userService from "@/service/userService";

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
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	const handleAddToCart = async (productId: string) => {
		setIsSubmitting(true);

		const token = localStorage.getItem("token");
		if (!token) return;
		try {
			const {} = await userService.addToUserCart({ productId, token });
		} catch (error) {}
	};

	return (
		<button
			disabled={isSubmitting}
			onClick={() => handleAddToCart(product._id)}
			className={`border border-black px-4 py-2 mt-10 text-sm ${bgColor} ${textColor} `}
		>
			Add To Bag
		</button>
	);
};

export default AddToCartButton;
