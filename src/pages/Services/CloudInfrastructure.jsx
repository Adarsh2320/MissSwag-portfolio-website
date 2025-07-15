// File: src/pages/Services/CloudInfrastructure.jsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Cloud, Zap } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsappButton from "../../components/WhatsappButton";

const bannerImg =
  "https://stl.tech/wp-content/uploads/2022/08/cloud-computing.jpg";
const img1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisLHNPIXL4T5_HQMjNTs30ACDYq-Gq2ZEWzOCjbRJfyndVNZjzZ_JKH8V4K0aa3X8sFo&usqp=CAU";
const img2 = "https://stackgen.com/hubfs/Blog-Images/Vector-4.png";
const img3 =
  "https://www.winwire.com/wp-content/uploads/2023/10/Cloud-Advisory-Services-3.webp";
const img4 =
  "https://media.licdn.com/dms/image/v2/D5612AQHTp3GCy_AxvQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1707052409279?e=2147483647&v=beta&t=jANqZA9QHe6QYlHKuRSMCLMDpOlFCZ-6CLdLT2sViQI";
const img5 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtkc9AHzZeJdPiou45RNFGhTWdEa59nK50UYEA6A1h4KJ81ORFEZ4W8HAsFOZUXzQJiuc&usqp=CAU";
const img6 =
  "https://www.activtrak.com/wp-content/uploads/2025/06/blog-header-cost-optimization-examples.jpg";

const features = [
  "Cloud Architecture Design",
  "Infrastructure as Code (IaC)",
  "Cloud Migration & Modernization",
  "Scalability & Load Balancing",
  "Security & Compliance Management",
  "Cost Optimization & Monitoring",
];

const descriptions = [
  "Build scalable and resilient cloud solutions tailored to your business goals.",
  "Automate infrastructure provisioning using tools like Terraform and CloudFormation.",
  "Migrate legacy systems to modern cloud platforms with minimal disruption.",
  "Ensure high availability and load management with robust architectures.",
  "Implement advanced security practices and align with compliance standards.",
  "Gain visibility into cloud usage and optimize spend with smart tools.",
];

const CloudInfrastructure = () => {
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
              Cloud & Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Build, scale, and secure your cloud environment with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#0f172a] to-black">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
            Cloud That Adapts, Infrastructure That Performs
          </h2>
          <p className="text-lg text-gray-300">
            We help organizations embrace cloud-native infrastructure that
            delivers speed, flexibility, and control. Whether starting from
            scratch or scaling up, we have you covered.
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
      <section className="py-16 px-6 bg-gradient-to-br from-[#0f172a] to-black text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Cloud className="mx-auto text-green-400 w-12 h-12 mb-4 animate-pulse" />
          <h2 className="text-4xl font-bold mb-4">
            Elevate Your Cloud Strategy
          </h2>
          <p className="text-gray-300 mb-6">
            Partner with Gamayas to architect, deploy, and manage cloud
            infrastructure that drives innovation and agility.
          </p>
          <a
            href="/contact"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Let’s Get Started
          </a>
        </motion.div>
      </section>
      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default CloudInfrastructure;
