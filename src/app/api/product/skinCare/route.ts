import { connectToMongoDB } from "@/lib/db";
import Product from "@/models/productModel";
import getErrorMessage from "@/utils/getErrorMessage";
import { NextResponse } from "next/server";

export async function GET() {
	await connectToMongoDB();
	const productsPerPage = 20;

	try {
		const skinCareProducts = await Product.find({
			category: "skincare",
		}).limit(productsPerPage);

		const totalProducts = await Product.find({
			category: "skincare",
		}).countDocuments();
		if (!skinCareProducts) {
			return NextResponse.json({
				success: false,
				message: "Could not fetch products",
			});
		}

		return NextResponse.json({
			success: true,
			skinCareProducts,
			totalProducts,
		});
	} catch (error: unknown) {
		const message = getErrorMessage(error);
		return NextResponse.json({ success: false, message });
	}
}
