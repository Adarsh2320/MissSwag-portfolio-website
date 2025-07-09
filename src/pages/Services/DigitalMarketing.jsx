// File: src/pages/Services/DigitalMarketing.jsx

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Rocket, TrendingUp } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Image links (replace with your hosted URLs)
const seoImg = "https://your-image-link.com/seo.jpg";
const contentImg = "https://your-image-link.com/content.jpg";
const analyticsImg = "https://your-image-link.com/analytics.jpg";
const dmBanner = "https://your-image-link.com/digital-marketing-banner.jpg";

const features = [
  "Search Engine Optimization (SEO)",
  "Targeted Social Media Campaigns",
  "Content Marketing & Blogging",
  "Email Campaign Optimization",
  "Conversion Rate Boosting",
];

const DigitalMarketing = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Hero Banner */}
      <section
        className="relative h-[80vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${dmBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/80 to-black/90 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-green-400 mb-4">
              Digital Marketing Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Amplify your brand reach with data-driven and performance-focused strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
            What We Offer
          </h2>
          <p className="text-lg text-gray-300">
            At Gamayas, we craft compelling digital narratives to attract, convert, and retain your audience. 
            Our marketing experts deploy multi-channel strategies and powerful analytics to maximize your ROI.
          </p>
        </motion.div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[seoImg, contentImg, analyticsImg].map((img, i) => (
              <motion.div
                key={i}
                className="bg-[#111827] p-6 rounded-xl shadow-lg border border-green-600 hover:shadow-green-500/30 transition duration-300 hover:-translate-y-1"
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
                <p className="text-gray-300 text-sm">
                  Empower your marketing stack with actionable insights, 
                  targeted campaigns, and meaningful customer engagement.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Rocket className="mx-auto text-green-400 w-12 h-12 mb-4 animate-bounce" />
          <h2 className="text-4xl font-bold mb-4">Let’s Grow Your Business</h2>
          <p className="text-gray-300 mb-6">
            Book a consultation with our digital experts and transform your brand into a lead magnet 
            with high-performing strategies.
          </p>
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Get Started
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
