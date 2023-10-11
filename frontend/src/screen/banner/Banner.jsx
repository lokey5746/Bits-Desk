import React from "react";
import banner from "../../assets/banner3.png";

const Banner = () => {
  return (
    <section>
      <img className="w-full" src={banner} alt="" />
      <div className="absolute box flex flex-col items-center">
        <h2 className="text-white text-3xl font-bold">How Can We Help You?</h2>
        <div className="px-5 py-3 rounded-md bg-white w-[900px]">
          <input
            className="w-full outline-none"
            placeholder="How Can We Help You?"
            type="text"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
