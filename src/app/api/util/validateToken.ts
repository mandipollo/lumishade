import React from "react";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
const validateToken = (req: NextRequest) => {
	const token = req.headers.get("authorization")?.split(" ")[1];
	if (!token)
		return NextResponse.json(
			{ message: "A token is required!" },
			{ status: 403 }
		);

	try {
		if (process.env.JWT_SECRET) {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
		}
	} catch (error) {
		console.error("validateToken.ts", " :: Error ❌ : ", error);
	}
};

export default validateToken;
