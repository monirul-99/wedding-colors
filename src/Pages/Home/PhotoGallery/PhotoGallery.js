import React from "react";
import imgOne from "../../images/small4.jpg";
import imgTwo from "../../images/small2.jpg";
import imgThree from "../../images/small3.jpg";
import imgFour from "../../images/small.jpg";
import imgBig from "../../images/big.jpg";

const PhotoGallery = () => {
  return (
    <section className="py-6 bg-gray-800 text-gray-50 lg:px-4 ">
      <h1 className="lg:text-6xl text-4xl text-white font-Vibes text-center py-12 tracking-widest">
        Our Most <span className="text-secondary">Famous</span>
      </h1>
      <div className="flex justify-center space-x-5 -mt-10 lg:-mt-10 mb-14">
        <aside>
          <div className="flex items-center">
            <hr className="lg:w-60 w-28" />
            <aside className="lg:w-3 w-2 lg:h-3 h-2  bg-secondary rounded-full"></aside>
          </div>
        </aside>
        <aside>
          <div className="flex items-center">
            <aside className="lg:w-3 w-2 lg:h-3 h-2 bg-secondary rounded-full"></aside>
            <hr className="lg:w-60 w-28 " />
          </div>
        </aside>
      </div>
      <p className="text-center text-white -mt-10 text-xl mb-10">
        <span className="text-secondary">Photo Shoot</span> Pictures
      </p>
      <div className="container grid grid-cols-2 gap-4 mx-auto md:grid-cols-4 lg:w-full w-5/6">
        <img
          data-aos-duration="1500"
          data-aos="fade-up"
          src={imgBig}
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <img
          data-aos-duration="1500"
          data-aos="zoom-out-right"
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={imgThree}
        />

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
        >
          <img
            data-aos="fade-up-left"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={imgTwo}
          />
        </div>

        <img
          data-aos-duration="1500"
          data-aos="zoom-out-right"
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={imgOne}
        />

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1500"
        >
          <img
            data-aos="fade-up-left"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={imgFour}
          />
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
