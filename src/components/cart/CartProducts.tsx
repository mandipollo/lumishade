import React from "react";
import Image from "next/image";
import RemoveFromCartButton from "./RemoveFromCartButton";
import { CartProductProps } from "@/store/features/cart/cartSlice";
import UseReduceProductFromCart from "@/hooks/UseReduceProductFromCart";
import userService from "@/service/userService";

interface CartProductsProps {
	cartItems: CartProductProps[];
}
const CartProducts: React.FC<CartProductsProps> = async ({ cartItems }) => {
	const handleRemoveItemFromCart = async (productId: string) => {
		const {} = await userService.removeFromUserCart({ productId });
	};
	if (!cartItems) {
		return <p>Fetching data</p>;
	}
	return (
		<section className="flex flex-col h-full w-full">
			<h1 className="text-2xl underline underline-offset-2 ">ORDER SUMMARY</h1>
			<ul role="list" className="flex flex-col gap-4">
				{cartItems.map((product: CartProductProps) => (
					<li
						role="listitem"
						key={product._id}
						className="flex flex-row p-2 gap-2 border-b"
					>
						<div className="relative w-28 h-28 aspect-square ">
							<Image
								loading="lazy"
								sizes="(max-width: 768px) 100vw, 50vw"
								fill
								className="object-cover"
								src={product.image}
								alt={product.title}
							/>
						</div>

						<div className="flex flex-row justify-between w-full">
							<div className="flex flex-col justify-between">
								<p className="text-lg">{product.title}</p>
								<p>{product.size}</p>
							</div>
							<div className="flex flex-col justify-between items-end">
								<RemoveFromCartButton productId={product._id} />
								<div className="flex gap-2 text-center items-center">
									<button
										onClick={() => handleRemoveItemFromCart(product._id)}
										aria-label={`Reduce the quantity of ${product.title} `}
										className="border p-2"
									>
										<Image
											width={20}
											height={20}
											alt="minus image"
											src="/svg/minus.svg"
										></Image>
									</button>
									<p className="">{product.count}</p>
									<button
										aria-label={`Increase the quantity of ${product.title} `}
										className="border p-2"
									>
										<Image
											width={20}
											height={20}
											alt="minus image"
											src="/svg/plus.svg"
										></Image>
									</button>
								</div>
								<p className="font-medium">£{product.price * product.count}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default CartProducts;
