"use client";
import { FC, useEffect, useState } from "react";
import SectionContainer from "@/components/common/container/SectionContainer";
import ProductCategory from "@/components/common/productNav/ProductCategory";
import ProductFilter from "@/components/common/productNav/ProductFilter";
import ProductSection from "@/components/common/products/ProductSection";
import { ProductProps } from "@/types/ProductType";
import axios from "axios";
import getErrorMessage from "@/utils/getErrorMessage";
import { toast } from "react-toastify";

const ShopPage: FC = () => {
	const [error, setError] = useState<string>("");
	const [products, setProducts] = useState<ProductProps[]>([]);
	const [productCount, setProductCount] = useState<number | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("/api/product");

				if (response.data.success) {
					setProducts(response.data.products);
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
							All Products ({productCount})
						</h1>
						<p className="text-center text-sm">
							From our extensive array of skincare, body care, and hair care,
							we&apos;ve got everything you need to elevate your routine. Our
							curated selection features natural and innovative formulas,
							ensuring there&apos;s something for everyone, whether you&apos;re
							seeking a radiant glow or indulgent treatments.
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

export default ShopPage;
