import React from "react";

const Subscriptions = () => {
  return (
    <div>
      <div className="w-full  mb-20 mt-7 px-4 lg:px-0 md:px-0">
        <div className="container bg-gray-900 rounded flex flex-col flex-wrap content-center justify-center py-20 mx-auto md:p-10">
          <h1 className="lg:text-5xl text-3xl antialiased uppercase leading-none text-center  text-gray-100">
            Get Ou<span className="text-secondary">r Updates</span>
          </h1>
          <p className="pt-2 pb-8 lg:text-xl antialiased text-center  text-gray-100">
            <span className="text-secondary">Find out ab</span>out events
          </p>
          <div className="flex items-center flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3">
            <input
              type="text"
              placeholder="example@email.com"
              className="lg:w-3/5 p-3 rounded-lg sm:w-2/3"
            />
            <button
              type="button"
              className="lg:w-2/5  p-3 uppercase tracking-wide rounded-lg sm:w-1/3 bg-secondary  text-white"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
