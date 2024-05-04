"use client"
import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4 mb-60">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-white text-2xl font-bold">
            Mindful Musing
          </a>
        </div>
        <div className="hidden md:flex">
          <a href="/" className="text-white mr-4 hover:text-gray-300">
            Home
          </a>
          <a href="/add-post" className="text-white mr-4 hover:text-gray-300">
            AddPost
          </a>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
