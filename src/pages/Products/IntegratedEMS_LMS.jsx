// File: src/pages/Products/EMSLMS.jsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  ExternalLink,
  Sparkles,
  Info,
  Video,
  AlertTriangle,
  ShieldCheck,
  Brain,
  Download,
  BellRing,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import WhatsappButton from "../../components/WhatsappButton";

import logoImg from "../../assets/products_logos/EMS+LMS.jpg";
const p1Img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbGCvXeBtDGLB4YnMgNBKcgydPVAYcrgHdi-PjR8aXbI5xMcrH7d9tm5OuKomMyZxgVg&usqp=CAU";
const p2Img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4tTGyevAcMAFxOOJd0gsZeqIyJTzW-F7MZQ&s";
const p3Img = "https://thinkpalm.com/wp-content/uploads/2017/11/Learning-Management-System.jpg";
const p4Img = "https://thinkpalm.com/wp-content/uploads/2017/11/Learning-Management-System.jpg";
const p5Img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW-ljA5bYD7N6Fi2njnM04NzyOdKqqQ1KYbg&s";


const product = {
  name: "EMS + LMS",
  tagline: "Emergency Response Meets Seamless Learning",
  description:
    "EMS + LMS is an integrated web solution combining Emergency Management Systems (EMS) with Learning Management Systems (LMS). It helps educational institutions and organizations maintain safety while delivering uninterrupted learning. From instant alerts to remote classrooms, it provides real-time coordination and continuous skill development.",
  highlights: [
    { icon: Video, label: "Live Digital Classrooms with Attendance and Recordings" },
    { icon: AlertTriangle, label: "Real-Time Emergency Alerts with Geo-Fencing" },
    { icon: ShieldCheck, label: "Role-Based Dashboards for Admins, Teachers, and Responders" },
    { icon: Brain, label: "AI-Enabled Incident Prediction and Escalation" },
    { icon: Download, label: "Offline Access and Backup Learning Materials" },
    { icon: BellRing, label: "Push Notifications and Secure Communication Channels" },
  ],
  screenshots: [p1Img, p2Img, p3Img, p4Img, p5Img],
  details: {
    launched: "2024",
    version: "2.1",
    techStack: "React, Firebase, Node.js, TailwindCSS, WebSockets, MongoDB",
    platforms: "Web Dashboard, Mobile App (iOS & Android)",
    liveLink: "https://ems-lms-platform.vercel.app/",
  },
};

const EMSLMS = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] to-black text-white py-20 px-6 min-h-screen">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092787764-d91c1f348b48')] bg-cover bg-center opacity-70 -z-10"></div>

      <div className="max-w-6xl mx-auto text-xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-green-400 hover:text-green-300 mb-10 transition-all text-2xl"
        >
          <ArrowLeftCircle className="w-7 h-7 mr-2" /> Back to Products
        </button>

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <img
            src={logoImg}
            alt="EMS LMS Logo"
            className="mx-auto w-40 h-40 rounded-full object-cover mb-5 border-4 border-green-500 shadow-xl"
          />
          <a
            href={product.details.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-green-400 text-5xl font-bold hover:text-green-300 transition"
          >
            {product.name} <ArrowRightCircle className="w-8 h-8" />
          </a>
          <p className="text-2xl text-gray-300 italic mt-3">{product.tagline}</p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-8"
          >
            <a
              href={product.details.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-green-600 hover:bg-green-500 text-white text-xl font-semibold shadow-lg transition"
            >
              <ExternalLink className="mr-2" /> Visit EMS + LMS Platform
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#0f172a] p-10 rounded-2xl shadow-xl border-l-8 border-green-500 mb-16 text-gray-300 leading-relaxed text-xl"
        >
          <p className="mb-6">{product.description}</p>
          <p className="text-gray-400">
            This system is perfect for crisis-resilient institutions needing uninterrupted education alongside swift emergency response. It supports both synchronous and asynchronous learning, centralized SOP dissemination, and secure stakeholder communication during any crisis.
          </p>
        </motion.div>

        <div className="mb-20">
          <h2 className="text-4xl font-semibold text-green-300 mb-10 text-center">Screenshots</h2>
          <div className="relative overflow-x-hidden">
            <div className="flex gap-6 animate-marquee whitespace-nowrap">
              {[...product.screenshots, ...product.screenshots].map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[600px] h-[350px] rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={img}
                    alt={`Screenshot ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-semibold text-green-300 mb-10 text-center">
            Key Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {product.highlights.map((item, i) => (
              <div
                key={i}
                className="bg-[#111827] p-6 rounded-2xl shadow hover:shadow-green-500/30 group transition duration-300 transform hover:scale-105"
              >
                <div className="w-full h-36 mb-4 flex items-center justify-center rounded-xl">
                  <item.icon className="w-16 h-16 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-white text-lg leading-relaxed text-center group-hover:text-green-100 transition-colors duration-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 text-gray-300 text-lg"
        >
          <div className="p-8 rounded-xl ml-10">
            <h3 className="text-2xl font-semibold text-white mb-6">
              <Info className="inline mr-2" /> Product Details
            </h3>
            <p><span className="text-green-400 font-medium">Launched:</span> {product.details.launched}</p>
            <p><span className="text-green-400 font-medium">Version:</span> {product.details.version}</p>
            <p><span className="text-green-400 font-medium">Platform:</span> {product.details.platforms}</p>
            <p><span className="text-green-400 font-medium">Tech Stack:</span> {product.details.techStack}</p>
          </div>

          <div className="p-8 rounded-xl shadow flex flex-col items-center justify-center text-center">
            <Sparkles className="text-green-400 w-14 h-14 animate-pulse mb-3" />
            <p className="text-2xl font-medium">
              EMS and LMS, streamlined for institutions of tomorrow.
            </p>
          </div>
        </motion.div>
      </div>

      <WhatsappButton />
    </section>
  );
};

export default EMSLMS;
