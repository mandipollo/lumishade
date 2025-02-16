import Footer from "@/components/layout/footer/Footer";
import { FC } from "react";
import { Metadata } from "next";
import "@/app/globals.css";
import StoreProvider from "@/store/StoreProvider";
import Navbar from "@/components/layout/navbar/Navbar";

export const metadata: Metadata = {
	title: "Lumishade ",
	description: "Shade for your skin",
};

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<html lang="en">
			<body className=" bg-primaryWhite relative flex flex-col font-extralight text-primaryDarkText font-openSans ">
				<StoreProvider>
					<header>
						<Navbar />
					</header>
					<main className="flex-grow pt-12"> {children}</main>
					<footer>
						<Footer />
					</footer>
				</StoreProvider>
			</body>
		</html>
	);
};

export default RootLayout;
