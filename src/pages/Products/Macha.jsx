// File: src/pages/Products/MachaPlatform.jsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  ExternalLink,
  Sparkles,
  Info,
  Rocket,
  Users,
  LayoutDashboard,
  Eye,
  Smartphone,
  Lock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import WhatsappButton from "../../components/WhatsappButton";

import autoCureImg from "../../assets/products_logos/macha.jpg";
import p1Img from "../../assets/Macha Screenshots/p1.png";
import p2Img from "../../assets/Macha Screenshots/p2.png";
import p3Img from "../../assets/Macha Screenshots/p3.png";
import p4Img from "../../assets/Macha Screenshots/p4.png";
import p5Img from "../../assets/Macha Screenshots/p5.png";
import p6Img from "../../assets/Macha Screenshots/p6.png";
import p7Img from "../../assets/Macha Screenshots/p7.png";
import p8Img from "../../assets/Macha Screenshots/p8.png";
import p9Img from "../../assets/Macha Screenshots/p9.png";
import p10Img from "../../assets/Macha Screenshots/p10.png";
import p11Img from "../../assets/Macha Screenshots/p11.png";
import p12Img from "../../assets/Macha Screenshots/p12.png";
import p13Img from "../../assets/Macha Screenshots/p13.png";
import p14Img from "../../assets/Macha Screenshots/p14.png";
import p15Img from "../../assets/Macha Screenshots/p15.png";
import p16Img from "../../assets/Macha Screenshots/p16.png";
import p17Img from "../../assets/Macha Screenshots/p17.png";
import p18Img from "../../assets/Macha Screenshots/p18.png";

const product = {
  name: "Macha Platform",
  tagline: "Multi-Vendor Discovery & Onboarding Made Seamless",
  description:
    "Macha Platform is an all-in-one multi-vendor marketplace engine designed to empower local businesses, service providers, and customers. It simplifies onboarding, discovery, and transactions with real-time tracking and transparent workflows.",
  highlights: [
    { icon: Eye, label: "Real-Time Service Tracking" },
    { icon: Users, label: "Easy Vendor Onboarding" },
    { icon: Rocket, label: "Integrated Review & Rating System" },
    { icon: LayoutDashboard, label: "Admin Dashboard for Complete Oversight" },
    {
      icon: Smartphone,
      label: "Mobile-Optimized Interfaces for Vendors & Users",
    },
    { icon: Lock, label: "Secure Payments & Transaction History Logs" },
  ],
  screenshots: [
    p1Img,
    p2Img,
    p3Img,
    p4Img,
    p5Img,
    p6Img,
    p7Img,
    p8Img,
    p9Img,
    p10Img,
    p11Img,
    p12Img,
    p13Img,
    p14Img,
    p15Img,
    p16Img,
    p17Img,
    p18Img,
  ],
  details: {
    launched: "2023",
    version: "3.1",
    techStack: "React, Node.js, Express, MongoDB, TailwindCSS",
    platforms: "Web, Android",
    liveLink: "https://swatip012.github.io/MACHA",
  },
};

const MachaPlatform = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white py-20 px-6 min-h-screen">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')] bg-cover bg-center opacity-70 -z-10" />

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
            alt="Macha Platform Logo"
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
          <p className="text-2xl text-gray-300 italic mt-3">
            {product.tagline}
          </p>

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
              <ExternalLink className="mr-2" /> Visit Macha Platform Website
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#1e293b] p-10 rounded-2xl shadow-xl border-l-8 border-green-500 mb-16 text-gray-300 leading-relaxed text-xl"
        >
          <p className="mb-6">{product.description}</p>
          <p className="text-gray-400">
            Designed for scalability and ease-of-use, the platform facilitates
            vendor discovery, order management, and performance monitoring with
            analytics. It bridges the gap between offline vendors and digital
            marketplaces.
          </p>
        </motion.div>

        <div className="mb-20">
          <h2 className="text-4xl font-semibold text-green-300 mb-10 text-center">
            Screenshots
          </h2>

          <div className="relative overflow-hidden w-full">
            <div className="flex gap-6 animate-marquee whitespace-nowrap w-[max-content]">
              {[...product.screenshots, ...product.screenshots].map(
                (img, i) => (
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
                )
              )}
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
                className="bg-[#1f2937] p-6 rounded-2xl shadow hover:shadow-green-500/30 group transition duration-300 transform hover:scale-105"
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

        {/* Product Demo Video */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-20"
                >
                  <h2 className="text-4xl font-semibold text-green-300 mb-10 text-center">
                    Visualise the Experience
                  </h2>
                  <div className="relative pb-[40%] h-0 overflow-hidden rounded-2xl shadow-xl max-w-4xl mx-auto">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-xl"
                      src="https://www.youtube.com/embed/VWFBv8QGOM8?autoplay=1&mute=1&si=6wq6vArHBrrhlyPf"
                      title="Macha Demo"
                      frameBorder="2"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
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

          <div className="p-8 rounded-xl shadow flex flex-col items-center justify-center text-center">
            <Sparkles className="text-green-400 w-14 h-14 animate-pulse mb-3" />
            <p className="text-2xl font-medium">
              Connecting vendors to a smarter future.
            </p>
          </div>
        </motion.div>
      </div>

      <WhatsappButton />
    </section>
  );
};

export default MachaPlatform;
