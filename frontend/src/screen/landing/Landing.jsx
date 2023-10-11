import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import banner from "../../assets/banner.png";

const Landing = () => {
  return (
    <section className="w-full mx-auto md:max-w-7xl py-5">
      <div className="flex justify-between items-center">
        <img src={logo} alt="" className=" h-14" />
        <div className="">
          <ul className="text-base font-medium flex space-x-5">
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signin">Blog</Link>
            </li>
            <li>
              <Link to="/signin">About Us</Link>
            </li>
            <li>
              <Link to="/signin">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src={banner} className="h-full" alt="" />
      </div>
    </section>
  );
};

export default Landing;
