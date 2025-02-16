import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				openSans: ["Open-sans", "sans-serif"],
			},
			borderColor: {
				borderColorDark: "#4D3D30",
			},
			backgroundColor: {
				primary: "#E1D7C6",
				primaryWhite: "#F5F0EA",
				highlight: "#D39032",
				sunny: "#D39032",
			},
			textColor: {
				primary: "#201D52",
				primaryWhite: "#F5F0EA",
				primaryDarkText: "#4D3D30",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
