import React from "react";
import logo from "../assets/logo.jpg";
import "../styles/navbarAnimation.css"; // Optional: Custom animation if you still want to keep

const Navbar = () => {
  return (
    <header className="bg-gradient-to-b from-gray-800 to-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Gamayas Logo"
            className="w-14 h-14 rounded-md object-cover border border-green-500 shadow"
          />
          <div className="leading-tight">
            <span className="text-xl font-bold tracking-wide block">
              GAMAYAS DIGITAL DESIGN PVT LTD
            </span>
          </div>
        </div>

        <nav className="space-x-10 hidden md:flex text-lg font-semibold">
          <a href="/" className="hover:text-green-400 transition duration-200">
            Home
          </a>
          <a
            href="/about"
            className="hover:text-green-400 transition duration-200"
          >
            About Us
          </a>
          <a
            href="/#services"
            className="hover:text-green-400 transition duration-200"
          >
            Services
          </a>
          <a
            href="/#products"
            className="hover:text-green-400 transition duration-200"
          >
            Products
          </a>
          <a
            href="/contact"
            className="hover:text-green-400 transition duration-200"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
