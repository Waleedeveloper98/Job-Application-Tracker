import React, { useEffect } from "react";
import Button from "./Button";

const TopBar = ({
  setIsFormShow,
  setSelectedOption,
  setSortOrder,
  sortOrder,
}) => {
  console.log(sortOrder);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 my-8 px-4 py-6 bg-white rounded-xl shadow-sm border border-gray-200">
      <Button setIsFormShow={setIsFormShow} />

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-gradient-to-r from-slate-50 to-gray-50 px-6 py-4 rounded-lg border border-gray-200">
        <div className="flex items-center gap-6">
          <div className="min-w-0">
            <label className="block text-gray-600 font-medium text-sm mb-2">
              Sort By
            </label>
            <select
              className="bg-white px-4 py-2.5 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700 cursor-pointer hover:border-gray-400 transition-all duration-200 min-w-[120px]"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>

          <div className="min-w-0">
            <label className="block text-gray-600 font-medium text-sm mb-2">
              Filter Status
            </label>
            <select
              onChange={(e) => setSelectedOption(e.target.value)}
              className="bg-white px-4 py-2.5 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700 cursor-pointer hover:border-gray-400 transition-all duration-200 min-w-[140px]"
            >
              <option value="">All Applications</option>
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="rejected">Rejected</option>
              <option value="selected">Selected</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
