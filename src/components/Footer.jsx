// File: src/components/Footer.jsx

import React from "react";
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
} from "lucide-react";
import gamayasLogo from "../assets/logo.jpg";

const Footer = () => {
  return (
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
          <div>
            <a
              href="mailto:ceo@gamayas.com"
              className="inline-flex items-center px-4 py-2 bg-white text-green-800 rounded-lg font-medium text-base hover:bg-green-100 transition-colors"
            >
              <Mail className="w-5 h-5 mr-1.5" /> Email Us
            </a>
          </div>
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
              "Digital Transformation",
              "Digital Marketing",
              "Product Engineering",
              "Data Engineering",
              "Cloud & Infra Solutions",
              "Staffing & Consulting",
              "Digital Engineering",
              "Outsourcing Services",
            ].map((service, idx) => (
              <a
                key={idx}
                href="#services"
                className="hover:text-white transition-colors flex items-center whitespace-nowrap"
              >
                {service}
                <ChevronRight
                  size={14}
                  className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="pl-28">
          <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
          <ul className="space-y-4 text-gray-300">
            <li>
              <a href="/about" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>

            <li>
              <a href="/#services" className="hover:text-white transition-colors">
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
              <a href="/contact" className="hover:text-white transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Contact</h3>
          <ul className="space-y-5 text-gray-300">
            <li className="flex items-start">
              <Phone className="w-6 h-6 mr-3 text-green-400" /> +91 705 705 8841
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
  );
};

export default Footer;
