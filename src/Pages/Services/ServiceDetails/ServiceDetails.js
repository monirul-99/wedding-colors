import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/ServiceContext";
import UseTitle from "../../../CustomHooks/UseTitle/UseTitle";
import ReviewCard from "./ReviewAdd/ReviewCard/ReviewCard";

const ServiceDetails = () => {
  UseTitle("Service Details");
  const cardData = useLoaderData();
  const { user, review } = useContext(AuthContext);
  const [userReview, setUserReview] = useState([]);

  const { img, title, describe, rating, price, duration, _id, members } =
    cardData[0];

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName || "Not Register";
    const photo = user?.photoURL || "Not Register";
    const email = user?.email || "Unregister";
    const review = form.describe.value;
    form.reset();

    const profile = {
      serviceId: _id,
      serviceName: name,
      reviewTime: new Date().toLocaleString(),
      serviceTitle: title,
      userProfile: photo,
      email: email,
      describe: review,
    };

    fetch("https://wedding-webpage-server-site.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("User Added Success");
          // event.target.reset();
        }
      });
  };
  useEffect(() => {
    fetch(
      `https://wedding-webpage-server-site.vercel.app/reviewServiceId?serviceId=${_id}`
    )
      .then((res) => res.json())
      .then((data) => setUserReview(data));
  }, [_id, userReview]);

  return (
    <div>
      <section className="container mx-auto border-t px-4">
        <aside className="">
          <section>
            <div className="mx-auto max-w-screen-2xl py-16 sm:px-6">
              <div className="grid grid-cols-1  lg:grid-cols-2">
                <div className="relative z-10 lg:py-16 ">
                  <div className="relative h-64 sm:h-80 lg:h-full mb-5 lg:mb-0 md:mb-0">
                    <img
                      alt="House"
                      src={img}
                      className="absolute inset-0 h-full w-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                <div className="relative flex items-center bg-gray-100 rounded-r-lg">
                  <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                  <div className="p-8 sm:p-16 lg:p-24">
                    <h2 className="text-2xl text-secondary font-bold sm:text-3xl">
                      {title}
                    </h2>

                    <div className="space-y-3 mt-5">
                      <div className="flex flex-col lg:justify-between">
                        <p className="text-black mb-3">
                          Duration :{" "}
                          <span className="bg-info text-white px-2 rounded-sm">
                            {duration}
                          </span>
                        </p>
                        <p className="text-black">
                          Budget :{" "}
                          <span className="bg-info text-white px-2 rounded-sm">
                            $ {price}
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-col-reverse  lg:justify-between">
                        <p className="text-black ">
                          Our Members Provide :{" "}
                          <span className="bg-info text-white px-2 rounded-sm">
                            {members}
                          </span>
                        </p>
                        <p className="text-black mb-3">
                          Rating :{" "}
                          <span className="bg-info text-white px-2 rounded-sm">
                            {rating}
                          </span>
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-gray-600">
                      {describe.slice(0, 463)}
                    </p>
                    <p className="mt-4 text-gray-600">
                      {describe.slice(463, 967)}
                    </p>
                    <p className="mt-4 text-gray-600">{describe.slice(967)}</p>

                    <Link className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                      Purchase Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </aside>
        <aside className=" bg-white py-28 mb-16 rounded-lg ">
          {!user?.displayName && (
            <h1 className="text-center text-3xl">
              Please login to add a review{" "}
              <Link className="text-blue-500" to="/login">
                Login
              </Link>{" "}
            </h1>
          )}

          {review.length === 0 && user?.displayName && (
            <div className="flex items-center space-x-5 justify-center">
              <h1 className="text-center text-3xl">No reviews were added</h1>
              <Link
                to="/reviewAdd"
                className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
              >
                <span className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

                <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                  Add Review
                </span>
              </Link>
            </div>
          )}
          {review.length && user?.displayName && (
            <div className="flex flex-col justify-center lg:w-1/5 px-8 lg:px-0 mx-auto">
              <form onSubmit={handleAddReview}>
                <div className="form-group">
                  <textarea
                    className="
        form-control
        block
        w-full
        px-3
        py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    rows="3"
                    placeholder="Service Review Add"
                    name="describe"
                  ></textarea>
                </div>
                <input
                  className="bg-blue-500 py-2 rounded-sm px-5 mt-3 text-white"
                  type="submit"
                  value="Add Review"
                />
              </form>
            </div>
          )}

          {user?.displayName && (
            <div className="lg:p-12 p-3 grid lg:grid-cols-3 gap-7">
              {userReview.map((singleReview, inx) => (
                <ReviewCard key={inx} singleReview={singleReview}></ReviewCard>
              ))}
            </div>
          )}
        </aside>
      </section>
    </div>
  );
};

export default ServiceDetails;
