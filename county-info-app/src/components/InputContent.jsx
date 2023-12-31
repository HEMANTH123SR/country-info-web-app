import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

function InputContent({handlerForSearchCountry,handlerForSearchRegion,searchRegion, searchCountry}) {
 
  const handleRegionChange = (e) => {
    console.log(`region ${e.target.value}`)
    // if(e.target.value="All"){
    //     handlerForSearchRegion("all")
    //     return
    // }
    handlerForSearchRegion(e.target.value)
  };
 const handlerSearchChange = (e)=>{
    console.log(`country ${e.target.value}`)
    handlerForSearchCountry(e.target.value)
    // if(e.target.value=""){
    //     handlerForSearchCountry("all")
    //     return
    // }
    
 }
  return (
    <div className="flex justify-between items-center">
      <div className="relative flex items-center shadow-md rounded-lg">
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 w-72 text-lg border border-gray-300 rounded-lg"
          onChange={handlerSearchChange}
        />
        <BiSearch className="w-6 h-6 absolute left-3 text-gray-400" />
      </div>
      <select
        value={searchRegion}
        onChange={handleRegionChange}
        className="flex p-4 rounded-md shadow-md" // Add pr-10 for right-side padding
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
