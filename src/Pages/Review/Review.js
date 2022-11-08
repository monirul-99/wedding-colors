import React, { useEffect, useState } from "react";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/review`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <h1>Reviews Numbers : {review.length}</h1>
    </div>
  );
};

export default Review;
