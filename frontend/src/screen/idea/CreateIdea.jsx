import React from "react";
import arrow from "../../assets/arrow.svg";
import attachment from "../../assets/attachment.svg";

const CreateIdea = () => {
  return (
    <section className="w-full mx-auto px-5 md:px-0 md:max-w-6xl py-2">
      <div className="flex space-x-4 md:px-8">
        <h2 className="text-base">Home</h2>
        <img src={arrow} alt="" />
        <h2 className="text-base">New Idea</h2>
      </div>
      <div className="border-2 border-gray rounded-md mt-3">
        <h2 className="text-lg md:text-2xl font-semibold px-5 py-5">
          New Idea
        </h2>
        <hr className="border border-gray" />
        <div className="px-5 md:px-10 py-5 md:py-10 space-y-4 md:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="space-y-2 flex flex-col">
              <label className="text-sm md:text-base font-medium" htmlFor="">
                *Title
              </label>
              <input
                type="text"
                className="px-3 py-2 md:py-3 rounded-md border-2 border-gray outline-none w-full"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label className="text-sm md:text-base font-medium" htmlFor="">
                *Category
              </label>
              <input
                type="text"
                className="px-3 py-2 md:py-3 rounded-md border-2 border-gray outline-none w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="space-y-2 flex flex-col">
              <label className="text-sm md:text-base font-medium" htmlFor="">
                *Description
              </label>
              <input
                type="text"
                className="px-3 py-2 md:py-3 rounded-md border-2 border-gray outline-none w-full"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label className="text-sm md:text-base font-medium" htmlFor="">
                *Sub-Category
              </label>
              <input
                type="text"
                className="px-3 py-2 md:py-3 rounded-md border-2 border-gray outline-none w-full"
              />
            </div>
          </div>
        </div>
        <hr className="border border-gray" />
        <div className="px-5 md:px-10 py-5 space-y-4 md:space-y-8">
          <div className="flex justify-between items-center">
            <button className="text-base bg-blue rounded-md px-4 py-2 font-medium text-white">
              Submit
            </button>
            <div className="flex items-center space-x-2">
              <img className="h-5" src={attachment} alt="" />
              <h3 className="text-sm font-medium">Add attachments</h3>
            </div>
          </div>
          <div className="border-2 border-gray rounded-md px-3 py-4 flex flex-col md:flex-row md:items-center space-y-2 md:space-x-4">
            <h2 className="text-sm font-medium ">Required information</h2>
            <div className="space-x-3 flex">
              <h3 className="text-xs text-white bg-red px-3 py-1 rounded-md font-medium">
                Title
              </h3>
              <h3 className="text-xs text-white bg-red px-3 py-1 rounded-md font-medium">
                Description
              </h3>
              <h3 className="text-xs text-white bg-red px-3 py-1 rounded-md font-medium">
                Category
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateIdea;
