import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Review from "../../Pages/Review/Review";
import ReviewUpdate from "../../Pages/Review/ReviewUpdate/ReviewUpdate";
import AddService from "../../Pages/Services/AddService/AddService";
import Service from "../../Pages/Services/Service";
import ReviewAdd from "../../Pages/Services/ServiceDetails/ReviewAdd/ReviewAdd";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

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
        loader: () =>
          fetch("https://wedding-webpage-server-site.vercel.app/service"),
        element: <Service />,
      },
      {
        path: "/service/:id",
        loader: ({ params }) =>
          fetch(
            `https://wedding-webpage-server-site.vercel.app/service/${params.id}`
          ),
        element: <ServiceDetails />,
      },
      {
        path: "/review/:id",
        loader: ({ params }) =>
          fetch(
            `https://wedding-webpage-server-site.vercel.app/review/${params.id}`
          ),
        element: <ReviewUpdate />,
      },
      {
        path: "/addService",
        element: <AddService />,
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
      {
        path: "/review",
        element: (
          <PrivateRoute>
            <Review />
          </PrivateRoute>
        ),
      },
      {
        path: "reviewAdd",
        element: <ReviewAdd />,
      },
    ],
  },
]);
