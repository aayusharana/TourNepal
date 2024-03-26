import "./FooterStyles.css";
import love from "./../assets/logoo.jpg"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
document.addEventListener("DOMContentLoaded", function() {
  
});

// document.getElementById("twitter-icon").addEventListener("click", function() {
//   window.open('url_here', '_blank'); 
// });

const Footer = () => {
  return (

    <div className="footer">
     
     <div style={{ display: "flex", alignItems: "center" }}>
    <img
        style={{
            width: "100px",
            height: "60px",
        }}
        src={love}
        alt="Logo"
    />
    {/* Add any other content here */}
</div>

      <div className="top">
        <div>
          <h1>NepalTour</h1>
          <p>Choose your favorite destination</p>
        </div>
        <div className="social-icons">
          <a href="/">
            <FaFacebookSquare />
          </a>
          <a href="/">
            <FaInstagramSquare />
          </a>
          <a href="/">
            <FaTwitterSquare />
          </a>
        </div>
      </div>

      <div className="bottom">
        <div className="footer-section">
          <h4>Working Links</h4>
          <a href="/">About</a>
          <a href="/">Home</a>
          <a href="/">Service</a>
          <a href="/">Contact</a>
        </div>
        <div className="footer-section">
          <h4>Community</h4>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
          <a href="/">Twitter</a>
          <a href="/">WhatsApp</a>
        </div>
        <div className="footer-section">
          <h4>Other</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
        </div>
        <div className="footer-section">
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Share</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

