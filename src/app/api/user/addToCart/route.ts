import { connectToMongoDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModels";
import getErrorMessage from "@/utils/getErrorMessage";

export async function POST(req: NextRequest) {
	await connectToMongoDB();

	try {
		const { productId } = await req.json();

		const _id = req.headers.get("_id");

		// return NextResponse.json({ _id });
		if (!_id) {
			return NextResponse.json(
				{
					success: false,
					message: "User not authorized!",
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

		user.cartData.items.push({ productId });
		await user.save();
		return NextResponse.json(
			{ success: true, message: `Cart updated! ` },
			{ status: 200 }
		);
	} catch (error) {}
}
