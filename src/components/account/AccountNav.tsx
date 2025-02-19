"use client";
import React from "react";

const AccountNav = () => {
	return (
		<div className=" flex sticky top-16 left-4 p-4 h-full border border-gray-300 ">
			<ul className="flex flex-col gap-4">
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
		</div>
	);
};

export default AccountNav;
