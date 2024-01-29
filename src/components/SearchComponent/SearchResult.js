import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../utils/Redux/appSlice";
import { ShimmerSearchCard } from "./ShimmerSearchCard";
import { Link, useSearchParams } from "react-router-dom";
import { API_KEY } from "../../utils/Constant";
import SearchVideoCard from "./SearchVideoCard";

const SearchResult = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const query = searchParams.get("search_query");

  const [data, setData] = useState(null);

  const getSearchResult = async () => {
    const data =
      await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&safeSearch=moderate&key= +
    ${API_KEY}`);
    const json = await data.json();
    const result = json.items;
    setData(result);
  };

  useEffect(() => {
    dispatch(openMenu());
    getSearchResult();
  }, []);

  console.log(data);

  if (data === null) return;

  return (
    <>
      <div
        className={`${
          isMenuOpen ? "w-[83%] ml-[17%]" : "w-[100%] ml-[10%]"
        } overflow-x-scroll px-28 h-screen flex flex-col`}
      >
        {data.map((card) => (
          <Link to={`/watch?v=${card.id.videoId}`}>
            <SearchVideoCard data={card} key={card.id.videoId} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default SearchResult;
