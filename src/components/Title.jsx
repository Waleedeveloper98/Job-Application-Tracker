import React from "react";

const Title = () => {
  return (
    <div className="application-heading w-full px-6 py-6 mb-8 border-b-2 border-gray-200 bg-gradient-to-r from-gray-50 to-white rounded-t-xl">
      <div className="flex items-center gap-3">
        <span className="text-blue-500 text-3xl">📄</span>
        <h2 className="text-3xl font-bold text-gray-800">Application List</h2>
      </div>
      <p className="mt-2 text-gray-500 text-sm">
        Here’s a summary of all your submitted job applications.
      </p>
    </div>
  );
};

export default Title;
