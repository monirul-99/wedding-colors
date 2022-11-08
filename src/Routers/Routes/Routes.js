import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Service from "../../Pages/Services/Service";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";

const { createBrowserRouter } = require("react-router-dom");

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/service",
        loader: () => fetch("http://localhost:5000/service"),
        element: <Service />,
      },
      {
        path: "/service/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
        element: <ServiceDetails />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
