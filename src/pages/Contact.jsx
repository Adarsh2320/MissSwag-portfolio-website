// File: src/pages/Contact.jsx

import React, { useState } from "react";
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
    const data = { name: feedbackName, email: feedbackEmail, message: feedbackMessage };
    const res = await fetch("http://localhost:5000/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    alert(result.message);
  };

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
      <section className="py-20 px-6 bg-gradient-to-br from-[#0f172a] to-black" id="contact">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-28 items-start"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#0f172a] p-6 rounded-lg shadow-2xl hover:shadow-green-500/30 transition-all text-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-green-400">Find Us Here</h2>
            <iframe
              title="Gamayas Office Location"
              src="https://www.google.com/maps/embed?..."
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded border border-green-700 shadow-lg"
            ></iframe>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">
            {[{
              Icon: Mail,
              title: 'Email Us',
              content: 'contact@gamayas.com'
            }, {
              Icon: Phone,
              title: 'Call Us',
              content: '+91 70570 58841'
            }, {
              Icon: FaWhatsapp,
              title: 'WhatsApp',
              content: '+91 70570 58841',
              link: 'https://wa.me/917057058841'
            }, {
              Icon: MapPin,
              title: 'Visit Us',
              content: 'Hyderabad, Telangana, India'
            }].map(({ Icon, title, content, link }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                className="transition-all"
              >
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <Icon className="text-green-400 mx-auto md:mx-0 mb-4" size={36} />
                  </a>
                ) : (
                  <Icon className="text-green-400 mx-auto md:mx-0 mb-4" size={36} />
                )}
                <h4 className="text-xl font-semibold mb-1">{title}</h4>
                <p className="text-gray-300 text-lg">{content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Forms Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0f172a] to-black overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleContactSubmit}
            className="bg-[#0f172a] p-8 rounded-xl shadow-xl border border-green-900 backdrop-blur-sm space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Contact Form</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full p-3 rounded bg-black border border-green-500 text-white" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 rounded bg-black border border-green-500 text-white" required />
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" className="w-full p-3 rounded bg-black border border-green-500 text-white" />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" rows="4" className="w-full p-3 rounded bg-black border border-green-500 text-white" required></textarea>
            <button type="submit" className="bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2">
              <SendHorizonal size={20} /> Send Message
            </button>
          </motion.form>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleFeedbackSubmit}
            className="bg-[#0f172a] p-8 rounded-xl shadow-xl border border-green-900 backdrop-blur-sm space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Feedback Form</h3>
            <input type="text" value={feedbackName} onChange={(e) => setFeedbackName(e.target.value)} placeholder="Name" className="w-full p-3 rounded bg-black border border-green-500 text-white" required />
            <input type="email" value={feedbackEmail} onChange={(e) => setFeedbackEmail(e.target.value)} placeholder="Email" className="w-full p-3 rounded bg-black border border-green-500 text-white" required />
            <textarea value={feedbackMessage} onChange={(e) => setFeedbackMessage(e.target.value)} placeholder="Feedback" rows="6" className="w-full p-3 rounded bg-black border border-green-500 text-white" required></textarea>
            <button type="submit" className="bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2">
              <SendHorizonal size={20} /> Submit Feedback
            </button>
          </motion.form>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="py-16 px-6 bg-gradient-to-r from-green-800 via-[#0f172a] to-green-900 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-4">We’re Ready When You Are</h2>
        <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
          Let’s collaborate and bring your vision to life. Connect with us today
          for tailored digital strategies and intelligent tech.
        </p>
        <a
          href="mailto:contact@gamayas.com"
          className="bg-white text-green-900 px-8 py-3 rounded-full font-semibold shadow hover:shadow-xl transition hover:bg-green-100"
        >
          Start a Conversation
        </a>
      </motion.section>

      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default Contact;