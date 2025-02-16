import React from "react";

import ContactFooter from "./ContactFooter";
import InfoFooter from "./InfoFooter";

const Footer = () => {
	return (
		<div className="flex flex-col relative ">
			<ContactFooter />
			<InfoFooter />
		</div>
	);
};

export default Footer;
