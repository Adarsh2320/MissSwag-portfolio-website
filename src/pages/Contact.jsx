// File: src/pages/Contact.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, SendHorizonal, Star } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-end px-6">
        {/* Background Image */}
        <img
          src={contact}
          alt="Contact"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

        {/* Text Content */}
        <div className="relative z-10 text-white text-right max-w-xl pr-12 md:pr-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
            Ready to get digitalise
          </h1>
          <p className="text-lg md:text-2xl font-medium text-green-300">
            with AI-driven, scalable tech solutions
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="px-6 py-2 bg-green-600 hover:bg-green-500 transition rounded-full font-semibold"
            >
              Contact us Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info + Map Section */}
      <section
        className="py-20 px-6 bg-gradient-to-br from-[#0f172a] to-black"
        id="contact"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Live Google Map */}
          <div className="bg-[#0f172a] p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Find Us Here</h2>
            <iframe
              title="Gamayas Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3091185863536!2d78.38247507490743!3d17.44267200103462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e50dd4aa85%3A0xbcae0d59f3f9d3b2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1720689628819!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded border border-green-700 shadow-lg"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <Mail className="text-green-400 mx-auto md:mx-0 mb-2" size={24} />
              <h4 className="text-lg font-semibold">Email Us</h4>
              <p className="text-gray-400">contact@gamayas.com</p>
            </div>
            <div className="text-center md:text-left">
              <Phone
                className="text-green-400 mx-auto md:mx-0 mb-2"
                size={24}
              />
              <h4 className="text-lg font-semibold">Call Us</h4>
              <p className="text-gray-400">+91 70570 58841</p>
            </div>
            <div className="text-center md:text-left">
              <MapPin
                className="text-green-400 mx-auto md:mx-0 mb-2"
                size={24}
              />
              <h4 className="text-lg font-semibold">Visit Us</h4>
              <p className="text-gray-400">Hyderabad, Telangana, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-800 via-[#0f172a] to-green-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">We’re Ready When You Are</h2>
        <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
          Let’s collaborate and bring your vision to life. Connect with us today
          for tailored digital strategies and intelligent tech.
        </p>
        <a
          href="mailto:contact@gamayas.com"
          className="bg-white text-green-900 px-8 py-3 rounded-full font-semibold shadow hover:shadow-lg transition hover:bg-green-100"
        >
          Start a Conversation
        </a>
      </section>
      <WhatsappButton />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
