import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurFleet from "./pages/OurFleet";
import Booking from "./pages/Booking";
import ThankYou from "./pages/ThankYou";
import CarDetails from "./pages/CarDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Footer from "./components/Footer";
import MyCart from "./pages/MyCart";


function App() {
  const [user, setUser] = useState(() => JSON.parse(sessionStorage.getItem("user")));

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <Router>
      {user && <Navbar />}
      <Routes>
        {!user && <Route path="/" element={<Login setUser={setUser} />} />}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/mycart" element={user ? <MyCart /> : <Login setUser={setUser} />} />
        <Route path="/home" element={user ? <Home /> : <Login setUser={setUser} />} />
        <Route path="/ourfleet" element={user ? <OurFleet /> : <Login setUser={setUser} />} />
        <Route path="/booking" element={user ? <Booking /> : <Login setUser={setUser} />} />
        <Route path="/cardetails" element={<CarDetails />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/account" element={<Account setUser={setUser} />} />
      </Routes>
      {user && <Footer />}
    </Router>
  );
}

export default App;
