"use client";
import AccountDetail from "@/components/account/AccountDetail";
import AccountNav from "@/components/account/AccountNav";
import React from "react";

const AccountPage = () => {
	return (
		<section className="flex flex-row relative min-h-screen h-full w-full bg-white">
			<AccountNav />
			<AccountDetail />
		</section>
	);
};

export default AccountPage;
