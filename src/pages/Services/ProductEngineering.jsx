// File: src/pages/Services/ProductEngineering.jsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Settings, Zap } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsappButton from "../../components/WhatsappButton";

const bannerImg =
  "https://www.sparity.com/wp-content/uploads/2023/12/Product-Engineering-Facts-that-Drives-your-Business-Growth-1-1.webp";
const img1 =
  "https://www.bigeng.io/content/images/2023/02/Product-Lifecycle-Header.jpg";
const img2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfmnv5S0RTbZiBh0yG0jVEIgujnme8takkeA&s";
const img3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISqHkV4yxfRsxTuzn8GpNWEoJblCvacu8HcgoTDzZcCV-o-7vfeqd0tshL4601mroK_A&usqp=CAU";
const img4 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ya8o9zI6Hbh2hcKDyPyTngmR5OVWaosOEFbQKa0VErbYYesTqffAKMV9GFCNUx4BqGk&usqp=CAU";
const img5 =
  "https://dkpxaouzpedok.cloudfront.net/wp-content/uploads/2023/06/UX-product-vision.jpg";
const img6 =
  "https://cyberpanel.net/wp-content/uploads/2022/11/database-optmization-1024x768.webp";

const features = [
  "End-to-End Product Lifecycle Management",
  "Agile & Scalable Architecture Design",
  "Rapid Prototyping & MVP Development",
  "Continuous Integration & Deployment",
  "UX/UI Excellence in Product Design",
  "Performance Tuning & Optimization",
];

const descriptions = [
  "From ideation to deployment, we manage the entire product lifecycle with precision and speed.",
  "Design modular and cloud-native architectures that adapt to changing demands effortlessly.",
  "Validate ideas quickly with MVPs and prototypes that accelerate time-to-market.",
  "Automate development pipelines to ensure fast, secure, and consistent product delivery.",
  "Deliver visually striking and user-friendly interfaces focused on user satisfaction.",
  "Boost application speed, security, and scalability through advanced performance optimization.",
];

const ProductEngineering = () => {
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/90 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-green-400 mb-4">
              Product Engineering
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Transform your ideas into agile, scalable, and market-ready
              products with Gamayas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a]">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
            Build Next-Gen Products With Confidence
          </h2>
          <p className="text-lg text-gray-300">
            We partner with enterprises and startups to engineer products that
            are reliable, innovative, and ready to scale. Our focus is on speed,
            usability, and delivering lasting value.
          </p>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[img1, img2, img3, img4, img5, img6].map((img, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl shadow-lg border border-green-700 hover:shadow-green-500/30 transition duration-300 hover:-translate-y-1"
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
      <section className="py-16 px-6 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Settings className="mx-auto text-green-400 w-12 h-12 mb-4 animate-pulse" />
          <h2 className="text-4xl font-bold mb-4">Engineer the Future Today</h2>
          <p className="text-gray-300 mb-6">
            Whether you're launching a new idea or enhancing an existing
            product, Gamayas delivers engineering excellence from start to
            scale.
          </p>
          <a
            href="/contact"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Start Building
          </a>
        </motion.div>
      </section>

      <WhatsappButton />

      <Footer />
    </div>
  );
};

export default ProductEngineering;
