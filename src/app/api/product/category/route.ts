import { connectToMongoDB } from "@/lib/db";
import Product from "@/models/productModel";
import getErrorMessage from "@/utils/getErrorMessage";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	await connectToMongoDB();
	const productsPerPage = 20;
	const { category } = await req.json();
	try {
		const categoryProducts = await Product.find({
			category: category,
		}).limit(productsPerPage);

		const totalProducts = await Product.find({
			category: category,
		}).countDocuments();
		if (!categoryProducts) {
			return NextResponse.json({
				success: false,
				message: "Could not fetch products",
			});
		}

		return NextResponse.json({
			success: true,
			categoryProducts,
			totalProducts,
		});
	} catch (error: unknown) {
		const message = getErrorMessage(error);
		return NextResponse.json({ success: false, message });
	}
}
