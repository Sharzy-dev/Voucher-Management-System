import React from "react";
import { Search } from "lucide-react"; // using lucide-react for icons

const SearchFilterBar = ({ 
  placeholder = "Search vouchers by number, department or description.", 
  onSearch, 
  filterOptions = [
    "All Status", 
    "Approved",
    "Pending",
    "Rejected",

    
  ], 
  onFilterChange 
}) => {
  return (
    <div className="flex justify-between gap-3 items-center">
      {/* Search Box */}
      <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 bg-white w-full ">
        <input
          type="search"
          placeholder={placeholder}
          onChange={(e) => onSearch?.(e.target.value)}
          className="flex-1 outline-none text-sm placeholder-gray-400"
        />
        <Search size={18} className="text-gray-400" />
      </div>

      {/* Filter Dropdown */}
      <select
        onChange={(e) => onFilterChange?.(e.target.value)}
        className="border border-gray-200 rounded-lg px-6 py-2 bg-white shadow-sm text-sm outline-none cursor-pointer"
      >
        {filterOptions.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilterBar;
