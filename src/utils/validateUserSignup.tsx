"use client";

import { SingupErrors } from "@/types/UserSingup-types";
const validateUserSignup = (
	firstName: string,
	lastName: string,
	email: string,
	password: string,
	confirmPassword: string
) => {
	const errors: SingupErrors["errors"] = {
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
	if (confirmPassword.trim().length < 6 || confirmPassword !== password) {
		errors.confirmPassword = "Passwords do not match!";
	}
	return {
		isValid: Object.keys("errors").length === 0,
		errors,
	};
};

export default validateUserSignup;
