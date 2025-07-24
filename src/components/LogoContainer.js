import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const LogoContainer = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex items-center">
      <img
        className=" h-8 cursor-pointer"
        onClick={() => toggleMenuHandler()}
        alt="menu"
        src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
      />
      <a href="/">
        <img
          className="h-5 mx-4 align-middle"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        />
      </a>
    </div>
  );
};

export default LogoContainer;
