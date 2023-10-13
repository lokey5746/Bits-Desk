import React from "react";

const ViewIncident = () => {
  return (
    <section>
      <div className="">
        <div className="bg-red rounded-md rounded-b-none">
          <h2 className="text-white text-base font-medium p-3">
            Recent Active Incidents
          </h2>
        </div>
        <div className="border-2 border-gray rounded-md md:p-3 rounded-t-none border-t-0">
          <table class=" text-sm h-full w-full rounded-md border-spacing-y-5">
            <thead>
              <tr className="text-sm md:text-base">
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
    </section>
  );
};

export default ViewIncident;
