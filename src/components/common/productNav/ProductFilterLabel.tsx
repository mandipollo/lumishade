import Image from "next/image";
import React from "react";

interface ProductFilterLabelProps {
	filterHeading: string;
	isActive: boolean;
}
const ProductFilterLabel: React.FC<ProductFilterLabelProps> = ({
	filterHeading,
	isActive,
}) => {
	return (
		<li className="flex justify-between items-center">
			<p>{filterHeading}</p>
			<Image src="/svg/plus.svg" alt="image of plus" width={10} height={10} />
		</li>
	);
};

export default ProductFilterLabel;
