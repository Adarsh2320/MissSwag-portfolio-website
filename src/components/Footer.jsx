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
import Logo from "../assets/logo.jpg";

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
      <footer className="bg-gradient-to-b from-[#e84e9c] via-[#b8005a] to-[#5a189a] text-white text-[1.125rem]">
        {/* Top Promo Bar */}
        <div className="bg-[#fae0ec]/90">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4 text-pink-100">
            <div className="flex items-center">
              <Clock className="w-6 h-6 mr-2 text-[#b8005a]" />
              <span className="text-base sm:text-lg text-[#b8005a]">
                24x7 Care Support for Moms & Families
              </span>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-2 text-[#b8005a]" />
              <span className="text-base sm:text-lg text-[#b8005a]">
                Need help? We’re just a call away
              </span>
            </div>
            <a
              href="mailto:hello@missswag.in"
              className="inline-flex items-center px-4 py-2 bg-white text-[#b8005a] rounded-full font-medium text-base hover:bg-pink-100 transition"
            >
              <Mail className="w-5 h-5 mr-1.5" /> Contact Us
            </a>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-16">
          {/* Brand Section */}
          <div>
            <img
              src={Logo}
              alt="MissSwag"
              className="h-20 mb-4 rounded-2xl shadow-lg"
            />
            <p className="text-pink-100 text-sm leading-relaxed text-justify">
              MissSwag is your trusted wellness companion through pregnancy and
              beyond. We combine technology, empathy, and expertise to nurture
              every mom’s journey.
            </p>
            <div className="flex gap-x-4 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Core Features */}
          <div>
            <h3 className="text-xl font-bold mb-6">Features</h3>
            <ul className="text-pink-100 space-y-3">
              {[
                "24/7 Doctor Chat",
                "Appointment Booking",
                "PHR Management",
                "Vaccination Reminders",
                "Yoga & Wellness",
                "Community Sessions",
              ].map((feature, i) => (
                <li key={i} className="hover:text-white transition">
                  <ChevronRight size={14} className="inline mr-1" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="text-pink-100 space-y-3">
              {[
                { label: "Home", link: "/" },
                { label: "About Us", link: "/about" },
                { label: "Pricing", link: "/#pricing" },
                { label: "Download App", link: "/app" },
                { label: "Contact", link: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.link} className="hover:text-white transition">
                    <ChevronRight size={14} className="inline mr-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setShowAdminLogin(true)}
                  className="hover:text-white text-sm mt-4 underline"
                >
                  Admin Access
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-pink-100">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 text-white" />
                +91 98765 43210
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 text-white" />
                hello@missswag.in
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-white" />
                Hyderabad, Telangana, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-black py-4 text-center text-sm text-pink-200 border-t border-pink-300">
          © {new Date().getFullYear()} MissSwag Care Platform. All rights
          reserved.
        </div>

        {/* Admin Login Modal */}
        {showAdminLogin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white text-[#5a189a] border-4 border-[#e84e9c] rounded-xl p-6 w-[90%] max-w-md relative shadow-2xl">
              <button
                onClick={() => setShowAdminLogin(false)}
                className="absolute top-3 right-4 text-[#b8005a] hover:text-[#5a189a]"
              >
                <X size={24} />
              </button>

              {/* Tabs */}
              <div className="flex justify-center mb-6 gap-4">
                <button
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    adminMode === "login"
                      ? "bg-[#5a189a] text-white"
                      : "text-[#b8005a] hover:text-[#5a189a]"
                  }`}
                  onClick={() => setAdminMode("login")}
                >
                  Admin Login
                </button>
                <button
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    adminMode === "signup"
                      ? "bg-[#5a189a] text-white"
                      : "text-[#b8005a] hover:text-[#5a189a]"
                  }`}
                  onClick={() => setAdminMode("signup")}
                >
                  Admin Signup
                </button>
              </div>

              {/* Forms */}
              {adminMode === "login" ? (
                <>
                  <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-md bg-pink-100 border border-[#e84e9c] focus:outline-none focus:ring-2 focus:ring-[#5a189a]"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-3 rounded-md bg-pink-100 border border-[#e84e9c] focus:outline-none focus:ring-2 focus:ring-[#5a189a]"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#b8005a] hover:bg-[#5a189a] text-white rounded-md font-semibold transition"
                    >
                      Login
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-4 text-center">
                    Sign Up
                  </h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (signup.password !== signup.rePassword) {
                        alert("Passwords do not match!");
                        return;
                      }
                      console.log("Signing up:", signup);
                      alert("Signup successful");
                      setShowAdminLogin(false);
                    }}
                    className="space-y-4"
                  >
                    {["name", "email", "password", "rePassword"].map(
                      (field, i) => (
                        <input
                          key={i}
                          type={
                            field.includes("password") ? "password" : "text"
                          }
                          placeholder={
                            field === "rePassword"
                              ? "Re-enter Password"
                              : field.charAt(0).toUpperCase() + field.slice(1)
                          }
                          value={signup[field]}
                          onChange={(e) =>
                            setSignup({ ...signup, [field]: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-md bg-pink-100 border border-[#e84e9c] focus:outline-none focus:ring-2 focus:ring-[#5a189a]"
                        />
                      )
                    )}
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#b8005a] hover:bg-[#5a189a] text-white rounded-md font-semibold transition"
                    >
                      Sign Up
                    </button>
                  </form>
                </>
              )}
              <div className="mt-4 text-xs text-center text-[#b8005a]">
                For authorized personnel only.
              </div>
            </div>
          </div>
        )}
      </footer>
    </>
  );
};

export default Footer;
