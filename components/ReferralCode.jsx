import React, { useRef } from "react";

const ReferralCode = () => {
	const ReferralCode = useRef();

	return (
		<div className="min-w-[300px]" onClick={() => navigator.clipboard.writeText(ReferralCode.current.innerText)}>
			<h1 className="text-p text-base">Your Refferal Code</h1>
			<div className="h-12 flex hover:translate-y-0.5 my-1 transition ease-in-out delay-150 hover:scale-105 justify-center items-center border-solid border-2 rounded-xl border-[#f2f2f2] w-38">
				<h1 className="tracking-[0.5rem] font-medium text-center" ref={ReferralCode}>
					EDCH54
				</h1>
			</div>
		</div>
	);
};

export default ReferralCode;
