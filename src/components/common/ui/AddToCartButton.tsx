"use client";
import React, { FC, useMemo } from "react";
import { ProductProps } from "@/types/ProductType";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart } from "@/store/features/cart/cartSlice";

const AddToCartButton: FC<{ product: ProductProps }> = ({ product }) => {
	const cart = useAppSelector(state => state.cart.cart) as ProductProps[];
	const dispatch = useAppDispatch();

	const isInCart = useMemo(
		() => cart.some(cartItem => cartItem._id === product._id),
		[cart, product._id]
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
			className={`p-4 transition bg-black text-white ${
				isInCart ? " cursor-not-allowed" : " "
			}`}
		>
			{isInCart ? "ADDED TO BAG" : "ADD TO BAG"}
		</button>
	);
};

export default AddToCartButton;
