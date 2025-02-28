import mongoose, { Model } from "mongoose";

// Merging Product interface with mongoose's Document interface to create
// a new interface that represents a product document in MongoDB
export interface IProductDocument {
	title: string;
	size: string;
	price: number;
	image: string;
	bestSeller: boolean;
	category: string;
	description: string;
}

const productSchema = new mongoose.Schema<IProductDocument>({
	title: {
		type: String,
		required: true,
	},
	size: {
		type: String,
		required: true,
	},
	price: { type: Number, required: true },
	image: {
		type: String,
		required: true,
	},
	bestSeller: {
		type: Boolean,
		required: false,
	},
	category: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});

// Creating a mongoose model for the todo document
const Product: Model<IProductDocument> =
	mongoose.models?.Product || mongoose.model("Product", productSchema);

export default Product;
