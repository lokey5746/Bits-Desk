import React from "react";
import { HiLightBulb } from "react-icons/hi";
import setting from "../../assets/setting.svg";
import watch from "../../assets/watch.svg";
import bulb from "../../assets/bulb.svg";
import data from "../../handler/cardData";
import Card from "../../components/Card";

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
    </section>
  );
};

export default Dashboard;
