import React from "react";
import wallet from "../src/assets/wallet.svg";
import coupon from "../src/assets/coupon.svg";
import discount from "../src/assets/discount.svg";
import invite from "../src/assets/invite.svg";
import rupee from "../src/assets/rupee.svg";

const ReferralRules = () => {
	return (
		<div className="w-[80vw] ml-[10vw] my-4">
			<h1 className="font-medium text-p text-lg">How does it work?</h1>
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="flex h-full w-full my-8">
					<div className="rounded-full bg-[#D9D9D940] p-3 h-14 w-14 grid place-items-center">
						<img src={invite} alt="Invite Icon" className="" />
					</div>

					<h1 className="mx-4 font-semibold">
						Invite your friends
						<p className="font-normal opacity-80">Share the link tutedudes.com with your friends</p>
					</h1>
				</div>
				<div className="flex h-full w-full my-8">
					<div className="rounded-full bg-[#D9D9D940] p-3 h-14 w-14 grid place-items-center">
						<img src={wallet} alt="Invite Icon" className="" />
					</div>
					<h1 className="mx-4 font-semibold">
						Invite your friends
						<p className="font-normal opacity-80">Share the link tutedudes.com with your friends</p>
					</h1>
				</div>
				<div className="flex h-full w-full my-8">
					<div className="rounded-full bg-[#D9D9D940] p-3 h-14 w-14 grid place-items-center">
						<img src={coupon} alt="Invite Icon" className="" />
					</div>

					<h1 className="mx-4 font-semibold">
						Invite your friends
						<p className="font-normal opacity-80">Share the link tutedudes.com with your friends</p>
					</h1>
				</div>
				<div className="flex h-full w-full my-8">
					<div className="rounded-full bg-[#D9D9D940] p-3 h-14 w-14 grid place-items-center">
						<img src={discount} alt="Invite Icon" className="" />
					</div>
					<h1 className="mx-4 font-semibold">
						Invite your friends
						<p className="font-normal opacity-80">Share the link tutedudes.com with your friends</p>
					</h1>
				</div>
				<div className="flex h-full w-full my-8">
					<div className="rounded-full bg-[#D9D9D940] p-3 h-14 w-14 grid place-items-center">
						<img src={rupee} alt="Invite Icon" className="" />
					</div>
					<h1 className="mx-4 font-semibold">
						Invite your friends
						<p className="font-normal opacity-80">Share the link tutedudes.com with your friends</p>
					</h1>
				</div>
			</div>
		</div>
	);
};

export default ReferralRules;
