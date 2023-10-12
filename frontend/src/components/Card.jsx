import React from "react";



const Card = () => {
  return (
    <section className="flex flex-col items-center px-3 py-3 space-y-2">
      <div className="flex flex-col items-center px-3 py-5 space-y-2 border-2 border-gray rounded-md">
        <img src={bulb} className="" alt="" />
        <h2 className="text-title text-2xl">Have an Idea?</h2>
      </div>
    </section>
  );
};

export default Card;
