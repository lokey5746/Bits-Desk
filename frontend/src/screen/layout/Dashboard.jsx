import React from "react";
import data from "../../handler/cardData";

const Dashboard = () => {
  return (
    <section className="w-full mx-auto md:max-w-7xl py-5">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center px-3 py-5 space-y-2 border-2 border-gray rounded-md"
          >
            <img src={item.image} className="" alt="" />
            <h2 className="text-title text-2xl">{item.text}</h2>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 py-8 px-8">
        <div className="border-2 border-gray rounded-md space-y-4">
          <div>
            <h3 className="text-xl text-title px-3 py-2">Current Status</h3>
            <hr className="border border-gray" />
          </div>
          <div className="px-4 py-3">
            <div className="bg-purple p-5 rounded "></div>
            <h3 className="text-blue text-base mt-2 font-medium">
              More information...
            </h3>
          </div>
        </div>
        <div className="border-2 border-gray rounded-md p-4"></div>
      </div>
    </section>
  );
};

export default Dashboard;
