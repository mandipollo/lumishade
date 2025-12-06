import SectionContainer from "@/components/common/container/SectionContainer";
import Image from "next/image";
import AddToCartButton from "@/components/common/products/AddToCartButton";
import productService from "@/service/productService";

const ProductPage = async ({ params }: { params: { id: string } }) => {
	const productId = params.id;

	const { product, error } = await productService.getProduct(productId);
	console.log(product);

	if (!product) {
		return <p>Loading....</p>;
	}
	return (
		<SectionContainer>
			<div className="grid grid-cols-2 gap-2">
				<div role="img" className="relative aspect-square">
					<Image
						sizes="(max-width: 768px) 100vw, 50vw"
						fill
						src={product?.image || "/path/to/default/image.jpg"}
						alt={`Image showcasing product - ${product?.title}`}
					></Image>
				</div>
				<div className="p-4 flex justify-center items-center">
					<div className="flex flex-col gap-4">
						<p className="font-semibold">{product?.category}</p>
						<h1 className="text-xl md:text-2xl font-medium">
							{product?.title}
						</h1>
						<p className="font-medium">£{product?.price}</p>
						<p>{product?.description}</p>
						<p className="font-medium">
							SIZE{" "}
							<span className="bg-black text-white rounded-full p-2">
								{product?.size}
							</span>
						</p>
						<AddToCartButton
							textColor="text-white"
							bgColor="bg-black"
							product={product}
						/>
					</div>
				</div>
			</div>
		</SectionContainer>
	);
};

export default ProductPage;
