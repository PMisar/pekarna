import React, { useState } from 'react';

// Modal Component
const Modal = ({ onClose, productName }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{productName}</h2>
        <p>Details about {productName}...</p>
      </div>
    </div>
  );
};

// Products Component
const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  // Function to handle click on box
  const handleBoxClick = (productName) => {
    setSelectedProduct(productName);
    setShowModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="products-container" id="products">
      <div className="centered-content">
        <h2>Naše výroba</h2>
        <p>*Klikni na obrázek pro více informací</p>
      </div>
      <div className="boxes-container">
        <div className="box" onClick={() => handleBoxClick('Chléb velký')}>Chléb velký</div>
        <div className="box" onClick={() => handleBoxClick('Chléb malý')}>Chléb malý</div>
        <div className="box" onClick={() => handleBoxClick('Houska obyčejná')}>Houska obyčejná</div>
        <div className="box" onClick={() => handleBoxClick('Houska cereální')}>Houska cereální</div>
        <div className="box" onClick={() => handleBoxClick('Dalamánek')}>Dalamánek</div>
        <div className="box" onClick={() => handleBoxClick('Vánočka')}>Vánočka</div>
        <div className="box" onClick={() => handleBoxClick('Koláč')}>Koláč</div>
      </div>
      {showModal && <Modal onClose={handleCloseModal} productName={selectedProduct} />}
    </div>
  );
};

export default Products;