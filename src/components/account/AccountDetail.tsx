"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const AccountDetail = () => {
	// state
	const [error, setError] = useState<null | Error | string>(null);
	const [profileImage, setProfileImage] = useState<File | null>(null);

	// handle profile image upload to clerk
	const handleProfileImageSubmit = () => {};

	// fetch user details from clerk metadata

	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [houseNo, setHouseNo] = useState<string>("");
	const [street, setStreet] = useState<string>("");
	const [town, setTown] = useState<string>("");
	const [country, setCountry] = useState<string>("");
	const [postcode, setPostcode] = useState<string>("");

	// handle update user's private clerk metadata

	return (
		<section className="flex flex-col flex-1 p-10 gap-4 h-full w-full">
			<section className="flex w-full max-w-2xl ">
				<label htmlFor="image" className="mb-3">
					<Image
						priority
						className="flex h-20 w-20 rounded-full border border-gray-400"
						alt="profile image"
						src={`/svg/profileImage.svg`}
						width={100}
						height={100}
						quality={100}
					/>
					<input
						hidden
						id="image"
						name="image"
						onChange={e =>
							setProfileImage(e.target.files ? e.target.files[0] : null)
						}
						type="file"
					></input>
				</label>
			</section>
			<section className="flex flex-col gap-10 w-full max-w-2xl ">
				<div className="flex flex-col gap-2">
					<div className="flex flex-row gap-4 items-center">
						<h4 className="inline-block text-xl">Personal Information</h4>
					</div>

					<form className="flex flex-col gap-4 w-full max-w-2xl">
						<div className="flex flex-col gap-2">
							<label htmlFor="first_name">First Name</label>
							<input
								value={firstName}
								onChange={e => setFirstName(e.target.value)}
								type="text"
								id="first_name"
								className="border rounded-md px-4 py-2 outline-none"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="last_name">Last Name</label>
							<input
								value={lastName}
								onChange={e => setLastName(e.target.value)}
								type="text"
								id="last_name"
								className="border rounded-md px-4 py-2 outline-none"
							/>
						</div>
						<div className="flex flex-row gap-2 w-full">
							<div className="flex flex-col gap-2 w-full">
								<label htmlFor="house_no">House No.</label>
								<input
									value={houseNo}
									onChange={e => setHouseNo(e.target.value)}
									type="text"
									id="house_no"
									className="border rounded-md px-4 py-2 outline-none"
								/>
							</div>
							<div className="flex flex-col gap-2 w-full">
								<label htmlFor="street_name">Street Name</label>
								<input
									value={street}
									onChange={e => setStreet(e.target.value)}
									type="text"
									id="street_name"
									className="border rounded-md px-4 py-2 outline-none"
								/>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="town_city">Town/City</label>
							<input
								value={town}
								onChange={e => setTown(e.target.value)}
								type="text"
								id="town_city"
								className="border rounded-md px-4 py-2 outline-none"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="country">Country</label>
							<input
								value={country}
								onChange={e => setCountry(e.target.value)}
								type="text"
								id="country"
								className="border rounded-md px-4 py-2 outline-none"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="postcode">Postcode</label>
							<input
								value={postcode}
								onChange={e => setPostcode(e.target.value)}
								type="text"
								id="postcode"
								className="border rounded-md px-4 py-2 outline-none"
							/>
						</div>
						<button
							disabled={isSubmitting}
							className="border p-2 bg-black text-white rounded-md"
							type="submit"
						>
							Save Changes
						</button>
					</form>
				</div>
			</section>
		</section>
	);
};

export default AccountDetail;
