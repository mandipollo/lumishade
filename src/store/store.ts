"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import createWebStorage from "redux-persist/es/storage/createWebStorage";
// state
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

const createNoopStorage = () => ({
	getItem() {
		return Promise.resolve(null);
	},
	setItem() {
		return Promise.resolve();
	},
	removeItem() {
		return Promise.resolve();
	},
});

const storage =
	typeof window !== "undefined"
		? createWebStorage("local")
		: createNoopStorage();

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	cart: cartReducer,
	user: userReducer,
});

// Common middleware configuration
const middlewareConfig = {
	serializableCheck: {
		ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	},
};

const makeConfiguredStore = () =>
	configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware => getDefaultMiddleware(middlewareConfig),
	});

export const makeStore = () => {
	const isServer = typeof window === "undefined";

	if (isServer) {
		return makeConfiguredStore();
	} else {
		const persistedReducer = persistReducer(persistConfig, rootReducer);

		let store: any = configureStore({
			reducer: persistedReducer,
			middleware: getDefaultMiddleware =>
				getDefaultMiddleware(middlewareConfig),
		});

		(store as any).__persistor = persistStore(store);
		return store;
	}
};

// Type definitions
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
