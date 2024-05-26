import React, { useState, useEffect } from 'react';
import './stitching.css';

const StitchWoman = () => {
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  useEffect(() => {
    const storedImageUrl = localStorage.getItem('selectedImageUrl');
    if (storedImageUrl) {
      setSelectedImageUrl(storedImageUrl);
    }
  }, []);

  const handleImageClick = (imgSrc) => {
    setSelectedImageUrl(imgSrc);
    localStorage.setItem('selectedImageUrl', imgSrc);
  };

  const handlePlaceOrder = () => {
    if (selectedImageUrl) {
      window.location.href = 'http://localhost:3000/place-order';
    }
  };

  return (
    <div className="App">
      <div className="heading">
        <h1>Stitching for Women</h1>
      </div>

      <div className="content">
        <section id="rates">
          <img src="images/rate.jpeg" alt="Rate" />
        </section>
        <section id="section2">
          <div className="gallery">
            {Array.from({ length: 14 }, (_, i) => (
              <img
                key={i}
                src={`images/${i + 1}.jpeg`}
                alt={`Picture ${i + 1}`}
                className="gallery-img"
                onClick={() => handleImageClick(`images/${i + 1}.jpeg`)}
              />
            ))}
          </div>
          <button
            id="place-order-button"
            onClick={handlePlaceOrder}
            disabled={!selectedImageUrl}
          >
            Place Order
          </button>
        </section>
      </div>
    </div>
  );
};

export default StitchWoman;
