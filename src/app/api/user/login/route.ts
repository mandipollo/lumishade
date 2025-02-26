import { connectToMongoDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModels";
import bcrypt from "bcryptjs";
import generateToken from "../../util/generateToken";
import getErrorMessage from "@/utils/getErrorMessage";

export async function POST(req: NextRequest) {
	await connectToMongoDB();

	//
	const { email, password } = await req.json();

	if (!email || !password) {
		return NextResponse.json({
			success: false,
			message: "Email and password is required!",
		});
	}
	try {
		const user = await User.findOne({ email: email });

		// check email exists
		if (!user) {
			return NextResponse.json({
				success: false,
				message: "User does not exists!",
			});
		}
		// compare password

		const isPasswordMatch = await bcrypt.compare(password, user.password);
		if (!isPasswordMatch) {
			return NextResponse.json({ success: false, message: "Wrong password!" });
		}

		// generate jwt and send it to the client

		const token = generateToken(user.id);

		return NextResponse.json({
			success: true,
			token,
			user: {
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
			},
		});
	} catch (error: unknown) {
		const message = getErrorMessage(error);
		return NextResponse.json({ success: false, message });
	}
}
