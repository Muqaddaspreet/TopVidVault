import React from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import MiniSidebar from "./MiniSidebar";
import { Outlet } from "react-router-dom";
const Body = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="relative flex">
      {isMenuOpen && (
        <div
          onClick={() => dispatch(toggleMenu())}
          className="fixed inset-0 z-10 bg-black/50
                     transition-opacity duration-300 md:hidden"
        />
      )}
      <MiniSidebar />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
