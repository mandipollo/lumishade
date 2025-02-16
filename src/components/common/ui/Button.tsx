import React, { FC } from "react";

const Button: FC<{
	text: string;
}> = ({ text }) => {
	return (
		<button className="border-borderColorDark border rounded-3xl h-10 flex group w-full relative overflow-hidden ">
			<span className="absolute inset-0 flex justify-center items-center transform transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
				{text}
			</span>
			<span className=" absolute inset-0 flex justify-center items-center transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
				{text}
			</span>
		</button>
	);
};

export default Button;
