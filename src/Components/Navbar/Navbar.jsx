import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative flex flex-wrap justify-between items-center text-white px-4 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${isOpen ? "block" : "hidden"} w-full md:w-auto mt-4 font-semibold bg-black/30 backdrop-blur rounded-xl px-2 py-3 md:bg-transparent md:backdrop-none md:mt-0 md:static md:flex md:px-0 md:rounded-none md:border-none text-center flex flex-col md:flex-row md:items-center gap-4 md:gap-6`}
      >
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Experience
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>
      </ul>
      {isOpen ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-4 top-6 transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-4 top-6 transition-all duration-300"
          onClick={() => setIsOpen(true)}
        />
      )}
    </nav>
  );
};

export default Navbar;
