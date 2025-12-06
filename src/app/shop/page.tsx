import SectionContainer from "@/components/common/container/SectionContainer";
import ProductCategory from "@/components/shop/ProductCategory";
import ProductFilter from "@/components/shop/ProductFilter";
import ProductSection from "@/components/common/products/ProductSection";
import productService from "@/service/productService";

const ShopPage = async () => {
	const { productCount, products } = await productService.getProductsData();
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
