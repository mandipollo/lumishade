import { NextRequest } from "next/server";

import { authMiddleware } from "./app/api/util/authMiddleware";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
	return await authMiddleware(request);
}

//
export const config = {
	matcher: ["/api/user/addToCart"],
};
