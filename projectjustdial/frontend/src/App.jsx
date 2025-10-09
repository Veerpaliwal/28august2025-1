import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

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
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer style={{ textAlign: "center", padding: "20px", background: "#111", color: "white" }}>
        © 2025 Unique Beauty Parlour. All Rights Reserved.
      </footer>
    </Router>
  );
}

export default App;
