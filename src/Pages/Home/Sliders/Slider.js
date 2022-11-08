import React from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="container mx-auto bg-white relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://img.freepik.com/free-photo/groom-black-tuxedo-hugs-tender-stunning-bride-while-they-stand_8353-8050.jpg?w=1380&t=st=1667836772~exp=1667837372~hmac=63da447821cad951272035746aa9984c17a915c0174e41a5a0d661e2619c0f31"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            The Wedding
          </p>
          <h2 className="mb-5 font-sans text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Registry For <br className="hidden md:block" />
            Eco-Friendly {""}
            <span className="inline-block text-deep-purple-accent-400">
              Wedding
            </span>
          </h2>
          <p className="pr-5 mb-5 text-gray-700 md:text-lg">
            We believe that all love deserves to be celebrated, and are fully
            committed to offering respectful services for couples of all races,
            ethnicities, genders, sexualities, ages, and abilities. Since every
            wedding is a unique experience, it’s our job as wedding filmmakers
            to create a video that accurately reflects the style and personality
            of the bride and groom.
          </p>
          <div className="flex items-center space-x-5">
            <Link to="/service">
              <button className="btn btn-info rounded-sm text-white duration-1000 ease-in-out px-5 hover:rounded-full">
                Service
              </button>
            </Link>
            <Link to="/blogs">
              <button className="btn btn-outline btn-info hover:text-white">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
