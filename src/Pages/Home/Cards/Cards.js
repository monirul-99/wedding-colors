import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Cards = ({ card }) => {
  const { img, title, price, rating, describe, _id } = card;
  return (
    <div>
      <div className="relative flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            {/* <img className=" rounded-t-lg" src={img} alt="" /> */}
            <PhotoProvider>
              <PhotoView src={img}>
                <img src={img} alt="" />
              </PhotoView>
            </PhotoProvider>
            <span className="absolute top-3 right-1 whitespace-nowrap rounded-md bg-amber-400 px-2.5 py-0.5 text-sm text-gray-900">
              Hit Pack
            </span>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
            <p title={describe} className="text-gray-700 text-base mb-4">
              {describe.length > 100 ? describe.slice(0, 100) : describe} . . .
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

export default Cards;
