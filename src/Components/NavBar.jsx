import React, { useState, useEffect, useRef } from 'react';
import icon from '../Components/Assets/Screenshot_2024-05-14_135617-removebg-preview.png';

const NavBar = ({ setSelectedFruit }) => {
  const [showAbout, setShowAbout] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setShowAbout(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFruitSelect = (event) => {
    setSelectedFruit(event.target.value);
  };

  const toggleAbout = () => {
    setShowAbout((prev) => !prev);
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <img src={icon} className='icon' alt='icon' />
          </li>
          <li>
            <select onChange={handleFruitSelect} defaultValue="lemon">
              <option value='mango'>Mango</option>
              <option value='lemon'>Lemon</option>
              <option value='orange'>Orange</option>
              <option value='guava'>Guava</option>
              <option value='water melon'>Water Melon</option>
              <option value='grape'>Grape</option>
            </select>
          </li>
          <li className='nav-item dropdown'>
            <button className="dropbtn" onClick={toggleAbout}>About</button>
            {showAbout && (
              <div className='dropdown-content-1' ref={aboutRef}>
                <h1>About Juice Corner</h1>
                <b><p>
                  Juice Corner has been serving delicious and refreshing juices since 2020. We are committed to using only the freshest fruits to create our juices, ensuring that every sip is bursting with flavor and nutrition.
                </p>
                <p>
                  Our mission is to promote healthy living and wellness through our range of juices and smoothies. Whether you're looking for a refreshing pick-me-up or a nutritious boost, Juice Corner has something for everyone.
                </p></b>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
