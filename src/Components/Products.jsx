import React, { useState } from 'react';
import orange from '../Components/Assets/1.jpg'

const Product = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>    <div className="product-container-1">
      <div className="pc1" onClick={handleShow}>
        <h2>Orange</h2>
        <p>Discount: 20%</p>
        <p>Price: $2.00</p>
        <p><s>Original Price: $2.50</s></p>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content" onClick={handleClose}>
            <span className="close" onClick={handleClose}>&times;</span>
            <img src={orange} alt="Orange"/>
          </div>
        </div>
      )}
    </div>
    </>

  );
};

export default Product;
