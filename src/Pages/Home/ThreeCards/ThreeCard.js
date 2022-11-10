import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";

const ThreeCard = () => {
  const [threeCard, setThreeCard] = useState([]);
  useEffect(() => {
    fetch("https://wedding-webpage-server-site.vercel.app/threeCard")
      .then((res) => res.json())
      .then((data) => setThreeCard(data));
  }, []);
  return (
    <div className="container mx-auto mt-12 lg:w-4/5 mb-16 w-5/6">
      <h1 className="lg:text-6xl text-4xl text-white font-Vibes text-center py-12 tracking-widest">
        Specials <span className="text-secondary">Package</span>
      </h1>
      <div className="flex justify-center space-x-5 -mt-10 lg:-mt-9 mb-10 ">
        <aside>
          <div className="flex items-center">
            <hr className="lg:w-52 w-28" />
            <aside className="lg:w-3 w-2 lg:h-3 h-2  bg-secondary rounded-full"></aside>
          </div>
        </aside>
        <aside>
          <div className="flex items-center">
            <aside className="lg:w-3 w-2 lg:h-3 h-2 bg-secondary rounded-full"></aside>
            <hr className="lg:w-52 w-28 " />
          </div>
        </aside>
      </div>
      <p className="text-center text-white -mt-7 text-xl mb-12">
        <span className="text-secondary">Best & Hit</span> Package
      </p>
      <div className="grid  lg:grid-cols-3 gap-10">
        {threeCard.map((card, inx) => (
          <Cards key={inx} card={card}></Cards>
        ))}
      </div>
      <div className="flex justify-center mt-16 -mb-3">
        <Link
          to="/service"
          className="inline-block rounded bg-secondary px-8 py-3
          text-sm font-medium text-white transition hover:rotate-2
          hover:scale-110 focus:outline-none focus:ring active:bg-secondary"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default ThreeCard;
