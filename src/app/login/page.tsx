import Link from "next/link";
import React from "react";
import { SignIn } from "@clerk/nextjs";

const page = () => {
	return (
		<section className="flex h-screen justify-center items-center">
			<SignIn />
		</section>
	);
};

export default page;
