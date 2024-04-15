import React from "react";
import phoneIcon from "../assets/telefon.png";
import emailIcon from "../assets/posta.png";
import locationIcon from "../assets/adresa.png";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-boxes">
        <div className="left-box">
          <h2>Kontakt</h2>
          <h3>PEKÁRNA VĚTRNÝ JENÍKOV</h3>
          <p>
            <img src={phoneIcon} alt="Phone icon" /> +420 775 771 030
          </p>
          <p>
            <img src={emailIcon} alt="Email icon" /> pekarna@vetrnyjenikov.cz
          </p>
          <p>
            <img src={locationIcon} alt="Location icon" /> Větrný Jeníkov 34, 588 42 Větrný Jeníkov, Česko
          </p>
        </div>
        <div className="right-box">
          <h2>Napište nám</h2>
          <form>
            <div>
              <label htmlFor="name">Jméno:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="name">Telefonní číslo:</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div>
              <label htmlFor="message">Zpráva:</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
            <button type="submit">Odeslat</button>
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