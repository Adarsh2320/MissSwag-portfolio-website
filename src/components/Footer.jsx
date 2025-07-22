import React, { useState } from "react";
import { Link } from "react-router-dom"; 

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  X,
} from "lucide-react";
import gamayasLogo from "../assets/logo.jpg";


const Footer = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminMode, setAdminMode] = useState("login"); // login or signup
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  return (
    <>
      <footer className="bg-gradient-to-b from-gray-800 to-black text-white text-[1.125rem]">
        {/* Top Promo */}
        <div className="bg-[#14532d]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center">
              <Clock className="w-6 h-6 mr-2 text-green-100" />
              <span className="text-base sm:text-lg text-white">
                24x7 Support & Fast Deployment
              </span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-2 text-green-100" />
              <span className="text-base sm:text-lg text-white">
                Custom IT & AI Solutions on Demand
              </span>
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=srikanthiit2014@gmail.com&su=Let's%20Connect&body=Hi%20Shrikanth%2C%0A%0AI%20want%20to%20discuss%20a%20project.%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white text-green-800 rounded-lg font-medium text-base hover:bg-green-100 transition-colors"
            >
              <Mail className="w-5 h-5 mr-1.5" /> Email Us
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-28 gap-y-16">
          {/* About Us */}
          <div className="max-w-xl">
            <div className="flex items-center mb-6">
              <img
                src={gamayasLogo}
                alt="Gamayas Logo"
                className="h-12 w-auto rounded-md object-cover shadow-sm"
              />
              <div className="ml-3">
                <div className="font-bold text-2xl text-white">GAMAYAS</div>
                <div className="text-sm text-green-300">
                  Digital Design Pvt. Ltd.
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm lg:text-base text-justify">
              Gamayas is a Hyderabad-based IT firm specializing in digital
              transformation, top consulting, software development, product
              engineering, and AI-driven solutions.
            </p>

            <div className="flex gap-x-4 mt-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-green-700 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-green-700 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-green-700 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-green-700 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
         
<div>
  <h3 className="text-xl font-bold text-white mb-6">Core Services</h3>
  <div className="grid grid-cols-2 gap-y-4 gap-x-48 text-gray-300">
    {[
      { label: "Digital Transformation", link: "/services/digitaltransformation" },
      { label: "Product Engineering", link: "/services/productengineering" },
      { label: "Digital Marketing", link: "/services/digitalmarketing" },
      { label: "Software Development", link: "/services/softwaredevelopment" },
      { label: "Cloud & Infrastructure", link: "/services/cloudinfrastructure" },
      { label: "Staffing & Consulting", link: "/services/itconsultingstaffing" },
      { label: "Outsourcing Services", link: "/services/outsourcingservices" },
      { label: "Data Engineering", link: "/services/dataengineering" },
    ].map((service, idx) => (
      <Link
        key={idx}
        to={service.link}
        className="group hover:text-white transition-colors flex items-center whitespace-nowrap"
      >
        {service.label}
        <ChevronRight
          size={14}
          className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </Link>
    ))}
  </div>
</div>

          {/* Quick Links (with Admin Login click handler) */}
          <div className="pl-28">
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#products"
                  className="hover:text-white transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <button
                  onClick={() => setShowAdminLogin(true)}
                  className="hover:text-white transition-colors"
                ></button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-5 text-gray-300">
              <li className="flex items-start">
                <Phone className="w-6 h-6 mr-3 text-green-400" /> +91 705 705
                8841
              </li>
              <li className="flex items-start">
                <Mail className="w-6 h-6 mr-3 text-green-400" /> ceo@gamayas.com
              </li>
              <li className="flex items-start">
                <MapPin className="w-6 h-6 mr-3 text-green-400" /> Hyderabad,
                Telangana, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-black py-4 text-center text-sm text-gray-500 border-t border-green-800">
          &copy; {new Date().getFullYear()} Gamayas Digital Design Pvt. Ltd. All
          rights reserved.
        </div>
      </footer>

      {showAdminLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-gradient-to-b from-gray-900 to-black border border-green-700 rounded-xl p-6 w-[90%] max-w-md relative shadow-2xl text-white">
            {/* Close Button */}
            <button
              onClick={() => setShowAdminLogin(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>

            {/* Tabs */}
            <div className="flex justify-center mb-6 gap-4">
              <button
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  adminMode === "login"
                    ? "bg-green-700 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setAdminMode("login")}
              >
                Admin Login
              </button>
              <button
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  adminMode === "signup"
                    ? "bg-green-700 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setAdminMode("signup")}
              >
                Admin Signup
              </button>
            </div>

            {adminMode === "login" ? (
              <>
                <h2 className="text-2xl font-semibold text-green-300 mb-4 text-center">
                  Admin Login
                </h2>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-green-600 hover:bg-green-700 rounded-md font-semibold transition-colors"
                  >
                    Login
                  </button>
                </form>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-green-300 mb-4 text-center">
                  Admin Signup
                </h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (signup.password !== signup.rePassword) {
                      alert("Passwords do not match!");
                      return;
                    }
                    // handleSubmit(signup) — your backend function
                    console.log("Sending Signup:", signup);
                    alert("Signup successful");
                    setShowAdminLogin(false);
                  }}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    placeholder="Name"
                    value={signup.name}
                    onChange={(e) =>
                      setSignup({ ...signup, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={signup.email}
                    onChange={(e) =>
                      setSignup({ ...signup, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={signup.password}
                    onChange={(e) =>
                      setSignup({ ...signup, password: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                  />
                  <input
                    type="password"
                    placeholder="Re-enter Password"
                    value={signup.rePassword}
                    onChange={(e) =>
                      setSignup({ ...signup, rePassword: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-green-600 hover:bg-green-700 rounded-md font-semibold transition-colors"
                  >
                    Signup
                  </button>
                </form>
              </>
            )}

            <div className="mt-4 text-sm text-center text-gray-400">
              Admin access only.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
