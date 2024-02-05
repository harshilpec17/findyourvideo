import React, { useRef } from "react";
import Button from "./ButtonListComponent/Button";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const navRef = useRef();

  const buttonNames = [
    "Niagara Falls",
    "Maple Leaf",
    "Hollywood",
    "Movie Trailer",
    "Ice Hockey",
    "Music",
    "Soccer",
    "Rugby",
    "Gaming",
    "Podcasts",
    "Bollywood",
    "Camping",
    "Culinary Arts",
    "Trucks",
    "Cricket",
    "Canada",
    "Tourism",
  ];

  return (
    <>
      <div
        className={`${isMenuOpen ? "w-[97%]" : "w-[92%]"} flex items-center `}
      >
        <div className="text-white font-extrabold text-4xl cursor-pointer">
          <MdNavigateBefore
            onClick={() => (navRef ? (navRef.current.scrollLeft -= 400) : null)}
          />
        </div>
        <div
          ref={navRef}
          className="flex my-2 w-screen scroll overflow-x-hidden scroll-smooth"
        >
          {buttonNames.map((buttonName) => (
            <div key={Math.random()}>
              <Button name={buttonName} />
            </div>
          ))}
        </div>
        <div className="text-white font-extrabold text-4xl cursor-pointer">
          <MdNavigateNext
            onClick={() => (navRef ? (navRef.current.scrollLeft += 400) : null)}
          />
        </div>
      </div>
    </>
  );
};

export default ButtonList;
