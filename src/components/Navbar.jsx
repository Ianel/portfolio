import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div id="home">
      <div className="p-4 md:px-8 md:py-4 text-white flex flex-row justify-between items-center">
        <h1 className="text-md hidden md:block text-green-500">
          Ianel Tombozafy
        </h1>
        <h1 className="text-md block md:hidden text-green-500">IT</h1>
        <button
          className="block lg:hidden"
          onClick={() => setShow((show) => !show)}
        >
          {show ? <FaTimes /> : <FaBars />}
        </button>
        <nav className="text-sm hidden duration-200 transition-all lg:flex flex-row">
          <a className="ml-5 hover:text-green-500" href="#home">
            Accueil
          </a>
          <a className="ml-5 hover:text-green-500" href="#services">
            Services
          </a>
          <a className="ml-5 hover:text-green-500" href="#projects">
            Projets
          </a>
          <a className="ml-5 hover:text-green-500" href="#about">
            A propos
          </a>
          <a className="ml-5 hover:text-green-500" href="#testimonial">
            Témoignages
          </a>
          <a className="ml-5 hover:text-green-500" href="#contact">
            Contact
          </a>
        </nav>
      </div>
      {show && (
        <nav className="text-sm duration-200 transition-all bg-white lg:hidden flex flex-col md:flex-row md:justify-center items-center text-primary py-2">
          <a className="md:ml-5 hover:text-green-500" href="#home">
            Accueil
          </a>
          <a className="md:ml-5 hover:text-green-500" href="#services">
            Services
          </a>
          <a className="md:ml-5 hover:text-green-500" href="#projects">
            Projets
          </a>
          <a className="md:ml-5 hover:text-green-500" href="#about">
            A propos
          </a>
          <a className="md:ml-5 hover:text-green-500" href="#testimonial">
            Témoignages
          </a>
          <a className="md:ml-5 hover:text-green-500" href="#contact">
            Contact
          </a>
        </nav>
      )}
    </div>
  );
};
