// File: src/pages/Services/ITConsultingStaffing.jsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Zap } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsappButton from "../../components/WhatsappButton";

const bannerImg = "https://images.unsplash.com/photo-1551434678-e076c223a692";
const img1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPcuCxzZZMixSSHRxvEumkb30rhQS8wtOEV1ojdG_5v3oCwUltZF9KnP2uxA3i2eyRcU&usqp=CAU";
const img2 =
  "https://www.appinessworld.com/assets/images/tech-talent-on-demand-3.png";
const img3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-j159jgYC9VNR4fKAvx0aWPJCzDMZm_cJg&s";
const img4 =
  "https://kantata.marketing/wp-content/uploads/2021/08/how-create-present-resource-plan.jpg";
const img5 =
  "https://gdcitsolutions.com/wp-content/uploads/Staff-Augmentation-Concept.jpg";
const img6 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Uh3r5I5TKqrDiVhjMJDNiqUF_EkLRpq1gS2OfdUUm1xnZCW217jOl1d-0st0hCnIG-0&usqp=CAU";

const features = [
  "IT Strategy & Roadmap Consulting",
  "On-Demand Tech Talent Pool",
  "Agile & DevOps Expertise",
  "Project-Based Resource Deployment",
  "Cost-Efficient Staff Augmentation",
  "Talent Acquisition & Retention",
];

const descriptions = [
  "Design technology strategies aligned with business objectives and future trends.",
  "Access a curated pool of pre-vetted IT professionals with specialized skills.",
  "Infuse agility into your teams with experts in CI/CD, DevOps, and scrum delivery.",
  "Scale your teams for new initiatives without long-term overheads.",
  "Optimize workforce cost while retaining quality through smart staffing models.",
  "Hire and retain top talent with our tech-driven recruitment and retention solutions.",
];

const ITConsultingStaffing = () => {
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
              IT Consulting & Staffing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Bridge talent gaps and accelerate delivery with expert consulting
              and staffing solutions.
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
            The Right People, The Right Strategy
          </h2>
          <p className="text-lg text-gray-300">
            We empower your organization with cutting-edge consulting and a
            flexible talent strategy. From team extension to full project
            staffing, we help you meet today’s demands and tomorrow’s goals.
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
          <Users className="mx-auto text-green-400 w-12 h-12 mb-4 animate-pulse" />
          <h2 className="text-4xl font-bold mb-4">
            Let’s Build Your Tech Team
          </h2>
          <p className="text-gray-300 mb-6">
            Partner with Gamayas to power your innovation pipeline with the
            right technology strategy and skilled talent.
          </p>
          <a
            href="/contact"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Connect With Us
          </a>
        </motion.div>
      </section>

      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default ITConsultingStaffing;
