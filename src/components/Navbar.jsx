// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-red-50 shadow-md border-b text-rose-950">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">Emma A Aibu</h1>
        <ul className="flex gap-6 font-medium">
          <li className="hover:text-amber-700">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-amber-700">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-amber-700">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-amber-700">
            <a href="#resume">Resume</a>
          </li>
          <li className="hover:text-amber-700">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
