// Importing mongoose library along with Document and Model types from it
import mongoose, { Document, Model } from "mongoose";

// Defining the structure of a todo item using TypeScript interfaces
export interface IUser {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

// Merging ITodo interface with mongoose's Document interface to create
// a new interface that represents a todo document in MongoDB
export interface IUserDocument extends IUser, Document {
	createdAt: Date;
	updatedAt: Date;
}

// Defining a mongoose schema for the todo document, specifying the types
// and constraints
const userSchema = new mongoose.Schema<IUserDocument>(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		// Automatically add 'createdAt' and 'updatedAt' fields to the document
		timestamps: true,
	}
);

// Creating a mongoose model for the todo document
const User: Model<IUserDocument> =
	mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
