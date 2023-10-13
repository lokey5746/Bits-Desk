import React from "react";

const ViewRequest = () => {
  return (
    <section>
      <div className="">
        <div className="bg-purple rounded-md rounded-b-none">
          <h2 className="text-white text-base font-medium p-3">
            Recent Active Requests
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
              <h2 className="px-2 text-sm">No request till now.</h2>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ViewRequest;
