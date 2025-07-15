// File: src/pages/Services/AdvancedTechnologyIntegration.jsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsappButton from "../../components/WhatsappButton";

const bannerImg =
  "https://cdn.britannica.com/84/203584-050-57D326E5/speed-internet-technology-background.jpg";
const img1 =
  "https://miro.medium.com/v2/resize:fit:691/1*saGK1cIa1j77vNoA4EDJDg@2x.jpeg";
const img2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDek2dZdKLSIk504GECjbYbZtEuefvU4Y0SgQ5KQxxHGIofu0nHLO65HLTOXJTOeDZaSc&usqp=CAU";
const img3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoyBaq4HwMmzgDm8HbqrHwSPxsu96dwZ8iGGUo8QgNixedfEDt9CIeFzJkmLKNs6cpSTM&usqp=CAU";
const img4 =
  "https://media.licdn.com/dms/image/v2/D4E12AQGO00cTvSB2XA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1697703068227?e=2147483647&v=beta&t=EQHGIydfS7bozonv_REIuoLnkYHP9Ur-T3ihR-Jtl50";
const img5 =
  "https://media.istockphoto.com/id/1313551846/vector/digital-smart-contract-isometric-icon-concept-of-electronic-signature-blockchain-technology.jpg?s=612x612&w=0&k=20&c=hqE8rEWrU9ABnzgjChz_mIYKoPGXSUIevUB4TNlioC4=";
const img6 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89UGx90Ozsncj2Z7dTHgu6Fka_77Cdtr6p0BJ-FsWhpD8naZFZ_D27iH6xEGJ3xL1j4o&usqp=CAU";

const features = [
  "AI & Machine Learning Integration",
  "IoT & Sensor Ecosystem Deployment",
  "Edge & Quantum Computing Solutions",
  "AR/VR Experience Design",
  "Blockchain & Smart Contract Setup",
  "Technology Roadmapping & Strategy",
];

const descriptions = [
  "Embed intelligence into operations with predictive and cognitive AI models.",
  "Connect physical assets through sensor networks for real-time visibility.",
  "Leverage edge and emerging computing paradigms for next-gen performance.",
  "Create immersive virtual experiences for training, design, or retail.",
  "Implement blockchain protocols for transparent and secure digital workflows.",
  "Define your innovation roadmap and align emerging tech with business goals.",
];

const AdvancedTechnologyIntegration = () => {
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
              Advanced Technology Integration
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Integrate cutting-edge technologies to gain a competitive edge.
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
            Embrace Tomorrow’s Technology Today
          </h2>
          <p className="text-lg text-gray-300">
            We help organizations integrate disruptive technologies into
            existing systems, enabling them to innovate with speed and scale.
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
          <Cpu className="mx-auto text-green-400 w-12 h-12 mb-4 animate-pulse" />
          <h2 className="text-4xl font-bold mb-4">
            Future-Ready with Emerging Tech
          </h2>
          <p className="text-gray-300 mb-6">
            From AI to blockchain and beyond, Gamayas empowers your business
            with the tech of tomorrow — integrated today.
          </p>
          <a
            href="/contact"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Start Your Tech Evolution
          </a>
        </motion.div>
      </section>
      {/* WhatsApp Button */}
      <WhatsappButton />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdvancedTechnologyIntegration;
