import React from "react";
import CandidateCard from "./CandidateCard";

const EnrolledCandidatesList = () => {
	return (
		<div className="h-full min-h-[50vh] py-8 mx-[5vw] md:mx-[10vw] relative">
			<h1 className="text-p font-semibold text-xl">
				Friends who enrolled <span className="text-s text-base">(3)</span>
			</h1>
			<div className="">
				<div className="flex gap-4 relative flex-col md:flex-row overflow-auto my-4 scroll-bar custom-blur-gradient whitespace-nowrap !rounded-3xl md:max-w-[80vw] max-w-full">
					<CandidateCard />
					<CandidateCard />
					<CandidateCard />
					<CandidateCard />
					<div className="hidden md:block fixed w-[10vw] right-[10vw] -scale-x-100 h-[230px] rounded-3xl gradient-shadow"></div>
				</div>
			</div>
		</div>
	);
};

export default EnrolledCandidatesList;
