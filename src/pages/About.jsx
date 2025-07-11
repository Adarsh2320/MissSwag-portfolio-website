import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Rocket, Users, Lightbulb, ShieldCheck } from "lucide-react";
import logo from "../assets/logo.jpg";
import WhatsappButton from "../components/WhatsappButton";


const About = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* About Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#0f172a] to-black text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Content on Left */}
          <div className="w-full md:w-1/2 md:pr-12">
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
          </div>

          {/* Background Image on Right */}
          <div className="w-full md:w-1/2">
            <img
              src="https://www.maverickconsole.com/assets/mcs/images/portfolio/Digital.jpg"
              alt="Digital"
              className="w-full h-auto object-contain rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0f172a] to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Rocket className="w-8 h-8 text-green-400 mb-4" />,
                title: "Innovation",
                desc: "We design cutting-edge solutions that drive growth and competitive advantage.",
              },
              {
                icon: <Users className="w-8 h-8 text-green-400 mb-4" />,
                title: "People First",
                desc: "We build human-centered systems that empower teams and users alike.",
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-green-400 mb-4" />,
                title: "Integrity",
                desc: "We commit to transparency, accountability, and ethical technology.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-green-400 mb-4" />,
                title: "Trust",
                desc: "We deliver reliable, secure and scalable platforms backed by industry best practices.",
              },
            ].map((val, i) => (
              <div
                key={i}
                className="bg-[#111827] p-6 rounded-lg border border-gray-700 hover:border-green-400 transition transform hover:-translate-y-1"
              >
                {val.icon}
                <h3 className="text-xl font-semibold text-green-400 mb-2">
                  {val.title}
                </h3>
                <p className="text-gray-400 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0f172a] to-[#14532d]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-300">
            To bridge the gap between traditional systems and future-forward
            innovation through scalable, human-centric digital solutions. We aim
            to accelerate digital journeys by combining engineering excellence,
            creativity, and deep domain expertise.
          </p>
        </div>
      </section>

      {/* Team Statement Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0f172a] to-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Team & Culture</h2>
          <p className="text-lg text-gray-300">
            We are a team of engineers, strategists, creatives, and
            problem-solvers united by a shared belief in the power of
            technology. We work with agility, empathy, and relentless curiosity
            to make technology more meaningful for everyone.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-800 via-[#0f172a] to-green-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
          <p className="text-lg text-gray-100 mb-6">
            Whether you're a client, partner, or future teammate — let's build
            something impactful together.
          </p>
          <a
            href="#contact"
            className="bg-white text-green-800 px-8 py-3 rounded-full font-semibold shadow hover:shadow-lg transition hover:bg-green-100"
          >
            Contact Gamayas
          </a>
        </div>
      </section>

      <WhatsappButton />

      <Footer />
    </div>
  );
};

export default About;
