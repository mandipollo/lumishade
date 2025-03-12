"use client";
import React, { FC } from "react";
import Image from "next/image";
import { useAppDispatch } from "@/store/hooks";
import { removeFromCart } from "@/store/features/cart/cartSlice";

const RemoveFromCartButton: FC<{ productId: string }> = ({ productId }) => {
	// remove item from basket
	const dispatch = useAppDispatch();
	const handleRemoveItem = (productId: string) => {
		dispatch(removeFromCart(productId));
	};

	return (
		<button
			onClick={() => handleRemoveItem(productId)}
			className="flex text-md"
		>
			<Image src="/svg/cross.svg" alt="remove" width={20} height={20} />
		</button>
	);
};

export default RemoveFromCartButton;
