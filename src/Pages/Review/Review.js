import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/ServiceContext";
import UseTitle from "../../CustomHooks/UseTitle/UseTitle";
import MyReviewCards from "./MyReviewCards/MyReviewCards";

const Review = () => {
  UseTitle("My Review");
  const [review, setReview] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://wedding-webpage-server-site.vercel.app/reviewEmail?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [user?.email, review]);

  const reviewDelete = (reviewObj) => {
    const permissionUsers = window.confirm(
      `Are you sure Delete this Review ${reviewObj.name}`
    );
    if (permissionUsers) {
      fetch(
        `https://wedding-webpage-server-site.vercel.app/review/${reviewObj._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingUsers = review.filter(
              (item) => item._id !== review._id
            );
            setReview(remainingUsers);
          }
        });
    }
  };

  return (
    <div className="container mx-auto border-t  border-spacing-5 py-16">
      <h1 className="lg:text-5xl text-3xl text-center font-Vibes tracking-widest  text-white">
        Our Special Review
      </h1>
      <div className="flex justify-center space-x-5 mt-3">
        <aside>
          <div className="flex items-center">
            <hr className="lg:w-36 w-20" />
            <aside className="lg:w-3 w-2 lg:h-3 h-2  bg-secondary rounded-full"></aside>
          </div>
        </aside>
        <aside>
          <div className="flex items-center">
            <aside className="lg:w-3 w-2 lg:h-3 h-2 bg-secondary rounded-full"></aside>
            <hr className="lg:w-36 w-20" />
          </div>
        </aside>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 mt-12 px-4">
        {review.map((singleReview, inx) => (
          <MyReviewCards
            key={inx}
            reviewDelete={reviewDelete}
            singleReview={singleReview}
          ></MyReviewCards>
        ))}
      </div>
    </div>
  );
};

export default Review;
