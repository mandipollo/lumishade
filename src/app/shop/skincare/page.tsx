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

const SkincarePage = () => {
	const [error, setError] = useState<string>("");
	const [products, setProducts] = useState<ProductProps[]>([]);
	const [productCount, setProductCount] = useState<number>(0);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("/api/product/skinCare");

				if (response.data.success) {
					setProducts(response.data.skinCareProducts);
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
				<h1 className="text-xl md:text-2xl">Skin Care ({productCount})</h1>
				<p className="text-center text-sm">
					Discover our exclusive skincare collection designed to elevate your
					beauty routine! We take pride in sourcing high-quality ingredients
					with traceable origins and using methods inspired by timeless
					traditions.
				</p>
			</div>
			<ProductCategory />
			<section className="flex flex-row gap-2 relative ">
				<ProductFilter />
				<ProductSection products={products} />
			</section>
		</SectionContainer>
	);
};

export default SkincarePage;
