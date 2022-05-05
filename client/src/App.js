import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ViewCart from "./pages/ViewCart";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Cookies from "./pages/Cookies";
import Donut from "./pages/Donuts";
import Cakes from "./pages/Cakes";

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ViewCart" element={<ViewCart />} />
            <Route path="/Cookies" element={<Cookies />} />
            <Route path="/Donuts" element={<Donut />} />
            <Route path="/Cakes" element={<Cakes />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
