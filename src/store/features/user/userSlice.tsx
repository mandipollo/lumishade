import { UserState } from "@/types/User-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
	firstName: "",
	lastName: "",
	email: "",
};

const UserSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserState>) => {
			state.email = action.payload.email;
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
		},

		resetUser: state => {
			return (state = initialState);
		},
	},
});

export const { setUser, resetUser } = UserSlice.actions;

export default UserSlice.reducer;
