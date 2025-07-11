// File: src/pages/Products/IntegratedHIMS.jsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles, Info, ArrowLeftCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import WhatsappButton from "../../components/WhatsappButton";

const product = {
  name: "Integrated HIMS",
  tagline: "Smart Hospital Management, Streamlined.",
  description:
    "Integrated HIMS (Hospital Information Management System) is an all-in-one digital platform designed for hospitals and clinics to efficiently manage patient records, billing, OPD/IPD workflows, pharmacy, lab modules, staff, and inventory — while ensuring compliance and real-time analytics.",
  highlights: [
    "Complete OPD/IPD Management",
    "Digital Patient Records & Billing",
    "Lab, Pharmacy & Radiology Modules",
    "Role-based Access & Staff Scheduling",
  ],
  screenshots: [
    "/images/products/hims-1.jpg",
    "/images/products/hims-2.jpg",
    "/images/products/hims-3.jpg",
  ],
  details: {
    launched: "2024",
    version: "3.1",
    techStack: "React, Node.js, PostgreSQL, TailwindCSS",
    platforms: "Web App (Admin + Doctor + Reception portals)",
    liveLink: "https://integrated-hims.vercel.app/",
  },
};

const IntegratedHIMS = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
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
          className="text-center mb-12"
        >
          <a
            href={product.details.liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border-2 border-green-500 inline-block mb-4 pt-10 pl-20 pb-10 pr-20 rounded-full hover:bg-green-900/10 transition">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">
                {product.name}
              </h1>
              <p className="text-xl text-gray-300 italic">{product.tagline}</p>
            </div>
          </a>
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

        {/* Screenshots */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-green-300 mb-6 text-center">
            Product Screenshots
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.screenshots.map((img, i) => (
              <motion.div
                key={i}
                className="overflow-hidden rounded-xl border border-green-700 shadow-md"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={img}
                  alt={`Screenshot ${i + 1}`}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
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
              Smarter hospitals. Better healthcare.
            </p>
          </div>
        </motion.div>
      </div>
      {/* WhatsApp Button */}
      <WhatsappButton />
    </section>
  );
};

export default IntegratedHIMS;
