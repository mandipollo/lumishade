import Image from "next/image";
import React from "react";

const AboutPage = () => {
	return (
		<section
			aria-labelledby="about_us"
			className="flex relative flex-row w-full h-full"
		>
			<h1 id="about_us" className="sr-only">
				About us
			</h1>
			<section className="flex flex-col w-1/2  p-2">
				<div className="sticky p-10 top-1/3 left-1/2 text-black justify-center  flex flex-col">
					<p className="text-xs">WHO WE ARE</p>
					<p className="text-2xl md:text-6xl font-medium text-primaryDarkText">
						Founded in 2000, our company has been a pioneer in sun protection
						for over decades.
					</p>
				</div>
			</section>
			<section className="w-1/2 h-full overflow-auto flex flex-col">
				<div className="flex w-full relative min-h-screen">
					<Image
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						src="/images/teamImg.webp"
						alt="image showcasing a team of womens"
						fill
						className="object-cover "
					/>
				</div>
				<article className="flex gap-4 flex-col p-10 w-full relative min-h-screen justify-center ">
					<p> In 2000,</p>
					<p>
						nestled in a small coastal town, a passionate botanist and a chemist
						set out to harness the power of nature to create gentle yet
						effective skincare solutions.
					</p>
					<p>
						Inspired by the sea natural elements and local flora, they crafted
						nourishing products using only the purest ingredients. Their simple,
						handcrafted formulas quickly gained a loyal following, passed down
						through generations.
					</p>
					<p>
						Today, their legacy lives on in a skincare line that blends
						time-honored traditions with modern science, delivering the same
						commitment to natural beauty and skin health that began over a
						century ago.
					</p>
				</article>
			</section>
		</section>
	);
};

export default AboutPage;
