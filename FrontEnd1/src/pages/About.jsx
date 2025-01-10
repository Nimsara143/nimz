import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css"; // Import the About CSS file

const About = () => {
  return (
    <div className="landing">
      {/* Header and Navbar */}
      <div className="header">
        <div className="main-navbar">
        <img
            src="https://i.pinimg.com/736x/13/51/78/135178096493f4b756c683f7d514f78d.jpg"
            alt="Logo"
            className="navbar-logo"
          />
          <Navbar />
        </div>
      </div>

      {/* About Content */}
      <div className="about-container">
        <h1>About the Paddy Distribution System</h1>
        <p>
          The Paddy Distribution System is designed to streamline the process of monitoring
          and managing paddy distribution across various districts in Sri Lanka. Our platform
          aims to connect farmers, distributors, and government authorities in a transparent
          and efficient way.
        </p>

        {/* Objectives Section */}
        <div className="about-section">
          <h2>Our Objectives</h2>
          <ul>
            <li>Provide a real-time view of paddy stock availability in all districts.</li>
            <li>Ensure fair pricing and timely distribution of paddy.</li>
            <li>Minimize wastage and improve supply chain management.</li>
            <li>Empower farmers with direct access to market insights.</li>
          </ul>
        </div>

        {/* Benefits Section */}
        <div className="about-section key-features">
          <h2>Benefits</h2>
          <ul>
            <li>Farmers can monitor stock levels and connect with distributors.</li>
            <li>Distributors can plan better with district-level stock data.</li>
            <li>Authorities can ensure efficient stock management and reduce shortages.</li>
            <li>Users benefit from timely notifications and price insights.</li>
          </ul>
        </div>

        {/* Key Features Section */}
        <div className="about-section">
          <h2>Key Features</h2>
          <ul>
            <li>Real-time paddy stock monitoring and notifications.</li>
            <li>Dynamic bar charts for stock and price trends.</li>
            <li>User-friendly interface for farmers, distributors, and authorities.</li>
            <li>Integration with government databases for accuracy.</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="about-footer">
        <Footer />
      </div>
    </div>
  );
};

export default About;
