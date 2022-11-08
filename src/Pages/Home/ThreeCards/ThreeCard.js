import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";

const ThreeCard = () => {
  const [threeCard, setThreeCard] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/threeCard")
      .then((res) => res.json())
      .then((data) => setThreeCard(data));
  }, []);
  return (
    <div className="container mx-auto mt-12 lg:w-3/5 mb-16 w-5/6">
      <h1 className="text-6xl font-Vibes text-center py-12 tracking-widest mb-8">
        Specials Package
      </h1>
      <div className="grid  lg:grid-cols-3 gap-10">
        {threeCard.map((card, inx) => (
          <Cards key={inx} card={card}></Cards>
        ))}
      </div>
      <div className="flex justify-center mt-16 -mb-3">
        <Link to="/service">
          <button className="btn btn-info rounded-full px-10 text-white">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThreeCard;
