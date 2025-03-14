"use client";
import { ProductProps } from "@/types/ProductType";
import { createSlice } from "@reduxjs/toolkit";

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
			state.cart.push(action.payload);
			state.items += 1;
		},

		removeFromCart: (state, action) => {
			state.cart = state.cart.filter(product => product._id !== action.payload);

			if (state.items > 0) {
				state.items -= 1;
			}
		},
		resetCart: () => {
			return initialState;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
