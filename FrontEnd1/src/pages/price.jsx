import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PriceChart from "../components/PriceChart";

function PriceChanging() {
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
                <h1>Price Changing</h1>
                <p>
                    This page displays the latest price changes for paddy in various
                    districts.
                </p>


                <div className="chart-container" style={{ marginTop: "20px" }}>
                    <PriceChart />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default PriceChanging;
