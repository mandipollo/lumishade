import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function authMiddleware(req: NextRequest) {
	try {
		// secret_key
		const secret = new TextEncoder().encode(process.env.JWT_SECRET);

		// Get the authorization header using the Fetch API's Headers interface
		const authHeader = req.headers.get("Authorization");

		// Check if token is provided
		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			return NextResponse.json(
				{ success: false, message: "Token missing." },
				{ status: 401 }
			);
		}

		// Extract the token
		const token = authHeader.split(" ")[1];

		// if token does not exists

		if (!token) {
			return NextResponse.json(
				{
					success: false,
					message: "Invalid token format",
				},
				{ status: 401 }
			);
		}
		// Decode and verify the token using your secret key
		const { payload } = await jwtVerify(token, secret);

		const _id = payload._id;

		// validate user if is a valid mongoDB ID

		if (typeof _id !== "string") {
			return NextResponse.json(
				{
					success: false,
					message: "invalid token format",
				},
				{ status: 401 }
			);
		}
		// Create a new Headers instance from the current request headers
		const headers = new Headers(req.headers);

		// Attach the user ID to the headers (you can choose any header name, here we use 'x-user-id')
		headers.set("_id", _id);

		console.log("Middleware set x-user-id:", headers.get("_id"));
		// response

		const response = NextResponse.next({
			request: {
				headers,
			},
		});

		return response;
	} catch (error) {
		return NextResponse.json(
			{ success: false, message: "Invalid token at middleware" },
			{ status: 401 }
		);
	}
}
