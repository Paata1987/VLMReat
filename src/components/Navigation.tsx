import React, { Component } from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white ">
      <span className="font-bold">React App 2022</span>
      <span>
        <Link to="/"> Product </Link>
        <Link to="/about"> About </Link>
      </span>
    </div>
  );
}
