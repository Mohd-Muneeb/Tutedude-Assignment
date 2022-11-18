import React from "react";

const CourseBadge = (props) => {
	return (
		<div className="border-solid  border-2 rounded-xl border-[#eeaeae] grid place-items-center p-1 m-1 text-sm">
			<p className="text-sm font-normal">{props.skill}</p>
		</div>
	);
};

export default CourseBadge;
