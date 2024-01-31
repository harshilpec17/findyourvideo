import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchSuggestionComponent = ({ search }) => {
  const navigate = useNavigate();
  if (!search) return;
  return (
    <>
      <a
        href={`/results?search_query=${search}`}
        onClick={() => navigate(`/results?search_query=${search}`)}
      >
        <p className="border-b border-b-zinc-700 py-1 rounded px-1 cursor-pointer text-white hover:bg-zinc-700">
          <FaSearch className="inline mr-3 font-thin" />
          {search}
        </p>
      </a>
    </>
  );
};

export default SearchSuggestionComponent;
