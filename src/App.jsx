import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OurFleet from "./pages/OurFleet";
import Booking from "./pages/Booking";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Main Routes */}
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/our-fleet" element={<OurFleet />} /> {/* updated path */}
  <Route path="/booking" element={<Booking />} />
  <Route path="/thank-you" element={<ThankYou />} />
</Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
