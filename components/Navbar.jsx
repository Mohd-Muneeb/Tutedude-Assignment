import React, { useState } from "react";
import avatar from "../src/assets/nav-avatar.svg";
import menuburgerWhite from "../src/assets/navbar-hamburger-white.svg";
import menuburger from "../src/assets/nav-menu-burger.svg";

const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [IsDesktop, setIsDesktop] = useState(window.matchMedia("(min-width: 767px)").matches);

	const desktopClasses = "flex gap-6 right-0 font-medium";
	const mobileClasses = " bg-pink-400";

	window.addEventListener("resize", (e) => {
		setIsDesktop(window.matchMedia("(min-width: 767px)").matches);
	});

	return (
		<div className="w-full overflow-y-hidden left-0 top-0 md:mb-4 font-poppins  text-p absolute flex justify-between px-8 md:px-14  items-center h-[75px]">
			<div className="nav-logo"></div>
			{IsDesktop ? (
				<div className={true ? desktopClasses : mobileClasses}>
					<a className="opacity-70 hover:opacity-100" href="#">
						My Assignments
					</a>
					<a className="opacity-70 hover:opacity-100" href="#">
						Chat with Mentor
					</a>
					<div className="flex gap-2">
						<img src={avatar} />
						ProfileName
						<img src={menuburger} alt="" />
					</div>
				</div>
			) : (
				<div className="bg-p rounded-xl font-medium p-4 text-white">
					<div className="flex text-base gap-2">
						ProfileName
						<img src={menuburgerWhite} alt="" className="color-svg fill-transparent color-svg" />
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
