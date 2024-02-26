import React, { useEffect, useMemo, useState } from "react";
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
    console.log("api call made....");
  };

  useEffect(() => {
    dispatch(openMenu());
    getSearchResult();
    window.scrollTo(0, 0);
  }, [query]);

  // const searchResult = useMemo(() => data, [data]);

  return data === null ? (
    <ShimmerSearchCard />
  ) : (
    <>
      <div className="bg-zinc-950 h-max">
        <div
          className={`${
            isMenuOpen ? "w-[83%] ml-[17%]" : "w-[100%] ml-[10%]"
          } px-28 flex flex-col`}
        >
          {data.map((card) => (
            <div>
              <Link to={`/watch?v=${card.id.videoId}`}>
                <SearchVideoCard data={card} key={card.id.videoId} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchResult;
