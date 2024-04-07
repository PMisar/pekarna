// import React, { useState } from 'react';

// // Modal Component
// const Modal = ({ onClose, productName }) => {
//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span>
//         <h2>{productName}</h2>
//         <p>Details about {productName}...</p>
//       </div>
//     </div>
//   );
// };

// // Products Component
// const Products = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState('');

//   // Function to handle click on box
//   const handleBoxClick = (productName) => {
//     setSelectedProduct(productName);
//     setShowModal(true);
//   };

//   // Function to close the modal
//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="products-container" id="products">
//       <div className="centered-content">
//         <h2>Naše výroba</h2>
//         <p>*Klikni na obrázek pro více informací</p>
//       </div>
//       <div className="boxes-container">
//         <div className="box" onClick={() => handleBoxClick('Chléb velký')}>Chléb velký</div>
//         <div className="box" onClick={() => handleBoxClick('Chléb malý')}>Chléb malý</div>
//         <div className="box" onClick={() => handleBoxClick('Houska obyčejná')}>Houska obyčejná</div>
//         <div className="box" onClick={() => handleBoxClick('Houska cereální')}>Houska cereální</div>
//         <div className="box" onClick={() => handleBoxClick('Dalamánek')}>Dalamánek</div>
//         <div className="box" onClick={() => handleBoxClick('Vánočka')}>Vánočka</div>
//         <div className="box" onClick={() => handleBoxClick('Koláč')}>Koláč</div>
//       </div>
//       {showModal && <Modal onClose={handleCloseModal} productName={selectedProduct} />}
//     </div>
//   );
// };

// export default Products;

import React, { useState } from 'react';

// Modal Component
const Modal = ({ onClose, productName, productDetails }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{productName}</h2>
        <p>{productDetails}</p>
      </div>
    </div>
  );
};

// Products Component
const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [productDetails, setProductDetails] = useState('');

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
    'Chléb velký': 'Velký klasický chléb, ideální pro celou rodinu. Obsahuje pšeničnou mouku, vodu, droždí, sůl. Alergeny: obsahuje pšeničnou mouku.',
    'Chléb malý': 'Malý klasický chléb, vhodný pro jednotlivce. Obsahuje pšeničnou mouku, vodu, droždí, sůl. Alergeny: obsahuje pšeničnou mouku.',
    'Houska obyčejná': 'Obyčejná houska, ideální pro snídani nebo svačinu. Obsahuje pšeničnou mouku, vodu, droždí, sůl. Alergeny: obsahuje pšeničnou mouku.',
    'Houska cereální': 'Houska s cereáliemi, bohatá na vlákninu a chutná. Obsahuje pšeničnou mouku, vodu, droždí, sůl, cereálie. Alergeny: obsahuje pšeničnou mouku, cereálie.',
    'Dalamánek': 'Sladký výrobek s náplní, ideální k čaji nebo kávě. Obsahuje pšeničnou mouku, cukr, máslo, droždí, sůl, náplň. Alergeny: obsahuje pšeničnou mouku, máslo.',
    'Vánočka': 'Tradiční vánoční pečivo, vhodné k oslavě svátků. Obsahuje pšeničnou mouku, cukr, máslo, droždí, sůl, sušené ovoce. Alergeny: obsahuje pšeničnou mouku, máslo, sušené ovoce.',
    'Koláč': 'Koláč s ovocnou náplní, ideální k odpolednímu čaji. Obsahuje pšeničnou mouku, cukr, máslo, droždí, sůl, ovocná náplň. Alergeny: obsahuje pšeničnou mouku, máslo.'
  };

  return (
    <div className="products-container" id="products">
      <div className="centered-content">
        <h2>Naše výroba</h2>
        <p>*Klikni na obrázek pro více informací</p>
      </div>
      <div className="boxes-container">
        {Object.keys(productsData).map(productName => (
          <div className="box" key={productName} onClick={() => handleBoxClick(productName)}>{productName}</div>
        ))}
      </div>
      {showModal && <Modal onClose={handleCloseModal} productName={selectedProduct} productDetails={productDetails} />}
    </div>
  );
};

export default Products;
