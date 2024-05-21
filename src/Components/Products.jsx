import React, { useState } from "react";
import chlebVelkyImage from "../assets/chlebvelky.png";
import chlebMalyImage from "../assets/chlebmaly.png";
import dalamanekImage from "../assets/dalamanek.jpg";
import houskaImage from "../assets/houska.jpg";
import houskaCelozrnaImage from "../assets/houskacelozrna.jpg";
import kolacImage from "../assets/kolac.jpg";
import kolac2Image from "../assets/kolac2.jpg";
import vanockaImage from "../assets/vanocka.png";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleBoxHover = (productName) => {
    setSelectedProduct(productName);
    setProductDetails(productsData[productName]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const productsData = {
    "Chléb velký":
      "Velký klasický chléb, ideální pro celou rodinu. Obsahuje pšeničnou mouku, vodu, droždí, sůl. Alergeny: obsahuje pšeničnou mouku.",
    "Chléb malý":
      "Malý klasický chléb, vhodný pro jednotlivce. Obsahuje pšeničnou mouku, vodu, droždí, sůl. Alergeny: obsahuje pšeničnou mouku.",
    "Houska obyčejná":
      "Obyčejná houska, ideální pro snídani nebo svačinu. Obsahuje pšeničnou mouku, vodu, droždí, sůl. Alergeny: obsahuje pšeničnou mouku.",
    "Houska cereální":
      "Houska s cereáliemi, bohatá na vlákninu a chutná. Obsahuje pšeničnou mouku, vodu, droždí, sůl, cereálie. Alergeny: obsahuje pšeničnou mouku, cereálie.",
    Dalamánek:
      "Sladký výrobek s náplní, ideální k čaji nebo kávě. Obsahuje pšeničnou mouku, cukr, máslo, droždí, sůl, náplň. Alergeny: obsahuje pšeničnou mouku, máslo.",
    Vánočka:
      "Tradiční vánoční pečivo, vhodné k oslavě svátků. Obsahuje pšeničnou mouku, cukr, máslo, droždí, sůl, sušené ovoce. Alergeny: obsahuje pšeničnou mouku, máslo, sušené ovoce.",
    Koláč:
      "Koláč s ovocnou náplní, ideální k odpolednímu čaji. Obsahuje pšeničnou mouku, cukr, máslo, droždí, sůl, ovocná náplň. Alergeny: obsahuje pšeničnou mouku, máslo.",
    "Koláč čtvercový":
      "Koláč s ovocnou náplní, ideální k odpolednímu čaji. Obsahuje pšeničnou mouku, cukr, máslo, droždí, sůl, ovocná náplň. Alergeny: obsahuje pšeničnou mouku, máslo.",
  };

  const productImages = {
    "Chléb velký": chlebVelkyImage,
    "Chléb malý": chlebMalyImage,
    "Houska obyčejná": houskaImage,
    "Houska cereální": houskaCelozrnaImage,
    Dalamánek: dalamanekImage,
    Vánočka: vanockaImage,
    Koláč: kolacImage,
    "Koláč čtvercový": kolac2Image,
  };

  return (
    <div className="products-container" id="products">
      <div className="centered-content">
        <h2>Naše výroba</h2>
        <p>*Najeď na obrázek pro více informací</p>
      </div>
      <div className="boxes-container">
        {Object.keys(productsData).map((productName) => (
          <div className="box-container" key={productName}>
            <div
              className="box"
              onMouseEnter={() => handleBoxHover(productName)}
              onMouseLeave={handleCloseModal}
            >
              <div className="front">
                <img src={productImages[productName]} alt={productName} />
                <div className="product-name">{productName}</div>
              </div>

              <div className="back">
                <p>{productsData[productName]}</p>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;