import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const StockLevel = () => {
  return (
    <div className="landing">
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

      <div className="main-landing">
        <h1>Stock Level By District</h1>
        <p>This page displays the stock levels of paddy in each district.</p>
      </div>

      <Footer />
    </div>
  );
};

export default StockLevel;
