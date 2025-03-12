"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductProps } from "@/types/ProductType";
import { addToCart } from "@/store/features/cart/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import axios from "axios";
import getErrorMessage from "@/utils/getErrorMessage";

const ProductSection: React.FC<{ products: ProductProps[] }> = ({
	products,
}) => {
	const [token, setToken] = useState<string | null>(null);
	useEffect(() => {
		setToken(localStorage.getItem("token"));
	}, []);

	const dispatch = useAppDispatch();
	const handleAddToCart = async (product: ProductProps) => {
		try {
			console.log("dispatch");

			// dispatch(addToCart(product));
			const response = await axios.post(
				"/api/user/addToCart",
				{
					productId: product._id,
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			console.log(response);
		} catch (error) {
			let message = getErrorMessage(error);
			console.log(message);
		}
	};
	return (
		<section className="flex flex-1 ">
			<ul className="grid grid-cols-3 gap-2 w-full">
				{products.map(product => (
					<ProductCard
						handleAddToCart={handleAddToCart}
						key={product._id}
						product={product}
					/>
				))}
			</ul>
		</section>
	);
};

export default ProductSection;
