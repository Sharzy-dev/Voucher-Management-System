import React from "react";
import iconImage from "../assets/Agu na ech mba.jpg";

function Navbar({ title, fullName, position }) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold"> {title}</h1>

      <div className="flex gap-2 items-center">
        <img src={iconImage} alt="icon" className="w-10 h-10 rounded-full" />

        <div className="flex flex-col">
          <span className="text-base font-semibold"> {fullName} </span>
          <span className="font-normal text-sm"> {position} </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
