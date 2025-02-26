import React from "react";

interface ErrorProps {
	error: string;
}
const ErrorMessage: React.FC<ErrorProps> = ({ error }) => {
	if (!error) {
		return;
	}
	return (
		<span role="alert" aria-live="polite" className=" text-red-500 text-xs">
			{error}
		</span>
	);
};

export default ErrorMessage;
