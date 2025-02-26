"use client";

import ErrorMessage from "@/components/common/ui/ErrorMessage";
import { setUser } from "@/store/features/user/userSlice";
import { useAppDispatch } from "@/store/hooks";
import { ExtendedLoginErrors } from "@/types/Login-types";
import getErrorMessage from "@/utils/getErrorMessage";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const LoginPage = () => {
	// redux

	const dispatch = useAppDispatch();

	//
	const router = useRouter();
	const [errors, setErrors] = useState<ExtendedLoginErrors>({
		email: "",
		password: "",
		general: "",
	});
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			if (!email.includes("@") || !email) {
				return setErrors(prev => ({ ...prev, email: "Please enter email" }));
			}
			if (password.trim().length < 6 || !password) {
				return setErrors(prev => ({
					...prev,
					password: "Please provide password",
				}));
			}
			const response = await axios.post("/api/user/login", {
				email,
				password,
			});

			// throw error
			if (!response.data.success) {
				throw new Error(response.data.message);
			}
			// dispatch action
			dispatch(setUser(response.data.user));
			// store jwt token for authorization
			localStorage.setItem("token", response.data.token);
			router.push("/");
		} catch (error) {
			const message = getErrorMessage(error);
			toast.error(message);
			console.log(message);
			setErrors(prev => ({ ...prev, general: message }));
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="flex flex-col gap-4 h-[calc(100vh-3rem)] w-full justify-center items-center bg-white">
			<form
				onSubmit={handleSubmitLogin}
				className="flex flex-col gap-4 w-full max-w-2xl"
			>
				<div className="flex flex-col gap-2">
					<label htmlFor="email">Email</label>
					<input
						required
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder="Taylor@gmail.com"
						type="email"
						id="email"
						className="p-2 border w-full"
					/>
					<ErrorMessage error={errors.email} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="password">Password</label>
					<input
						required
						value={password}
						onChange={e => setPassword(e.target.value)}
						type="password"
						id="password"
						className="p-2 border w-full"
					/>
					<ErrorMessage error={errors.password} />
				</div>

				<button
					disabled={isSubmitting}
					type="submit"
					className="bg-black text-white p-2"
				>
					LOG IN
				</button>
			</form>
			<div className="flex flex-row justify-center items-center gap-2 w-full max-w-xl">
				<p className="text-sm">Don&apos;t have an Account?</p>
				<Link href="/signup" className="text-blue-500">
					SIGNUP
				</Link>
			</div>
		</section>
	);
};

export default LoginPage;
