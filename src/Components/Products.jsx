import React, { useState } from "react";
import chlebVelkyImage from "../assets/chlebvelky.png";
import chlebMalyImage from "../assets/chlebmaly.png";
import dalamanekImage from "../assets/dalamanek.png";
import houskaImage from "../assets/houska.png";
import houskaCelozrnaImage from "../assets/houskacelozrna.png";
import kolacImage from "../assets/kolac.png";
import kolac2Image from "../assets/kolac2.png";
import vanockaImage from "../assets/vanocka.png";

// Modal Component
const Modal = ({ onClose, productName, productDetails }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{productName}</h2>
        <p>{productDetails}</p>
      </div>
    </div>
  );
};

// Products Component
const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [productDetails, setProductDetails] = useState("");

  // Function to handle click on box
  const handleBoxClick = (productName) => {
    setSelectedProduct(productName);
    setProductDetails(productsData[productName]);
    setShowModal(true);
  };

  // Function to close the modal
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
    "Koláč hranatý":
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
    "Koláč hranatý": kolac2Image,
  };

  return (
    <div className="products-container" id="products">
      <div className="centered-content">
        <h2>Naše výroba</h2>
        <p>*Klikni na obrázek pro více informací</p>
      </div>
      <div className="boxes-container">
        {Object.keys(productsData).map((productName) => (
          <div
            className="box"
            key={productName}
            onClick={() => handleBoxClick(productName)}
          >
            <img src={productImages[productName]} alt={productName} />
            <div>{productName}</div>
          </div>
        ))}
      </div>

      {showModal && (
        <Modal
          onClose={handleCloseModal}
          productName={selectedProduct}
          productDetails={productDetails}
        />
      )}
    </div>
  );
};

export default Products;
