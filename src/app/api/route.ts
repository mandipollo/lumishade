import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json({
		hell0: "hello world",
	});
}
