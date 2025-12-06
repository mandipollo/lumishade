// import { NextRequest } from "next/server";
// import { clerkMiddleware } from "@clerk/nextjs/server";
// import { authMiddleware } from "./app/api/util/authMiddleware";

// export default clerkMiddleware();
// // This function can be marked `async` if using `await` inside
// export async function middleware(request: NextRequest) {
// 	return await authMiddleware(request);
// }

// //
// export const config = {
// 	matcher: ["/api/user/addToCart", "/api/user/removeItemFromCart"],
// };

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		// Always run for API routes
		"/(api|trpc)(.*)",
	],
};
