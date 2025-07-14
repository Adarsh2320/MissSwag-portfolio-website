import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles, Info, ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import WhatsappButton from "../../components/WhatsappButton";

import autoCureImg from "../../assets/products_logos/autocurehub.jpg";
import p1Img from "../../assets/autocure_images/p1.jpg";

const product = {
  name: "AutoCure Hub",
  tagline: "Smart Digital Vehicle Service Platform",
  description:
    "AutoCure Hub is a role-based online vehicle service management system that streamlines service bookings, task assignments, real-time progress tracking, and customer feedback. It digitizes operations for managers, employees, and users through individual dashboards, improving transparency and operational efficiency.",
  highlights: [
    "Online Service Booking with Real-Time Slot Availability",
    "Manager Dashboard for Task Allocation & Tracking",
    "Employee Dashboard for Task Updates & Status",
    "User Dashboard for Booking History & Feedback",
    "Role-Based Secure Login for Manager, Employee & User",
    "Automated Email Notifications and Real-Time Updates",
  ],
  moreDetails:
    "The platform focuses on making vehicle servicing seamless and reliable by integrating AI-enabled scheduling, real-time notifications, and feedback systems. It eliminates manual bottlenecks by automating booking and monitoring, helping garages and customers stay synchronized. Designed with mobile-first responsiveness, it offers dashboards tailored to every stakeholder, providing clarity and operational control at all times.",
  screenshots: [p1Img, p1Img, p1Img, p1Img, p1Img, p1Img],
  details: {
    launched: "2024",
    version: "1.0",
    techStack: "HTML, CSS, JavaScript, Node.js, Express.js, MySQL",
    platforms: "Web (Responsive for Mobile/Desktop)",
    link: "https://autocure-hub.vercel.app/",
  },
};

const AutoCure_Hub = () => {
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
            alt="AutoCure Hub Logo"
            className="mx-auto w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-500 shadow-lg"
          />
          <a
            href={product.details.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-green-400 text-4xl font-bold hover:text-green-300 transition"
          >
            {product.name} <ArrowRightCircle className="w-7 h-7" />
          </a>
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
          <p className="text-gray-400 text-base">{product.moreDetails}</p>
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
              Designed for modern garages and smart users.
            </p>
          </div>
        </motion.div>
      </div>

      <WhatsappButton />
    </section>
  );
};

export default AutoCure_Hub;
