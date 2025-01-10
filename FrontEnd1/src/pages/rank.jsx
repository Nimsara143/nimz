import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./rank.css"; // Import the CSS file

const Ranking = () => {
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    // Mock data for district stock levels
    const data = [
      { district: "Polonnaruwa", stock: 250, type: "Samba", lastUpdated: "2024-12-10" },
      { district: "Anuradhapura", stock: 230, type: "Nadu", lastUpdated: "2024-12-11" },
      { district: "Ampara", stock: 220, type: "Samba", lastUpdated: "2024-12-09" },
      { district: "Kurunegala", stock: 200, type: "Nadu", lastUpdated: "2024-12-12" },
      { district: "Hambantota", stock: 190, type: "Red Rice", lastUpdated: "2024-12-08" },
      { district: "Matara", stock: 180, type: "Samba", lastUpdated: "2024-12-11" },
      { district: "Gampaha", stock: 170, type: "Samba", lastUpdated: "2024-12-10" },
      { district: "Kandy", stock: 160, type: "Red Rice", lastUpdated: "2024-12-09" },
      { district: "Jaffna", stock: 150, type: "Nadu", lastUpdated: "2024-12-11" },
      { district: "Trincomalee", stock: 140, type: "Samba", lastUpdated: "2024-12-10" },
    ];

    // Sort districts by stock levels in descending order and select top 10
    const sortedData = data.sort((a, b) => b.stock - a.stock).slice(0, 10);
    setDistricts(sortedData);
  }, []);

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
        <h1>District Rankings</h1>
        <p>Top 10 districts ranked by paddy stock levels:</p>
        <table className="ranking-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>District</th>
              <th>Stock (MT)</th>
              <th>Paddy Type</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {districts.map((district, index) => (
              <tr key={index}>
                <td>#{index + 1}</td>
                <td>{district.district}</td>
                <td>{district.stock}</td>
                <td>{district.type}</td>
                <td>{district.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

export default Ranking;
