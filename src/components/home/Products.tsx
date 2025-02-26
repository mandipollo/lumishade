import Image from "next/image";
import React from "react";

const Products = () => {
	return (
		<section className="flex flex-col w-full gap-4 text-2xl text-white">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 ">
				<figure className="relative w-full h-full aspect-[3/2] ">
					<Image
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover"
						alt="Eco-refill products"
						src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1739713280/eco-refills_vlk7ul.webp"
					/>
					<h3 className="absolute bottom-2 left-1/2 z-10 transform -translate-x-1/2 ">
						ECO-REFILLS
					</h3>
				</figure>
				<figure className="relative w-full h-full aspect-[3/2]">
					<Image
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover"
						alt="Bestseller products"
						src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1739713280/bestsellers_jarsjz.webp"
					/>
					<h3 className="absolute bottom-2 left-1/2 z-10 transform -translate-x-1/2 ">
						BEST-SELLERS
					</h3>
				</figure>
			</div>

			{/* Second Row - 3 columns */}
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-4">
				<figure className="relative w-full h-full aspect-square">
					<Image
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover"
						alt="Body care products"
						src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1739713280/bodycare_dqseve.webp"
					/>
					<h3 className="absolute bottom-2 left-1/2 z-10 transform -translate-x-1/2 ">
						BODY CARE
					</h3>
				</figure>
				<figure className="relative w-full h-full aspect-square">
					<Image
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover"
						alt="Skincare products"
						src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1739713281/skincare_h81j8x.webp"
					/>
					<h3 className="absolute bottom-2 left-1/2 z-10 transform -translate-x-1/2 ">
						SKINCARE
					</h3>
				</figure>
				<figure className="relative w-full h-full aspect-square">
					<Image
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover"
						alt="Hand care products"
						src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1739713281/handcare_pcwgpr.webp"
					/>
					<h3 className="absolute bottom-2 left-1/2 z-10 transform -translate-x-1/2 ">
						HAND CARE
					</h3>
				</figure>
			</div>
		</section>
	);
};

export default Products;
