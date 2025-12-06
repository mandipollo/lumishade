import SectionContainer from "@/components/common/container/SectionContainer";
import ProductCategory from "@/components/shop/ProductCategory";
import ProductFilter from "@/components/shop/ProductFilter";
import ProductSection from "@/components/common/products/ProductSection";
import productService from "@/service/productService";

const BestSellerPage = async () => {
	const { products, productCount } =
		await productService.getBestSellerProducts();
	return (
		<SectionContainer>
			<div className="flex flex-col gap-2 h-40 justify-center items-center w-full border-b border-black">
				{productCount && (
					<>
						<h1 className="text-xl md:text-2xl">
							Best Sellers ({productCount})
						</h1>
						<p className="text-center text-sm">
							For more than 40 years, we&apos;ve been developing award-winning
							natural skincare, body care and beauty products, inspired by the
							Provençal art-de-vivre. Explore our best-selling products, from
							beauty favourites to our most popular fragrances.
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

export default BestSellerPage;
