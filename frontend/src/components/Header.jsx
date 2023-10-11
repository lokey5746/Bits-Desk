import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { RiHome3Fill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="w-full mx-auto md:max-w-7xl py-3">
      <div className="flex justify-between items-center">
        <img className=" h-12" src={logo} alt="" />
        <div className="">
          <ul className="text-sm font-medium flex items-center space-x-7">
            <li className="flex items-center space-x-2">
              <RiHome3Fill className="text-lg" />
              <Link to="/dashboard">HOME</Link>
            </li>
            <li>
              <Link to="/dashboard/createidea">Ideas</Link>
            </li>
            <li>
              <Link to="/dashboard/createincident">Incidents</Link>
            </li>
            <li>
              <Link to="/dashboard/project">Projects</Link>
            </li>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gray flex flex-col items-center justify-center">
                <p className="text-white font-bold">LD</p>
              </div>
              <li>
                <Link to="/dashboard/project">Lokendra Dangi</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
