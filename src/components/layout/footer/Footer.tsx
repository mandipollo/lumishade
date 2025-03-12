import React from "react";

import ContactFooter from "./ContactFooter";
import InfoFooter from "./InfoFooter";

const Footer = () => {
	return (
		<section className="flex flex-col relative ">
			<ContactFooter />
			<InfoFooter />
		</section>
	);
};

export default Footer;
