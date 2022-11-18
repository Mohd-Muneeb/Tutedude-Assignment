import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import EnrolledCandidatesList from "../components/EnrolledCandidatesList";
import Navbar from "../components/Navbar";
import ReferralDetails from "../components/ReferralDetails";

function App() {
	return (
		<div className="bg-[#FFFFFF] m-0 min-h-screen min-w-screen relative font-poppins">
			<Navbar />
			<div className="max-w-full mt-[75px] absolute">
				<BreadCrumb />
				<ReferralDetails />
				<div className="flex">
					<EnrolledCandidatesList />
				</div>
				<a className="w-[80vw] ml-[10vw] mb-24 font-medium text-p">Terms and Conditions</a>
			</div>
		</div>
	);
}

export default App;
