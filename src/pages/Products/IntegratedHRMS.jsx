// File: src/pages/Products/IntegratedHRMS.jsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  ExternalLink,
  Sparkles,
  Info,
  ClipboardCheck,
  UserCircle2,
  ShieldCheck,
  Users,
  MailCheck,
  CalendarCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import WhatsappButton from "../../components/WhatsappButton";

import autoCureImg from "../../assets/products_logos/HRMS.jpg";
const p1Img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUaJwiid4sLK0VX066zc9KuuQoiB_WRP-sQ&s";
const p2Img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dPkKFL-HgR94PIxcNnG6G6VIbIqsndaX08MF_O0RSjkJRN9P2-u0a4_5DA4scQC0kf0&usqp=CAU";
const p3Img =
  "https://cdn.educba.com/academy/wp-content/uploads/2023/05/Human-Resource-Management-System.jpg";
const p4Img =
  "https://peopleworks.in/wp-content/uploads/2018/10/how-to-set-up-HRMS-sofware.jpg";
const p5Img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvYXrE64TiJs_0xdr-B8iP6_GFeCrqJuxBMw&s";

const product = {
  name: "Integrated HRMS",
  tagline: "Smart HR Management. Simplified.",
  description:
    "Integrated HRMS is a robust and scalable platform for managing all HR operations. It helps businesses automate payroll, streamline onboarding, track attendance, monitor performance, and handle leave management — ensuring efficiency, compliance, and employee satisfaction.",
  highlights: [
    { icon: CalendarCheck, label: "Automated Payroll & Salary Slips" },
    { icon: ClipboardCheck, label: "Employee Onboarding & Exit Process" },
    { icon: Users, label: "Leave, Attendance & Shift Management" },
    { icon: UserCircle2, label: "Performance Appraisal & Document Storage" },
    {
      icon: ShieldCheck,
      label: "Role-Based Access for Admins, HR, and Employees",
    },
    { icon: MailCheck, label: "Analytics Dashboard with HR Metrics" },
  ],
  moreDetails:
    "Integrated HRMS empowers HR departments by automating routine tasks and centralizing all records in one place. It enables better decision-making with real-time insights, simplifies compliance, and enhances employee engagement through self-service features and mobile-friendly dashboards.",
  screenshots: [p1Img, p2Img, p3Img, p4Img, p5Img],
  details: {
    launched: "2024",
    version: "1.5",
    techStack: "React, Node.js, Express, MongoDB, TailwindCSS",
    platforms: "Web App (Admin + Employee Dashboards)",
    link: "https://integrated-hrms.vercel.app/",
  },
};

const IntegratedHRMS = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white py-20 px-6 min-h-screen">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf')] bg-cover bg-center opacity-70 -z-10"></div>

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
            alt="Integrated HRMS Logo"
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
              <ExternalLink className="mr-2" /> Visit HRMS Website
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
                      src="https://www.youtube.com/embed/KTc0nV3P8tc?autoplay=1&mute=1&si=fwLg14JgAz1Y_f5S"
                      title="Integrated HRMS"
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
              Empowering HR with automation and insight.
            </p>
          </div>
        </motion.div>
      </div>

      <WhatsappButton />
    </section>
  );
};

export default IntegratedHRMS;
