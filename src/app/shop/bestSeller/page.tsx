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

const BestSellerPage = () => {
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
				const response = await axios.get("/api/product/bestseller");

				if (response.data.success) {
					setProducts(response.data.bestSellerProducts);
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
							Best Sellers ({productCount})
						</h1>
						<p className="text-center text-sm">
							For more than 40 years, we&apos;ve been developing award-winning
							natural skincare, body care and beauty products, inspired by the
							Provençal art-de-vivre. Explore our best-selling products, from
							beauty favourites to our most popular fragrances.
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

export default BestSellerPage;
