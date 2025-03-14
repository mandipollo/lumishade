import React from "react";
const ToCheckout: React.FC<{ totalPrice: number }> = ({ totalPrice }) => {
	return (
		<section className="relative justify-center h-full w-96 ">
			<div className="flex flex-col w-full p-2 sticky top-20 gap-4 items-center ">
				<div className="flex justify-between items-center w-full py-2">
					<p>Subtotal</p>
					<span className="font-semibold">£{totalPrice.toFixed(2) ?? 0}</span>
				</div>
				<div className="flex justify-between items-center w-full py-2">
					<p>Standard Delivery</p>
					<span className="font-semibold">FREE</span>
				</div>
				<div className="flex justify-between items-center w-full border-t py-2">
					<p className="text-lg font-semibold">Total</p>
					<span className="text-lg font-semibold">{totalPrice}</span>
				</div>

				<button className="border p-2 w-full bg-yellow-400 hover:bg-yellow-300">
					Continue to checkout
				</button>
			</div>
		</section>
	);
};

export default ToCheckout;
