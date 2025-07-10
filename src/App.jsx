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
import IntegratedEMS_LMS from "./pages/Products/IntegratedEMS_LMS";

import DigitalMarketing from "./pages/Services/DigitalMarketing";
import DigitalTransformation from "./pages/Services/DigitalTransformation";
import DataEngineering from "./pages/Services/DataEngineering";
import CloudInfrastructure from "./pages/Services/CloudInfrastructure";
import SoftwareDevelopment from "./pages/Services/SoftwareDevelopment";
import ITConsultingStaffing from "./pages/Services/ITConsultingStaffing";
import ProductEngineering from "./pages/Services/ProductEngineering";
import OutsourcingServices from "./pages/Services/OutsourcingServices";
import AdvancedTechnologyIntegration from "./pages/Services/AdvancedTechnologyIntegration";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/missswag" element={<Missswag />} />
        <Route path="/products/saathicare" element={<SaathiCare />} />
        <Route path="/products/macha" element={<Macha />} />
        <Route path="/products/integratedhims" element={<IntegratedHIMS />} />
        <Route path="/products/integratedhrms" element={<IntegratedHRMS />} />
        <Route
          path="/products/integratedems_lms"
          element={<IntegratedEMS_LMS />}
        />
        <Route
          path="/services/digitalmarketing"
          element={<DigitalMarketing />}
        />
        <Route
          path="/services/digitaltransformation"
          element={<DigitalTransformation />}
        />
        <Route path="/services/dataengineering" element={<DataEngineering />} />
        <Route
          path="/services/cloudinfrastructure"
          element={<CloudInfrastructure />}
        />
        <Route
          path="/services/softwaredevelopment"
          element={<SoftwareDevelopment />}
        />
        <Route
          path="/services/itconsultingstaffing"
          element={<ITConsultingStaffing />}
        />
        <Route
          path="/services/productengineering"
          element={<ProductEngineering />}
        />
        <Route
          path="/services/outsourcingservices"
          element={<OutsourcingServices />}
        />
        <Route
          path="/services/advancedtechnologyintegration"
          element={<AdvancedTechnologyIntegration />}
        />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
