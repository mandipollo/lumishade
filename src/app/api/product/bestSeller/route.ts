import { connectToMongoDB } from "@/lib/db";
import Product from "@/models/productModel";
import getErrorMessage from "@/utils/getErrorMessage";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	await connectToMongoDB();
	const productsPerPage = 20;

	try {
		const bestSellerProducts = await Product.find({
			bestSeller: true,
		}).limit(productsPerPage);

		const productCount = await Product.find({
			bestSeller: true,
		}).countDocuments();
		if (!bestSellerProducts) {
			return NextResponse.json({
				success: false,
				message: "Could not fetch products",
			});
		}

		return NextResponse.json({
			success: true,
			bestSellerProducts,
			productCount,
		});
	} catch (error: unknown) {
		const message = getErrorMessage(error);
		return NextResponse.json({ success: false, message });
	}
}
