import React from "react";

const Header = () => {
  return (
    <header className="w-full text-center py-8 mb-6 bg-white shadow-sm border-b border-gray-200">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
        Job Application Tracker
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
    </header>
  );
};

export default Header;
