// File: src/pages/Services/DigitalMarketing.jsx

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Rocket } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Replace with your image links
const seoImg = "https://images.unsplash.com/photo-1581093588401-a8f8bda45805";
const contentImg =
  "https://images.unsplash.com/photo-1612197526895-096612eb12c4";
const analyticsImg =
  "https://images.unsplash.com/photo-1591696331117-44f5d4b1c1f8";
const dmBanner = "https://images.unsplash.com/photo-1522199710521-72d69614c702";
const img1 = "https://images.unsplash.com/photo-1522199710521-72d69614c702";
const img2 = "https://images.unsplash.com/photo-1522199710521-72d69614c702";
const img3 = "https://images.unsplash.com/photo-1522199710521-72d69614c702";
const img4 = "https://images.unsplash.com/photo-1522199710521-72d69614c702";
const img5 = "https://images.unsplash.com/photo-1522199710521-72d69614c702";
const img6 = "https://images.unsplash.com/photo-1522199710521-72d69614c702";




const features = [
  "Search Engine Optimization (SEO)",
  "Targeted Social Media Campaigns",
  "Content Marketing & Blogging",
  "Email Campaign Optimization",
  "Conversion Rate Boosting",
  "Content Marketing & Blogging",
];

const descriptions = [
  "Boost your website’s visibility with proven SEO strategies and technical audits that drive organic traffic and improve rankings.",
  "Reach your ideal audience through curated social media campaigns on platforms like Instagram, LinkedIn, and Facebook.",
  "Engage and educate your audience with creative content strategies, blog writing, and storytelling that converts.",
  "Design personalized email workflows that nurture leads, increase CTRs, and improve retention through automation.",
  "Optimize every customer interaction to increase conversion rates and turn casual visitors into loyal customers.",
  "Reach your ideal audience through curated social media campaigns on platforms like Instagram, LinkedIn, and Facebook.",
];

const DigitalMarketing = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Hero Section */}
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
              Amplify your brand reach with data-driven and performance-focused
              strategies.
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
            At Gamayas, we create compelling digital experiences that attract,
            convert, and retain your audience. Our experts use multi-channel
            marketing, precision targeting, and analytics to generate measurable
            business results.
          </p>
        </motion.div>
      </section>

      {/* Feature Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[img1, img2, img3, img4, img5, img6].map(
            (img, i) => (
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
            )
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0f172a] to-black text-center">
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
            Book a consultation with our digital experts and transform your
            brand into a lead magnet with high-performing strategies tailored
            just for you.
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
