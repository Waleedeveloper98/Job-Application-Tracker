import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const JobForm = ({
  setIsFormShow,
  setFormData,
  editData,
  editIndex,
  setEditIndex,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm();

  const onSubmit = (data) => {
    setFormData((prevData) => {
      if (editIndex !== null) {
        const updatedData = [...prevData];
        updatedData[editIndex] = data;
        return updatedData;
      } else {
        return [...prevData, data];
      }
    });
    setEditIndex(null);
    setIsFormShow(false);
    reset();
  };

  const handleFormHide = () => {
    setIsFormShow(false);
  };

  useEffect(() => {
    if (editData) {
      reset(editData);
    }
  }, [editData, reset]);

  return (
    <div
      onClick={handleFormHide}
      className="w-full h-screen fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        onClick={(e) => e.stopPropagation()}
        className="bg-white px-8 py-6 rounded-xl w-full max-w-md shadow-2xl border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Job Application Form
        </h2>

        <div className="space-y-5">
          <div className="space-y-2">
            <label className="font-semibold text-gray-700 text-sm">
              🏢 Company Name
            </label>
            <input
              className="w-full bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              type="text"
              name="company"
              placeholder="Enter company name"
              {...register("company", {
                required: {
                  value: true,
                  message: "Company name required",
                },
                minLength: {
                  value: 3,
                  message: "Minimum three characters required",
                },
              })}
            />
            {errors.company && touchedFields.company && (
              <p className="text-sm text-red-500">{errors.company.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="font-semibold text-gray-700 text-sm">
              💼 Job Title
            </label>
            <input
              className="w-full bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              type="text"
              name="jobTitle"
              placeholder="Enter job title"
              {...register("jobTitle", {
                required: {
                  value: true,
                  message: "Job title required",
                },
                minLength: {
                  value: 4,
                  message: "Minimum four characters required",
                },
              })}
            />
            {errors.jobTitle && touchedFields.jobTitle && (
              <p className="text-sm text-red-500">{errors.jobTitle.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="font-semibold text-gray-700 text-sm">
              📆 Applied On
            </label>
            <input
              className="w-full bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              type="date"
              name="date"
              {...register("date", {
                required: {
                  value: true,
                  message: "Date required",
                },
                validate: (value) => {
                  if (new Date(value) > new Date()) {
                    return "Date cannot be in the future";
                  }
                  return true;
                },
              })}
            />
            {errors.date && touchedFields.date && (
              <p className="text-sm text-red-500">{errors.date.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="font-semibold text-gray-700 text-sm">
              📌 Status
            </label>
            <select
              name="status"
              className="w-full bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer"
              {...register("status", {
                required: {
                  value: true,
                  message: "Status is required",
                },
              })}
            >
              <option value="">Select Status</option>
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="rejected">Rejected</option>
              <option value="selected">Selected</option>
            </select>
            {errors.status && touchedFields.status && (
              <p className="text-sm text-red-500">{errors.status.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default JobForm;
