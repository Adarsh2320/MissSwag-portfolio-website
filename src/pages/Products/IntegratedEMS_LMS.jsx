import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles, Info, ArrowLeftCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import WhatsappButton from "../../components/WhatsappButton";

import { ArrowRightCircle } from "lucide-react";

import autoCureImg from "../../assets/products_logos/autocurehub.jpg";
import p1Img from "../../assets/autocure_images/p1.jpg";

const product = {
  name: "EMS + LMS",
  tagline: "Emergency & Learning Unified. Intelligently.",
  description:
    "EMS + LMS is a powerful all-in-one platform tailored for educational institutions and emergency response teams. It unifies learning management with emergency preparedness—ensuring continuous learning and safety with built-in alerts, SOP workflows, and digital classrooms.",
  highlights: [
    "Live Online Classes with Attendance Logs",
    "Emergency Alerts & Notification System",
    "Role-Based Access for Admins, Teachers & Students",
    "Incident Reporting & Escalation Workflow",
  ],
  screenshots: [p1Img, p1Img, p1Img, p1Img, p1Img, p1Img],
  details: {
    launched: "2024",
    version: "2.1",
    techStack: "React, Firebase, Node.js, TailwindCSS, WebSockets",
    platforms: "Web Dashboard + Mobile App",
    liveLink: "https://ems-lms-platform.vercel.app/",
  },
};

const EMSLMS = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); // or "smooth" for animation
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#0f172a] to-black text-white py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-green-400 hover:text-green-300 mb-10 transition-all"
        >
          <ArrowLeftCircle className="w-6 h-6 mr-2" /> Back to Products
        </button>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 flex items-center justify-center gap-8"
        >
          {/* Title and Tagline container with arrow inside */}
          <a
            href="https://autocure-hub.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border-2 border-green-500 inline-flex items-center gap-6 pt-10 pl-16 pb-10 pr-16 rounded-full transform -translate-x-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-300 italic">
                  {product.tagline}
                </p>
              </div>

              {/* Right Arrow Icon inside circle */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition duration-300">
                <ArrowRightCircle size={28} />
              </div>
            </div>
          </a>

          {/* Circular Image on right */}
          <img
            src={autoCureImg}
            alt="AutoCure Hub Logo"
            className="w-48 h-48 rounded-full object-cover"
          />
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#0f172a] p-8 rounded-2xl shadow-xl border-l-8 border-green-500 mb-16"
        >
          <p className="text-lg text-gray-200 leading-relaxed">
            {product.description}
          </p>
        </motion.div>

        {/* Screenshots Slider */}
        <div className="mb-20 overflow-hidden">
          <h2 className="text-3xl font-semibold text-green-300 mb-12 text-center">
            Product Screenshots
          </h2>

          <div className="relative w-full">
            <div className="flex gap-6 animate-marquee whitespace-nowrap">
              {[...product.screenshots, ...product.screenshots].map(
                (img, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[400px] h-[300px] rounded-xl border border-green-700 overflow-hidden shadow-md"
                  >
                    <img
                      src={img}
                      alt={`Screenshot ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-green-300 mb-6 text-center">
            Key Highlights
          </h2>
          <ul className="space-y-4 max-w-3xl mx-auto text-lg text-gray-300">
            {product.highlights.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle size={22} className="text-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 text-gray-300"
        >
          <div className="bg-[#111827] p-6 rounded-xl shadow border border-green-700">
            <h3 className="text-xl font-semibold text-white mb-4">
              <Info className="inline mr-2" /> Product Details
            </h3>
            <p>
              <span className="text-green-400 font-medium">Launched:</span>{" "}
              {product.details.launched}
            </p>
            <p>
              <span className="text-green-400 font-medium">Version:</span>{" "}
              {product.details.version}
            </p>
            <p>
              <span className="text-green-400 font-medium">Platform:</span>{" "}
              {product.details.platforms}
            </p>
            <p>
              <span className="text-green-400 font-medium">Tech Stack:</span>{" "}
              {product.details.techStack}
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl shadow border border-green-700 flex flex-col items-center justify-center text-center">
            <Sparkles className="text-green-400 w-12 h-12 animate-bounce" />
            <p className="mt-4 text-xl font-medium">
              Learning meets emergency, redefined.
            </p>
          </div>
        </motion.div>
      </div>
      <WhatsappButton />
    </section>
  );
};

export default EMSLMS;
