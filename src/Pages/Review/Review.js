import React, { useEffect, useState } from "react";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/review`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="container mx-auto border-t py-16">
      <h1 className="text-5xl text-center">
        Reviews Numbers : {review.length}
      </h1>
    </div>
  );
};

export default Review;
