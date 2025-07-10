// File: src/pages/Home.jsx

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import slide1 from "../assets/photo1.jpg";
import slide2 from "../assets/photo2.jpg";
import slide3 from "../assets/photo3.jpg";

import dtImg from "../assets/digital_transformation.jpg";
import dmImg from "../assets/digital_marketing.jpg";
import peImg from "../assets/product_engineering.jpg";
import deImg from "../assets/data_engineering.jpg";
import ciImg from "../assets/cloud_and_infrastructure.jpg";
import itsImg from "../assets/consulting_and_staffing.jpg";
import osImg from "../assets/outsourcing.jpg";
import sdImg from "../assets/software_development.jpg"; // <-- Add this image in your assets folder
import atiImg from "../assets/advanced_technology_integration.jpg"; // <-- Add this image in your assets folder

import missSwagImg from "../assets/products_logos/missswag.jpg";
import machaImg from "../assets/products_logos/macha.jpg";
import saathiImg from "../assets/products_logos/saathicare.jpg";
import autoCureImg from "../assets/products_logos/autocurehub.jpg";

import {
  Cpu,
  CloudLightning,
  Code,
  Database,
  Users,
  Share2,
  Zap,
  Info,
  Package,
} from "lucide-react";

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

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const serviceData = [
    {
      title: "Digital Transformation",
      image: dtImg,
      slug: "digitaltransformation",
      description:
        "Driving enterprise-wide innovation with strategic digital adoption and agile execution.",
    },
    {
      title: "Product Engineering",
      image: peImg,
      slug: "productengineering",
      description:
        "Designing, building, and scaling next-gen products that fuel business evolution.",
    },
    {
      title: "Digital Marketing",
      image: dmImg,
      slug: "digitalmarketing",
      description:
        "Boosting brand presence with performance-driven and creative marketing strategies.",
    },
    {
      title: "Software Development",
      image: sdImg, // Replace with appropriate image variable
      slug: "softwaredevelopment",
      description:
        "Crafting robust, scalable software tailored to meet dynamic business demands.",
    },
    {
      title: "Cloud and Infrastructure",
      image: ciImg,
      slug: "cloudinfrastructure",
      description:
        "Empowering businesses with secure, scalable, and optimized cloud infrastructure solutions.",
    },
    {
      title: "IT Consulting and Staffing Services",
      image: itsImg,
      slug: "itconsultingstaffing",
      description:
        "Delivering expert guidance and skilled professionals to support your IT objectives.",
    },
    {
      title: "Outsourcing Services",
      image: osImg,
      slug: "outsourcingservices",
      description:
        "Enhancing operational efficiency through reliable and strategic outsourcing models.",
    },
    {
      title: "Advanced Technology Integration",
      image: atiImg, // Replace with appropriate image variable
      slug: "advancedtechnologyintegration",
      description:
        "Integrating cutting-edge technologies to streamline processes and drive innovation.",
    },
    {
      title: "Data Engineering",
      image: deImg,
      slug: "dataengineering",
      description:
        "Building powerful data architectures for real-time analytics and informed decisions.",
    },
  ];
  

  return (
    <div className="bg-black text-white">
      <Navbar />
      {/* Hero Slider */}
      <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full w-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#0f172a]/70 z-10 flex items-center justify-center">
          <div
            key={activeIndex}
            className="text-center px-4 animate-fade-in-up transition-all duration-700"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              {slides[activeIndex].title}
            </h1>
            <p className="text-lg md:text-2xl font-medium text-green-300">
              {slides[activeIndex].subtitle}
            </p>
            <div className="mt-6">
              <a
                href="#services"
                className="px-6 py-2 bg-green-600 hover:bg-green-500 transition rounded-full font-semibold"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 bg-gradient-to-br from-[#0f172a] to-black text-white"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What is Gamayas ?
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Gamayas Digital Design Pvt. Ltd. is a Hyderabad-based IT and digital
            innovation company that builds intelligent, scalable, and
            user-centric platforms. We specialize in digital transformation, AI
            and automation, cloud-native infrastructure, and engineering
            consulting for enterprises. Our mission is to bridge the gap between
            traditional systems and next-generation technology with a
            human-first mindset, rapid prototyping, and reliable delivery.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-[#0f172a] to-black text-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Our Core Services
          </h2>

          <div className="flex flex-col gap-14">
            {serviceData.map((service, i) => (
              <Link
                to={`/services/${service.slug}`} // 👈 clickable card
                key={i}
                className={`flex flex-col md:flex-row items-center md:items-start group transition-all duration-500 hover:scale-[1.02] ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Number Badge */}
                <div className="md:w-1/5 w-full flex justify-center md:justify-center mb-6 md:mb-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center shadow-lg border-4 border-green-200 animate-pulse">
                    <span className="text-white text-3xl font-bold">
                      {i + 1}
                    </span>
                  </div>
                </div>

                {/* Service Content */}
                <div className="md:w-4/5 w-full">
                  <div
                    className={`bg-[#0f172a] px-8 py-6 rounded-2xl shadow-xl hover:shadow-green-500/30 transition-all duration-300 border-l-8 border-green-500 ${
                      i % 2 === 1 ? "md:border-r-8 md:border-l-0" : ""
                    }`}
                  >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      {/* Image */}
                      <div className="w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden border border-green-500 shadow-md">
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
                          {service.description.length > 120
                            ? service.description
                            : `${service.description} This service is tailored to empower your organization with industry-best practices, AI-enhanced tools, and secure, scalable systems.`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-24 px-6 bg-gradient-to-br from-[#0f172a] to-black text-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-fade-in-up">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
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
                desc: "Multi-vendor services platform for seamless vendor onboarding and discovery.",
              },
              {
                title: "Saathi Care",
                slug: "SaathiCare",
                image: saathiImg,
                desc: "On-demand home healthcare and elderly assistance mobile solution.",
              },
              {
                title: "AutoCure Hub",
                slug: "AutoCureHub",
                image: autoCureImg,
                desc: "AI-powered vehicle service management and diagnostics interface.",
              },
              {
                title: "Integrated HIMS",
                slug: "IntegratedHIMS",
                image: saathiImg,
                desc: "Comprehensive hospital management system with real-time analytics.",
              },
              {
                title: "Integrated HRMS",
                slug: "IntegratedHRMS",
                image: saathiImg,
                desc: "Streamlined human resource solution for modern enterprise teams.",
              },
              {
                title: "EMS + LMS",
                slug: "IntegratedEMS_LMS",
                image: saathiImg,
                desc: "Unified Emergency + Learning Management System for smart institutions.",
              },
            ].map((product, i) => (
              <Link
                key={i}
                to={`/products/${product.slug}`}
                className="group bg-[#111827] p-6 rounded-2xl border border-gray-700 hover:border-green-400 transition duration-500 transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-green-500/30 shadow-lg animate-fade-in-up"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-xl bg-green-500/10 blur-xl group-hover:scale-105 transition duration-500" />
                  <img
                    src={product.image || ""}
                    alt={product.title}
                    className="relative w-full h-full object-contain rounded-xl border border-green-500 shadow-md"
                  />
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-3 group-hover:text-green-300">
                  {product.title}
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  {product.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0f172a] to-black text-white text-center animate-gradient-x">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Let’s Build the Future, Together.
          </h2>
          <p className="text-lg text-gray-100 mb-6">
            Whether you're a startup or an enterprise, Gamayas delivers
            world-class engineering and digital strategy to help you grow
            smarter, faster.
          </p>
          <a
            href="#contact"
            className="bg-white text-green-900 px-8 py-3 rounded-full font-semibold shadow hover:shadow-lg transition hover:bg-green-100"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
