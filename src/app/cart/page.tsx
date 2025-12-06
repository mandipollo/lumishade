"use client";

import React from "react";
import { useAppSelector } from "@/store/hooks";
import CartProducts from "@/components/cart/CartProducts";
import ToCheckout from "@/components/cart/ToCheckout";
import { CartProductProps } from "@/store/features/cart/cartSlice";
const CartPage = () => {
	// get the cart data from the server and populate it

	const cartItems = [];
	if (cartItems.length === 0) {
		return (
			<section className="h-screen flex justify-center items-center ">
				<h1 className="text-2xl">Cricketsss..</h1>
			</section>
		);
	}
	return (
		<section className="flex h-full min-h-[calc(100vh-3rem)] justify-center w-full bg-white">
			<div className="flex flex-row gap-2 justify-center w-full max-w-5xl pt-24">
				<CartProducts cartItems={cartItems} />
				<ToCheckout totalPrice={totalPrice} />
			</div>
		</section>
	);
};

export default CartPage;
