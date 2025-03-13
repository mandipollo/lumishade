"use client";
import { ProductProps } from "@/types/ProductType";
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export interface CartState {
	cart: ProductProps[];
	items: number;
}

const initialState: CartState = {
	cart: [],
	items: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes

			state.cart.push(action.payload);
			state.items += 1;
		},

		removeFromCart: (state, action) => {
			state.cart = state.cart.filter(product => product._id !== action.payload);

			if (state.items > 0) {
				state.items -= 1;
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
