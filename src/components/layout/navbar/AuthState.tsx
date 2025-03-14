"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import LinkButton from "../../common/ui/LinkButton";
import Link from "next/link";
import React from "react";
import { resetUser } from "@/store/features/user/userSlice";
import { useRouter } from "next/navigation";
import { resetCart } from "@/store/features/cart/cartSlice";

const AuthState = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const user = useAppSelector(state => state.user.email);
	const cart = useAppSelector(state => state.cart);
	console.log(cart);

	// clear redux state and token from local storage

	const handleSignOut = () => {
		dispatch(resetUser());
		dispatch(resetCart());
		localStorage.removeItem("token");
		router.push("/");
	};
	return (
		<>
			{user ? (
				<button onClick={handleSignOut}>LOGOUT</button>
			) : (
				<Link href="/login">
					<p className="font-extralight">LOGIN</p>
				</Link>
			)}
		</>
	);
};

export default AuthState;
