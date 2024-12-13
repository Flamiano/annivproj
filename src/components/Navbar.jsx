import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom"; // Import Link for navigation
import MusicPlayer from "./MusicPlayer";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav); // Toggle nav visibility
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#8A34CF]">ILY</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center">
        <li className="p-4 hover:text-[#8A34CF] ease-in-out duration-700 underline-animation">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 hover:text-[#8A34CF] ease-in-out duration-700 underline-animation">
          <Link to="/message">Message</Link>
        </li>
        <li className="p-4 hover:text-[#8A34CF] ease-in-out duration-700 underline-animation">
          <Link to="/memories">Memories</Link>
        </li>
        <li className="p-4 hover:text-[#8A34CF] ease-in-out duration-700 underline-animation">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* MusicPlayer on Desktop */}
      <div className="hidden md:block">
        <MusicPlayer />
      </div>

      {/* Mobile Navigation */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={`${
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#171717] animate-slideIn"
            : "fixed left-[-100%] animate-slideOut"
        } md:hidden z-50 transition-all duration-500 ease-out`}
      >
        <h1 className="w-full text-3xl font-bold text-[#8A34CF] m-4">ILY</h1>
        <ul className="pt-12 uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <Link to="/" onClick={handleNav}>
              Home
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/message" onClick={handleNav}>
              Message
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/memories" onClick={handleNav}>
              Memories
            </Link>
          </li>
          <li className="p-4">
            <Link to="/contact" onClick={handleNav}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* MusicPlayer on Mobile */}
      <div className="md:hidden flex justify-center mt-4">
        <MusicPlayer />
      </div>
    </div>
  );
};
