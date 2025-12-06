import SectionContainer from "@/components/common/container/SectionContainer";
import ProductCategory from "@/components/shop/ProductCategory";
import ProductFilter from "@/components/shop/ProductFilter";
import ProductSection from "@/components/common/products/ProductSection";
import productService from "@/service/productService";

const BodycarePage = async () => {
	const { products, productCount } =
		await productService.getCategoryProductsData("bodycare");
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
