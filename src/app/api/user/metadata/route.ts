import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse, NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: NextRequest) {
	const { houseNo, street, town, country, postcode } = await request.json();

	try {
		const client = await clerkClient();

		const { userId } = await auth();
		if (!userId) {
			return NextResponse.json({ success: false, message: "Unauthorized" });
		}

		await client.users.updateUserMetadata(userId, {
			privateMetadata: {
				houseNo,
				street,
				town,
				country,
				postcode,
			},
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("route.ts", " :: POST() :: Error ❌ : ", error);
	}
}

export async function GET(request: NextRequest) {
	try {
		const { userId } = await auth();

		if (!userId) {
			return NextResponse.json({ success: false, message: "Unauthorized" });
		}
		const client = await clerkClient();

		const user = await client.users.getUser(userId);
		return NextResponse.json(user.privateMetadata);
	} catch (error) {
		console.error("route.ts", " :: GET() :: Error ❌ : ", error);
	}
}
