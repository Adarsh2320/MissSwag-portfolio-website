// File: src/pages/Services/OutsourcingServices.jsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const bannerImg =
  "https://images.unsplash.com/photo-1573164574391-d73a17f061a4";
const img1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGnCOFAYba7SedqFU_zCvU6r1GZFi2yl6SfTBI9YMqvrGfnGPaYaiiFgsA4D-mmkX0q7I&usqp=CAU";
const img2 =
  "https://micropro.com/wp-content/uploads/2023/10/IT-support-helpdesk-1.jpg";
const img3 =
  "https://truicbusinessideas.com/wp-content/uploads/2024/08/back-office-support-business.jpg";
const img4 = "https://cdn.intuji.com/2023/08/Custom-software-development.jpg";
const img5 =
  "https://articles.connectnigeria.com/wp-content/uploads/2024/07/1653543000162.jpg";
const img6 =
  "https://www.system4u.com/wp-content/uploads/2024/01/sluzby_menu_kyberneticka-bezpecnost-1-960x1080.jpg";

const features = [
  "Business Process Outsourcing",
  "IT Support & Helpdesk Services",
  "Back Office Operations",
  "Custom Software Outsourcing",
  "Remote Project Teams",
  "24/7 Monitoring & SLA Support",
];

const descriptions = [
  "Delegate routine or specialized processes to improve efficiency and reduce costs.",
  "Deliver expert IT assistance around the clock with scalable support models.",
  "Streamline non-core activities like data entry, billing, and HR admin.",
  "Outsource custom software development to accelerate time-to-market.",
  "Build dedicated offshore or hybrid teams tailored to your requirements.",
  "Ensure uninterrupted operations with proactive monitoring and SLA-based support.",
];

const OutsourcingServices = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[80vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/80 to-black/90 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-green-400 mb-4">
              Outsourcing Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Focus on growth while we handle the rest with reliable outsourcing
              models.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
            Scale Efficiently, Operate Seamlessly
          </h2>
          <p className="text-lg text-gray-300">
            Our outsourcing services allow you to reduce operational overhead,
            increase agility, and tap into global expertise. Whether you need a
            dedicated team or task-specific support, we deliver.
          </p>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[img1, img2, img3, img4, img5, img6].map((img, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-[#0f172a] to-black p-6 rounded-xl shadow-lg border border-green-700 hover:shadow-green-500/30 transition duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={img}
                alt="feature"
                className="rounded-md w-full h-44 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                {features[i]}
              </h3>
              <p className="text-gray-300 text-sm">{descriptions[i]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0f172a] to-black text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Share2 className="mx-auto text-green-400 w-12 h-12 mb-4 animate-pulse" />
          <h2 className="text-4xl font-bold mb-4">
            Streamline With Confidence
          </h2>
          <p className="text-gray-300 mb-6">
            From operations to development, let Gamayas be your trusted
            outsourcing partner. Reduce costs, boost efficiency, and focus on
            innovation.
          </p>
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Start Outsourcing Smartly
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default OutsourcingServices;
