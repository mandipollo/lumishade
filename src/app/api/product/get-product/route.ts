import Product from "@/models/productModel";
import getErrorMessage from "@/utils/getErrorMessage";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
	const { productId } = await req.json();

	if (!productId) {
		return NextResponse.json({
			success: false,
			message: "Missing product id",
		});
	}

	try {
		const product = await Product.findById({ _id: productId });

		if (!product) {
			return NextResponse.json({
				success: false,
				message: "Product does not exists",
			});
		}

		return NextResponse.json({ success: true, product });
	} catch (error: unknown) {
		let message = getErrorMessage(error);
		NextResponse.json({ success: false, message });
	}
}
