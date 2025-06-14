import React from "react";

const Button = ({ setIsFormShow }) => {
  return (
    <button
      onClick={() => setIsFormShow(true)}
      className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
    >
      + Add New
    </button>
  );
};

export default Button;
