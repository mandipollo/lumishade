import SectionContainer from "@/components/common/container/SectionContainer";
import ProductCategory from "@/components/shop/ProductCategory";
import ProductFilter from "@/components/shop/ProductFilter";
import ProductSection from "@/components/common/products/ProductSection";
import productService from "@/service/productService";

const SkincarePage = async () => {
	const { products, productCount } =
		await productService.getCategoryProductsData("skincare");

	return (
		<SectionContainer>
			<div className="flex flex-col gap-2 h-40 justify-center items-center w-full border-b border-black">
				{productCount && (
					<>
						<h1 className="text-xl md:text-2xl">Skin Care ({productCount})</h1>
						<p className="text-center text-sm">
							Discover our exclusive skincare collection designed to elevate
							your beauty routine! We take pride in sourcing high-quality
							ingredients with traceable origins and using methods inspired by
							timeless traditions.
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

export default SkincarePage;
