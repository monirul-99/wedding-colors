import React from "react";
import { useLoaderData } from "react-router-dom";
import UseTitle from "../../CustomHooks/UseTitle/UseTitle";
import ServiceCard from "./ServiceCards/ServiceCard";

const Service = () => {
  UseTitle("Service");
  const allServiceData = useLoaderData();
  return (
    <div className="container mx-auto border-t">
      <h1 className="font-Vibes  tracking-widest text-center text-5xl p-5 text-white mt-12">
        Our Best <span className="text-secondary">Sweet P</span>ackage
      </h1>
      <div className="flex justify-center space-x-5  mb-10">
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
      <h3 className="w-5/6 mx-auto mr-32 px-2 text-white -mb-5">
        Total Package : {allServiceData.length}
      </h3>
      <div className="grid lg:grid-cols-3 gap-12 w-5/6 mx-auto py-12">
        {allServiceData.map((data) => (
          <ServiceCard key={data._id} data={data}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
