import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ReviewUpdate = () => {
  const data = useLoaderData();
  const [update, setUpdate] = useState(data);

  console.log(data);
  console.log(data[0]._id);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://wedding-webpage-server-site.vercel.app/review/${data[0]._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(update),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleOnChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const newDescriber = { ...update };
    newDescriber[fieldName] = fieldValue;
    setUpdate(newDescriber);
  };
  return (
    <div className="container mx-auto border-t">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto mt-28 mb-24">
        <h1 className="text-center text-xl mb-4 text-black">
          Review Text Upgraded Form
        </h1>
        <form onSubmit={handleSubmit}>
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
              defaultValue={data[0].serviceName}
              readOnly
            />
          </div>
          <div className="form-group mb-6">
            <input
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
              defaultValue={data[0].email}
              readOnly
            />
          </div>

          <div className="form-group mb-6]">
            <textarea
              onChange={handleOnChange}
              className="
        form-control
        block
        h-52
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
              defaultValue={data[0].describe}
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
            value="Upgraded Now"
          />
        </form>
      </div>
    </div>
  );
};

export default ReviewUpdate;
