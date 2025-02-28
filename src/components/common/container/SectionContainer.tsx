import React, { ReactNode } from "react";

interface SectionContainerProps {
	children: ReactNode;
}
const SectionContainer: React.FC<SectionContainerProps> = ({ children }) => {
	return (
		<section className="flex flex-col items-center relative min-h-screen h-full w-full bg-white">
			<div className="flex flex-col gap-2 p-2 w-full max-w-7xl">{children}</div>
		</section>
	);
};

export default SectionContainer;
