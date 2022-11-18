import React from "react";

const EarningsData = () => {
	return (
		<div className="h-[190px] flex items-center w-full md:w-[500px] mr-0 md:mr-12 bg-white justify-center p-0 shadow-2xl rounded-xl">
			<div className="flex flex-col gap-8 w-full">
				<div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 grid-rows-2 gap-2 place-items-center">
					<h1 className="text-3xl font-semibold col-start-1 row-start-1 md:row-start-1 md:col-start-1">
						<span className="font-normal text-sm text-p">Referral Earning</span> <br />₹ 20000
					</h1>

					<h1 className="text-3xl font-semibold  col-start-1 row-start-2 md:row-start-1 md:col-start-2">
						<span className="font-normal text-sm text-p">Total Referrals</span> <br /> 7
					</h1>
					<h1 className="text-3xl font-semibold ">
						<span className="font-normal text-sm text-p">Wallet Balance</span> <br /> ₹ 500
					</h1>
					<div className="md:w-full row-start-2 col-span-1 pr-2 md:pr-0 pt-2 md:pt-0 md:col-span-3 grid place-items-center">
						<button
							className="p-3 bg-p shadow-xl rounded-2xl justify-center text-white items-center"
							onClick={(e) => console.log("clicked")}
						>
							Withdraw Balance
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EarningsData;
