import React from "react";
import data from "../../handler/cardData";
import Annoucemnet from "../annoucement/Annoucemnet";

const Dashboard = () => {
  return (
    <section className="w-full mx-auto px-5 md:px-0 md:max-w-7xl py-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
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
      <Annoucemnet />
      <div className="grid grid-cols-1  md:grid-cols-3 gap-3 md:gap-5">
        <div className="">
          <div className="bg-blue rounded-md rounded-b-none">
            <h2 className="text-white text-base font-medium p-3">
              Recent Active Ideas
            </h2>
          </div>
          <div className="border-2 border-gray rounded-md p-3 rounded-t-none border-t-0">
            <table class=" text-sm h-full w-full rounded-md border-spacing-y-5">
              <thead>
                <tr className="text-base">
                  <th class="px-3 py-2  text-title  text-left">Number</th>
                  <th class="px-2 py-2  text-title  text-left">State</th>
                  <th class="px-2 py-2  text-title  text-left">Title</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="text-xs bg-gray text-blue ">
                  <td class=" px-2 py-2">IDEA0059168</td>
                  <td class=" px-2 py-2">Draft</td>
                  <td class="px-2 py-2 ">Ip not working </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="">
          <div className="bg-red rounded-md rounded-b-none">
            <h2 className="text-white text-base font-medium p-3">
              Recent Active Incidents
            </h2>
          </div>
          <div className="border-2 border-gray rounded-md p-3 rounded-t-none border-t-0">
            <table class=" text-sm h-full w-full rounded-md border-spacing-y-5">
              <thead>
                <tr className="text-base">
                  <th class="px-3 py-2  text-title  text-left">Number</th>
                  <th class="px-2 py-2  text-title  text-left">State</th>
                  <th class="px-2 py-2  text-title  text-left">Title</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="text-xs bg-gray text-blue ">
                  <td class=" px-2 py-2">IDEA0059168</td>
                  <td class=" px-2 py-2">Draft</td>
                  <td class="px-2 py-2 ">Ip not working </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="">
          <div className="bg-purple rounded-md rounded-b-none">
            <h2 className="text-white text-base font-medium p-3">
              Recent Active Requests
            </h2>
          </div>
          <div className="border-2 border-gray rounded-md p-3 rounded-t-none border-t-0">
            <table class=" text-sm h-full w-full rounded-md border-spacing-y-5">
              <thead>
                <tr className="text-base">
                  <th class="px-3 py-2  text-title  text-left">Number</th>
                  <th class="px-2 py-2  text-title  text-left">State</th>
                  <th class="px-2 py-2  text-title  text-left">Title</th>
                </tr>
              </thead>
              <tbody className="">
                {/* <tr className="text-xs bg-gray text-blue ">
                  <td class=" px-2 py-2">IDEA0059168</td>
                  <td class=" px-2 py-2">Draft</td>
                  <td class="px-2 py-2 ">Ip not working </td>
                </tr> */}
                <h2 className="px-2 text-sm">No request till now.</h2>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
