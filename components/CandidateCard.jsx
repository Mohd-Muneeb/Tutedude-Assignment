import React from "react";
import CourseBadge from "./CourseBadge";

const CandidateCard = () => {
	return (
		<div className="my-0 mr-0 md:mr-4 bg-gradient-to-r text-white p-4 md:p-4 relative from-[#FF864C] md:w-[90vw] to-p w-full min-w-[370px] rounded-2xl h-[230px]">
			<div className="flex flex-row justify-between items-end">
				<h1>Someone's name</h1>
				<p className="font-light text-sm ">12 Sept, 2022</p>
			</div>
			<h1 className="text-sm font-light mt-3">Courses Enrolled(6)</h1>
			<div className="flex overflow-y-scroll h-[80px] scroll flex-wrap m-2">
				<CourseBadge skill="Photoshop" />
				<CourseBadge skill="UI/UX" />
				<CourseBadge skill="Python" />
				<CourseBadge skill="Javascript" />
				<CourseBadge skill="HTML5/CSS3" />
				<CourseBadge skill="HTML5/CSS3" />
				<CourseBadge skill="HTML5/CSS3" />
				<CourseBadge skill="HTML5/CSS3" />
				<CourseBadge skill="HTML5/CSS3" />
				<CourseBadge skill="HTML5/CSS3" />
				<CourseBadge skill="HTML5/CSS3" />
				<CourseBadge skill="C++" />
			</div>
			<h1 className="bottom-5 absolute">
				<span className="font-light text-sm ">Referral Amount</span> ₹185
			</h1>
		</div>
	);
};

export default CandidateCard;
