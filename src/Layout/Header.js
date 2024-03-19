import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/Redux/appSlice";
import { cacheResult } from "../utils/Redux/searchSlice";
import { SlSocialYoutube } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { SEARCH_API } from "../utils/Constant/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchResult = useSelector((store) => store.search.searchResult);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState();
  const [showSuggestion, setShowSuggestion] = useState(false);

  const logoStyle = { color: "white", fontSize: "4.5rem", cursor: "pointer" };
  const hamburgerStyle = {
    color: "white",
    fontSize: "2rem",
    cursor: "pointer",
  };
  const userStyle = {
    color: "white",
    fontSize: "2rem",
  };

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
    const data = await fetch(SEARCH_API + searchQuery);
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

  const handleLogo = () => {
    navigate("/");
  };

  const handleSuggestion = (search) => {
    setSearchQuery(search);
    setShowSuggestion(false);
    console.log(search);
  };

  return (
    <>
      <div className="grid grid-flow-col p-5 shadow-lg items-center bg-[#0F0F0F]">
        <div className="flex col-span-2 items-center justify-around px-5">
          <GiHamburgerMenu style={hamburgerStyle} onClick={handleMenu} />
          <SlSocialYoutube style={logoStyle} onClick={handleLogo} />
        </div>
        <div className="col-span-9 text-left ml-32 text-white">
          <form>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
              className="outline-none px-2 py-2 w-1/2 rounded-l-lg bg-[#222221] text-white"
            ></input>
            <Link to={`/results?search_query=${searchQuery}`}>
              <button className="px-8 py-2 text-[#888888] rounded-r-lg outline-none border-l border-black bg-[#222221]">
                Search
              </button>
            </Link>
          </form>

          {showSuggestion && (
            <div className=" absolute z-50 px-3 py-1  bg-[#222221] col-span-10 w-[31.5rem] outline-none shadow-xl rounded-xl">
              <ul>
                {searchSuggestion.map((search, index) => (
                  <li
                    className="border-b text-lg list-none border-b-zinc-700 py-1 rounded px-1 cursor-pointer text-white hover:bg-zinc-700"
                    key={index}
                  >
                    <Link
                      to={"/results?search_query=" + search}
                      onClick={() => handleSuggestion(search)}
                    >
                      {search}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-span-1 px-7">
          <FaUserAlt style={userStyle} />
        </div>
      </div>
    </>
  );
};

export default Header;
