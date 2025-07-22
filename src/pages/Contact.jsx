// File: src/pages/Contact.jsx

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  SendHorizonal,
  User,
  Sparkles,
} from "lucide-react";
import contact from "../assets/contact.jpg";
import WhatsappButton from "../components/WhatsappButton";
import ContactForm from "../components/ContactFrom";
import { FaWhatsapp } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackEmail, setFeedbackEmail] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, subject, message };
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    alert(result.message);
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: feedbackName,
      email: feedbackEmail,
      message: feedbackMessage,
    };
    const res = await fetch("http://localhost:5000/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    alert(result.message);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-end mt-20 px-6 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          src={contact}
          alt="Contact"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="relative z-10 text-white text-right max-w-xl pr-12 md:pr-32"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
            Ready to get digitalise
          </h1>
          <p className="text-lg md:text-2xl font-medium text-green-300">
            with AI-driven, scalable tech solutions
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="px-6 py-2 bg-green-600 hover:bg-green-500 transition rounded-full font-semibold shadow hover:shadow-green-500/50"
            >
              Contact us Now
            </a>
          </div>
        </motion.div>
      </section>

      {/* Contact Info + Map Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-br from-[#1e293b] to-[#1a1a1a] text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-28 items-start"
        >
          {/* Map Section */}
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 12px 24px rgba(0,255,128,0.15)",
              rotateX: 2,
            }}
            transition={{ duration: 0.4, type: "spring" }}
            className="bg-[#1e293b] p-6 rounded-2xl shadow-2xl hover:shadow-green-400/30 transition-all text-center md:text-left"
          >
            <h2 className="text-2xl font-bold mb-4 text-green-400">
              Find Us Here
            </h2>
            <iframe
              title="Gamayas Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.8181717969214!2d78.8906245!3d17.2502372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb11023042d0ff%3A0xd7c3b7fbfcc7faae!2sGAMAYAS!5e1!3m2!1sen!2sin!4v1752826818307!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl border border-green-700 shadow-md"
            ></iframe>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {[
              {
                Icon: Mail,
                title: "Email Us",
                content: "contact@gamayas.com",
              },
              {
                Icon: Phone,
                title: "Call Us",
                content: "+91 70570 58841",
              },
              {
                Icon: FaWhatsapp,
                title: "WhatsApp",
                content: "+91 70570 58841",
                link: "https://wa.me/917057058841",
              },
              {
                Icon: MapPin,
                title: "Visit Us",
                content: "Hyderabad, Telangana, India",
              },
            ].map(({ Icon, title, content, link }, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                  boxShadow: "0px 6px 15px rgba(0,255,128,0.15)",
                }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                className="bg-[#1e293b] p-6 mt-8 rounded-xl text-center md:text-left hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-center md:justify-start mb-3">
                  {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <Icon className="text-green-400" size={36} />
                    </a>
                  ) : (
                    <Icon className="text-green-400" size={36} />
                  )}
                </div>
                <h4 className="text-lg font-semibold mb-1">{title}</h4>
                <p className="text-gray-300 text-base">{content}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 8px 20px rgba(0, 128, 255, 0.25)",
          rotateX: 2,
          rotateY: -2,
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
          type: "spring",
          stiffness: 80,
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-[#1a1a1a]/80 dark:bg-[#1a1a1a]/20 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-all duration-300"
      >
        <ContactForm />
      </motion.section>

      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default Contact;
