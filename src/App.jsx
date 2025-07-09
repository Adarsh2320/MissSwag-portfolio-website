import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./styles/navbarAnimation.css";
import Missswag from "./pages/Products/Missswag";
import SaathiCare from "./pages/Products/SaathiCare";
import Macha from "./pages/Products/Macha";
import IntegratedHIMS from "./pages/Products/IntegratedHIMS";
import IntegratedHRMS from "./pages/Products/IntegratedHRMS";
import AutoCareHub from "./pages/Products/AutoCareHub";
import IntegratedEMS_LMS from "./pages/Products/IntegratedEMS_LMS";
import DigitalMarketing from "./pages/Services/DigitalMarketing";




export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/missswag" element={<Missswag />} />
        <Route path="/products/autocarehub" element={<AutoCareHub />} />
        <Route path="/products/saathicare" element={<SaathiCare />} />
        <Route path="/products/macha" element={<Macha />} />
        <Route path="/products/integratedhims" element={<IntegratedHIMS />} />
        <Route path="/products/integratedhrms" element={<IntegratedHRMS />} />
        <Route path="/products/integratedems_lms" element={<IntegratedEMS_LMS />} />
        <Route path="/services/digitalmarketing" element={<DigitalMarketing />} />

        {/* Add more routes as needed */}

      </Routes>
    </Router>
  );
}
