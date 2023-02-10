import React from "react";
import thankYouImg from "../assets/illustration-thank-you.svg";

function ThankYou({ rating }) {
	return (
		<>
			<div className="container  text-center justify-content-center align-items-center  d-flex vh-100  p ">
				<div className=" card  d-flex flex-column justify-content-around align-items-center px-3 py-3">
					<span>
						<img src={thankYouImg} />
					</span>
					<h6 className="selected-r rounded-pill  p-2">
						You selected {rating} out of 5
					</h6>
					<h2 className="text-light">Thank you!</h2>
					<p className="appriciation">
						We appreciate you taking the time to give a rating. If you ever need
						more support, don’t hesitate to get in touch!
					</p>
				</div>
			</div>
			<div className="attribution">
				Challenge by
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by
				<a href="https://github.com/Ma7moud-BA" target="_blank">
					MahmoudBA
				</a>
				.
			</div>
		</>
	);
}

export default ThankYou;
