/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			p: "#800080",
			s: "#4D4D4D",
			white: "#FFFFFF",
		},
		extend: {
			fontFamily: {
				poppins: "Poppins",
			},
		},
	},
	plugins: [],
};
