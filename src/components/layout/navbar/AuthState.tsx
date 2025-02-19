"use client";

import LinkButton from "@/components/common/ui/LinkButton";
import { useUser } from "@clerk/nextjs";
import { log } from "console";
import Link from "next/link";
import React from "react";

const AuthState = () => {
	const { user, isSignedIn } = useUser();

	return (
		<>
			{isSignedIn ? (
				<Link href="/account">
					<p className="font-extralight">ACCOUNT</p>
				</Link>
			) : (
				<Link href="/login">
					<p className="font-extralight">LOGIN</p>
				</Link>
			)}
		</>
	);
};

export default AuthState;
