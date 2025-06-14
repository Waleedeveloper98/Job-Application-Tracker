import React from "react";

const JobCard = ({ filteredAndSortedData, setFormData, handleEditJob }) => {
  const deleteJob = (idx) => {
    setFormData((prev) => prev.filter((_, i) => i !== idx));
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "applied":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "interview":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "selected":
        return "bg-green-100 text-green-800 border-green-200";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <>
      {filteredAndSortedData && filteredAndSortedData.length > 0 ? (
        filteredAndSortedData.map((data, index) => {
          const { company, jobTitle, date, status } = data;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl min-w-80 max-w-80 shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:border-blue-500 transition-all duration-300 group"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 truncate">
                      {company}
                    </h3>
                    <p className="text-lg text-gray-600 mt-2 whitespace-nowrap font-medium truncate">
                      {jobTitle}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold border-2 flex-shrink-0 ${getStatusColor(
                      status
                    )}`}
                  >
                    {status}
                  </span>
                </div>

                <div className="flex items-center text-gray-500 text-sm bg-gray-50 p-3 rounded-md">
                  <span className="mr-2">📅</span>
                  <span className="truncate">Applied on {date}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
                <button
                  onClick={() => handleEditJob(index)}
                  className="flex-1 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteJob(index)}
                  className="flex-1 px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📋</div>
          <p className="text-xl text-gray-500 font-medium">
            No applications yet
          </p>
          <p className="text-gray-400 mt-2">
            Start by adding your first job application
          </p>
        </div>
      )}
    </>
  );
};

export default JobCard;
