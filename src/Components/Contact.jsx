import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import phoneIcon from "../assets/telefon.png";
import emailIcon from "../assets/posta.png";
import locationIcon from "../assets/adresa.png";

const Contact = () => {
  const leftBoxRef = useRef(null);
  const rightBoxRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/controllers/sendEmailController",
        formData
      );
      alert("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    }
  };

  const handleScroll = () => {
    const leftBoxElement = leftBoxRef.current;
    const rightBoxElement = rightBoxRef.current;

    if (leftBoxElement && rightBoxElement) {
      const leftBoxTop = leftBoxElement.getBoundingClientRect().top;
      const rightBoxTop = rightBoxElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (leftBoxTop < windowHeight) {
        leftBoxElement.classList.add("fade-left");
      }
      if (rightBoxTop < windowHeight) {
        rightBoxElement.classList.add("fade-right");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="contact-container" id="contact">
      <div className="contact-boxes">
        <div className="left-box" ref={leftBoxRef}>
          <h2>Kontakt</h2>
          <h3>PEKÁRNA VĚTRNÝ JENÍKOV</h3>
          <p>
            <img src={phoneIcon} alt="Ikona telefonu" />{" "}
            <a href="tel:+420111222333" className="phone-link">
              +420 111 222 333
            </a>
          </p>
          <p>
            <img src={emailIcon} alt="Ikona obálky" />{" "}
            <a href="mailto:example@vetrnyjenikov.cz" className="email-link">
              example@vetrnyjenikov.cz
            </a>
          </p>
          <p>
            <img src={locationIcon} alt="Ikona lokace" /> Větrný Jeníkov 34, 588
            42 Větrný Jeníkov, Česko
          </p>
          <p>IČO: 12312312</p>
          <p>DIČ: CZ12341234</p>
        </div>
        <div className="right-box" ref={rightBoxRef}>
          <h2>Napište nám</h2>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="name">Jméno:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="subject">Předmět:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="message">Zpráva:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="fixed-textarea"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>{" "}
            </div>
            <button type="submit">Odeslat</button>
            <div id="reCaptcha-container"> 
            <ReCAPTCHA sitekey={import.meta.env.VITE_SITE_KEY} />
            </div>
            <p style={{ fontSize: "18px", textAlign: "center" }}>
              Vložením osobních údajů souhlasíte s podmínkami ochrany osobních
              údajů.
            </p>
          </form>
        </div>
      </div>
      <div className="iframe-container">
        <iframe
          className="iframe-style"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.5127904506326!2d15.477510726404008!3d49.47481985712936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d1dad88204109%3A0xfae42dcc1541e14c!2zUGVrw6FybmEgVsSbdHJuw70gSmVuw61rb3Y!5e0!3m2!1scs!2sde!4v1712083585540!5m2!1scs!2sde"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Contact;
