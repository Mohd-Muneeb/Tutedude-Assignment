import React from "react";
import CourseBadge from "./CourseBadge";

const CandidateCard = (props) => {
	// console.log(props.friends);
	console.log(props.friend[0]);

	return (
		<div className="my-0 mr-0 md:mr-4 bg-gradient-to-r text-white p-4 md:p-4 relative from-[#FF864C] md:w-[90vw] to-p w-full min-w-[370px] rounded-2xl h-[230px]">
			<div className="flex flex-row justify-between items-end">
				<h1>{props.friend.name}</h1>
				<p className="font-light text-sm ">{props.friend.date}</p>
			</div>
			<h1 className="text-sm font-light mt-3">Courses Enrolled({props.friend.courses.length})</h1>
			<div className="flex overflow-y-scroll h-[80px] scroll flex-wrap m-2">
				{props.friend.courses.map((elem) => (
					<CourseBadge skill={elem} />
				))}
			</div>
			<h1 className="bottom-5 absolute">
				<span className="font-light text-sm ">Referral Amount</span> ₹{props.friend.amount}
			</h1>
		</div>
	);
};

export default CandidateCard;
