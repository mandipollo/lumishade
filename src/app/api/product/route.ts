import { NextResponse } from "next/server";
import Product from "@/models/productModel";
import getErrorMessage from "@/utils/getErrorMessage";
import { connectToMongoDB } from "@/lib/db";

export async function GET() {
	await connectToMongoDB();
	const productsPerPage = 20;

	try {
		const products = await Product.find({}).limit(productsPerPage);

		const totalProducts = await Product.countDocuments();
		if (!products) {
			return NextResponse.json({
				success: false,
				message: "Could not fetch products",
			});
		}

		// const totalProducts = await Product.countDocuments();
		return NextResponse.json({ success: true, products, totalProducts });
	} catch (error: unknown) {
		const message = getErrorMessage(error);
		return NextResponse.json({ success: false, message });
	}
}
