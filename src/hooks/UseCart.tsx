"use client";
import { addToCart } from "@/store/features/cart/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import { ProductProps } from "@/types/ProductType";
import getErrorMessage from "@/utils/getErrorMessage";
import axios from "axios";
import React, { useEffect, useState } from "react";

const UseCart = () => {
	const [token, setToken] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	useEffect(() => {
		setToken(localStorage.getItem("token"));
	}, []);

	const dispatch = useAppDispatch();
	//
	const handleAddToCart = async (product: ProductProps) => {
		try {
			setIsSubmitting(true);
			dispatch(addToCart(product));
			const response = await axios.post(
				"/api/user/addToCart",
				{
					productId: product._id,
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			if (!response.data.success) {
				throw new Error("could not add product to bag!");
			}
		} catch (error) {
			let message = getErrorMessage(error);
			setError(message);
		} finally {
			setIsSubmitting(false);
		}
	};

	return { handleAddToCart, isSubmitting, error };
};

export default UseCart;
