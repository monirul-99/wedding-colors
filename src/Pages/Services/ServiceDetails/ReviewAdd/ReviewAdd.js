import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../Context/ServiceContext";

const ReviewAdd = () => {
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);

  const handleNewUsers = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("User Added Success");
          event.target.reset();
        }
      });
  };

  const handleBlur = (event) => {
    event.preventDefault();
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const newMembers = { ...reviews };
    newMembers[fieldName] = fieldValue;
    console.log(newMembers);
  };
  return (
    <div className="h-screen -mb-80 border-t container mx-auto">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto mt-72">
        <form className="">
          <div className="form-group">
            <textarea
              onBlur={handleBlur}
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
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ReviewAdd;
