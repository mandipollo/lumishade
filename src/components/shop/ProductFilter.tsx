import React from "react";
import ProductFilterLabel from "./ProductFilterLabel";
import Image from "next/image";

const ProductFilter = () => {
	return (
		<div className="flex flex-col gap-4 sticky top-14 left-0 w-60 h-full">
			<div>
				<button className="flex flex-row items-center gap-2 text-md">
					<Image
						src="/svg/filter.svg"
						alt="filter image"
						width={10}
						height={10}
					/>

					<p>Filters</p>
				</button>
			</div>
			<ul className="flex flex-col gap-2 text-xs font-medium">
				<ProductFilterLabel isActive={false} filterHeading="PRODUCT TYPES" />
				<ProductFilterLabel isActive={false} filterHeading="COLLECTIONS" />
				<ProductFilterLabel isActive={false} filterHeading="PRICE" />
			</ul>
		</div>
	);
};

export default ProductFilter;
