import React from "react";
import ReferralCode from "./ReferralCode";
import UserBalance from "./UserBalance";

const ReferralDetails = () => {
	return (
		<div className="h-full flex justify-evenly md:justify-between gap-4 md:mx-[10vw] items-center">
			<div>
				<ReferralCode />
			</div>
			<div>
				<UserBalance />
			</div>
		</div>
	);
};

export default ReferralDetails;
