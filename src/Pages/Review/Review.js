import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/ServiceContext";
import MyReviewCards from "./MyReviewCards/MyReviewCards";

const Review = () => {
  const [review, setReview] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/reviewEmail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [user?.email]);
  return (
    <div className="container mx-auto border-t  border-spacing-5 py-16">
      <h1 className="text-5xl text-center font-Vibes tracking-widest  text-white">
        Our Special Review : {review.length}
      </h1>

      <div className="grid grid-cols-3 gap-12 mt-12">
        {review.map((singleReview, inx) => (
          <MyReviewCards key={inx} singleReview={singleReview}></MyReviewCards>
        ))}
      </div>
    </div>
  );
};

export default Review;
