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

  const navItems = (
    <>
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
    </>
  );
  return (
    <nav className="border-gray-200 sm:px-4 py-7">
      <div className="container flex flex-wrap justify-between items-center mx-auto p-1">
        <Link
          to="/"
          className="hidden lg:block md:block self-center text-3xl font-Vibes tracking-widest font-extralight whitespace-nowrap text-white"
        >
          Wedding Color
        </Link>
        <div className="lg:hidden w-full flex flex-row-reverse justify-between">
          <Link
            to="/"
            className="self-center mr-3 lg:mr-0 text-3xl font-Vibes tracking-widest font-extralight whitespace-nowrap text-white"
          >
            Wedding Color
          </Link>
          <div className="navbar-start lg:hidden">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu ml-3  menu-compact dropdown-content mt-12 px-5 py-5 p-1 space-y-5 shadow bg-base-100 rounded-box w-36"
              >
                {navItems}
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col mt-4 rounded-lg border border-gray-100 md:flex-row space-x-8 md:mt-0 md:text-sm  md:font-medium md:border-0  ">
            <Link
              to="/home"
              className="relative text-[17px] text-white before:absolute before:-bottom-2 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-secondary before:transition hover:before:scale-100"
            >
              Home
            </Link>

            <Link
              to="/service"
              className="relative text-[17px] text-white before:absolute before:-bottom-2 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-secondary before:transition hover:before:scale-100"
            >
              Service
            </Link>

            <Link
              to="/blogs"
              className="relative text-[17px] text-white before:absolute before:-bottom-2 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-secondary before:transition hover:before:scale-100"
            >
              Blogs
            </Link>

            {user?.displayName && (
              <>
                <Link
                  to="/addService"
                  className="relative text-[17px] text-white before:absolute before:-bottom-2 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-secondary before:transition hover:before:scale-100"
                >
                  Add Service
                </Link>
                <Link
                  to="/review"
                  className="relative text-[17px] text-white before:absolute before:-bottom-2 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-secondary before:transition hover:before:scale-100"
                >
                  My Review
                </Link>
                <Link
                  onClick={handleLogOuts}
                  className="relative text-[17px] text-white before:absolute before:-bottom-2 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-secondary before:transition hover:before:scale-100"
                >
                  Log Out
                </Link>
              </>
            )}
            {!user?.displayName && (
              <>
                <Link
                  to="/login"
                  className="relative text-[17px] text-white before:absolute before:-bottom-2 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-secondary before:transition hover:before:scale-100"
                >
                  Log In
                </Link>

                <Link
                  to="/register"
                  className="relative text-[17px] text-white before:absolute before:-bottom-2 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-secondary before:transition hover:before:scale-100"
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
