import React from "react";

const Annoucemnet = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 py-8 md:px-8">
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
      <div className="border-2 border-gray rounded-md space-y-3 h-28">
        <div>
          <h3 className="text-xl text-title px-3 py-2">Announcements</h3>
          <hr className="border border-gray" />
        </div>
        <div className="px-4 py-2">
          <h3 className="text-base font-medium text-title px-3">
            No information available
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Annoucemnet;
