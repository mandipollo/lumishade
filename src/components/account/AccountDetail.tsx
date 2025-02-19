"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

const AccountDetail = () => {
	// fetch users data from clerk
	const { user } = useUser();

	// state
	const [error, setError] = useState<null | Error | string>(null);
	const [editPersonalInfo, setEditPersonalInfo] = useState<boolean>(false);
	const [firstName, setFirstName] = useState<string>(user?.firstName || "");
	const [lastName, setLastName] = useState<string>(user?.lastName || "");
	const [profileImage, setProfileImage] = useState<File | null>(null);

	// handle profile image upload to clerk
	const handleProfileImageSubmit = () => {};

	// handle user name update
	const handleUpdateUserPersonalInfo = (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();

		if (!firstName || !lastName) {
			return;
		}

		try {
			user?.update({
				firstName: firstName,
				lastName: lastName,
			});
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error);
			setError(message);
		}
	};

	// address

	// fetch user address from clerk metadata

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get("/api/user/metadata");
			const data = await response.data;

			setHouseNo(data.houseNo);
			setStreet(data.street);
			setTown(data.town);
			setCountry(data.country);
			setPostcode(data.postcode);
		};

		fetchData();
	}, [user]);

	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [editAddress, setEditAddress] = useState<boolean>(false);
	const [houseNo, setHouseNo] = useState<string>("");
	const [street, setStreet] = useState<string>("");
	const [town, setTown] = useState<string>("");
	const [country, setCountry] = useState<string>("");
	const [postcode, setPostcode] = useState<string>("");

	// handle update user's private clerk metadata
	const handleUpdateAddressClerk = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();

		try {
			setIsSubmitting(true);
			if (!houseNo || !street || !town || !country || !postcode) {
				throw new Error("Some of the fields are missing!");
			}
			const response = axios.post("/api/user/metadata", {
				houseNo,
				street,
				town,
				country,
				postcode,
			});

			if ((await response).data.success) {
				const data = await response;
				setEditAddress(false);
			}
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error);
			setError(message);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="flex flex-col flex-1 gap-4 w-full items-center">
			<section className="flex w-full max-w-2xl ">
				<label htmlFor="image" className="mb-3">
					<Image
						priority
						className="flex h-20 w-20 rounded-full border border-gray-400"
						alt="profile image"
						src={user?.imageUrl ? user.imageUrl : `/svg/profileImage.svg`}
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
					{editPersonalInfo ? (
						<form
							onSubmit={handleUpdateUserPersonalInfo}
							className="flex flex-col gap-4 w-full "
						>
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
							<button
								className="border p-2 bg-black text-white rounded-md"
								type="submit"
							>
								SUBMIT
							</button>
							<button
								onClick={() => setEditPersonalInfo(false)}
								className="border p-2 rounded-md"
							>
								CANCEL
							</button>
						</form>
					) : (
						<div className="flex flex-col gap-2">
							<div className="flex flex-row gap-2">
								<p>{user?.firstName ? user.firstName : "First Name"}</p>
								<p> {user?.lastName ? user.lastName : "Last Name"}</p>
							</div>

							<div className="w-full">
								<button
									onClick={() => setEditPersonalInfo(true)}
									className="underline "
								>
									EDIT
								</button>
							</div>
						</div>
					)}
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex flex-row gap-4 items-center">
						<h4 className="inline-block text-xl">Address Information</h4>
					</div>

					{editAddress ? (
						<form
							onSubmit={handleUpdateAddressClerk}
							className="flex flex-col gap-4 w-full max-w-2xl"
						>
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
								SUBMIT
							</button>
							<button
								onClick={() => setEditAddress(false)}
								className="border p-2 rounded-md"
							>
								CANCEL
							</button>
						</form>
					) : (
						<div className="grid">
							<p>{houseNo || "House No."}</p>
							<p>{street || "Street Name"}</p>
							<p>{town || "Town/City"}</p>
							<p>{country || "Country"}</p>
							<p>{postcode || "Postcode"}</p>
							<div className="w-full">
								<button
									onClick={() => setEditAddress(true)}
									className="underline "
								>
									EDIT
								</button>
							</div>
						</div>
					)}
				</div>
			</section>
		</section>
	);
};

export default AccountDetail;
