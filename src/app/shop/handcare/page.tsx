import SectionContainer from "@/components/common/container/SectionContainer";
import ProductCategory from "@/components/shop/ProductCategory";
import ProductFilter from "@/components/shop/ProductFilter";
import ProductSection from "@/components/common/products/ProductSection";
import productService from "@/service/productService";

const HandCarePage = async () => {
	const { products, productCount } =
		await productService.getCategoryProductsData("handcare");
	return (
		<SectionContainer>
			<div className="flex flex-col gap-2 h-40 justify-center items-center w-full border-b border-black">
				{productCount && (
					<>
						<h1 className="text-xl md:text-2xl">Hand Care ({productCount})</h1>
						<p className="text-center text-sm">
							Give your hands the love they need. Discover our range of
							moisturizing creams and soothing balms for silky, cared-for hands.
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

export default HandCarePage;
