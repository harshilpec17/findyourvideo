import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchSuggestionComponent = ({ search }) => {
  const [data, setData] = useState(null);

  const array = [search];

  return (
    <>
      <p
        onChange={(e) => setData(e.target.value)}
        value={search}
        className="border-b border-b-zinc-700 py-1 rounded px-1 cursor-pointer text-white hover:bg-zinc-700"
      >
        <FaSearch className="inline mr-3 font-thin" />
        {[array]}
      </p>
    </>
  );
};

export default SearchSuggestionComponent;
