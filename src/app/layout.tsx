import { connectToMongoDB } from "../lib/db";
import { FC } from "react";
import { Metadata } from "next";
import "@/app/globals.css";
import StoreProvider from "../store/StoreProvider";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";

import { ToastContainer, Slide } from "react-toastify";
export const metadata: Metadata = {
	title: "Lumishade ",
	description: "Shade for your skin",
};

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
	connectToMongoDB();
	return (
		<html lang="en">
			<body className=" bg-primaryWhite relative flex flex-col font-light text-primaryDarkText font-openSans ">
				<StoreProvider>
					<ToastContainer
						autoClose={4000}
						hideProgressBar={true}
						closeOnClick={true}
						draggable
						transition={Slide}
					/>
					<header>
						<Navbar />
					</header>
					<main className="mt-[3rem]"> {children}</main>
					<footer>
						<Footer />
					</footer>
				</StoreProvider>
			</body>
		</html>
	);
};

export default RootLayout;
