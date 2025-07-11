// File: src/components/WhatsappButton.jsx

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "+917057058841"; // Replace with your number
  const message = "Hi! I visited your website and need some help.";

  const whatsappLink = `https://wa.me/${phoneNumber.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-400 hover:bg-green-600 text-white p-5 rounded-full shadow-lg shadow-green-400/30 transition-all duration-300 animate-bounce"
      aria-label="Chat on WhatsApp"
    > 
      <FaWhatsapp size={48} />
    </a>
  );
};

export default WhatsappButton;
