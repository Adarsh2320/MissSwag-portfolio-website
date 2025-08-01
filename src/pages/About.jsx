import React, { useState, useEffect } from "react";
import { Rocket, Users, Lightbulb, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//team images
import team1 from "../assets/team_photos/srikant.jpg";
import team2 from "../assets/team_photos/sujith.png";
import team3 from "../assets/team_photos/sarika.png";
import team4 from "../assets/team_photos/mounika.png";
import team5 from "../assets/team_photos/priyanka.png";
import team6 from "../assets/team_photos/pavan.png";
import team7 from "../assets/team_photos/jacob.jpg";
import team8 from "../assets/team_photos/juhi.png";
import team9 from "../assets/team_photos/arpan.png";
import team10 from "../assets/team_photos/adarsh.png";




import WhatsappButton from "../components/WhatsappButton";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* About Section */}
      <section className="relative py-24 px-6 mt-20 bg-gradient-to-b from-[#1e293b] to-[#111827] text-white overflow-hidden">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Yp5EkkV_52TImGEYYeB1fBAw4oycyrmTDA&s"
            alt="background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Floating Background Shapes */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float z-10" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-700/10 rounded-full blur-2xl animate-pulse z-10" />

        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 md:pr-12 hover:scale-[1.01] transition-transform duration-500"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">
              About Gamayas
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
              We are a technology company that builds intelligent platforms and
              delivers world-class digital transformation solutions, empowering
              businesses to innovate, scale, and thrive in the digital era. Our
              expertise spans cutting-edge technologies, AI-driven automation,
              cloud solutions, and data-driven strategies, enabling seamless
              experiences and measurable outcomes for our clients.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative group hover:scale-105 transition-transform duration-700"
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
      <section className="py-16 px-6 bg-gradient-to-b from-[#1e293b] to-[#111827] text-white">
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
                desc: "We design cutting-edge solutions that drive growth...",
              },
              {
                icon: <Users className="w-10 h-10 text-green-400 mb-4" />,
                title: "People First",
                desc: "We build human-centered systems...",
              },
              {
                icon: <Lightbulb className="w-10 h-10 text-green-400 mb-4" />,
                title: "Integrity",
                desc: "We commit to transparency...",
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-green-400 mb-4" />,
                title: "Trust",
                desc: "We deliver secure and scalable platforms...",
              },
            ].map((val, i) => (
              <motion.div
                key={i}
                className="relative bg-[#1f2937] p-8 rounded-2xl border border-green-500/10 hover:border-green-400 transition-all duration-300 shadow-md hover:shadow-green-500/20 group cursor-pointer"
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
      <section className="py-16 pl-32 pr-6 bg-gradient-to-b from-[#1e293b] to-[#111827] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 group max-w-md"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl border border-green-400/20">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/003/396/738/small_2x/businessman-clicks-on-virtual-screen-mission-photo.jpg"
                alt="Our Mission"
                className="w-full h-[300px] object-cover transform group-hover:scale-105 transition duration-700"
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
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              At Gamayas, we bridge the gap between traditional systems and
              future innovation by delivering scalable, human-centric digital
              solutions. We focus on modernizing legacy infrastructure with
              thoughtful engineering and user-first design.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Our mission is to accelerate digital journeys through technical
              excellence, creativity, and deep industry insight. We build
              adaptable, future-ready solutions that empower organizations to
              thrive in a rapidly evolving digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 pl-32 pr-6 md:pl-32 bg-gradient-to-b from-[#111827] to-[#1e293b] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start gap-24">
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
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We are a diverse team of engineers, strategists, creatives, and
              problem-solvers united by a shared belief in the transformative
              power of technology. Together, we bring a wide range of skills and
              perspectives that fuel innovation and drive meaningful change.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Guided by agility, empathy, and relentless curiosity, we work
              tirelessly to make technology more accessible and impactful. Our
              mission is to create solutions that truly resonate with people and
              deliver real-world value for everyone.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 group max-w-md"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl border border-green-400/20">
              <img
                src="https://thumbs.dreamstime.com/b/business-outdoor-team-teamwork-collaboration-support-concept-68410852.jpg"
                alt="Team Culture"
                className="w-full h-[300px] object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 pl-32 pr-6 md:pl-32 bg-gradient-to-b from-[#1e293b] to-[#111827] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-24">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 group max-w-md"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl border border-green-400/20">
              <img
                src="https://image.semiconductor.samsung.com/image/samsung/p6/semiconductor/about-us/our-story/pc-our-story-block-02.png?$ORIGIN_PNG$"
                alt="Our Story"
                className="w-full h-[300px] object-cover transform group-hover:scale-105 transition duration-700"
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
              that matter.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              This isn’t just our journey — it’s a shared story with our
              clients, partners, and communities. And it’s only just begun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-16 pl-64 pr-6 bg-gradient-to-b from-[#1e293b] to-[#111827] text-white overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.pinimg.com/originals/36/e4/d0/36e4d0b856694fc471344b644a1dd6e4.gif"
            alt="Timeline Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Left Description Panel */}
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              A journey through our milestones — from bold ideas to impactful
              achievements.
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
        className="py-16 px-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white"
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
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TLdbAqtzJd2i6o0TLdIxnQUzhKNKb58koA&s",
              },
              {
                tech: "Node.js",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWL-fysxok7qiB2tGursGmiJ_B08v_Za8cFQ&s",
              },
              {
                tech: "Java",
                logo: "https://thumbs.dreamstime.com/b/java-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-java-logo-editorial-illustrative-white-208329454.jpg",
              },
              {
                tech: "Python",
                logo: "https://thumbs.dreamstime.com/b/python-logo-icon-vector-logos-logo-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-jpeg-emblem-wallpaper-background-python-208329675.jpg",
              },
              {
                tech: "MySQL",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtoB0gMPQD7NsDMjZgxI8uSaosj1CzzYDzQ&s",
              },
              {
                tech: "PHP",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUXbDN6MjKqhEQLKobn2Ffg4goxiTe6xptfw&s",
              },
              {
                tech: "Microsoft .NET",
                logo: "https://seeklogo.com/images/M/microsoft-net-logo-4D9DA1DB77-seeklogo.com.png",
              },
              {
                tech: "JavaScript",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgC6vRmJVYMmS_2IqSVlnUURfI1NYe7u033A&s",
              },
              {
                tech: "React Native",
                logo: "https://4409803.fs1.hubspotusercontent-na1.net/hubfs/4409803/react-native%20%281%29.png",
              },
              {
                tech: "Joomla",
                logo: "https://docs.joomla.org/images/8/8d/Vertical-logo-dark-background-en.png",
              },
              {
                tech: "Bootstrap",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGNdkcY1HLVE6eyWzdWkFOiz0Pps-moLl6A&s",
              },
              {
                tech: "Angular",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-wnQQShczpqLhHmGImNKVTt9uAWsA93uxw&s",
              },
            ].map(({ tech, logo }) => (
              <motion.div
                key={tech}
                className="group bg-[#1f2937] border border-green-500/20 rounded-2xl p-6 flex flex-col items-center justify-center transition duration-300 shadow-md"
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
                <div className="relative w-20 h-20 mb-4 rounded-xl overflow-hidden bg-green-400/5 group-hover:shadow-lg group-hover:shadow-green-500/20 transition duration-300">
                  <img
                    src={logo}
                    alt={`${tech} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
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
        className="py-16 px-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white"
      >
        <div className="max-w-6xl mx-auto text-center">
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
                img: "https://miro.medium.com/v2/resize:fit:1000/1*2DIYWgawO1igRYOagiz_uQ.gif",
              },
              {
                title: "2. UI/UX Design",
                desc: "Our designers create clean, intuitive interfaces focused on user experience.",
                img: "https://cdn.dribbble.com/userupload/24153620/file/original-644051f8226411aebdb7df782ef56a7e.gif",
              },
              {
                title: "3. Agile Development",
                desc: "Modular, test-driven development in sprints with frequent feedback loops.",
                img: "https://go3consulting.com/wp-content/uploads/Agile-360p.gif",
              },
              {
                title: "4. QA & Deployment",
                desc: "Rigorous testing ensures reliability. We deploy with full monitoring & support.",
                img: "https://media.lordicon.com/icons/wired/flat/2591-deployment.gif",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="bg-[#1f2937] border border-green-500/10 p-6 rounded-2xl shadow-lg hover:shadow-green-500/20 group transition-all duration-300 cursor-default"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, rotateX: 1, rotateY: -1 }}
              >
                <div className="absolute inset-0 bg-green-500/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-28 h-28 mb-4 rounded-xl overflow-hidden border border-green-500 bg-green-400/5">
                    <img
                      src={step.img}
                      alt={`${step.title} icon`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-green-400 mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-center">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.a
            href="/contact"
            className="inline-block bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition"
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            Book a Free Consultation →
          </motion.a>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Leadership Team
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
            We are a group of innovators, creators, and builders committed to
            turning ideas into impactful realities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Ronith Srikanth",
                role: "Founder & CEO",
                src: team1,
              },
              {
                name: "Sujith",
                role: "CTO & Co-Founder",
                src: team2,
              },
              {
                name: "Sarika",
                role: "CFO",
                src: team3,
              },
              {
                name: "Mounika",
                role: "COO & HR",
                src: team4,
              },
              {
                name: "Pavan Sanjay",
                role: "CISO",
                src: team7,
              },
              {
                name: "Priyanka",
                role: "Tech Head",
                src: team5,
              },
              {
                name: "Jacob",
                role: "UI & UX Head",
                src: team6,
              },
              {
                name: "Juhi Desai",
                role: "Director of Marketing & Business Development (USA)",
                src: team8,
              },
              {
                name: "Arpan Vyas",
                role: "Developer",
                src: team9,
              },
              {
                name: "Adarsh Patel",
                role: "Developer",
                src: team10,
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#1f2937] rounded-3xl overflow-hidden shadow-lg hover:shadow-green-500/10 transition"
              >
                <img
                  src={member.src}
                  alt={member.name}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-4 text-left">
                  <h3 className="text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-md text-white text-gray-400">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-12 px-6 bg-gradient-to-r from-green-700 via-[#1a202c] to-green-800 text-white overflow-hidden">
        {/* Floating Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-72 h-72 bg-green-300/10 blur-3xl rounded-full top-0 left-0 animate-pulse" />
          <div className="absolute w-60 h-60 bg-green-600/10 blur-2xl rounded-full bottom-0 right-0 animate-pulse" />
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
            href="/contact"
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
