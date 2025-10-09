import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./pages/Home";
import HairExtension from "./pages/HairExtension";
import EyelashExtension from "./pages/EyelashExtension";
import SemiPermanentEyebrow from "./pages/SemiPermanentEyebrow";
import MakeupArt from "./pages/MakeupArt";
import BridalServices from "./pages/BridalServices";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <Router>
      <CssBaseline />
      <header>
        <ResponsiveAppBar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hair-extension" element={<HairExtension />} />
          <Route path="/eyelash-extension" element={<EyelashExtension />} />
          <Route path="/semi-permanent-eyebrow" element={<SemiPermanentEyebrow />} />
          <Route path="/makeup-art" element={<MakeupArt />} />
          <Route path="/bridal-services" element={<BridalServices />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer style={{ textAlign: "center", padding: "20px", background: "#111", color: "white" }}>
        © 2025 Unique Beauty Parlour. All Rights Reserved.
      </footer>
    </Router>
  );
}

export default App;