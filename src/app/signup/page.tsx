import React from "react";
import { SignUp } from "@clerk/nextjs";

const page = () => {
	return (
		<section className="h-screen w-full flex justify-center items-center">
			<SignUp />
		</section>
	);
};

export default page;
