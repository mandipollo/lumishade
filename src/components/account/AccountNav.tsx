"use client";
import React from "react";

const AccountNav = () => {
	return (
		<nav className="flex h-screen p-4 w-60 border border-gray-300">
			<ul className="flex flex-col h-full w-full gap-4">
				<li>
					<p>Personal</p>
				</li>
				<li className="text-gray-400">
					<p>Login & Security</p>
				</li>
				<li className="text-gray-400">
					<p>Order History</p>
				</li>
			</ul>
		</nav>
	);
};

export default AccountNav;
