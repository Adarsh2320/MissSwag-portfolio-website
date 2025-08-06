import React, { useState, useEffect } from "react";
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
import slide4 from "../assets/photo1.jpg";
import slide5 from "../assets/photo3.jpg";
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
import MomoMuffin from "../assets/products_logos/Momo_Muffin.jpg";
import logo from "../assets/logo.jpg";

//Investors logo
import mkDigitalLogo from "../assets/Inverstors_logos/mkdigital.jpg";
import vfc from "../assets/Inverstors_logos/vfc.jpg";
import digitaz from "../assets/Inverstors_logos/digitaz.jpg";
import Weiteredge from "../assets/Inverstors_logos/weiteredge.jpg";

import { ArrowRightCircle } from "lucide-react";
import CrawlingBaby from "../components/CrawlingBaby";

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
  {
    image: slide4,
    title: "From Vision to Execution",
    subtitle: "Gamayas turns your ideas into reality",
  },
  {
    image: slide5,
    title: "From Vision to Execution",
    subtitle: "Gamayas turns your ideas into reality",
  },
];

const products = [
  {
    title: "MissSwag",
    slug: "Missswag",
    image: missSwagImg,
    desc: "Patient engagement platform tailored for modern clinics and hospitals.",
  },
  {
    title: "Macha Platform",
    slug: "Macha",
    image: machaImg,
    desc: "Smart delivery service platform for vendors and customers.",
  },
  {
    title: "Saathi Care",
    slug: "SaathiCare",
    image: saathiImg,
    desc: "On-demand home healthcare and elderly assistance mobile solution.",
  },
  {
    title: "AutoCure Hub",
    slug: "AutoCure_Hub",
    image: autoCureImg,
    desc: "AI-powered vehicle service management and diagnostics interface.",
  },
  {
    title: "Integrated HIMS",
    slug: "IntegratedHIMS",
    image: HIMS,
    desc: "Comprehensive hospital management system with real-time analytics.",
  },
  {
    title: "Integrated HRMS",
    slug: "IntegratedHRMS",
    image: HRMS,
    desc: "Streamlined human resource solution for modern enterprise teams.",
  },
  {
    title: "EMS + LMS",
    slug: "IntegratedEMS_LMS",
    image: EMS_LMS,
    desc: "Education & Learning Management System for smart institutions.",
  },
  {
    title: "Momo Moffin",
    slug: "Momo_Moffin",
    image: MomoMuffin,
    desc: "Effortless Fashion. Everyday Comfort. Curated for the Modern Wardrobe.",
  },
];

const serviceData = [
  {
    title: "Digital Transformation",
    image: dtImg,
    slug: "digitaltransformation",
    desc: "Driving enterprise-wide innovation with strategic digital adoption and agile execution.",
  },
  {
    title: "Product Engineering",
    image: peImg,
    slug: "productengineering",
    desc: "Designing, building, and scaling next‑gen products that fuel business evolution.",
  },
  {
    title: "Digital Marketing",
    image: dmImg,
    slug: "digitalmarketing",
    desc: "Boosting brand presence with performance‑driven and creative marketing strategies.",
  },
  {
    title: "Software Development",
    image: sdImg,
    slug: "softwaredevelopment",
    desc: "Crafting robust, scalable software tailored to meet dynamic business demands.",
  },
  {
    title: "Cloud and Infrastructure",
    image: ciImg,
    slug: "cloudinfrastructure",
    desc: "Empowering businesses with secure, scalable, and optimized cloud infrastructure solutions.",
  },
  {
    title: "IT Consulting & Staffing",
    image: itsImg,
    slug: "itconsultingstaffing",
    desc: "Delivering expert guidance and skilled professionals to support your IT objectives.",
  },
  {
    title: "Outsourcing Services",
    image: osImg,
    slug: "outsourcingservices",
    desc: "Enhancing operational efficiency through reliable and strategic outsourcing models.",
  },
  {
    title: "Advanced Tech Integration",
    image: atiImg,
    slug: "advancedtechnologyintegration",
    desc: "Integrating cutting‑edge technologies to streamline processes and drive innovation.",
  },
  {
    title: "Data Engineering",
    image: deImg,
    slug: "dataengineering",
    desc: "Building powerful data architectures for real‑time analytics and informed decisions.",
  },
];

// MissSwag theme colors
const theme = {
  bgMain: "bg-[#f7e5f7]", // light pink background
  bgAccent: "bg-[#e84e9c]", // main accent pink
  bgAccentDark: "bg-[#b8005a]", // dark accent
  bgCard: "bg-white",
  textMain: "text-[#b8005a]",
  textAccent: "text-[#e84e9c]",
  textDark: "text-[#3d003d]",
  borderAccent: "border-[#e84e9c]",
  borderAccentDark: "border-[#b8005a]",
  shadowAccent: "shadow-[#e84e9c]/30",
};

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div
      className={`${theme.bgMain} min-h-screen ${theme.textDark} overflow-x-hidden`}
    >
      {/* Hero Section with Swiper */}
      <section className="relative w-full h-[calc(100vh)] overflow-hidden ">
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
        <div className="absolute inset-0 bg-[#e84e9c]/50 z-10 flex items-center justify-center">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-4 max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-[#6b0037]">
              {
                [
                  "Welcome to MissSwag",
                  "Personalized Pregnancy Monitoring",
                  "Expert Doctors at Your Fingertips",
                  "Secure Your Baby’s Wellness",
                  "Join a Community That Cares",
                ][activeIndex]
              }
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-pink-100 mb-8">
              {
                [
                  "Your trusted partner in pregnancy care — because every mom deserves a little extra swag.",
                  "Track your health, appointments, reports & baby milestones with ease.",
                  "Connect with top gynecologists and pediatricians anytime, anywhere.",
                  "Vaccinations, test reports & vital info — all safely stored and accessible.",
                  "Engage with supportive moms and expert advice throughout your journey.",
                ][activeIndex]
              }
            </p>
            <div>
              <a
                href="#services"
                className="px-8 py-4 text-lg md:text-xl bg-pink-700 hover:bg-pink-900 transition rounded-full font-semibold shadow-lg text-white"
              >
                Explore Care Services
              </a>
            </div>
          </motion.div>

          <div className="absolute inset-0  z-10 flex items-center justify-center">
            <CrawlingBaby direction="right" speed={20} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-10 px-6 ${theme.bgMain} overflow-hidden relative bg-gradient-to-br from-[#ffe1ef] via-[#fbc2eb] to-[#f5a6d6]`}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Image Bubble Frame */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-[#e84e9c] shadow-2xl mx-auto group-hover:scale-105 transition-transform duration-500">
              <img
                src={aboutImg}
                alt="About MissSwag"
                className="w-full h-full object-cover"
              />
              {/* Glowing animated ring */}
              <div className="absolute inset-0 rounded-full border-4 border-pink-300 opacity-30 animate-pulse blur-xl pointer-events-none" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className={`relative z-10 w-full ${theme.bgCard} p-10 rounded-3xl shadow-xl border-l-8 ${theme.borderAccent} hover:shadow-pink-400/20 transition-all duration-500`}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#b8005a] mb-4 leading-tight">
                About <span className="text-[#e84e9c]">MissSwag</span>
              </h2>
              <p className="text-lg text-[#b8005a] leading-relaxed">
                <span className="font-semibold text-[#e84e9c]">MissSwag</span>{" "}
                is your compassionate digital partner on the journey of
                motherhood. Designed with love and care, we provide personalized
                tools, expert guidance, and a supportive community for every
                expecting mom.
              </p>
              <p className="mt-4 text-lg text-[#b8005a] leading-relaxed">
                From tracking your baby’s growth to managing appointments,
                health records, and wellness routines, MissSwag ensures you're
                empowered and informed — every step of the way.
              </p>
              <p className="mt-4 text-lg text-[#b8005a] italic">
                Because pregnancy is not just a phase — it's a celebration of
                life. 🌸
              </p>
            </div>
          </motion.div>
        </div>

        {/* Background floating hearts */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 opacity-20 rounded-full blur-2xl animate-blob -z-10" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300 opacity-20 rounded-full blur-2xl animate-blob animation-delay-2000 -z-10" />

        <div className="absolute inset-0  z-10 flex items-center justify-center">
          <CrawlingBaby direction="right" speed={20} />
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#e84e9c] via-[#b8005a] to-[#72064d] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Impacting Lives, Empowering Women
          </motion.h2>
          <motion.p
            className="mt-4 text-pink-100 text-md md:text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            MissSwag is committed to reducing maternal and infant mortality
            rates through access to healthcare, education, and emotional support
            for women— especially in underserved regions.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            {
              number: "12K+",
              label: "Maternal Lives Impacted",
              icon: "🧍‍♀️",
            },
            {
              number: "8K+",
              label: "Infant Health Cases Supported",
              icon: "🍼",
            },
            {
              number: "500+",
              label: "Educational Resources Provided",
              icon: "📚",
            },
            {
              number: "30+",
              label: "Remote Areas Reached",
              icon: "🌍",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="group transition duration-300 ease-in-out transform hover:shadow-2xl hover:bg-white/10 rounded-2xl p-6 border border-white/20"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-pink-100 transition">
                {item.number}
              </h3>
              <p className="text-pink-100 text-sm md:text-base">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Floating heart background accents */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-pink-300 opacity-20 rounded-full blur-3xl animate-float z-[-1]" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-300 opacity-20 rounded-full blur-3xl animate-float animation-delay-2000 z-[-1]" />
        <div className="absolute inset-0  z-10 flex items-center justify-center">
          <CrawlingBaby direction="right" speed={20} />
        </div>
      </section>

      {/* Core Services Section */}
      <section
        id="core-services"
        className="relative py-20 bg-gradient-to-br from-[#ffe1ef] via-[#fbc2eb] to-[#f5a6d6] overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-[#72094e] mb-16 text-center drop-shadow"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            🌸 Core Services
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 place-items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { title: "24/7 Medical Assistance", icon: "/icons/medical.png" },
              { title: "1-on-1 Consultation", icon: "/icons/consultation.png" },
              { title: "Baby Growth Updates", icon: "/icons/baby-growth.png" },
              { title: "Menstrual Follow-ups", icon: "/icons/menstrual.png" },
              { title: "Diet & Nutrition Plans", icon: "/icons/diet.png" },
              { title: "Vaccination Reminders", icon: "/icons/vaccine.png" },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex flex-col items-center group"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full shadow-lg border-4 border-pink-300 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="mt-4 text-[#72094e] text-center font-semibold text-lg md:text-xl">
                  {service.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="absolute inset-0  z-10 flex items-center justify-center">
          <CrawlingBaby direction="right" speed={20} />
        </div>
      </section>

      {/* Additional Support Section */}
      <section
        id="additional-support"
        className="relative py-20 bg-gradient-to-br from-[#e84e9c] via-[#b8005a] to-[#72064d] overflow-hidden text-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center drop-shadow"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            💖 Additional Support
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 place-items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { title: "Yoga & Meditation", icon: "/icons/yoga.png" },
              { title: "Emergency Services", icon: "/icons/emergency.png" },
              { title: "Online Store", icon: "/icons/shop.png" },
              { title: "Articles & Videos", icon: "/icons/articles.png" },
              { title: "PHR Management", icon: "/icons/phr.png" },
              { title: "Stem Cell Banking", icon: "/icons/stemcell.png" },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex flex-col items-center group"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 bg-white/20 backdrop-blur-xl rounded-full shadow-xl border-4 border-white/30 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="mt-4 text-white text-center font-semibold text-lg md:text-xl">
                  {service.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="absolute inset-0  z-10 flex items-center justify-center">
          <CrawlingBaby direction="right" speed={20} />
        </div>
      </section>

      {/* Product Highlights Section */}
      <section
        id="products"
        className="relative py-20 px-6 bg-gradient-to-br from-[#ffe1ef] via-[#fbc2eb] to-[#f5a6d6] overflow-hidden"
        style={{ perspective: "1200px" }}
      >
        {/* Floating Background Squares */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 25 }).map((_, i) => (
            <span
              key={i}
              className="absolute w-72 h-72 bg-[#e84e9c]/10 border border-[#e84e9c]/10 rounded-3xl blur-3xl animate-fall"
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

        {/* Section Header */}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-[#72094e] mb-16 drop-shadow"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            MissSwag Essentials 🛍️
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[
              {
                title: "Maternity Clothing",
                image: "/products/maternity-clothing.jpg",
                desc: "Comfortable and stylish apparel for moms-to-be at every stage.",
              },
              {
                title: "Supplements",
                image: "/products/supplements.jpg",
                desc: "Essential vitamins and supplements tailored for pregnancy wellness.",
              },
              {
                title: "Pregnancy Comfort Products",
                image: "/products/comfort-products.jpg",
                desc: "From pillows to belts, find the perfect products to ease your journey.",
              },
              {
                title: "Sanitary Napkins",
                image: "/products/sanitary-napkins.jpg",
                desc: "Gentle, safe, and eco-friendly hygiene products for every need.",
              },
              {
                title: "In-App Shopping",
                image: "/products/shopping-preview.jpg",
                desc: "Explore and purchase all essentials within the MissSwag mobile app.",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  rotateX: 8,
                  rotateY: -8,
                  z: 20,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.97 }}
                className="relative z-10"
              >
                <div className="group bg-white p-6 rounded-2xl border-2 border-pink-200 hover:border-[#e84e9c] transition duration-500 shadow-lg hover:shadow-pink-400/30 block">
                  <div className="relative w-32 h-32 mx-auto mb-6 animate-bob">
                    <div className="absolute inset-0 rounded-xl bg-[#e84e9c]/10 blur-xl group-hover:scale-105 transition duration-500" />
                    <img
                      src={p.image}
                      alt={p.title}
                      className="relative w-full h-full object-cover rounded-xl shadow-md"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-[#72094e] mb-3 group-hover:text-[#b8005a] transition">
                    {p.title}
                  </h3>
                  <p className="text-base text-[#5a189a] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="absolute inset-0  z-10 flex items-center justify-center">
          <CrawlingBaby direction="right" speed={20} />
        </div>
      </section>

      {/* Medical Team Section */}
      <section
        id="medical-team"
        className="py-20 px-6 bg-gradient-to-br from-[#e84e9c] via-[#b8005a] to-[#72064d] text-[#72094e]"
      >
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl text-white md:text-5xl font-extrabold mb-16"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Medical Experts 💼
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: "Dr. Anjali Verma",
                expertise: "Gynecologist & Maternal Health",
                experience: "10+ years",
                availability: "Mon - Sat | 10 AM - 6 PM",
                languages: ["English", "Hindi", "Telugu"],
                img: "/doctors/anjali.png",
              },
              {
                name: "Dr. Ramesh Iyer",
                expertise: "Pediatrician & Newborn Care",
                experience: "12+ years",
                availability: "Mon - Fri | 9 AM - 5 PM",
                languages: ["English", "Tamil"],
                img: "/doctors/ramesh.png",
              },
              {
                name: "Dr. Farah Khan",
                expertise: "Nutritionist & Women's Wellness",
                experience: "8+ years",
                availability: "Mon - Sat | 11 AM - 7 PM",
                languages: ["English", "Urdu"],
                img: "/doctors/farah.png",
              },
            ].map((doc, i) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-pink-300 hover:shadow-pink-200/50 transition transform hover:scale-[1.03]"
              >
                <div className="flex flex-col items-center gap-4">
                  {/* Doctor Photo */}
                  <div className="w-28 h-28 rounded-full overflow-hidden shadow-md border-2 border-pink-200">
                    <img
                      src={doc.img}
                      alt={doc.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Doctor Info */}
                  <h3 className="text-xl font-bold mt-2">{doc.name}</h3>
                  <p className="text-pink-700 text-sm">{doc.expertise}</p>
                  <p className="text-sm mt-1">
                    <strong>Experience:</strong> {doc.experience}
                  </p>
                  <p className="text-sm">
                    <strong>Available:</strong> {doc.availability}
                  </p>
                  <p className="text-sm">
                    <strong>Languages:</strong> {doc.languages.join(", ")}
                  </p>

                  {/* Button */}
                  <button className="mt-4 px-4 py-2 bg-[#e84e9c] text-white rounded-full hover:bg-[#b8005a] transition duration-300 text-sm shadow-md">
                    Book Consultation
                  </button>
                </div>
              </motion.div>
            ))}
            
          </div>
          
        </div>
        
        <div className="absolute inset-0  z-10 flex items-center justify-center">
          <CrawlingBaby direction="right" speed={20} />
        </div>

      </section>

      {/* Patient Module Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#ffe1ef] via-[#fbc2eb] to-[#f5a6d6] text-[#72094e]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Patient App Features 📱
          </motion.h2>

          <motion.p
            className="text-[#b8005a] mb-16 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore how the MissSwag mobile app empowers moms-to-be with tools
            to track health, access care, and stay informed every step of the
            way.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Health Dashboard",
                desc: "Track BMR, weight, height, and trimester progress in one place.",
                icon: "/icons/dashboard.png",
              },
              {
                title: "PHR & Test Records",
                desc: "Access all medical history and lab reports on the go.",
                icon: "/icons/phr.png",
              },
              {
                title: "Smart Reminders",
                desc: "Personalized health alerts, follow-ups & vaccination schedules.",
                icon: "/icons/reminder.png",
              },
              {
                title: "Nearby Diagnostics",
                desc: "Locate centers near you with price comparison and maps.",
                icon: "/icons/diagnostics.png",
              },
              {
                title: "Secure Query System",
                desc: "Ask questions with unique tracking ID and fast expert replies.",
                icon: "/icons/query.png",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#e84e9c]  text-white p-6 rounded-3xl shadow-xl hover:shadow-pink-400/40 transition transform hover:scale-[1.03] text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-2xl shadow-md flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
          
        </div>

        <div className="absolute inset-0  z-10 flex items-center justify-center">
          <CrawlingBaby direction="right" speed={20} />
        </div>
        
      </section>

      {/* Doctor Module Section */}
      <section
        id="doctor-module"
        className="py-20 px-6 bg-gradient-to-br from-[#e84e9c] via-[#b8005a] to-[#72064d] text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Doctor Module 🩺
          </motion.h2>

          <motion.p
            className="text-pink-100 mb-16 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Empowering doctors with smart tools to manage appointments, monitor
            patient history, update health records, and resolve queries
            seamlessly.
          </motion.p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {[
              {
                title: "Appointment Management",
                desc: "Track, reschedule, and manage appointments with ease.",
                icon: "/icons/appointment.png",
              },
              {
                title: "Consultation History",
                desc: "Access previous patient visits and case notes instantly.",
                icon: "/icons/history.png",
              },
              {
                title: "PHR Review & Update",
                desc: "Review patient health records and update them post-consultation.",
                icon: "/icons/phr.png",
              },
              {
                title: "Query Handling",
                desc: "View, respond, and manage patient queries efficiently.",
                icon: "/icons/query.png",
              },
              {
                title: "Profile & Schedule",
                desc: "Manage your availability, languages, and bio from one place.",
                icon: "/icons/profile.png",
              },
              {
                title: "Multilingual Support",
                desc: "Offer consultations in multiple languages for patient ease.",
                icon: "/icons/language.png",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl hover:shadow-[#5a189a]/40 transition transform hover:scale-[1.04] text-left"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-14 h-14 flex-shrink-0 bg-[#5a189a]/10 rounded-xl border border-[#5a189a]/40 flex items-center justify-center shadow-sm">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-pink-100 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating gradient orb for effect */}
        <div className="absolute bottom-[-100px] right-[-100px] w-[200px] h-[200px] rounded-full bg-[#5a189a] blur-[120px] opacity-40 -z-10" />
        <div className="absolute inset-0  z-10 flex items-center justify-center">
          <CrawlingBaby direction="right" speed={20} />
        </div>
      </section>

      <section className="py-20 bg-[#fae0ec] px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-4 text-[#5a189a]"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Live Sessions & Community 🌟
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-[#b8005a] max-w-2xl mx-auto text-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience a nurturing space where women connect, learn, and grow
            through curated live events and stories.
          </motion.p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "Workshops",
                desc: "Interactive sessions on prenatal care, parenting, yoga & wellness.",
                icon: "/icons/workshop.png",
              },
              {
                title: "Testimonials",
                desc: "Real voices of empowered mothers sharing their MissSwag journey.",
                icon: "/icons/testimonial.png",
              },
              {
                title: "Success Stories",
                desc: "Inspiring stories from pregnancy to postpartum victories.",
                icon: "/icons/success.png",
              },
              {
                title: "Mythological Stories",
                desc: "Cultural stories blended with maternal strength and tradition.",
                icon: "/icons/mythology.png",
              },
              {
                title: "Motivational Sessions",
                desc: "Empowering talks to uplift your mind and soul during the journey.",
                icon: "/icons/motivation.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#f8cde6] p-6 rounded-2xl border-l-8 border-[#5a189a] shadow-md hover:shadow-[#e84e9c]/40 transition duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#5a189a]/10 rounded-xl flex items-center justify-center border border-[#5a189a]/30 shadow">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-bold text-[#b8005a] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#72064d] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0  z-10 flex items-center justify-center">
          <CrawlingBaby direction="right" speed={20} />
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section className="bg-gradient-to-b from-[#e84e9c] to-[#b8005a] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Choose Your Plan 💼
          </motion.h2>
          <motion.p
            className="text-pink-100 mb-12 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Affordable plans designed for every mom-to-be. Choose the one that
            suits your care journey best.
          </motion.p>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {[
              {
                name: "Monthly",
                price: "₹499/mo",
                features: [
                  "24/7 Doctor Chat Access",
                  "Weekly Health Updates",
                  "Nutrition & Fitness Plans",
                ],
                icon: "/icons/calendar-month.png",
                color: "border-[#e84e9c]",
              },
              {
                name: "Yearly",
                price: "₹4999/yr",
                features: [
                  "All Monthly Features",
                  "Exclusive Webinar Invites",
                  "Priority Appointment Booking",
                ],
                icon: "/icons/calendar-year.png",
                color: "border-[#b8005a]",
              },
              {
                name: "Premium",
                price: "₹7999/yr",
                features: [
                  "All Yearly Features",
                  "Personalized Pregnancy Coach",
                  "Free Access to Online Store",
                ],
                icon: "/icons/premium.png",
                color: "border-[#5a189a]",
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`bg-white text-[#72064d] p-8 rounded-3xl shadow-xl border-4 ${plan.color} hover:shadow-[#fbc2eb]/30 transition duration-300`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#5a189a]/10 rounded-xl flex items-center justify-center border border-[#5a189a]/30 shadow">
                    <img
                      src={plan.icon}
                      alt={plan.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{plan.name} Plan</h3>
                </div>

                <p className="text-3xl font-bold text-[#b8005a] mb-4">
                  {plan.price}
                </p>

                <ul className="text-sm space-y-2 mb-6">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#5a189a]">✔</span> {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-block bg-[#5a189a] hover:bg-[#4a0f8c] text-white px-6 py-3 rounded-full font-semibold transition duration-300 shadow"
                >
                  Subscribe Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0  z-10 flex items-center justify-center">
          <CrawlingBaby direction="right" speed={20} />
        </div>
      </section>

      <section className="py-20 bg-[#fae0ec] px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-4 text-[#5a189a]"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Prototype & UI Previews 📱
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-[#b8005a] max-w-2xl mx-auto text-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Preview the mobile interface of the MissSwag platform, tailored for
            both patients and doctors — smooth, accessible, and human-first.
          </motion.p>

          {/* Screens Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Patient Home",
                desc: "A warm dashboard showing updates, baby growth, reminders, and quick actions.",
                img: "/mockups/patient-home.png",
              },
              {
                title: "Book Appointment",
                desc: "Schedule doctor consultations with live availability filters.",
                img: "/mockups/appointment.png",
              },
              {
                title: "Consultation Room",
                desc: "Chat or video call with doctors, with real-time PHR access.",
                img: "/mockups/consultation.png",
              },
              {
                title: "Doctor Dashboard",
                desc: "Doctor view for upcoming appointments, patient records & queries.",
                img: "/mockups/doctor-dashboard.png",
              },
              {
                title: "Query System",
                desc: "Every question gets a unique ID and timeline for quick follow-up.",
                img: "/mockups/query.png",
              },
              {
                title: "Health Records",
                desc: "Upload, review, and update all test reports securely.",
                img: "/mockups/phr.png",
              },
            ].map((screen, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
                className="bg-[#f8cde6] rounded-2xl p-4 border-4 border-[#5a189a] shadow-md hover:shadow-[#e84e9c]/40 transition duration-300"
              >
                <div className="w-full  bg-white rounded-xl overflow-hidden shadow-inner mb-4">
                  <img
                    src={screen.img}
                    alt={screen.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#b8005a] mb-1">
                  {screen.title}
                </h3>
                <p className="text-sm text-[#72064d] leading-relaxed">
                  {screen.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0  z-10 flex items-center justify-center">
          <CrawlingBaby direction="right" speed={20} />
        </div>
      </section>

      {/* MissSwag CTA Section */}
      <section className="bg-gradient-to-br from-[#e84e9c] via-[#b8005a] to-[#5a189a] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side Text */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
              Your Wellbeing Is Our Mission 💖
            </h2>
            <p className="text-lg text-pink-100">
              Join thousands of moms who’ve trusted MissSwag on their motherhood
              journey. We're here for you — from trimester to triumph.
            </p>
          </motion.div>

          {/* Right Side Quote + CTA */}
          <motion.div
            className="md:w-1/2 bg-white text-[#5a189a] p-8 rounded-3xl shadow-xl border-4 border-[#b8005a] text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="italic text-[#b8005a] mb-6 text-lg">
              “Empowered mothers raise empowered generations.”
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#5a189a] hover:bg-[#4a0f8c] text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow"
            >
              Talk to Our Team
            </Link>
          </motion.div>
        </div>
        <div className="absolute inset-0  z-10 flex items-center justify-center">
          <CrawlingBaby direction="right" speed={20} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
