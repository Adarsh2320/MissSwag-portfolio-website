import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles, Info, ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import WhatsappButton from "../../components/WhatsappButton";

import autoCureImg from "../../assets/products_logos/saathicare.jpg";
import p1Img from "../../assets/autocure_images/p1.jpg";

const product = {
  name: "Saathi Care",
  tagline: "On-Demand Home & Elderly Healthcare",
  description:
    "Saathi Care is a compassionate mobile solution offering on-demand medical assistance, elderly care, and wellness tracking right at your doorstep. It connects families with certified caregivers and real-time health updates.",
  highlights: [
    "Real-Time Health Monitoring",
    "Certified Elderly Care Professionals",
    "Scheduled Medical Assistance",
    "Companion and Wellness Programs",
  ],
  screenshots: [p1Img, p1Img, p1Img, p1Img, p1Img, p1Img],
  details: {
    launched: "2023",
    version: "1.5",
    techStack: "React Native, Node.js, Firebase, TailwindCSS",
    platforms: "Android, iOS",
  },
};

const SaathiCare = () => {
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

        {/* Logo + Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <img
            src={autoCureImg}
            alt="Saathi Care Logo"
            className="mx-auto w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-500 shadow-lg"
          />
          <span className="inline-flex items-center gap-3 text-green-400 text-4xl font-bold">
            {product.name}
          </span>
          <p className="text-lg text-gray-400 italic mt-2">{product.tagline}</p>
        </motion.div>

        {/* Description Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#0f172a] p-8 rounded-2xl shadow-xl border-l-8 border-green-500 mb-16 text-lg text-gray-300 leading-relaxed"
        >
          <p className="mb-4">{product.description}</p>
        </motion.div>

        {/* Screenshots Carousel */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-green-300 mb-8 text-center">Screenshots</h2>
          <div className="relative overflow-x-hidden">
            <div className="flex gap-6 animate-marquee whitespace-nowrap">
              {[...product.screenshots, ...product.screenshots].map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[400px] h-[280px] rounded-xl border border-green-700 overflow-hidden shadow-lg"
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

        {/* Highlights Section */}
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
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={22} className="text-green-500 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Info Cards */}
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
            <p><span className="text-green-400 font-medium">Launched:</span> {product.details.launched}</p>
            <p><span className="text-green-400 font-medium">Version:</span> {product.details.version}</p>
            <p><span className="text-green-400 font-medium">Platform:</span> {product.details.platforms}</p>
            <p><span className="text-green-400 font-medium">Tech Stack:</span> {product.details.techStack}</p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl shadow border border-green-700 flex flex-col items-center justify-center text-center">
            <Sparkles className="text-green-400 w-12 h-12 animate-pulse mb-2" />
            <p className="text-xl font-medium">
              Caring made smarter with Saathi!
            </p>
          </div>
        </motion.div>
      </div>

      <WhatsappButton />
    </section>
  );
};

export default SaathiCare;