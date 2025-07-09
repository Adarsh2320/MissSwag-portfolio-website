// File: src/pages/Contact.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, SendHorizonal, Star } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Hero Slider */}
            <section className="relative w-full h-screen">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0f172a99] via-[#14532d88] to-[#000000cc] flex items-center justify-center">
                <div className="text-center px-4 animate-fadeIn">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">Ready to get digitalise</h1>
                  <p className="text-lg md:text-2xl font-medium text-green-300">with AI-driven, scalable tech solutions</p>
                  <div className="mt-6">
                    <a href="#contact" className="px-6 py-2 bg-green-600 hover:bg-green-500 transition rounded-full font-semibold">Contact us Now</a>
                  </div>
                </div>
              </div>
            </section>

      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#0f172a] to-[#14532d] py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have a project in mind, a question, or just want to say hello — reach out to the Gamayas team.
        </p>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Contact Form */}
          <div className="bg-[#111827] p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-green-500" />
              <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-green-500" />
              <textarea placeholder="Your Message" rows="5" className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-green-500"></textarea>
              <button type="submit" className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-5 py-3 rounded-full font-semibold text-white transition">
                <SendHorizonal size={18} /> Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <Mail className="text-green-400 mx-auto md:mx-0 mb-2" size={24} />
              <h4 className="text-lg font-semibold">Email Us</h4>
              <p className="text-gray-400">contact@gamayas.com</p>
            </div>
            <div className="text-center md:text-left">
              <Phone className="text-green-400 mx-auto md:mx-0 mb-2" size={24} />
              <h4 className="text-lg font-semibold">Call Us</h4>
              <p className="text-gray-400">+91 70570 58841</p>
            </div>
            <div className="text-center md:text-left">
              <MapPin className="text-green-400 mx-auto md:mx-0 mb-2" size={24} />
              <h4 className="text-lg font-semibold">Visit Us</h4>
              <p className="text-gray-400">Hyderabad, Telangana, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="py-20 px-6 bg-[#111827] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">We Value Your Feedback</h2>
          <p className="text-lg text-gray-400 mb-10">Help us improve by sharing your experience with Gamayas.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-green-500" />
            <textarea placeholder="Your Feedback" rows="5" className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-green-500"></textarea>
            <div className="flex justify-center items-center gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="w-6 h-6 text-gray-500 hover:text-yellow-400 cursor-pointer transition" />
              ))}
            </div>
            <button type="submit" className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-full font-semibold text-white transition">
              Submit Feedback
            </button>
          </form>
        </div>
      </section>

      {/* Map or Image Section */}
      <section className="py-12 px-6 bg-[#0f172a] text-center">
        <h2 className="text-2xl font-bold mb-4">Find Us Here</h2>
        <img src="" alt="Gamayas Office Map or Illustration" className="mx-auto w-full max-w-4xl rounded shadow-lg border border-green-700" />
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-800 via-[#0f172a] to-green-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">We’re Ready When You Are</h2>
        <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
          Let’s collaborate and bring your vision to life. Connect with us today for tailored digital strategies and intelligent tech.
        </p>
        <a href="mailto:contact@gamayas.com" className="bg-white text-green-900 px-8 py-3 rounded-full font-semibold shadow hover:shadow-lg transition hover:bg-green-100">
          Start a Conversation
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;