import React from "react";
import Button from "./ButtonListComponent/Button";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const buttonNames = [
    "All",
    "Live",
    "Music",
    "Ice Hockey",
    "Soccer",
    "Rugby",
    "Gaming",
    "Podcasts",
    "Camping",
    "Culinary Arts",
    "Trucks",
    "GameShows",
    "Game Shows",
    "Game Shows",
    "Game Shows",
    "Game Shows",
  ];
  return (
    <>
      <div className="flex my-2 w-screen overflow-x-scroll">
        {buttonNames.map((buttonName, index) => (
          <Button name={buttonName} key={index} />
        ))}
      </div>
    </>
  );
};

export default ButtonList;
