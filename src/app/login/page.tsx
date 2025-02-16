import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<section
			aria-labelledby="login"
			className="h-screen w-full flex flex-col gap-2 justify-center items-center"
		>
			<h1 className="sr-only">User login page</h1>
			<form className="flex flex-col gap-4 max-w-lg w-full">
				<label htmlFor="user_name">User name</label>
				<input
					className="border border-gray-400 p-2 rounded-md outline-none bg-transparent"
					type="text"
					id="user_name"
				/>

				<label htmlFor="password">Password</label>
				<input
					className="border border-gray-400 p-2 rounded-md outline-none bg-transparent"
					type="password"
					id="password"
				/>
				<button className="border bg-blue-500 p-2 text-white" type="submit">
					SUBMIT
				</button>
			</form>
			<div className="flex gap-2">
				<p>Dont have an account?</p>
				<Link className="underline" href="/signup">
					SIGN UP
				</Link>
			</div>
		</section>
	);
};

export default page;
