"use client";

import { SignupErrors } from "@/types/UserSignup-types";
const validateUserSignup = (
	firstName: string,
	lastName: string,
	email: string,
	password: string,
	confirmPassword: string
) => {
	const errors: SignupErrors["errors"] = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	};

	if (!firstName.trim()) {
		errors.firstName = "First name is required.";
	}
	if (!lastName.trim()) {
		errors.lastName = "Last name is required.";
	}
	if (!email.includes("@")) {
		errors.email = "Invalid email format";
	}
	if (password.trim().length < 6) {
		errors.password = "Password should be atleast 6 characters long.";
	}
	if (confirmPassword !== password) {
		errors.confirmPassword = "Passwords do not match!";
	}
	return {
		isValid: Object.values(errors).every(error => error === ""),
		errors,
	};
};

export default validateUserSignup;
