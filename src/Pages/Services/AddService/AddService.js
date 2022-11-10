import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseTitle from "../../../CustomHooks/UseTitle/UseTitle";

const AddService = () => {
  UseTitle("Add Service");
  const [service, setService] = useState();
  const handleServiceAdd = (event) => {
    event.preventDefault();

    fetch("https://wedding-webpage-server-site.vercel.app/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Service Added Successfully!", {
            position: "top-right",
            autoClose: 500,
          });
          event.target.reset();
        }
      });
  };
  const handleInputValue = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...service };
    newUser[field] = value;
    setService(newUser);
  };
  return (
    <div className="container mx-auto border-t mb-16 px-4 lg:px-0 md:px-0">
      <div>
        <h1 className="py-12 lg:text-5xl text-3xl font-Vibes text-center tracking-widest text-secondary">
          Create Your Favorite Service
        </h1>
        <div className="flex justify-center space-x-5 -mt-10 lg:-mt-5 mb-10">
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
      </div>

      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto mt-4">
        <h1 className="text-center text-xl mb-4 text-black">
          Service Info Provider Form
        </h1>
        <form>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Service Name"
              name="title"
            />
          </div>
          <div className="form-group mb-6">
            <input
              onChange={handleInputValue}
              type="text"
              className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Service Picture"
              name="img"
            />
          </div>
          <div className="form-group mb-6">
            <input
              onChange={handleInputValue}
              type="text"
              className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Service price"
              name="price"
            />
          </div>
          <div className="form-group mb-6">
            <input
              onChange={handleInputValue}
              type="text"
              className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Service Rating"
              name="rating"
            />
          </div>
          <div className="form-group mb-6">
            <input
              onChange={handleInputValue}
              type="text"
              className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Photographer Members"
              name="members"
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              onChange={handleInputValue}
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
              placeholder="Service Describe"
              name="describe"
            ></textarea>
          </div>
          <div className="form-group form-check text-center mb-6"></div>
          <input
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
            value="Submit Service"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
