import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden md:relative inline-block text-left">
      {/* Button */}
      <button
        onClick={toggleDropdown}
        className="bg-green-400 text-white mr-5 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-lg shadow-green-400"
      >
        Dropdown
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-5 w-48 bg-black shadow-lg rounded-md ring-1 ring-black ring-opacity-5">
          <div className=" py-1">
            <a href="/login" className="block px-4 py-2 text-md text-white hover:text-green-400">Login</a>
            <a href="/signup" className="block px-4 py-2 text-md text-white hover:text-green-400">SignUp</a>
            <a href="/home" className="block px-4 py-2 text-md text-white hover:text-green-400">Home</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
