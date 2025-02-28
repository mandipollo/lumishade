import { connectToMongoDB } from "@/lib/db";
import Product from "@/models/productModel";
import getErrorMessage from "@/utils/getErrorMessage";
import { NextResponse } from "next/server";

export async function GET() {
	await connectToMongoDB();
	const productsPerPage = 20;

	try {
		const bodyCareProducts = await Product.find({
			category: "bodycare",
		}).limit(productsPerPage);

		const totalProducts = await Product.find({
			category: "bodycare",
		}).countDocuments();
		if (!bodyCareProducts) {
			return NextResponse.json({
				success: false,
				message: "Could not fetch products",
			});
		}

		return NextResponse.json({
			success: true,
			bodyCareProducts,
			totalProducts,
		});
	} catch (error: unknown) {
		const message = getErrorMessage(error);
		return NextResponse.json({ success: false, message });
	}
}
