import Link from "next/link";
import React from "react";

const AuthState = () => {
	// check the auth from server

	return (
		<>
			<Link href="/login">
				<p className="font-extralight">LOGIN</p>
			</Link>
		</>
	);
};

export default AuthState;
