import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { RiHome3Fill } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <header>
      <div className="w-full mx-auto md:max-w-7xl md:py-3 nav-center">
        <div className="nav-header">
          <figure>
            <img className=" h-12" src={logo} alt="" />
          </figure>
          <button onClick={() => setShowLinks(!showLinks)}>
            <AiOutlineMenu className="md:hidden text-blue absolute top-6 md:top-10 right-10 text-2xl cursor-pointer" />
          </button>
        </div>

        <div
          className={`${
            showLinks ? "links-container show-container" : "show-container px-4"
          }`}
        >
          <ul className="text-sm font-medium links space-y-4 md:space-y-0 md:space-x-4">
            <li className="flex items-center space-x-1 md:space-x-2">
              <RiHome3Fill className="text-lg" />
              <Link onClick={() => setShowLinks(true)} to="/dashboard">
                HOME
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShowLinks(true)}
                to="/dashboard/createidea"
              >
                Ideas
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShowLinks(true)}
                to="/dashboard/createincident"
              >
                Incidents
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShowLinks(true)}
                to="/dashboard/projectidea"
              >
                Projects
              </Link>
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
