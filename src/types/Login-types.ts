export interface LoginState {
	email: string;
	password: string;
}

export interface ExtendedLoginErrors extends LoginState {
	general: string;
}
