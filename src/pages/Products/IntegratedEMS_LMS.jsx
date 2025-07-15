import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Sparkles,
  Info,
  ArrowLeftCircle,
  ArrowRightCircle,
  ExternalLink,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import WhatsappButton from "../../components/WhatsappButton";

import autoCureImg from "../../assets/products_logos/autocurehub.jpg";
import p1Img from "../../assets/autocure_images/p1.jpg";

const product = {
  name: "EMS + LMS",
  tagline: "Emergency Response Meets Seamless Learning",
  description:
    "EMS + LMS is an integrated web solution combining Emergency Management Systems (EMS) with Learning Management Systems (LMS). It helps educational institutions and organizations maintain safety while delivering uninterrupted learning. From instant alerts to remote classrooms, it provides real-time coordination and continuous skill development.",
  highlights: [
    "Live Digital Classrooms with Attendance and Recordings",
    "Real-Time Emergency Alerts with Geo-Fencing",
    "Role-Based Dashboards for Admins, Teachers, and Responders",
    "AI-Enabled Incident Prediction and Escalation",
    "Offline Access and Backup Learning Materials",
    "Push Notifications and Secure Communication Channels",
  ],
  screenshots: [p1Img, p1Img, p1Img, p1Img, p1Img, p1Img],
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
            src={autoCureImg}
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
          <p className="text-gray-400">This system is perfect for crisis-resilient institutions needing uninterrupted education alongside swift emergency response. It supports both synchronous and asynchronous learning, centralized SOP dissemination, and secure stakeholder communication during any crisis.</p>
        </motion.div>

        <div className="mb-20">
          <h2 className="text-4xl font-semibold text-green-300 mb-10 text-center">Screenshots</h2>
          <div className="relative overflow-x-hidden">
            <div className="flex gap-6 animate-marquee whitespace-nowrap">
              {[...product.screenshots, ...product.screenshots].map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[420px] h-[300px] rounded-xl border border-green-700 overflow-hidden shadow-lg"
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
          <h2 className="text-4xl font-semibold text-green-300 mb-8 text-center">
            Key Highlights
          </h2>
          <ul className="space-y-5 max-w-4xl mx-auto text-xl text-gray-300">
            {product.highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={26} className="text-green-500 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 text-gray-300 text-lg"
        >
          <div className="bg-[#111827] p-8 rounded-xl shadow border border-green-700">
            <h3 className="text-2xl font-semibold text-white mb-6">
              <Info className="inline mr-2" /> Product Details
            </h3>
            <p><span className="text-green-400 font-medium">Launched:</span> {product.details.launched}</p>
            <p><span className="text-green-400 font-medium">Version:</span> {product.details.version}</p>
            <p><span className="text-green-400 font-medium">Platform:</span> {product.details.platforms}</p>
            <p><span className="text-green-400 font-medium">Tech Stack:</span> {product.details.techStack}</p>
          </div>

          <div className="bg-[#111827] p-8 rounded-xl shadow border border-green-700 flex flex-col items-center justify-center text-center">
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