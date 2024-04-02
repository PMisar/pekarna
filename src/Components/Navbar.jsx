// Navbar.jsx
import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-links-container">
        <button onClick={() => scrollToSection("about")}>O nás</button>
        <button onClick={() => scrollToSection("history")}>Historie</button>
        <button onClick={() => scrollToSection("products")}>Produkty</button>
        <button onClick={() => scrollToSection("job-offer")}>Nabídka práce</button>
        <button onClick={() => scrollToSection("retailers")}>Odběratelé</button>
        <button onClick={() => scrollToSection("contact")}>Kontakt</button>
      </div>
    </nav>
  );
};

export default Navbar;
