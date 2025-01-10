import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";
import Stock from "./pages/stock";
import Price from "./pages/price";
import Rank from "./pages/rank";
import Contact from "./pages/Contact";
import { useState } from "react";
import './App.css'

const App = () => {
  const [userProfile, setUserProfile] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/rank" element={<Rank />} />
        <Route path="/price" element={<Price />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/login" element={<Login setUserProfile={setUserProfile} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Landing userProfile={userProfile} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default App;
