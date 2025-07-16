import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";
import "../styles/navbarAnimation.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (hash) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHashLink = (e, hash) => {
    e.preventDefault();
    setMobileOpen(false);

    if (location.pathname === "/") {
      scrollToSection(hash);
    } else {
      navigate(`/${hash}`);
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/#services" },
    { name: "Products", path: "/#products" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActiveLink = (path) => {
    if (!path.includes("#")) {
      return location.pathname === path;
    }
    return false;
  };

  return (
    <header className="bg-gradient-to-b from-gray-800 to-black text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Gamayas Logo"
            className="w-14 h-14 rounded-md object-cover border border-green-500 shadow"
          />
          <span className="text-sm md:text-xl font-bold tracking-wide">
            GAMAYAS DIGITAL DESIGN PVT LTD
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-lg font-semibold">
          {navItems.map((item) =>
            item.path.includes("#") ? (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleHashLink(e, item.path.split("#")[1] ? `#${item.path.split("#")[1]}` : "")}
                className={`transition duration-200 hover:text-green-400 ${
                  isActiveLink(item.path)
                    ? "text-green-400 underline underline-offset-4"
                    : ""
                }`}
              >
                {item.name}
              </a>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `transition duration-200 hover:text-green-400 ${
                    isActiveLink(item.path) || isActive
                      ? "text-green-400 underline underline-offset-4"
                      : ""
                  }`
                }
                end={item.path === "/"}
              >
                {item.name}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-green-600 px-4 pb-6">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {navItems.map((item) =>
              item.path.includes("#") ? (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleHashLink(e, item.path.split("#")[1] ? `#${item.path.split("#")[1]}` : "")}
                  className={`block py-1 transition duration-200 hover:text-green-400`}
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block py-1 transition duration-200 hover:text-green-400 ${
                      isActiveLink(item.path) || isActive
                        ? "text-green-400 underline underline-offset-4"
                        : ""
                    }`
                  }
                  end={item.path === "/"}
                >
                  {item.name}
                </NavLink>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
