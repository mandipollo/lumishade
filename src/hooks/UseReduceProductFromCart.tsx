"use client";
import { useAppDispatch } from "@/store/hooks";
import getErrorMessage from "@/utils/getErrorMessage";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { removeFromCart } from "@/store/features/cart/cartSlice";

const UseReduceProductFromCart = () => {
	const [token, setToken] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [error, setError] = useState<string>("");
	useEffect(() => {
		setToken(localStorage.getItem("token"));
	}, []);

	const dispatch = useAppDispatch();
	//
	const handleReduceItemFromCart = async (productId: string) => {
		try {
			setIsSubmitting(true);
			dispatch(removeFromCart(productId));
			const response = await axios.post(
				"/api/user/removeItemFromCart",
				{
					productId: productId,
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			);

			if (response.data.success) {
				toast.success(response.data.message);
			}
		} catch (error) {
			let message = getErrorMessage(error);
			toast.error(message);
			setError(message);
		} finally {
			setIsSubmitting(false);
		}
	};

	return { handleReduceItemFromCart, isSubmitting, error };
};

export default UseReduceProductFromCart;
