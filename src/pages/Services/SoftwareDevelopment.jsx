// File: src/pages/Services/SoftwareDevelopment.jsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Zap } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const bannerImg =
  "https://images.unsplash.com/photo-1518770660439-4636190af475";
const img1 =
  "https://edge1s.com/wp-content/uploads/2024/03/AdobeStock_200208909-1024x482.jpeg";
const img2 = "https://images.unsplash.com/photo-1605379399642-870262d3d051";
const img3 =
  "https://7t.ai/wp-content/uploads/2022/06/iStock-1177116437-2234x1117.jpg";
const img4 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhcP2lUX32kfTqXWsQOT2k9L-tfngVz60143R6LPLHE-tS6n8OjXhdbmrxqvDNUml5vo&usqp=CAU";
const img5 =
  "https://www.hulkapps.com/cdn/shop/articles/scaled_IMAGE-FILE-UPLOADS-breaking-down-cross-platform-compatibility-830907_1024x.jpg?v=1722247485";
const img6 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwEOTK-F2Sgl2QfIgtJTQlJkBhcTKebeHV8sNnFU6vZctJjJ57nZyLnkq4ghWIyIKKG4s&usqp=CAU";

const features = [
  "Custom Web & Mobile Apps",
  "Secure Backend Development",
  "API Design & Integration",
  "DevOps & Continuous Delivery",
  "Cross-Platform Compatibility",
  "Maintenance & Scalability Planning",
];

const descriptions = [
  "Build intuitive web and mobile apps tailored to your business goals and users.",
  "Develop robust, scalable, and secure backend systems using modern technologies.",
  "Integrate with third-party services or build custom APIs for smooth data exchange.",
  "Automate builds, tests, and deployments for faster and safer product updates.",
  "Ensure seamless experience across devices with responsive and adaptive design.",
  "Plan for growth with performance tuning, monitoring, and feature expansion support.",
];

const SoftwareDevelopment = () => {
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
              Software Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Empower your business with custom-built software tailored to your
              unique challenges.
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
            Solutions That Fit, Code That Works
          </h2>
          <p className="text-lg text-gray-300">
            We engineer custom software for every scale—startups, SMBs, and
            enterprises. With a focus on performance, user experience, and
            reliability, we help you build future-ready applications.
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
          <Code2 className="mx-auto text-green-400 w-12 h-12 mb-4 animate-pulse" />
          <h2 className="text-4xl font-bold mb-4">
            Start Building Smarter Software
          </h2>
          <p className="text-gray-300 mb-6">
            From planning to maintenance, we take care of your software’s full
            journey. Partner with Gamayas for dependable and future-proof
            development.
          </p>
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Let’s Code Your Vision
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareDevelopment;
