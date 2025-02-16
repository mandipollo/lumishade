"use client";
import React, { FC, useMemo } from "react";
import { ProductProps } from "../../cart/DataTypes";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart } from "@/store/features/cart/cartSlice";

const AddToCartButton: FC<{ product: ProductProps }> = ({ product }) => {
	const cart = useAppSelector(state => state.cart.cart) as ProductProps[];
	const dispatch = useAppDispatch();

	const isInCart = useMemo(
		() => cart.some(cartItem => cartItem.id === product.id),
		[cart, product.id]
	);

	const addToCartHandler = () => {
		dispatch(addToCart(product));
	};

	return (
		<button
			type="button"
			onClick={!isInCart ? addToCartHandler : undefined}
			aria-label={isInCart ? "Item added to cart" : "Add item to cart"}
			aria-disabled={isInCart}
			disabled={isInCart}
			className={`border px-2 rounded-xl transition ${
				isInCart
					? "bg-[#4D3D30] text-white cursor-not-allowed"
					: "border-borderColorDark hover:bg-gray-200"
			}`}
		>
			{isInCart ? "ADDED TO CART" : "ADD TO CART"}
		</button>
	);
};

export default AddToCartButton;
