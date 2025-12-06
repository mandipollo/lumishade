"use client";

import productService from "@/service/productService";
import { ProductProps } from "@/types/ProductType";
import getErrorMessage from "@/utils/getErrorMessage";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UseGetProducts = () => {
	const [error, setError] = useState<string>("");
	const [products, setProducts] = useState<ProductProps[]>([]);
	const [productCount, setProductCount] = useState<number | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await productService.getProducts();

				if (data.success) {
					setProducts(data.products);
					setProductCount(data.totalProducts);
				}
			} catch (error) {
				let message = getErrorMessage(error);
				toast.error(message);
				setError(message);
			}
		};
		fetchData();
	}, []);

	return { productCount, products, error };
};

export default UseGetProducts;
