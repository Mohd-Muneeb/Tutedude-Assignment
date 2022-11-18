import React from "react";

const EarningsData = () => {
	return (
		<div className="h-[190px] flex items-center w-full md:w-[500px] mr-0 md:mr-12 bg-white justify-center p-0 shadow-2xl rounded-xl">
			<div className="flex flex-col gap-8 w-full">
				{/* <div className="flex h-full w-full justify-between px-4 items-center ">
					<h1 className="text-3xl font-semibold">
						<span className="font-normal text-sm text-p">Referral Earning</span> <br />₹ 20000
					</h1>

					<h1 className="text-3xl font-semibold">
						<span className="font-normal text-sm text-p">Total Referrals</span> <br /> 7
					</h1>
					<h1 className="text-3xl font-semibold">
						<span className="font-normal text-sm text-p">Wallet Balance</span> <br /> ₹ 500
					</h1>
				</div>
				<div className="w-full flex justify-center items-center">
					<button
						className="p-3 bg-p shadow-xl rounded-2xl justify-center text-white items-center"
						onClick={(e) => console.log("clicked")}
					>
						Withdraw Balance
					</button>
				</div> */}
				<div className="grid grid-flow-row lg:grid-flow-col place-items-center">
					<h1 className="text-3xl font-semibold ">
						<span className="font-normal text-sm text-p">Referral Earning</span> <br />₹ 20000
					</h1>

					<h1 className="text-3xl font-semibold ">
						<span className="font-normal text-sm text-p">Total Referrals</span> <br /> 7
					</h1>
					<h1 className="text-3xl font-semibold ">
						<span className="font-normal text-sm text-p">Wallet Balance</span> <br /> ₹ 500
					</h1>
				</div>
				<div className="md:w-full flex justify-center items-center row-start-2">
					<button
						className="p-3 bg-p shadow-xl rounded-2xl justify-center text-white items-center"
						onClick={(e) => console.log("clicked")}
					>
						Withdraw Balance
					</button>
				</div>
			</div>
		</div>
	);
};

export default EarningsData;
