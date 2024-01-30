import React from "react";
import { useSelector } from "react-redux";
import { svgList, svgMiscellaneous } from "../../utils/svgList";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <>
      {isMenuOpen ? (
        <div className="w-[17%] h-screen p-4 absolute z-50 bg-[#0F0F0F] shadow-xl flex flex-col gap-2 items-start">
          <div className="flex px-8 gap-3" onClick={() => navigate("/")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              fill="white"
            >
              <g>
                <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
              </g>
            </svg>
            <li className="text-white font-bold cursor-pointer list-none">
              Home
            </li>
          </div>
          {svgList.map((x, index) => (
            <>
              <Link to={`/results?search_query=${x.list}`}>
                <div className="mx-6" key={index}>
                  <h1 className="text-white text-left mt-2 py-1 -mb-2 w-full text-xl font-semibold">
                    {x.heading}
                  </h1>
                </div>
                <div className="flex list-none gap-3 px-8 cursor-pointer">
                  {x.svgFile}
                  <li className="text-white text-nowrap">{x.list}</li>
                </div>
              </Link>
            </>
          ))}
          {svgMiscellaneous.map((m, index) => (
            <>
              <div className="mx-6" key={index}>
                <h1 className="text-white text-left mt-2 -mb-2 w-full text-xl font-semibold">
                  {m.heading}
                </h1>
              </div>
              <div className="flex list-none gap-3 px-8 cursor-pointer">
                {m.svgFile}
                <li className="text-white text-nowrap">{m.list}</li>
              </div>
            </>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default SideBar;
