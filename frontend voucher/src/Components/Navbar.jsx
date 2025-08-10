import React from "react";
import iconImage from "../assets/logo.png";

function Navbar({ title, fullName, position }) {
  return (
    <div className="flex items-center justify-between px-10 pt-8 ">
      <h1 className="text-2xl font-semibold"> {title}</h1>

      <div className="flex gap-1 items-center">
        <img src={iconImage} alt="icon" className="w-10 h-10" />

        <div className="flex flex-col">
          <span className="text-base font-semibold"> {fullName} </span>
          <span className="font-normal text-sm"> {position} </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
