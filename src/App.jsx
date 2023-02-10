import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import React, { useState } from "react";
import Rating from "./components/Rating";
import ThankYou from "./components/ThankYou";

function App() {
	document.title = "Frontend Mentor | Interactive rating component";
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [rating, setRating] = useState(1);
	const handleSubmit = (rating) => {
		setIsSubmitted(!isSubmitted);
		setRating(rating);
	};
	if (!isSubmitted) {
		return <Rating handleSubmit={handleSubmit}></Rating>;
	} else {
		return <ThankYou rating={rating}></ThankYou>;
	}
}

export default App;
