import React from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href=""><FaInstagram className="icon" /></a>
          <a href=""><FaYoutube className="icon" /></a>
        </div>
        <div className="contact-details">
          <p>Contact Us:</p>
          <p>Phone: 9150369313</p>
          <p>Email: juicecorner@gmail.com</p>
          <p>Website: www.juice corner .com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
