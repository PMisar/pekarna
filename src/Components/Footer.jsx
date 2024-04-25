import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>© 2024 Pekárna Větrný Jeníkov s.r.o. | Vytvořil <a href="https://pavelmisar.netlify.app/" target="_blank" rel="noopener noreferrer">Pavel Misař</a></p>
      <div>
        <Link to="/privacy-policy">
          <button>Zásady zpracování osobních údajů</button>
        </Link>
        <Link to="/cookies-policy">
          <button>Podmínky používání cookies</button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;