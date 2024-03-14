import "./FooterStyles.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>NepalTour</h1>
          <p>choose your favourite destination</p>
        </div>
        <div>
          <a href="/">
            <i>
              <FaFacebookSquare />
            </i>
          </a>
          <a href="/">
            <i>
              <FaInstagramSquare />
            </i>
          </a>
          <a href="/">
            <i>
              <FaTwitterSquare />
            </i>
          </a>
        </div>
      </div>

      <div className="buttom">
        
        <div>
          <h4>working Links</h4>
          <a href="/">About</a>
          <a href="/">Home</a>
          <a href="/">Service</a>
          <a href="/">Contact</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Facebook</a>
          <a href="/">Intagram</a>
          <a href="/">Twitter</a>
          <a href="/">whatApp</a>
        </div>
        <div>
          <h4>Other</h4>
          <a href="/">Term of Service</a>
          <a href="/">Privacy Policy</a>
        
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">support</a>
          <a href="/">share</a>
          <a href="/"></a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
