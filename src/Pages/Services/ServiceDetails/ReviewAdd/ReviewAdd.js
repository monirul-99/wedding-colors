import React from "react";

const ReviewAdd = () => {
  return (
    <div className="h-screen -mb-80 ">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto mt-4 mb-12 ">
        <form className="">
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
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Service Review Add"
              name="describe"
            ></textarea>
          </div>
          <div className="form-group form-check text-center mb-6"></div>
          <button
            type="submit"
            className="
      w-full
      px-6
      py-4
      bg-blue-600
      text-white
      font-medium
      text-[17px]
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewAdd;
