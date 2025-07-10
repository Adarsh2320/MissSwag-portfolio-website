// File: src/pages/Services/DigitalMarketing.jsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Megaphone, Zap } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const bannerImg =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c";
const img1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA3oi8a2SMuuTx4JUIGYxTT3ZirPaB_yBijb0NSN6W4LTkDffO7POTbkyIGSl6cv71ie4&usqp=CAU";
const img2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3KqJX603DzdFOK7bwm-aPDUkff0e8IVIRcjfYakd9tqy2EntkhRmQnP5kczvEZ4K5wKQ&usqp=CAU";
const img3 =
  "https://seo-hacker.com/wp-content/uploads/2020/02/Social-Media-Marketing-Philippines.jpg";
const img4 =
  "https://img.freepik.com/free-vector/funnel-concept-illustration_114360-22846.jpg?semt=ais_items_boosted&w=740";
const img5 =
  "https://cdn.prod.website-files.com/67af3db5bb3b892e61258bd4/6849b2b714f8ceddf74ce3eb_97-data-analytics-roi.png";
const img6 =
  "https://media.licdn.com/dms/image/v2/D5612AQFAScQzRDJqEA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1683100199482?e=2147483647&v=beta&t=HRu5ATYm3yG993mRhBJUE2G_f3U6r5GE3A6r7N9O_xE";

const features = [
  "SEO & Content Optimization",
  "Performance Marketing Campaigns",
  "Social Media Strategy & Execution",
  "Email & Automation Funnels",
  "Analytics & ROI Tracking",
  "Branding & Creative Design",
];

const descriptions = [
  "Improve organic reach and visibility with expertly optimized content strategies.",
  "Drive conversions through targeted ad campaigns across search, display, and social.",
  "Build engaging social campaigns that foster brand loyalty and community.",
  "Automate lead nurturing and customer engagement with effective email sequences.",
  "Track KPIs with precision using detailed analytics dashboards and attribution models.",
  "Create memorable brand identities with compelling visuals and storytelling.",
];

const DigitalMarketing = () => {
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
              Digital Marketing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Elevate your brand's presence with data-driven and high-impact
              marketing strategies.
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
            Reach the Right Audience, At the Right Time
          </h2>
          <p className="text-lg text-gray-300">
            We craft multichannel strategies that boost brand awareness,
            generate qualified leads, and maximize ROI. Whether you're a startup
            or an enterprise, our campaigns are tailored for performance.
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
          <Megaphone className="mx-auto text-green-400 w-12 h-12 mb-4 animate-pulse" />
          <h2 className="text-4xl font-bold mb-4">
            Amplify Your Digital Voice
          </h2>
          <p className="text-gray-300 mb-6">
            Let Gamayas be your growth partner in the digital space. We'll help
            you get seen, get leads, and get ahead.
          </p>
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Let’s Start Growing
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
