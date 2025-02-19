import {
	ClerkProvider,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";

import { FC } from "react";
import { Metadata } from "next";
import "@/app/globals.css";
import StoreProvider from "@/store/StoreProvider";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
	title: "Lumishade ",
	description: "Shade for your skin",
};

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className=" bg-primaryWhite relative flex flex-col font-extralight text-primaryDarkText font-openSans ">
					<SignedOut>
						<SignInButton />
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
					<StoreProvider>
						<header>
							<Navbar />
						</header>
						<main className="mt-4"> {children}</main>
						<footer>
							<Footer />
						</footer>
					</StoreProvider>
				</body>
			</html>
		</ClerkProvider>
	);
};

export default RootLayout;
