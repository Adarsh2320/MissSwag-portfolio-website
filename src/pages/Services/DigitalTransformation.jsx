// File: src/pages/Services/DigitalTransformation.jsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Zap } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Replace with actual hosted image URLs
const bannerImg =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085";
const img1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGaI1EIlIQM_s7087VyiTxEYxTmtvdlMQvIg&s";
const img2 =
  "https://integranxt.com/wp-content/uploads/2023/12/image-1012x675-8.png";
const img3 =
  "https://resources.nice.com/wp-content/uploads/2024/02/reimagining-customer-experience.jpg";
const img4 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR401oIerBlEjo39aVqQfGh7rIKvQ6Kpqw1Ep7pIWxAVPtCc0w0X2mfvvUUZ5z1rOR92po&usqp=CAU";
const img5 =
  "https://www.shutterstock.com/image-photo/business-intelligence-concept-data-analysis-600nw-2288262579.jpg";
const img6 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyO0m1KxhOoW678yHa7KBUhzp1rXqDktTDXA&s";

const features = [
  "Enterprise-wide Technology Modernization",
  "Process Automation & AI Enablement",
  "Customer Experience Re-imagination",
  "Cloud-Native Infrastructure Adoption",
  "Data-Driven Business Intelligence",
  "Change Management & Training",
];

const descriptions = [
  "Revamp your entire digital ecosystem with scalable and resilient technologies to match modern needs.",
  "Introduce AI and automation to streamline core processes and reduce human bottlenecks.",
  "Design smarter interfaces, omnichannel engagement, and seamless UX that delights your customers.",
  "Migrate to secure, flexible cloud infrastructure that improves uptime and reduces cost.",
  "Harness your business data using analytics and dashboards that enable real-time decision-making.",
  "Support your team through guided digital change adoption and continuous learning programs.",
];

const DigitalTransformation = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); // or "smooth" for animation
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
              Digital Transformation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Empower your enterprise with agile, AI-ready, and future-proof
              digital systems.
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
            Transform the Way You Operate
          </h2>
          <p className="text-lg text-gray-300">
            We help businesses digitize operations, rethink customer journeys,
            and align teams around scalable, cloud-first architectures. Our
            solutions are centered around speed, intelligence, and measurable
            outcomes.
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
          <Zap className="mx-auto text-green-400 w-12 h-12 mb-4 animate-pulse" />
          <h2 className="text-4xl font-bold mb-4">
            Begin Your Transformation Journey
          </h2>
          <p className="text-gray-300 mb-6">
            Partner with Gamayas to unlock a smarter, faster, and leaner digital
            enterprise. From strategy to execution — we’ve got you covered.
          </p>
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Talk to Our Experts
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalTransformation;
