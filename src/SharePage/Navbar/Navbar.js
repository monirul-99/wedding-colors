import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/ServiceContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOuts = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .then((error) => console.error(error));
  };
  return (
    <nav className="border-gray-200 sm:px-4 p-7">
      <div className="container flex flex-wrap justify-between items-center mx-auto p-1">
        <Link
          to="/"
          className="self-center text-3xl font-Vibes tracking-widest font-extralight whitespace-nowrap text-white"
        >
          Wedding Color
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        ></button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col mt-4 rounded-lg border border-gray-100 md:flex-row space-x-8 md:mt-0 md:text-sm  md:font-medium md:border-0  ">
            <Link
              to="/home"
              className="relative text-[17px] text-white before:absolute before:-bottom-2 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-blue-700 before:transition hover:before:scale-100"
            >
              Home
            </Link>

            <Link
              to="/service"
              className="relative text-[17px] text-white before:absolute before:-bottom-2 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-blue-700 before:transition hover:before:scale-100"
            >
              Service
            </Link>

            <Link
              to="/blogs"
              className="relative text-[17px] text-white before:absolute before:-bottom-2 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-blue-700 before:transition hover:before:scale-100"
            >
              Blogs
            </Link>

            {user?.displayName && (
              <>
                <Link
                  to="/addService"
                  className="relative text-[17px] text-white before:absolute before:-bottom-2 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-blue-700 before:transition hover:before:scale-100"
                >
                  Add Service
                </Link>
                <Link
                  to="/review"
                  className="relative text-[17px] text-white before:absolute before:-bottom-2 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-blue-700 before:transition hover:before:scale-100"
                >
                  My Review
                </Link>
                <Link
                  onClick={handleLogOuts}
                  className="relative text-[17px] text-white before:absolute before:-bottom-2 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-blue-700 before:transition hover:before:scale-100"
                >
                  Log Out
                </Link>
              </>
            )}
            {!user?.displayName && (
              <>
                <Link
                  to="/login"
                  className="relative text-[17px] text-white before:absolute before:-bottom-2 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-blue-700 before:transition hover:before:scale-100"
                >
                  Log In
                </Link>

                <Link
                  to="/register"
                  className="relative text-[17px] text-white before:absolute before:-bottom-2 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-blue-700 before:transition hover:before:scale-100"
                >
                  Register
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
