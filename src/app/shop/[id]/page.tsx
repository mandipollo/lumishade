import React, { FC } from "react";
import { Dummy_Data } from "@/components/shop/Dummy-data";
import Image from "next/image";
import { Metadata } from "next";
import ShopCategory from "@/components/shop/ShopCategory";
import AddToCartButton from "@/components/common/ui/AddToCartButton";

export const metadata: Metadata = {
	title: "Product",
	description: "Show selected products",
};
const ProductPage: FC<{ params: { id: string } }> = ({ params }) => {
	const parsedId = parseInt(params.id, 10);
	const product = Dummy_Data.find(product => product.id === parsedId);

	if (!product) {
		return null;
	}
	return (
		<section className="flex flex-col py-4 px-2 gap-4 justify-center items-center">
			<article className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-20 w-full h-full min-h-screen max-w-7xl">
				<div className="flex relative h-full w-full">
					<Image
						loading="lazy"
						src={product.image}
						alt={product.title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-contain h-full w-full"
					/>
				</div>

				<div
					role="contentinfo"
					key={product.id}
					className="flex justify-center flex-col space-y-4 relative"
				>
					<h4 className="text-2xl">
						{product.category.toUpperCase()} - {product.title}
					</h4>
					<p>
						Please note that this is not a real project but a demo designed
						solely to showcase our skills and expertise in web development,
						design, and UX copywriting. The product is intended for
						demonstration purposes only and should not be construed as a fully
						functional or operational e-commerce website. Thank you for your
						understanding.
					</p>
					<p className="text-xl">£{product.price}</p>

					<AddToCartButton product={product} />
				</div>
			</article>

			<ShopCategory category={product.category} />
		</section>
	);
};

export default ProductPage;
