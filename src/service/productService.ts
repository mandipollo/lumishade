import { ProductProps } from "@/types/ProductType";
import axios from "axios";

const productService = {
	getProduct: async (
		productId: string
	): Promise<{
		product: ProductProps | null;
		error: string | null;
	}> => {
		try {
			const baseUrl = "http://localhost:3000";

			const response = await axios.post(`${baseUrl}/api/product/get-product`, {
				productId,
			});
			if (!response.data.success) {
				throw new Error(response.data.message || "Failed to fetch products!");
			}
			return {
				product: response.data.product as ProductProps,
				error: null,
			};
		} catch (error) {
			return {
				product: null,
				error: "Failed to fetch products",
			};
		}
	},
	getBestSellerProducts: async (): Promise<{
		products: ProductProps[];
		productCount: number | null;
		error: string | null;
	}> => {
		try {
			const baseUrl = "http://localhost:3000";

			const response = await axios.get(`${baseUrl}/api/product/bestSeller`);
			if (!response.data.success) {
				throw new Error(response.data.message || "Failed to fetch products!");
			}
			return {
				products: response.data.bestSellerProducts as ProductProps[],
				productCount: response.data.productCount as number,
				error: null,
			};
		} catch (error) {
			return {
				products: [],
				productCount: null,
				error: "Failed to fetch products",
			};
		}
	},

	getProductsData: async (
		category?: string
	): Promise<{
		products: ProductProps[];
		productCount: number | null;
		error: string | null;
	}> => {
		try {
			const baseUrl = "http://localhost:3000";

			const response = category
				? await axios.get(`${baseUrl}/api/product/${category}`)
				: await axios.get(`${baseUrl}/api/product`);
			if (!response.data.success) {
				throw new Error(response.data.message || "Failed to fetch products!");
			}
			return {
				products: response.data.products as ProductProps[],
				productCount: response.data.totalProducts as number,
				error: null,
			};
		} catch (error) {
			return {
				products: [],
				productCount: null,
				error: "Failed to fetch products",
			};
		}
	},
	getCategoryProductsData: async (
		category: string
	): Promise<{
		products: ProductProps[];
		productCount: number | null;
		error: string | null;
	}> => {
		try {
			const baseUrl = "http://localhost:3000";

			const response = await axios.post(`${baseUrl}/api/product/category`, {
				category,
			});

			if (!response.data.success) {
				throw new Error(response.data.message || "Failed to fetch products!");
			}
			return {
				products: response.data.categoryProducts as ProductProps[],
				productCount: response.data.totalProducts as number,
				error: null,
			};
		} catch (error) {
			return {
				products: [],
				productCount: null,
				error: "Failed to fetch products",
			};
		}
	},
};

export default productService;
