"use client";
import validateUserSignup from "@/utils/validateUserSignup";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
	ExtendedSingupErrors,
	UserSingupState,
} from "@/types/UserSingup-types";
import ErrorMessage from "@/components/common/ui/ErrorMessage";
import getErrorMessage from "../../utils/getErrorMessage";
import { toast } from "react-toastify";
const SignupPage = () => {
	const router = useRouter();
	const [errors, setErrors] = useState<ExtendedSingupErrors>({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		general: "",
	});
	const [formData, setFormData] = useState<UserSingupState>({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	// form field

	const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;

		setFormData(prev => ({ ...prev, [id]: value }));
	};
	// post data to route handler
	const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// prevent accidental form submission
		setIsSubmitting(true);
		try {
			// validate data
			const { isValid, errors } = validateUserSignup(
				formData.firstName,
				formData.lastName,
				formData.email,
				formData.password,
				formData.confirmPassword
			);

			if (!isValid) {
				return setErrors(errors);
			}

			const response = await axios.post("/api/user", {
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				password: formData.password,
			});
			if (response.data.success) {
				toast.success(response.data.message);
				router.push("/login");
			}
		} catch (error: unknown) {
			const message = getErrorMessage(error);
			toast.error(message);
			setErrors(prevErrs => ({ ...prevErrs, general: message }));
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="flex flex-col gap-4 h-[calc(100vh-3rem)] w-full justify-center items-center bg-white">
			<div className="w-full max-w-2xl">
				<h1 className="font-semibold text-2xl md:text-4xl">
					Create an Account
				</h1>
			</div>

			<form
				onSubmit={handleSignUp}
				className="flex flex-col gap-4 w-full max-w-2xl"
			>
				<div className="grid grid-cols-2 w-full gap-2">
					<div>
						<label htmlFor="firstName">First Name</label>
						<input
							value={formData.firstName}
							onChange={handleForm}
							type="text"
							id="firstName"
							className=" p-2 border w-full outline-none"
						/>
						<ErrorMessage error={errors.firstName} />
					</div>
					<div>
						<label htmlFor="lastName">Last Name</label>
						<input
							value={formData.lastName}
							onChange={handleForm}
							type="text"
							id="lastName"
							className="p-2 border w-full"
						/>
						<ErrorMessage error={errors.lastName} />
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="email">Email Address</label>
					<input
						required
						value={formData.email}
						onChange={handleForm}
						type="email"
						id="email"
						className="p-2 border w-full"
					/>
					<ErrorMessage error={errors.email} />
				</div>

				<div className="grid grid-cols-2 gap-2">
					<div>
						<label htmlFor="password">Password</label>
						<input
							required
							value={formData.password}
							onChange={handleForm}
							type="password"
							id="password"
							className="p-2 border w-full"
						/>
						<ErrorMessage error={errors.password} />
					</div>
					<div>
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input
							required
							value={formData.confirmPassword}
							onChange={handleForm}
							type="password"
							id="confirmPassword"
							className="p-2 border w-full"
						/>
						<ErrorMessage error={errors.confirmPassword} />
					</div>
				</div>

				<button
					disabled={isSubmitting}
					type="submit"
					className="bg-black text-white p-2"
				>
					SUBMIT
				</button>
			</form>
			<div className="flex flex-row justify-center items-center gap-2 w-full max-w-xl">
				<p className="text-sm">Have an Account?</p>
				<Link href="/login" className="text-blue-500">
					LOGIN
				</Link>
			</div>
		</section>
	);
};

export default SignupPage;
