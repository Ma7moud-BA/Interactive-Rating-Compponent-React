import React, { useEffect } from "react";
import { useState } from "react";
import star from "../assets/icon-star.svg";

function Rating({ handleSubmit }) {
	useEffect(() => {}, []);
	const [rating, setRating] = useState(0);

	const handleClickRating = (e) => {
		setRating(e.target.value);

		const buttons = document.querySelectorAll(".btn-custome");
		buttons.forEach((button) => {
			button.classList.remove("active");
		});
		e.target.classList.toggle("active");
	};
	return (
		<div className="container  text-center justify-content-center align-items-center  d-flex vh-100   ">
			<div className=" card  d-flex flex-column justify-content-center text-start px-3">
				<span className=" star-container">
					<img src={star} className="img-fluid  " />
				</span>

				<h2 className="text-light q"> How did we do?</h2>
				<p className=" text">
					Please let us know how we did with your support request. All feedback
					is appreciated to help us improve our offering!
				</p>

				<div className="row d-felx justify-content-around">
					{[1, 2, 3, 4, 5].map((rating) => {
						return (
							<button
								className="col-1 btn  btn-custome rounded-circle mx-2 p-2  "
								value={rating}
								key={rating}
								onClick={handleClickRating}
							>
								{rating}
							</button>
						);
					})}
				</div>
				<button
					onClick={(e) => {
						//make sure the rating is selected before submitting
						if (rating == 0) {
							e.preventDefault();
						} else {
							handleSubmit(rating);
						}
					}}
					className="btn btn-submit rounded-pill mt-4 text-light fw-bold p-2"
				>
					SUBMIT
				</button>
			</div>
		</div>
	);
}

export default Rating;
