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
        <div className="box" onClick={() => handleBoxClick('Croissant')}>Croissant</div>
        <div className="box" onClick={() => handleBoxClick('Baguette')}>Baguette</div>
        <div className="box" onClick={() => handleBoxClick('Sourdough Bread')}>Sourdough Bread</div>
        <div className="box" onClick={() => handleBoxClick('Sourdough Bread')}>Sourdough Bread</div>
        <div className="box" onClick={() => handleBoxClick('Sourdough Bread')}>Sourdough Bread</div>
        <div className="box" onClick={() => handleBoxClick('Sourdough Bread')}>Sourdough Bread</div>
        <div className="box" onClick={() => handleBoxClick('Sourdough Bread')}>Sourdough Bread</div>
        <div className="box" onClick={() => handleBoxClick('Sourdough Bread')}>Sourdough Bread</div>
        <div className="box" onClick={() => handleBoxClick('Sourdough Bread')}>Sourdough Bread</div>
        {/* Add more boxes with different bakery products */}
      </div>
      {showModal && <Modal onClose={handleCloseModal} productName={selectedProduct} />}
    </div>
  );
};

export default Products;
