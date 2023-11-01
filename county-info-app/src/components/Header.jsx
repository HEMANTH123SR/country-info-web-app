import React, { useState } from "react";
import { BsMoonFill } from "react-icons/bs";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <header
      className={`${
        isDarkMode ? "bg-gray-800" : "bg-slate-300"
      } h-16 flex flex-row items-center justify-between px-20 shadow-2xl`}
    >
      <h1
        className={`${isDarkMode ? "text-slate-300" : "text-gray-700"} 
        text-2xl`}
      >
        Where in the world?
      </h1>

      <button
        onClick={() => {
          setIsDarkMode((prev) => !prev);
        }}
        className={`${isDarkMode ? "text-slate-300" : "text-gray-700"} flex items-center`}
      >
        <BsMoonFill className="mr-2" /> {`${isDarkMode ? "Light Mode" : "Dark Mode"}`}
      </button>
    </header>
  );
}

export default Header;
