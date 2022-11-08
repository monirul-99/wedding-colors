import React from "react";
import imgOne from "../../images/small4.jpg";
import imgTwo from "../../images/small2.jpg";
import imgThree from "../../images/small3.jpg";
import imgFour from "../../images/small.jpg";
import imgBig from "../../images/big.jpg";

const PhotoGallery = () => {
  return (
    <section className="py-6 bg-gray-800 text-gray-50">
      <div className="container grid grid-cols-2 gap-4 mx-auto md:grid-cols-4 lg:w-full w-5/6">
        <img
          src={imgBig}
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={imgThree}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={imgTwo}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={imgOne}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={imgFour}
        />
      </div>
    </section>
  );
};

export default PhotoGallery;
