// File: src/pages/Services/DataEngineering.jsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Database, Zap } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsappButton from "../../components/WhatsappButton";

const bannerImg =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"; // Data related tech image
const img1 =
  "https://www.equalexperts.com/wp-content/uploads/2021/04/datapipeline_blog3_thumb.png";
const img2 =
  "https://blogs.opentext.com/wp-content/uploads/2019/06/shutterstock_432008923-1000x667-1.jpg";
const img3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4RTm-rIHzgA5HmfSdJdcRXlgwqcNKTI_7bL8JPcz_CaWnGdrEa_cm3gHZee6jR7J1aK4&usqp=CAU";
const img4 =
  "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg";
const img5 =
  "https://www.velotix.ai/wp-content/uploads/2022/12/blog-data-governance-min.jpeg";
const img6 =
  "https://lamininsolutions.com/wp-content/uploads/2023/08/The-4-Key-Differences-Between-Analytics-and-Reporting.png";

const features = [
  "Data Pipeline Architecture",
  "ETL & Data Integration",
  "Real-Time Data Streaming",
  "Big Data Processing",
  "Data Quality & Governance",
  "Analytics & Reporting",
];

const descriptions = [
  "Design scalable pipelines to move and transform data efficiently across systems.",
  "Extract, transform, and load data from various sources ensuring consistency.",
  "Enable real-time data flow for immediate insights and reactive applications.",
  "Process large datasets using distributed computing frameworks for speed and scale.",
  "Maintain high data quality standards and enforce governance policies.",
  "Build dashboards and reports that provide actionable business intelligence.",
];

const DataEngineering = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="bg-[#111827] text-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[80vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b]/80 to-[#111827]/90 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-green-400 mb-4">
              Data Engineering
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Build robust data foundations for smarter decisions and faster
              insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#1e293b] to-[#111827]">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
            Transform Raw Data Into Business Value
          </h2>
          <p className="text-lg text-gray-300">
            Our data engineering solutions enable seamless data flow, quality
            assurance, and analytics readiness across your enterprise.
          </p>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[img1, img2, img3, img4, img5, img6].map((img, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-[#1e293b] to-[#111827] p-6 rounded-xl shadow-lg border border-green-700 hover:shadow-green-500/30 transition duration-300 hover:-translate-y-1"
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
      <section className="py-16 px-6 bg-gradient-to-br from-[#1e293b] to-[#111827] text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Database className="mx-auto text-green-400 w-12 h-12 mb-4 animate-pulse" />
          <h2 className="text-4xl font-bold mb-4">
            Unlock the Power of Your Data
          </h2>
          <p className="text-gray-300 mb-6">
            Partner with us to create resilient data infrastructure that
            accelerates your business intelligence journey.
          </p>
          <a
            href="/contact"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Get Data Engineering Experts
          </a>
        </motion.div>
      </section>

      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default DataEngineering;
