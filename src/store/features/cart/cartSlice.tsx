"use client";
import { ProductProps } from "@/types/ProductType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartProductProps extends ProductProps {
	count: number;
}
export interface CartState {
	cart: CartProductProps[];
	itemCounts: number;
}

const initialState: CartState = {
	cart: [],
	itemCounts: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<CartProductProps>) => {
			//
			const existingProduct = state.cart.find(
				product => product._id === action.payload._id
			);

			//
			if (existingProduct) {
				existingProduct.count += action.payload.count || 1;
			} else {
				state.cart.push({ ...action.payload, count: 1 });
			}
			//
			state.itemCounts = state.cart.reduce(
				(total, product) => total + product.count,
				0
			);
		},

		removeFromCart: (state, action: PayloadAction<string>) => {
			const productIndex = state.cart.findIndex(
				product => product._id === action.payload
			);
			if (productIndex !== -1) {
				const product = state.cart[productIndex];

				if (product.count > 1) {
					product.count -= 1;
				} else {
					state.cart.splice(productIndex, 1);
				}
			}
			// update counts

			state.itemCounts = state.cart.reduce(
				(total, product) => total + product.count,
				0
			);
		},
		syncCartLogin: (state, action: PayloadAction<CartState>) => {
			state.cart = action.payload.cart;
			state.itemCounts = action.payload.itemCounts;
		},

		resetCart: () => {
			return initialState;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, resetCart, syncCartLogin } =
	cartSlice.actions;

export default cartSlice.reducer;
