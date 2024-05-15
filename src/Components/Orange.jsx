import React, { useState } from 'react';
import orange from '../Components/Assets/1.jpg';
import Home from './Home';

const Orange = () => {
  const [showImage, setShowImage] = useState(false);
  const [background ,setBackground ]=useState(false)

  const handleOpen = () => {
    setShowImage(true);
    setBackground(true)
  };

  const handleClose = () => {
    setShowImage(false);
    setBackground(false)
  };

  return (
    <>
      <div className='orange-container' onClick={handleOpen}>
        <p>orange juice</p>
        <p>Price:80</p>
      </div>
      {showImage && (
        <div className='popup' onClick={handleClose}>
          <img src={orange} alt='orange' />
        </div>
      )}
      
    </>  );
};

export default Orange;
