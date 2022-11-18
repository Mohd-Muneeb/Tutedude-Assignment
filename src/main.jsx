import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Refer from "./Refer";

const root = ReactDOM.createRoot(document.getElementById("root"));

// ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Refer />} />
			<Route path="/referral" element={<App />} />
		</Routes>
	</BrowserRouter>
);
