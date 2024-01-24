import React from "react";

const Button = ({ name }) => {
  return (
    <>
      <div>
        <button className="px-7 py-2 inline text-nowrap text-center rounded ml-2 bg-gray-600 text-white outline-none">
          {name}
        </button>
      </div>
    </>
  );
};

export default Button;
