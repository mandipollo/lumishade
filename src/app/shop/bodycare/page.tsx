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

const BodycarePage = () => {
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
				const response = await axios.get("/api/product/bodycare");

				if (response.data.success) {
					setProducts(response.data.bodyCareProducts);
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
						<h1 className="text-xl md:text-2xl">Body Care ({productCount})</h1>
						<p className="text-center text-sm">
							Pamper your body with our luxurious care essentials. From
							nourishing lotions to rejuvenating scrubs, discover everything you
							need for smooth, radiant skin.
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

export default BodycarePage;
