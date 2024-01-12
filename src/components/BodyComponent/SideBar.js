import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <>
      {isMenuOpen ? (
        <div className="shadow-lg w-48 p-4">
          <ul>
            <li>Home</li>
            <li>shorts</li>
            <li>videos</li>
            <li>Live</li>
          </ul>
          <h1 className="font-bold">Subscription</h1>
          <ul>
            <li>Music</li>
            <li>shorts</li>
            <li>videos</li>
            <li>Live</li>
          </ul>
          <h1 className="font-bold">Watch Later</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default SideBar;
