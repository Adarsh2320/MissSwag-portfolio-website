// File: src/pages/Products/AutoCure_Hub.jsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  ExternalLink,
  Sparkles,
  Info,
  CalendarCheck,
  Users,
  ClipboardCheck,
  UserCircle2,
  ShieldCheck,
  MailCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import WhatsappButton from "../../components/WhatsappButton";

import autoCureImg from "../../assets/products_logos/autocurehub.jpg";
import p1Img from "../../assets/AutoCureHub Screenshots/p1.png";
import p2Img from "../../assets/AutoCureHub Screenshots/p2.png";
import p3Img from "../../assets/AutoCureHub Screenshots/p3.png";
import p4Img from "../../assets/AutoCureHub Screenshots/p4.png";
import p5Img from "../../assets/AutoCureHub Screenshots/p5.png";
import p6Img from "../../assets/AutoCureHub Screenshots/p6.png";
import p7Img from "../../assets/AutoCureHub Screenshots/p7.png";
import p8Img from "../../assets/AutoCureHub Screenshots/p8.png";
import p9Img from "../../assets/AutoCureHub Screenshots/p9.png";
import p10Img from "../../assets/AutoCureHub Screenshots/p10.png";
import p11Img from "../../assets/AutoCureHub Screenshots/p11.png";
import p12Img from "../../assets/AutoCureHub Screenshots/p12.png";
import p13Img from "../../assets/AutoCureHub Screenshots/p13.png";
import p14Img from "../../assets/AutoCureHub Screenshots/p14.png";

const product = {
  name: "AutoCure Hub",
  tagline: "Smart Digital Vehicle Service Platform",
  description:
    "AutoCure Hub is a role-based online vehicle service management system that streamlines service bookings, task assignments, real-time progress tracking, and customer feedback. It digitizes operations for managers, employees, and users through individual dashboards, improving transparency and operational efficiency.",
  highlights: [
    {
      icon: CalendarCheck,
      label: "Online Service Booking with Real-Time Slot Availability",
    },
    {
      icon: ClipboardCheck,
      label: "Manager Dashboard for Task Allocation & Tracking",
    },
    { icon: Users, label: "Employee Dashboard for Task Updates & Status" },
    {
      icon: UserCircle2,
      label: "User Dashboard for Booking History & Feedback",
    },
    {
      icon: ShieldCheck,
      label: "Role-Based Secure Login for Manager, Employee & User",
    },
    {
      icon: MailCheck,
      label: "Automated Email Notifications and Real-Time Updates",
    },
  ],
  moreDetails:
    "The platform focuses on making vehicle servicing seamless and reliable by integrating AI-enabled scheduling, real-time notifications, and feedback systems. It eliminates manual bottlenecks by automating booking and monitoring, helping garages and customers stay synchronized. Designed with mobile-first responsiveness, it offers dashboards tailored to every stakeholder, providing clarity and operational control at all times.",
  screenshots: [
    p1Img,
    p5Img,
    p8Img,
    p4Img,
    p2Img,
    p6Img,
    p7Img,
    p3Img,
    p9Img,
    p10Img,
    p11Img,
    p12Img,
    p13Img,
    p14Img,
  ],
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
    <section className="relative bg-gradient-to-br from-[#1e293b] to-[#111827] text-white py-20 px-6 min-h-screen">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580894908361-967195033d76')] bg-cover bg-center opacity-70 -z-10"></div>

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
            alt="AutoCure Hub Logo"
            className="mx-auto w-40 h-40 rounded-full object-cover mb-5 border-4 border-green-500 shadow-xl"
          />
          <a
            href={product.details.link}
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
              href={product.details.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-green-600 hover:bg-green-500 text-white text-xl font-semibold shadow-lg transition"
            >
              <ExternalLink className="mr-2" /> Visit AutoCure Hub Website
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
          <p className="text-gray-400">{product.moreDetails}</p>
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
              src="https://www.youtube.com/embed/buOH0QtfIg0?autoplay=1&mute=1&si=SdL8B7v2_h37DniT"
              title="AutoCure Hub Demo"
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
