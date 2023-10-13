import React from "react";
import data from "../../handler/cardData";
import Annoucemnet from "../annoucement/Annoucemnet";
import Banner from "../banner/Banner";
import ViewIdea from "../idea/ViewIdea";
import ViewIncident from "../incident/ViewIncident";
import ViewRequest from "../request/ViewRequest";

const Dashboard = () => {
  return (
    <section className="">
      <Banner />
      <div className="w-full mx-auto px-5 md:px-0 md:max-w-7xl py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center px-3 py-5 space-y-2 border-2 border-gray rounded-md"
            >
              <img src={item.image} className="h-10 md:h-20" alt="" />
              <h2 className="text-title text-base md:text-2xl">{item.text}</h2>
            </div>
          ))}
        </div>
        <Annoucemnet />
        <div className="grid grid-cols-1  md:grid-cols-3 gap-3 md:gap-5">
          <ViewIdea />
          <ViewIncident />
          <ViewRequest />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
