import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/Redux/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="grid grid-flow-col p-5 m-2 shadow-lg items-center">
        <div className="flex col-span-1">
          <img
            src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
            alt="Hamburger Line"
            className="w-10 cursor-pointer"
            onClick={handleMenu}
          ></img>
          <img
            src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
            alt="Logo"
            className="w-32 h-12 mx-2"
          ></img>
        </div>
        <div className="col-span-10 text-left ml-10">
          <input
            type="text"
            className="outline-none px-2 py-2 w-1/2 border rounded-l-lg"
          ></input>
          <button className="px-8 py-2 border rounded-r-lg outline-none ">
            Search
          </button>
        </div>
        <div className="col-span-1 m-auto">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
            alt="userIcon"
            className="w-10"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Header;
