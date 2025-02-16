import React from "react";

const page = () => {
	return (
		<section className="h-screen w-full flex justify-center items-center">
			<form className="flex flex-col gap-2 max-w-lg w-full">
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
		</section>
	);
};

export default page;
