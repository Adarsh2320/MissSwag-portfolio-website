

// File: src/pages/Home.jsx

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

// HERO SLIDES
import slide1 from "../assets/photo1.jpg";
import slide2 from "../assets/photo2.jpg";
import slide3 from "../assets/photo3.jpg";
import aboutImg from "../assets/aboutus.jpg";

// SERVICE IMAGES
import dtImg from "../assets/digital_transformation.jpg";
import dmImg from "../assets/digital_marketing.jpg";
import peImg from "../assets/product_engineering.jpg";
import deImg from "../assets/data_engineering.jpg";
import ciImg from "../assets/cloud_and_infrastructure.jpg";
import itsImg from "../assets/consulting_and_staffing.jpg";
import osImg from "../assets/outsourcing.jpg";
import sdImg from "../assets/software_development.jpg";
import atiImg from "../assets/advanced_technology_integration.jpg";

// PRODUCT LOGOS
import missSwagImg from "../assets/products_logos/missswag.jpg";
import machaImg from "../assets/products_logos/macha.jpg";
import saathiImg from "../assets/products_logos/saathicare.jpg";
import autoCureImg from "../assets/products_logos/autocurehub.jpg";
import HIMS from "../assets/products_logos/HIMS.jpg";
import HRMS from "../assets/products_logos/HRMS.jpg";
import EMS_LMS from "../assets/products_logos/EMS+LMS.jpg";
import MomoMuffin from "../assets/products_logos/Momo_Muffin.jpg"
import logo from "../assets/logo.jpg";

import { Info } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, rotateX: -15 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slides = [
  {
    image: slide1,
    title: "Empowering Digital Innovation",
    subtitle: "with AI-driven, scalable tech solutions",
  },
  {
    image: slide2,
    title: "Build Smarter, Grow Faster",
    subtitle: "with intelligent product engineering",
  },
  {
    image: slide3,
    title: "From Vision to Execution",
    subtitle: "Gamayas turns your ideas into reality",
  },
];

const products = [
  { title: "MissSwag", slug: "Missswag", image: missSwagImg, desc: "Patient engagement platform tailored for modern clinics and hospitals." },
  { title: "Macha Platform", slug: "Macha", image: machaImg, desc: "Smart delivery service platform for vendors and customers." },
  { title: "Saathi Care", slug: "SaathiCare", image: saathiImg, desc: "On-demand home healthcare and elderly assistance mobile solution." },
  { title: "AutoCure Hub", slug: "AutoCure_Hub", image: autoCureImg, desc: "AI-powered vehicle service management and diagnostics interface." },
  { title: "Integrated HIMS", slug: "IntegratedHIMS", image: HIMS, desc: "Comprehensive hospital management system with real-time analytics." },
  { title: "Integrated HRMS", slug: "IntegratedHRMS", image: HRMS, desc: "Streamlined human resource solution for modern enterprise teams." },
  { title: "EMS + LMS", slug: "IntegratedEMS_LMS", image: EMS_LMS, desc: "Unified Emergency + Learning Management System for smart institutions." },
  { title: "Momo Moffin", slug: "Momo_Moffin", image: MomoMuffin, desc: "Effortless Fashion. Everyday Comfort. Curated for the Modern Wardrobe." },

];

const serviceData = [
  { title: "Digital Transformation", image: dtImg, slug: "digitaltransformation", desc: "Driving enterprise-wide innovation with strategic digital adoption and agile execution." },
  { title: "Product Engineering", image: peImg, slug: "productengineering", desc: "Designing, building, and scaling next‑gen products that fuel business evolution." },
  { title: "Digital Marketing", image: dmImg, slug: "digitalmarketing", desc: "Boosting brand presence with performance‑driven and creative marketing strategies." },
  { title: "Software Development", image: sdImg, slug: "softwaredevelopment", desc: "Crafting robust, scalable software tailored to meet dynamic business demands." },
  { title: "Cloud and Infrastructure", image: ciImg, slug: "cloudinfrastructure", desc: "Empowering businesses with secure, scalable, and optimized cloud infrastructure solutions." },
  { title: "IT Consulting & Staffing", image: itsImg, slug: "itconsultingstaffing", desc: "Delivering expert guidance and skilled professionals to support your IT objectives." },
  { title: "Outsourcing Services", image: osImg, slug: "outsourcingservices", desc: "Enhancing operational efficiency through reliable and strategic outsourcing models." },
  { title: "Advanced Tech Integration", image: atiImg, slug: "advancedtechnologyintegration", desc: "Integrating cutting‑edge technologies to streamline processes and drive innovation." },
  { title: "Data Engineering", image: deImg, slug: "dataengineering", desc: "Building powerful data architectures for real‑time analytics and informed decisions." },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />

       {/* Hero Section with Swiper */}
      <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden mt-20">
        <Swiper
          spaceBetween={0}
          centeredSlides
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full w-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((s, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${s.image})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay with dynamic title/subtitle */}
        <div className="absolute inset-0 bg-[#0f172a]/70 z-10 flex items-center justify-center">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-4 max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              {slides[activeIndex].title}
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-green-300 mb-8">
              {slides[activeIndex].subtitle}
            </p>
            <div>
              <a
                href="#services"
                className="px-8 py-4 text-lg md:text-xl bg-green-600 hover:bg-green-500 transition rounded-full font-semibold shadow-lg"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-[#0f172a] to-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10+", label: "Projects Completed" },
            { number: "5+", label: "Successful Years" },
            { number: "98%", label: "Client Retention" },
            { number: "5+", label: "Countries" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-green-400 mb-2">
                {item.number}
              </h3>
              <p className="text-gray-300 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-6 bg-gradient-to-br from-[#0f172a] to-black overflow-hidden"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
          {/* Image with effects */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="-ml-20"
          >
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl border border-green-500/20 ">
              <img
                src={aboutImg}
                alt="About Gamayas"
                className="w-full max-h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-green-400/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="ml-4"
          >
            <div className="w-[135%] -ml-6 h-96 bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border-l-4 border-green-500 hover:shadow-green-500/20 transition overflow-y-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
                What is Gamayas?
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="font-semibold text-white">
                  Gamayas Digital Design Pvt. Ltd.
                </span>{" "}
                is a Hyderabad-based tech innovation company crafting
                intelligent, scalable, and human-centric platforms. We
                specialize in{" "}
                <span className="text-green-300 font-medium">
                  Digital Transformation, AI Automation, Cloud-native
                  Infrastructure, and Engineering Consulting
                </span>{" "}
                for forward-thinking enterprises.
              </p>
              <p className="mt-4 text-lg text-gray-400">
                Our mission is to bridge the gap between legacy systems and
                futuristic tech with rapid prototyping, a human-first mindset,
                and world-class delivery.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 bg-gradient-to-br from-[#0f172a] to-black"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Our Core Services
          </h2>

          <div className="flex flex-col gap-14">
            {serviceData.map((service, i) => {
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className={`flex flex-col md:flex-row items-center group transition duration-500 hover:scale-[1.02] ${
                      !isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Number badge */}
                    <div className="md:w-1/5 w-full flex justify-center mb-6 md:mb-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center shadow-lg border-4 border-green-200 animate-pulse">
                        <span className="text-white text-3xl font-bold">
                          {i + 1}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <div className="md:w-4/5 w-full">
                      <div
                        className={`bg-[#0f172a] px-8 py-6 rounded-2xl shadow-xl hover:shadow-green-500/30 border-l-8 border-green-500 transition ${
                          !isEven ? "md:border-r-8 md:border-l-0" : ""
                        }`}
                      >
                        <div className="flex flex-col md:flex-row items-center gap-6">
                          {/* Image */}
                          <div className="w-28 h-28 shrink-0 rounded-xl overflow-hidden border border-green-500 shadow-md">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          {/* Text */}
                          <div className="flex-grow">
                            <h3 className="text-2xl font-semibold text-green-400 mb-2 flex items-center">
                              <Info size={28} className="mr-2 text-green-500" />
                              {service.title}
                            </h3>
                            <p className="text-lg text-gray-300">
                              {service.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section
        id="roadmap"
        className="py-16 px-6 bg-gradient-to-br from-[#0f172a] to-black text-white"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            How We Build Your Vision
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                step: "1",
                title: "Discovery",
                desc: "We understand your goals, challenges, and users to define a clear roadmap.",
                icon: "https://cdn-icons-gif.flaticon.com/14447/14447460.gif", // magnifying glass / discovery
              },
              {
                step: "2",
                title: "Design",
                desc: "We craft user-centric wireframes, UI/UX, and branding aligned with your vision.",
                icon: "https://cdn-icons-gif.flaticon.com/17122/17122766.gif", // pen tool / design
              },
              {
                step: "3",
                title: "Development",
                desc: "Our engineers build scalable and secure solutions using modern tech.",
                icon: "https://cdn-icons-gif.flaticon.com/17122/17122569.gif", // coding / dev
              },
              {
                step: "4",
                title: "Launch & Support",
                desc: "We deploy, monitor, and support your app for long-term success.",
                icon: "https://cdn-icons-gif.flaticon.com/14447/14447525.gif", // rocket / launch
              },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#111827] border-l-4 border-green-500 p-8 rounded-3xl shadow-xl hover:shadow-green-500/30 transition transform hover:scale-[1.03]"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 bg-green-500/10 border border-green-400 rounded-full flex items-center justify-center shadow-md">
                    <img
                      src={s.icon}
                      alt={s.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-green-400 mt-2">
                    Step {s.step}: {s.title}
                  </h3>
                  <p className="text-gray-300 text-center text-base leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="relative py-16 px-6 bg-gradient-to-br from-[#0f172a] to-black overflow-hidden"
        style={{ perspective: "1200px" }} // true 3‑D depth
      >
        {/* Down‑fall background squares */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              key={i}
              className="absolute w-72 h-72 bg-green-400/5 border border-green-500/10 rounded-3xl blur-3xl animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
                transform: `translateZ(${
                  -200 + Math.random() * -400
                }px) rotateX(20deg)`,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Products
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {products.map((p, i) => (
              <motion.div
                key={p.slug}
                variants={fadeUp}
                whileHover={{
                  scale: 1.05,
                  rotateX: 8,
                  rotateY: -8,
                  z: 20,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to={`/products/${p.slug}`}
                  className="group bg-[#111827] p-6 rounded-2xl border border-gray-700 hover:border-green-400 transition duration-500 shadow-lg hover:shadow-green-500/30 block"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6 animate-bob">
                    <div className="absolute inset-0 rounded-xl bg-green-500/10 blur-xl group-hover:scale-105 transition duration-500" />
                    <img
                      src={p.image}
                      alt={p.title}
                      className="relative w-full h-full object-contain rounded-xl shadow-md"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-green-400 mb-3 group-hover:text-green-300">
                    {p.title}
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed">
                    {p.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Discussion CTA Section */}
      <section className="bg-gradient-to-b from-[#0f172a] to-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400">
              Let’s discuss your project
            </h2>
            <p className="text-lg text-gray-300">
              Together, we can bring your vision to life — one smart solution at
              a time.
            </p>
          </motion.div>

          {/* Right Quote + Button */}
          <motion.div
            className="md:w-1/2 bg-[#111827] text-white p-8 rounded-xl shadow-lg border border-green-500/20 text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="italic text-gray-300 mb-6 text-lg">
              “The best way to predict the future is to build it.”
            </p>
            <Link
              to="/contact"
              className="inline-block bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-semibold transition duration-300 shadow"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>


      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default Home;

