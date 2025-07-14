import React, { useState } from "react";
import { Rocket, Users, Lightbulb, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import WhatsappButton from "../components/WhatsappButton";

const About = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* About Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#0f172a] to-black text-white overflow-hidden">
        {/* Floating Background Shape */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float z-0" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-700/10 rounded-full blur-2xl animate-pulse z-0" />

        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10">
          {/* Text Content with Motion */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 md:pr-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">
              About Gamayas
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
              We are a technology company that builds intelligent platforms and
              delivers world-class digital transformation solutions. At Gamayas,
              we harness innovation to empower enterprises and uplift
              communities. Our goal is to provide reliable, efficient, and
              scalable solutions that help businesses stay ahead in a rapidly
              changing digital world.
            </p>
          </motion.div>

          {/* Image with Hover Zoom + Motion */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative group"
          >
            <div className="overflow-hidden rounded-xl shadow-xl border border-green-400/20">
              <img
                src="https://www.maverickconsole.com/assets/mcs/images/portfolio/Digital.jpg"
                alt="Digital"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0f172a] to-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What We Stand For
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[
              {
                icon: <Rocket className="w-10 h-10 text-green-400 mb-4" />,
                title: "Innovation",
                desc: "We design cutting-edge solutions that drive growth and competitive advantage.",
              },
              {
                icon: <Users className="w-10 h-10 text-green-400 mb-4" />,
                title: "People First",
                desc: "We build human-centered systems that empower teams and users alike.",
              },
              {
                icon: <Lightbulb className="w-10 h-10 text-green-400 mb-4" />,
                title: "Integrity",
                desc: "We commit to transparency, accountability, and ethical technology.",
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-green-400 mb-4" />,
                title: "Trust",
                desc: "We deliver reliable, secure and scalable platforms backed by industry best practices.",
              },
            ].map((val, i) => (
              <motion.div
                key={i}
                className="relative bg-[#111827] p-8 rounded-2xl border border-green-500/10 hover:border-green-400 transition-all duration-300 shadow-md hover:shadow-green-500/20 group cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 1,
                  rotateY: -1,
                  transition: { type: "spring", stiffness: 200 },
                }}
              >
                {/* Soft Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-green-500/10 blur-lg pointer-events-none transition-all duration-500" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  {val.icon}
                  <h3 className="text-xl font-bold text-green-400 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0f172a] to-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 group"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl border border-green-400/20">
              <img
                src="https://www.freepik.com/premium-photo/businessman-clicks-virtual-screen-mission_92015619.htm#fromView=keyword&page=1&position=5&uuid=d4d1d25f-6f52-4639-bd64-d37e245f78bf&query=Our+Mission" // <-- Add image src here
                alt="Our Mission"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6 text-green-400">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              To bridge the gap between traditional systems and future-forward
              innovation through scalable, human-centric digital solutions. We
              aim to accelerate digital journeys by combining engineering
              excellence, creativity, and deep domain expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-[#0f172a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6 text-green-400">
              Our Team & Culture
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are a team of engineers, strategists, creatives, and
              problem-solvers united by a shared belief in the power of
              technology. We work with agility, empathy, and relentless
              curiosity to make technology more meaningful for everyone.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 group"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl border border-green-400/20">
              <img
                src="" // <-- Add image src here
                alt="Team Culture"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0f172a] to-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 group"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl border border-green-400/20">
              <img
                src="" // <-- Add image src here
                alt="Our Story"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6 text-green-400">
              Our Story
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Gamayas began with a simple yet powerful vision — to use
              technology not just to solve problems, but to inspire
              transformation.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              From humble beginnings, we’ve grown into a team of passionate
              thinkers, designers, and engineers committed to building solutions
              that matter. Every line of code, every design, every decision —
              all driven by our belief in building a better digital future.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              This isn’t just our journey — it’s a shared story with our
              clients, partners, and communities. And it’s only just begun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0f172a] to-black text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Left Description Panel */}
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Timeline</h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              A journey through our milestones — from bold ideas to impactful
              achievements. See how we’ve evolved over the years.
            </p>
          </div>

          {/* Right Timeline Panel */}
          <div className="md:w-2/3 space-y-12 relative">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-green-700/30 ml-[7px]" />

            {[
              {
                year: "2014",
                title: "Announcement",
                desc: "We launched with a mission to build human‑centered platforms focused on innovation and impact.",
              },
              {
                year: "2016",
                title: "Expansion",
                desc: "Scaled our team and started working with clients globally in multiple domains.",
              },
              {
                year: "2018",
                title: "Milestone",
                desc: "Introduced AI‑driven modules and began work on large enterprise projects.",
              },
              {
                year: "2022",
                title: "Transformation",
                desc: "Rebranded with a new vision, new team, and a commitment to build tech that empowers communities.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1 w-4 h-4 bg-green-500 rounded-full shadow-lg" />

                {/* Content */}
                <h4 className="text-green-400 font-semibold text-2xl">
                  {item.year}
                </h4>
                <h5 className="text-white font-bold text-xl mb-1">
                  {item.title}
                </h5>
                <p className="text-gray-300 text-base leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section
        id="technologies"
        className="py-24 px-6 bg-gradient-to-b from-[#0f172a] to-black text-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Technologies We Work With
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {[
              {
                tech: "React",
                logo: "https://e7.pngegg.com/pngimages/581/350/png-clipart-react-javascript-library-github-github-symmetry-web-application-thumbnail.png",
              },
              {
                tech: "Node.js",
                logo: "https://e7.pngegg.com/pngimages/416/280/png-clipart-node-js-express-js-javascript-redis-mean-node-js-angle-text-thumbnail.png",
              },
              {
                tech: "Java",
                logo: "https://e7.pngegg.com/pngimages/405/878/png-clipart-java-logo-java-runtime-environment-computer-icons-java-platform-standard-edition-java-miscellaneous-text-thumbnail.png",
              },
              {
                tech: "Python",
                logo: "https://e7.pngegg.com/pngimages/447/294/png-clipart-python-javascript-logo-clojure-python-logo-blue-angle-thumbnail.png",
              },
              {
                tech: "MySQL",
                logo: "https://e7.pngegg.com/pngimages/747/798/png-clipart-mysql-mysql-thumbnail.png",
              },
              {
                tech: "PHP",
                logo: "https://e7.pngegg.com/pngimages/184/491/png-clipart-php-php-thumbnail.png",
              },
              {
                tech: "Microsoft .NET",
                logo: "https://e7.pngegg.com/pngimages/105/481/png-clipart-net-framework-software-framework-programmer-computing-platform-microsoft-corporation-7s-framework-example-blue-text-thumbnail.png",
              },
              {
                tech: "JavaScript",
                logo: "https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text-thumbnail.png",
              },
              {
                tech: "React Native",
                logo: "https://e7.pngegg.com/pngimages/541/179/png-clipart-react-native-logo-tech-companies-thumbnail.png",
              },
              {
                tech: "Joomla",
                logo: "https://e7.pngegg.com/pngimages/269/742/png-clipart-joomla-content-management-system-web-design-web-development-logo-web-design-web-design-search-engine-optimization-thumbnail.png",
              },
              {
                tech: "Bootstrap",
                logo: "https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail.png",
              },
              {
                tech: "Angular",
                logo: "https://e7.pngegg.com/pngimages/14/568/png-clipart-angularjs-logo-javascript-security-token-angle-triangle-thumbnail.png",
              },
            ].map(({ tech, logo }) => (
              <motion.div
                key={tech}
                className="group bg-[#111827] border border-green-500/20 rounded-2xl p-6 flex flex-col items-center justify-center transition duration-300 shadow-md"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 1,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                {/* Logo Container */}
                <div className="relative w-20 h-20 mb-4 rounded-xl overflow-hidden border border-green-500 bg-green-400/5 group-hover:shadow-lg group-hover:shadow-green-500/20 transition duration-300">
                  <img
                    src={logo}
                    alt={`${tech} logo`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Tech Name */}
                <span className="text-lg font-semibold text-green-300">
                  {tech}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section
        id="methodology"
        className="py-24 px-6 bg-gradient-to-b from-[#0f172a] to-black text-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Development Methodology
          </motion.h2>

          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            We combine Agile principles with deep tech expertise to deliver
            scalable, user-centric solutions. Our collaborative process ensures
            clarity, speed, and continuous innovation at every step.
          </p>

          {/* Steps Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {[
              {
                title: "1. Ideation & Planning",
                desc: "We start by deeply understanding your business needs and defining clear goals.",
              },
              {
                title: "2. UI/UX Design",
                desc: "Our designers create clean, intuitive interfaces focused on user experience.",
              },
              {
                title: "3. Agile Development",
                desc: "Modular, test-driven development in sprints with frequent feedback loops.",
              },
              {
                title: "4. QA & Deployment",
                desc: "Rigorous testing ensures reliability. We deploy with full monitoring & support.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="bg-[#111827] border border-green-500/10 p-6 rounded-2xl shadow-lg hover:shadow-green-500/20 group transition-all duration-300 cursor-default"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, rotateX: 1, rotateY: -1 }}
              >
                <div className="relative">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-green-500/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-center">
                    {/* Image Placeholder */}
                    <div className="w-16 h-16 mb-4 rounded-xl overflow-hidden border border-green-500 bg-green-400/5">
                      <img
                        src="" // ← Add image URL here
                        alt={`${step.title} icon`}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-green-400 mb-2 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed text-center">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.a
            href="#contact"
            className="inline-block bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition"
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            Book a Free Consultation →
          </motion.a>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0f172a] to-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
            We are a group of innovators, creators, and builders committed to
            turning ideas into impactful realities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "John Carter",
                role: "CEO & Co-Founder",
                src: "", // ← Add image URL here
              },
              {
                name: "Sophie Moore",
                role: "Community Lead",
                src: "", // ← Add image URL here
              },
              {
                name: "Alex Turner",
                role: "Operations",
                src: "", // ← Add image URL here
              },
              {
                name: "Alex Johnson",
                role: "Developer",
                src: "", // ← Add image URL here
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#111827] rounded-3xl overflow-hidden shadow-lg hover:shadow-green-500/10 transition"
              >
                <img
                  src={member.src}
                  alt={member.name}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#0f172a] text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Investors</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
            We are proudly backed by industry-leading investors who believe in
            our mission and vision.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {["Company", "Company", "Company", "Company", "Company"].map(
              (name, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 px-6 py-3 bg-[#1f2937] rounded-full text-white font-semibold text-base shadow hover:shadow-green-400/20 transition"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="" // ← Add investor logo URL
                    alt="Investor"
                    className="w-5 h-5 object-contain"
                  />
                  {name}
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-green-800 via-[#0f172a] to-green-900 text-white overflow-hidden">
        {/* Floating Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-72 h-72 bg-green-400/10 blur-3xl rounded-full top-0 left-0 animate-pulse" />
          <div className="absolute w-60 h-60 bg-green-700/10 blur-2xl rounded-full bottom-0 right-0 animate-pulse" />
        </div>

        <motion.div
          className="max-w-4xl mx-auto relative z-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
            Join Us on Our Journey
          </h2>
          <p className="text-lg text-gray-100 mb-10 max-w-2xl mx-auto">
            Whether you're a client, partner, or future teammate — let’s build
            something impactful together. The future of digital innovation
            starts with a conversation.
          </p>

          <motion.a
            href="#contact"
            className="inline-block bg-white text-green-800 px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-green-400/30 transition relative"
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contact Gamayas →
          </motion.a>
        </motion.div>
      </section>

      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default About;
