import React from "react";
import Link from "next/link";
import { Category } from "../../../lib/data";

const Leftside = ({ selectedCategory, onCategoryChange }) => {
  const data = Category;

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      onCategoryChange("");
    } else {
      onCategoryChange(category);
    }
  };

  return (
    <div className="flex lg:flex-col gap-3">
      {data.map((c, index) => (
        <button
          onClick={() => handleCategoryClick(c)}
          className={`btn rounded-3xl text-center px-4 py-2 text-sm font-medium lg:px-8 lg:py-4 lg:text-lg lg:font-semibold transition hover:scale-105 ${
            selectedCategory === c
              ? "bg-linear-to-r from-violet-500 to-indigo-500 text-white shadow-xl shadow-violet-500/50"
              : "bg-linear-to-r from-violet-500/5 to-indigo-500/5 text-black shadow-xl shadow-violet-500/30 hover:shadow-violet-500/40"
          }`}
          key={index}
        >
          {c}
        </button>
      ))}
    </div>
  );
};

export default Leftside;
