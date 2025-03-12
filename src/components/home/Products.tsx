import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = () => {
	return (
		<section className="flex flex-col w-full gap-4 p-4 text-2xl text-white ">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
				<Link
					href="/shop/newProducts"
					className="relative w-full h-full aspect-[3/2] "
				>
					<Image
						priority
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover"
						alt="New products"
						src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1739713280/eco-refills_vlk7ul.webp"
					/>
					<span className="absolute bottom-2 left-1/2 z-10 transform -translate-x-1/2 ">
						NEW-PRODUCTS
					</span>
				</Link>
				<Link
					href="/shop/bestseller"
					className="relative w-full h-full aspect-[3/2]"
				>
					<Image
						priority
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover"
						alt="Bestseller products"
						src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1739713280/bestsellers_jarsjz.webp"
					/>
					<span className="absolute bottom-2 left-1/2 z-10 transform -translate-x-1/2 ">
						BEST-SELLERS
					</span>
				</Link>
			</div>

			{/* Second Row - 3 columns */}
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
				<Link
					href="/shop/bodycare"
					className="relative w-full h-full aspect-square"
				>
					<Image
						priority
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover"
						alt="Body care products"
						src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1739713280/bodycare_dqseve.webp"
					/>
					<span className="absolute bottom-2 left-1/2 z-10 transform -translate-x-1/2 ">
						BODY CARE
					</span>
				</Link>
				<Link
					href="/shop/skincare"
					className="relative w-full h-full aspect-square"
				>
					<Image
						priority
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover"
						alt="Skincare products"
						src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1739713281/skincare_h81j8x.webp"
					/>
					<span className="absolute bottom-2 left-1/2 z-10 transform -translate-x-1/2 ">
						SKINCARE
					</span>
				</Link>
				<Link
					href="/shop/handcare"
					className="relative w-full h-full aspect-square"
				>
					<Image
						priority
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover"
						alt="Hand care products"
						src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1739713281/handcare_pcwgpr.webp"
					/>
					<span className="absolute bottom-2 left-1/2 z-10 transform -translate-x-1/2 ">
						HAND CARE
					</span>
				</Link>
			</div>
		</section>
	);
};

export default Products;
