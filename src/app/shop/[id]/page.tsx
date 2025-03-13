"use client";
import React, { FC, useEffect, useState } from "react";
import SectionContainer from "@/components/common/container/SectionContainer";
import { ProductProps } from "@/types/ProductType";
import axios from "axios";
import getErrorMessage from "@/utils/getErrorMessage";
import Image from "next/image";
import AddToCartButton from "@/components/common/products/AddToCartButton";

const ProductPage: FC<{ params: { id: string } }> = ({ params }) => {
	const productId = params.id;
	const [error, setError] = useState<string>("");
	const [product, setProduct] = useState<ProductProps>();

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				if (!productId) return;
				const response = await axios.post("/api/product/get-product", {
					productId,
				});

				if (response.data.success) {
					setProduct(response.data.product);
				}
			} catch (error: unknown) {
				let message = getErrorMessage(error);
				setError(message);
			}
		};

		fetchProduct();
	}, [productId]);

	if (!product) {
		return <p>Loading....</p>;
	}
	return (
		<SectionContainer>
			<div className="grid grid-cols-2 gap-2">
				<div role="img" className="relative aspect-square">
					<Image
						sizes="(max-width: 768px) 100vw, 50vw"
						fill
						src={product?.image || "/path/to/default/image.jpg"}
						alt={`Image showcasing product - ${product?.title}`}
					></Image>
				</div>
				<div className="p-4 flex justify-center items-center">
					<div className="flex flex-col gap-4">
						<p className="font-semibold">{product?.category}</p>
						<h1 className="text-xl md:text-2xl font-medium">
							{product?.title}
						</h1>
						<p className="font-medium">£{product?.price}</p>
						<p>{product?.description}</p>
						<p className="font-medium">
							SIZE{" "}
							<span className="bg-black text-white rounded-full p-2">
								{product?.size}
							</span>
						</p>
						<AddToCartButton
							textColor="text-white"
							bgColor="bg-black"
							product={product}
						/>
					</div>
				</div>
			</div>
		</SectionContainer>
	);
};

export default ProductPage;
