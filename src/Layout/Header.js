import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/Redux/appSlice";
import { cacheResult } from "../utils/Redux/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const searchInputRef = useRef(null);

  const searchResult = useSelector((store) => store.search.searchResult);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchResult[searchQuery]) {
        setSearchSuggestion(searchResult[searchQuery]);
      } else {
        getSearchResult();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchResult = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchQuery
    );
    const json = await data.json();
    const result = json;
    setSearchSuggestion(result[1]);

    dispatch(
      cacheResult({
        [searchQuery]: result[1],
      })
    );
  };

  const handleMenu = () => {
    dispatch(toggleMenu());
  };
  console.log(selectValue);

  return (
    <>
      <div className="grid grid-flow-col p-5 shadow-lg items-center">
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
          <div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
              className="outline-none px-2 py-2 w-1/2 border rounded-l-lg"
            ></input>
            <button className="px-8 py-2 border rounded-r-lg outline-none ">
              Search
            </button>
          </div>
          {searchQuery !== "" && showSuggestion && (
            <div className="absolute px-3 py-1 z-50 border bg-white col-span-10 w-[31.5rem] outline-none shadow-xl rounded-xl">
              <ul className="-mb-1.5">
                {searchSuggestion.map((search) => (
                  <p
                    key={search}
                    value={search}
                    onClick={() => console.log(search)}
                    className="border-b py-1 cursor-pointer hover:bg-gray-500"
                  >
                    {search}
                  </p>
                ))}
              </ul>
            </div>
          )}
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
