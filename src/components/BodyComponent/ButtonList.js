import React from "react";
import Button from "./ButtonListComponent/Button";

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
      <div className="flex my-2 w-screen">
        {buttonNames.map((buttonName) => (
          <Button name={buttonName} />
        ))}
      </div>
    </>
  );
};

export default ButtonList;
