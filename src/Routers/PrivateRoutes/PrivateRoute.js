import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/ServiceContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    console.log("Loading");
    return (
      <div className="grid grid-cols-3 ga-8">
        <div className="flex justify-center items-center p-16">
          <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse  bg-gray-900 ">
            <div className="flex p-4 space-x-4 sm:px-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full  bg-gray-700"></div>
              <div className="flex-1 py-2 space-y-4">
                <div className="w-full h-3 rounded  bg-gray-700"></div>
                <div className="w-5/6 h-3 rounded  bg-gray-700"></div>
              </div>
            </div>
            <div className="p-4 space-y-4 sm:px-8">
              <div className="w-full h-4 rounded  bg-gray-700"></div>
              <div className="w-full h-4 rounded  bg-gray-700"></div>
              <div className="w-3/4 h-4 rounded  bg-gray-700"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center p-16">
          <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse  bg-gray-900 ">
            <div className="flex p-4 space-x-4 sm:px-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full  bg-gray-700"></div>
              <div className="flex-1 py-2 space-y-4">
                <div className="w-full h-3 rounded  bg-gray-700"></div>
                <div className="w-5/6 h-3 rounded  bg-gray-700"></div>
              </div>
            </div>
            <div className="p-4 space-y-4 sm:px-8">
              <div className="w-full h-4 rounded  bg-gray-700"></div>
              <div className="w-full h-4 rounded  bg-gray-700"></div>
              <div className="w-3/4 h-4 rounded  bg-gray-700"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center p-16">
          <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse  bg-gray-900 ">
            <div className="flex p-4 space-x-4 sm:px-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full  bg-gray-700"></div>
              <div className="flex-1 py-2 space-y-4">
                <div className="w-full h-3 rounded  bg-gray-700"></div>
                <div className="w-5/6 h-3 rounded  bg-gray-700"></div>
              </div>
            </div>
            <div className="p-4 space-y-4 sm:px-8">
              <div className="w-full h-4 rounded  bg-gray-700"></div>
              <div className="w-full h-4 rounded  bg-gray-700"></div>
              <div className="w-3/4 h-4 rounded  bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
