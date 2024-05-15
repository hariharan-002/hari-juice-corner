import React, { useState } from 'react';
import icon from '../Components/Assets/Screenshot_2024-05-14_135617-removebg-preview.png';
import orange from '../Components/Assets/1.jpg';
import grape from '../Components/Assets/2.jpg';
import lemon from '../Components/Assets/3.jpg';
import mango from '../Components/Assets/4.jpg';
import guava from '../Components/Assets/5.jpg';
import waterMelon from '../Components/Assets/6.jpg';
import NavBar from './NavBar';
import homeImage from '../Components/Assets/PngItem_50901.png'; // Rename the import to avoid conflict

const Lemon = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [cart, setCart] = useState([]);
  const [showHome, setShowHome] = useState(true); // Set to true initially

  const fruitImages = {
    mango: mango,
    lemon: lemon,
    orange: orange,
    guava: guava,
    'water melon': waterMelon,
    grape: grape,
  };

  const handleBuy = () => {
    if (selectedFruit) {
      setCart([...cart, selectedFruit]); 
    }
  };

  const handleCancel = () => {
    setCart([]);
  };

  const handleFruitSelect = (fruit) => {
    setSelectedFruit(fruit);
    setShowHome(false); 
  };

  return (
    <>
      <NavBar setSelectedFruit={handleFruitSelect} />
      {!selectedFruit && showHome && ( 
        <div className='home'>
          <img src={homeImage} alt="Home"  className='home-image'/>
        </div>
      )}
      {selectedFruit && (
        <div>
          <img src={fruitImages[selectedFruit]} alt={selectedFruit} className='images'/>
          <button onClick={handleBuy} className='add'>Add to Cart</button>
        </div>
      )}
      {cart.length > 0 && (
        <div className='container' style={{width:'300px'}}>
          <div className='content '>
            <h1>Cart:</h1>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button>Buy Now</button>
            <br/>
            <button onClick={handleCancel}>cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Lemon;
