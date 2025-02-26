export interface UserSingupState {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export interface ExtendedSingupErrors extends UserSingupState {
	general?: string;
}
export interface SingupErrors {
	isValid: boolean;
	errors: UserSingupState;
}
