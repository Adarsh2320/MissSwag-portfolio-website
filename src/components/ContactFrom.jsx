import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gamayaspvtltd@gmail.com",
        "template_vcjwxch",
        form.current,
        "eIRq1AJUBkFFee5U6"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative py-12 px-6 bg-gradient-to-br from-[#1a2535] to-[#111827] text-white text-center overflow-hidden"
    >
      {/* Background image with 30% opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1683134214022-86fae451864d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2V0JTIwaW4lMjB0b3VjaHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          We’re Ready When You Are
        </h2>
        <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
          Let’s collaborate and bring your vision to life. Connect with us today
          for tailored digital strategies and intelligent tech.
        </p>

        <motion.div
          className="max-w-4xl mx-auto bg-[#192230] p-10 rounded-xl shadow-md border border-[#293546]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-white text-2xl font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Get in touch
          </motion.h2>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
                label: "NAME",
                name: "name",
                type: "text",
                placeholder: "Full Name",
              },
              {
                label: "EMAIL",
                name: "email",
                type: "email",
                placeholder: "email@example.com",
              },
              {
                label: "SUBJECT",
                name: "subject",
                type: "text",
                placeholder: "How can we help?",
                colSpan: true,
              },
            ].map(({ label, name, type, placeholder, colSpan }) => (
              <motion.div
                key={name}
                className={`${colSpan ? "md:col-span-2" : ""} flex flex-col`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <label className="text-white mb-2 text-md text-left">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  required
                  className="bg-[#1b2735] text-white p-3 rounded-full border border-[#444] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 hover:ring-2 hover:ring-green-500 transition-all duration-300"
                />
              </motion.div>
            ))}

            {/* Message */}
            <motion.div
              className="md:col-span-2 flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <label className="text-white mb-2 text-md text-left">
                MESSAGE
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="bg-[#1b2735] text-white p-3 rounded-lg border border-[#444] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 hover:ring-2 hover:ring-green-500 transition-all duration-300"
              />
            </motion.div>

            {/* Button */}
            <motion.div
              className="md:col-span-2"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 flex items-center justify-center gap-3 bg-green-600 text-white text-lg py-3 px-8 rounded-full hover:bg-green-700 transition"
              >
                <FaPaperPlane className="text-xl" />
                Send Message
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
