import SectionContainer from "@/components/common/container/SectionContainer";
import ProductCategory from "@/components/shop/ProductCategory";
import ProductFilter from "@/components/shop/ProductFilter";
import ProductSection from "@/components/common/products/ProductSection";
import productService from "@/service/productService";

const NewProductsPage = async () => {
	const { products, productCount } =
		await productService.getCategoryProductsData("newProducts");
	return (
		<SectionContainer>
			<div className="flex flex-col gap-2 h-40 justify-center items-center w-full border-b border-black">
				{productCount && (
					<>
						<h1 className="text-xl md:text-2xl">
							New Products ({productCount})
						</h1>
						<p className="text-center text-sm">
							Enjoy all the latest beauty ranges and products from
							L&apos;OCCITANE! Behind every L&apos;OCCITANE product is a
							traceable origin, producers with exacting standards, and
							techniques inherited from the traditions of Provence or elsewhere.
							Our products include personal face care, beautiful fragrances,
							body and hair care and items for the home, travel and gifts.
							Don&apos;t forget to check back to this section frequently to
							discover our new creations.
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

export default NewProductsPage;
