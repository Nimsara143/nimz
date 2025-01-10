import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css"; // Import the CSS for styling

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Header */}
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

      {/* Main Content */}
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          <h3>Have questions?</h3>
          <br></br>Reach out to us via email at{" "}
          <strong>animsara04@gmail.com</strong> or call us at{" "}
          <strong>+94 76 7794 738</strong>.
        </p>
        <p>
          <strong>ඔබේ ගැටලු අප වෙතින් විමසීමට ඉහත දුරකතන අංකය භාවිතා කරන්න.</strong>
        </p>
        <h2>හෙලෝ! කොහොමද? කොහෙද ඉන්නෙ?</h2>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
