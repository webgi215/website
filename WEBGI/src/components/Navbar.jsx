import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 p-4 shadow-lg rounded-full w-[80%] md:w-auto z-50">
      <div className="flex items-center justify-between space-x-6">
        {/* Logo */}
        <a href="#" className="text-white text-2xl font-bold px-4">
          Web Global
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 px-4">
          <li><a href="#" className="text-white hover:text-gray-200">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-200">About</a></li>
          <li><a href="#" className="text-white hover:text-gray-200">Services</a></li>
          <li><a href="#" className="text-white hover:text-gray-200">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none px-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (Fixed Layout Issue) */}
      {isOpen && (
        <ul className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-blue-700 w-[90%] p-4 rounded-lg shadow-lg">
          <li><a href="#" className="block text-white hover:text-gray-200 p-2">Home</a></li>
          <li><a href="#" className="block text-white hover:text-gray-200 p-2">About</a></li>
          <li><a href="#" className="block text-white hover:text-gray-200 p-2">Services</a></li>
          <li><a href="#" className="block text-white hover:text-gray-200 p-2">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
