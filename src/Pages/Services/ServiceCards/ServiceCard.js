import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ data }) => {
  const { img, title, price, rating, describe, _id } = data;
  return (
    <div>
      <div
        className=" flex justify-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <PhotoProvider>
              <PhotoView src={img}>
                <img src={img} alt="" />
              </PhotoView>
            </PhotoProvider>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
            <p title={describe} className="text-gray-700 text-base mb-4">
              {describe?.length > 100 ? describe.slice(0, 100) : describe} . . .
            </p>
            <div className="flex justify-between items-center pb-7 text-gray-900">
              <p>
                Budget :{" "}
                <span className="bg-info text-white px-2 rounded-sm">
                  $ {price}
                </span>
              </p>
              <p>
                Rating :{" "}
                <span className="bg-secondary text-white px-2 rounded-sm">
                  {rating}
                </span>
              </p>
            </div>
            <Link to={`/service/${_id}`}>
              <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
