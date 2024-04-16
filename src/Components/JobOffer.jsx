import React, { useRef, useEffect } from "react";
import RollerImage from "../assets/job-offer-image.jpg";

const JobOffer = () => {
  const textRef = useRef(null);
  const part2Ref = useRef(null);

  const handleScroll = () => {
    const textElement = textRef.current;
    const part2Element = part2Ref.current;

    if (textElement && part2Element) {
      const textTop = textElement.getBoundingClientRect().top;
      const part2Top = part2Element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (textTop < windowHeight) {
        textElement.classList.add("fade-right");
      }
      if (part2Top < windowHeight) {
        part2Element.classList.add("fade-left");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="job-offer-container" id="job-offer">
      <div className="job-offer-text">
        <h2>Nabídka práce</h2>
        <div className="color-background">
          <h3 ref={textRef}>🍞 Pekař Hledán! 🍞</h3>
          <p ref={textRef}>
            Přijmeme do našeho týmu zaměstnance na <b>hlavní pracovní poměr</b>! Pokud máte
            rádi výzvy a chcete být součástí kreativního prostředí, máme pro vás
            skvělou příležitost.
          </p>
        </div>
      </div>
      <div className="job-offer-part2">
        <div className="job-offer-text2" ref={part2Ref}>
          <h3>Požadujeme:</h3>
          <ul>
            <li>Manuální zručnost</li>
            <li>Ochota učit se nové věci</li>
            <li>Fyzická zdatnost výhodou</li>
            <li>Nepožadujeme vzdělání v oboru, vše tě naučíme</li>
          </ul>
          <h3>Nabízíme:</h3>
          <ul>
            <li>Stabilní pracovní prostředí</li>
            <li>Příspěvek na dopravu a pracovní oblečení</li>
            <li>Každý den čerstvné pečivo domů</li>
          </ul>
          <p>
            Pokud máte zájem připojit se k nám, zašlete nám svůj životopis a
            stručný dopis motivace na naši e-mailovou adresu:{" "}
            <a href="mailto:pekarna@vetrnyjenikov.cz">
              pekarna@vetrnyjenikov.cz
            </a>
            . Těšíme se na setkání s vámi a na společné pečení chutných dobrot!
            🥖🍰
          </p>
        </div>
        <div className="right-image">
          <img src={RollerImage} alt="Roller Image" />
        </div>
      </div>
    </div>
  );
};

export default JobOffer;
