import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
function InputContent() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const hadleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };
  return (
    <div className="flex justify-between items-center">
      {/* <div className="flex justify-between items-center bg-[E2E8F0] shadow-2xl p-5 rounded-md">
        <BiSearch />
        <input type="text" placeholder="Search For A County..." className="w-80 bg-[E2E8F0]"/>
      </div> */}
      <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search"
        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg"
      />
      <BiSearch className="w-6 h-6 absolute left-3 text-gray-400" />
    </div>
      <select
        value={selectedRegion}
        onChange={hadleRegionChange}
        className="bg-slate-200 p-4  rounded-md shadow-lg"
      >
        <option disabled value="" className="mt-28">
          Filter By Region
        </option>
        {["All", "Africa", "America", "Asia", "Europe", "Oceania", "Polar"].map(
          (region) => {
            return (
              <option key={region} value={region}>
                {region}
              </option>
            );
          }
        )}
      </select>
    </div>
  );
}

export default InputContent;
