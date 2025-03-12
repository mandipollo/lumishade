import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductProps } from "../../types/ProductType";
const CategoryIndividualProduct: FC<{
	product: ProductProps;
}> = ({ product }) => {
	return (
		<li role="listitem" className="flex flex-col gap-4 h-96 text-sm">
			<Link
				href={`/shop/${product._id}`}
				className="flex justify-center items-center h-full w-full"
			>
				<div
					key={product._id}
					className=" grid h-full w-full relative bg-primary"
				>
					<Image
						sizes="(max-width: 640px) 100vw,
							(max-width: 768px) 300, 
							(max-width: 1024px) 350  
							"
						loading="lazy"
						src={product.image}
						alt={product.title}
						fill
						className="object-cover"
					/>
				</div>
			</Link>

			<div className="flex">
				<p>
					{product.title} - £{product.price}
				</p>
			</div>
		</li>
	);
};

export default CategoryIndividualProduct;
