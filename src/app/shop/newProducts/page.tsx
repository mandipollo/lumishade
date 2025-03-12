"use client";
import SectionContainer from "@/components/common/container/SectionContainer";
import ProductCategory from "@/components/common/productNav/ProductCategory";
import ProductFilter from "@/components/common/productNav/ProductFilter";
import ProductSection from "@/components/common/products/ProductSection";
import { ProductProps } from "@/types/ProductType";
import getErrorMessage from "@/utils/getErrorMessage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const NewProductsPage = () => {
	const [error, setError] = useState<string>("");
	const [products, setProducts] = useState<ProductProps[]>([]);
	const [productCount, setProductCount] = useState<number | undefined>(
		undefined
	);
	useEffect(() => {
		if (window !== undefined) {
			window.scrollTo(0, 0);
		}
		const fetchData = async () => {
			try {
				const response = await axios.get("/api/product/newProducts");

				if (response.data.success) {
					setProducts(response.data.newProducts);
					setProductCount(response.data.totalProducts);
				}
			} catch (error) {
				let message = getErrorMessage(error);
				toast.error(message);
				setError(message);
			}
		};
		fetchData();
	}, []);
	return (
		<SectionContainer>
			<div className="flex flex-col gap-2 h-40 justify-center items-center w-full border-b border-black">
				{productCount && (
					<>
						<h1 className="text-xl md:text-2xl">
							New Products ({productCount})
						</h1>
						<p className="text-center text-sm">
							Enjoy all the latest beauty ranges and products from
							L&apos;OCCITANE! Behind every L&apos;OCCITANE product is a
							traceable origin, producers with exacting standards, and
							techniques inherited from the traditions of Provence or elsewhere.
							Our products include personal face care, beautiful fragrances,
							body and hair care and items for the home, travel and gifts.
							Don&apos;t forget to check back to this section frequently to
							discover our new creations.
						</p>
					</>
				)}
			</div>
			<ProductCategory />
			<section className="flex flex-row gap-2 relative ">
				<ProductFilter />
				<ProductSection products={products} />
			</section>
		</SectionContainer>
	);
};

export default NewProductsPage;
