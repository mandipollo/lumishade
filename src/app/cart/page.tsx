"use client";

import React from "react";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { ProductProps } from "@/types/ProductType";
import Button from "@/components/common/ui/Button";
import Link from "next/link";
import CartProducts from "@/components/cart/CartProducts";
import ToCheckout from "@/components/cart/ToCheckout";
const CartPage = () => {
	const cartItems = useAppSelector(state => state.cart.cart) as ProductProps[];

	const totalPrice = cartItems.reduce(
		(accumulator, product) => accumulator + product.price,
		0
	);

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
