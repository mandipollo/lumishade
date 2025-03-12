import { SignJWT } from "jose";

const generateToken = async (user: any) => {
	const key = new TextEncoder().encode(process.env.JWT_SECRET);
	const token = await new SignJWT({ _id: user._id })
		.setProtectedHeader({ alg: "HS256" })
		.sign(key);

	return token;
};
export default generateToken;
