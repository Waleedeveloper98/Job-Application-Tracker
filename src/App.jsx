import React, { useEffect, useState } from "react";

// Component imports
import Header from "./components/Header";
import TopBar from "./components/Topbar";
import JobCard from "./components/JobCard";
import Title from "./components/Title";
import JobForm from "./components/JobForm";

const App = () => {
  // Toggle for showing/hiding the JobForm
  const [isFormShow, setIsFormShow] = useState(false);

  // Main job list state
  const [formData, setFormData] = useState([]);

  // For editing a job: index and data to pre-fill form
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState(null);

  // Filtering option (e.g., status: pending, rejected, etc.)
  const [selectedOption, setSelectedOption] = useState("");

  // Sorting option: "latest" or "oldest"
  const [sortOrder, setSortOrder] = useState("latest");

  // Sort formData by date according to selected sortOrder
  const sortedFormData = [...formData].sort((a, b) => {
    return sortOrder === "latest"
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date);
  });

  // Filter data by selected status option (if any)
  const filteredAndSortedData = selectedOption
    ? sortedFormData.filter((data) => data.status === selectedOption)
    : sortedFormData;

  // Handles editing: show form with selected job's data
  const handleEditJob = (index) => {
    const selectedData = formData[index];
    setEditData(selectedData);
    setEditIndex(index);
    setIsFormShow(true);
  };

  // Load jobs from localStorage when app loads
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("jobs")) || [];
    setFormData(storedData);
  }, []);

  // Save updated job list to localStorage on change
  useEffect(() => {
    if (formData.length > 0) {
      localStorage.setItem("jobs", JSON.stringify(formData));
    }
  }, [formData]);

  return (
    <div className="w-full min-h-screen py-12 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-slate-50 to-gray-100">
      {/* JobForm - shows only when editing or adding */}
      {isFormShow && (
        <JobForm
          setIsFormShow={setIsFormShow}
          setFormData={setFormData}
          editData={editData}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
        />
      )}

      {/* Page Header */}
      <Header />

      {/* Top bar with filter/sort/add button */}
      <TopBar
        setIsFormShow={setIsFormShow}
        setSelectedOption={setSelectedOption}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      {/* Applications Section */}
      <div className="applications w-full mt-12">
        {/* Section Title */}
        <Title />

        {/* Job Cards Grid */}
        <div className="cards flex items-center justify-center gap-8 lg:gap-12 flex-wrap mt-8">
          <JobCard
            filteredAndSortedData={filteredAndSortedData}
            setFormData={setFormData}
            handleEditJob={handleEditJob}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
