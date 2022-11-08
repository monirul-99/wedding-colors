import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCards/ServiceCard";

const Service = () => {
  const allServiceData = useLoaderData();
  console.log(allServiceData);
  return (
    <div className="container mx-auto border-t">
      <h1 className="font-Vibes  tracking-widest text-center text-5xl p-5 text-white mt-12">
        Our Best <span className="text-secondary">Sweet P</span>ackage
      </h1>
      <h3 className="w-5/6 mx-auto mr-32 px-2 -mb-5">
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
