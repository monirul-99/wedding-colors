import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ card }) => {
  const { img, title, price, rating, describe } = card;
  return (
    <div>
      <div class="relative flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img class=" rounded-t-lg" src={img} alt="" />
            <span class="absolute top-3 right-1 whitespace-nowrap rounded-md bg-amber-400 px-2.5 py-0.5 text-sm text-gray-900">
              Hit Pack
            </span>
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
            <p title={describe} class="text-gray-700 text-base mb-4">
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
            <Link>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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
