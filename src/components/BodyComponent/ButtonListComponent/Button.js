import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ name }) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        value={name}
        onClick={(e) => navigate(`/results?search_query=${e.target.value}`)}
        className="px-7 py-2 inline text-nowrap text-center rounded ml-2 bg-gray-600 text-white outline-none"
      >
        {name}
      </button>
    </>
  );
};

export default Button;
