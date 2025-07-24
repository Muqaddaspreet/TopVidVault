import React from "react";
import {
  HOME_ICON,
  SHORTS_ICON,
  SUBSCRIPTIONS_ICON,
  HISTORY_ICON,
  WATCH_LATER_ICON,
  MUSIC_ICON,
  SPORTS_ICON,
  GAMING_ICON,
  MOVIES_ICON,
} from "../Constants";
import { useSelector } from "react-redux";
// import LogoContainer from "./LogoContainer";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`pt-20 fixed left-0 top-0 z-20 h-full w-60 bg-white shadow-lg transform transition-transform duration-300 ease-in-out p-2 px-4 md:transition-none md:duration-0
        ${
          isMenuOpen
            ? "translate-x-0 left-0  md:h-[100vh] md:sticky"
            : "-translate-x-full"
        }
        md:translate-x-${isMenuOpen ? "0" : "-full"}
      `}
    >
      {/* <div className="md:hidden">
        {" "}
        <LogoContainer />
      </div> */}
      <div className="h-[95%] overflow-y-auto">
        <ul>
          <li className="cursor-pointer flex px-2 py-2 rounded-lg hover:bg-gray-100 mt-2">
            <Link className="cursor-pointer flex  hover:bg-gray-100" to="/">
              {HOME_ICON}Home
            </Link>
          </li>
          <li className="cursor-pointer flex px-2 py-2 rounded-lg hover:bg-gray-100 mt-2">
            <Link className="cursor-pointer flex  hover:bg-gray-100" to="/">
              {SHORTS_ICON}Shorts
            </Link>
          </li>
          <li className="cursor-pointer flex px-2 py-2 rounded-lg hover:bg-gray-100 mt-2">
            <Link className="cursor-pointer flex  hover:bg-gray-100" to="/">
              {SUBSCRIPTIONS_ICON}Subscriptions
            </Link>
          </li>
        </ul>
        <h1 className="font-bold pt-5 mb-2">You</h1>
        <ul>
          <li className="cursor-pointer flex px-2 py-2 rounded-lg hover:bg-gray-100 mt-2">
            <Link className="cursor-pointer flex  hover:bg-gray-100" to="/">
              {HISTORY_ICON}History
            </Link>
          </li>
          <li className="cursor-pointer flex px-2 py-2 rounded-lg hover:bg-gray-100 mt-2">
            <Link className="cursor-pointer flex  hover:bg-gray-100" to="/">
              {WATCH_LATER_ICON}Watch Later
            </Link>
          </li>
        </ul>
        <h1 className="font-bold pt-5 mb-2 ">Subscriptions</h1>
        <ul>
          <li className="cursor-pointer flex px-2 py-2 rounded-lg hover:bg-gray-100 mt-2">
            <Link className="cursor-pointer flex  hover:bg-gray-100" to="/">
              Muqaddas
            </Link>
          </li>
          <li className="cursor-pointer flex px-2 py-2 rounded-lg hover:bg-gray-100 mt-2">
            <Link className="cursor-pointer flex  hover:bg-gray-100" to="/">
              Muqaddas
            </Link>
          </li>
          <li className="cursor-pointer flex px-2 py-2 rounded-lg hover:bg-gray-100 mt-2">
            <Link className="cursor-pointer flex  hover:bg-gray-100" to="/">
              Muqaddas
            </Link>
          </li>
          <li className="cursor-pointer flex px-2 py-2 rounded-lg hover:bg-gray-100 mt-2">
            <Link className="cursor-pointer flex  hover:bg-gray-100" to="/">
              Muqaddas
            </Link>
          </li>
        </ul>
        <h1 className="font-bold pt-5 mb-2">Explore</h1>
        <ul>
          <li className="cursor-pointer flex px-2 py-2 rounded-lg hover:bg-gray-100 mt-2">
            <Link className="cursor-pointer flex  hover:bg-gray-100" to="/">
              {MUSIC_ICON}Music
            </Link>
          </li>
          <li className="cursor-pointer flex px-2 py-2 rounded-lg hover:bg-gray-100 mt-2">
            <Link className="cursor-pointer flex  hover:bg-gray-100" to="/">
              {SPORTS_ICON}Sports
            </Link>
          </li>
          <li className="cursor-pointer flex px-2 py-2 rounded-lg hover:bg-gray-100 mt-2">
            <Link className="cursor-pointer flex  hover:bg-gray-100" to="/">
              {GAMING_ICON}Gaming
            </Link>
          </li>
          <li className="cursor-pointer flex px-2 py-2 rounded-lg hover:bg-gray-100 mt-2">
            <Link className="cursor-pointer flex  hover:bg-gray-100" to="/">
              {MOVIES_ICON}Movies
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
