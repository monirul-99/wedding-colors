import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/ServiceContext";
import UseTitle from "../../CustomHooks/UseTitle/UseTitle";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  UseTitle("Login");
  const { signInBtn, handleGoogleProvider } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const google = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    handleGoogleProvider(google)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };

        console.log(currentUser);

        // JWT Token Get
        fetch(`https://wedding-webpage-server-site.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.token);
            localStorage.setItem("my-token", data.token);
          });
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInBtn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        const currentUser = {
          email: user.email,
        };

        console.log(currentUser);

        // JWT Token Get
        fetch(`https://wedding-webpage-server-site.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.token);
            localStorage.setItem("my-token", data.token);
          });
        form.reset();
        navigate(from, { replace: true });
        Swal.fire({
          icon: "success",
          title: "Login Success!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  return (
    <div>
      <section className="h-screen ">
        <div className="container mx-auto px-6 py-12 h-full border-t">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                alt=""
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={handleSignIn} className="lg:w-3/5 mx-auto">
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                    name="email"
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    name="password"
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#!"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    Forgot password?
                  </a>
                </div>

                <input
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  value="Sign in"
                />

                <p className="text-sm text-white font-semibold mt-2 pt-1 mb-0">
                  Don't have an account? {""}
                  <Link
                    to="/register"
                    className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >
                    Register
                  </Link>
                </p>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                <Link
                  onClick={handleGoogleSignIn}
                  className="px-7 py-3 text-white bg-blue-500 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <p className="px-2">
                    {" "}
                    <FaGoogle />{" "}
                  </p>
                  <p>Continue with Google</p>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
