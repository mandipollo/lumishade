export interface UserSignupState {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export interface ExtendedSignupErrors extends UserSignupState {
	general?: string;
}
export interface SignupErrors {
	isValid: boolean;
	errors: UserSignupState;
}
