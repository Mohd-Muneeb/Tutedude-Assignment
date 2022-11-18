import React from "react";
import Arrow from "../src/assets/arrow.svg"


const BreadCrumb = () => {
	return (
		<div>

			<div className="w-[80vw] h-[75px] mt-4 overflow-none  flex justify-start items-center">
				<h1 className="ml-[10vw] md:ml-[10vw] text-sm my-12 md:my-0 md:text-base">
					<a href="#" className="hover:text-p">
						UI/UX &nbsp;
					</a>
					&gt;
					<a href="/" className="hover:text-p">
						{" "}
						&nbsp;Refer and Earn &nbsp;
					</a>
					&gt; Friends Reffered
				</h1>

			</div>
			<a className="md:hidden ml-[10vw] w-[80vw] gap-2 flex text-p mb-8 hover:underline"><img src={Arrow} /> Go Back</a>
		</div>
	);
};

export default BreadCrumb;