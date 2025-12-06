import { connectToMongoDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModels";
import getErrorMessage from "@/utils/getErrorMessage";
import Product from "@/models/productModel";

export async function POST(req: NextRequest) {
	await connectToMongoDB();
	try {
		const { productId } = await req.json();
		const _id = req.headers.get("_id");

		if (!_id) {
			return NextResponse.json(
				{
					success: false,
					message: "User id missing!!",
					id: _id,
				},
				{ status: 401 }
			);
		}
		// find the user
		const user = await User.findById(_id);
		// check if the user exists
		if (!user) {
			return NextResponse.json(
				{
					success: false,
					message: "User does not exists",
				},
				{ status: 404 }
			);
		}
		// check if product exists
		const product = await Product.findById({ _id: productId });

		if (!product) {
			return NextResponse.json({
				success: false,
				message: "Product could not be found!",
			});
		}

		// check if the product is already in cart
		const productInCart = user.cartData.products.find(
			product => product.productId.toString() === productId
		);
		// decrease count if items count more then 2 else remove
		if (productInCart && productInCart.count > 1) {
			productInCart.count--;
		} else {
			user.cartData.products = user.cartData.products.filter(
				product => product.productId.toString() !== productId
			);
		}

		// increment itemCounts
		user.cartData.itemCounts--;
		await user.save();
		return NextResponse.json(
			{ success: true, message: `Cart updated!` },
			{ status: 200 }
		);
	} catch (error: unknown) {
		const message = getErrorMessage(error);
		return NextResponse.json({
			success: false,
			message,
		});
	}
}
