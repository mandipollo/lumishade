import axios from "axios";

const userService = {
	addToUserCart: async ({
		productId,
		token,
	}: {
		productId: string;
		token: string;
	}) => {
		try {
			const response = await axios.post(
				"/api/user/addToCart",
				{
					productId,
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			);

			if (!response.data.success) {
				throw new Error(response.data.message || "Failed to add to cart!");
			}
			return {
				message: response.data.message,
				error: null,
			};
		} catch (error) {
			return {
				error: "Failed to add to cart!",
			};
		}
	},
	removeFromUserCart: async ({
		productId,
		token,
	}: {
		productId: string;
		token: string;
	}) => {
		try {
			const response = await axios.post(
				"/api/user/removeItemFromCart",
				{
					productId,
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			);

			if (!response.data.success) {
				throw new Error(response.data.message || "Failed to add to cart!");
			}
			return {
				message: response.data.message,
				error: null,
			};
		} catch (error) {
			return {
				error: "Failed to add to cart!",
			};
		}
	},
};

export default userService;
