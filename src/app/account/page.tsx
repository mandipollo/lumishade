"use client";
import AccountDetail from "@/components/account/AccountDetail";
import AccountNav from "@/components/account/AccountNav";
import React from "react";

const page = () => {
	return (
		<section className="flex flex-row relative h-full min-h-screen w-full gap-4 p-4 bg-white">
			<AccountNav />
			<AccountDetail />
		</section>
	);
};

export default page;
