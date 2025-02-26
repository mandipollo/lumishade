"use server";

import User from "@/models/userModels";
import { revalidatePath } from "next/cache";
import { connectToMongoDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
	await connectToMongoDB();
	// Extracting user detaials
	const { firstName, lastName, email, password } = await req.json();

	try {
		// hash password

		const salt = bcrypt.genSaltSync(10);

		const hashedPassword = bcrypt.hashSync(password, salt);
		// Creating a new user using user model
		const newUser = await User.create({
			firstName,
			lastName,
			email,
			password: hashedPassword,
		});
		// Saving the new user
		await newUser.save();
		// Triggering revalidation of the specified path ("/")
		revalidatePath("/");
		// Returning the string representation of the new user

		return NextResponse.json({
			success: true,
			message: "User's account successfully created",
			data: {
				firstName,
				lastName,
				email,
			},
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			success: false,
			message: "error creating user",
		});
	}
}
