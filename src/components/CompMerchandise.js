import React from 'react';
import Tee from '../assets/img/tee.jpg';
import Bag from '../assets/img/bag.jpg';
import Mug from '../assets/img/mug.jpg';
import '../sass/main.scss';

const CompMerchandise = () => {
  return (
    <div className="mrch-main">
      <div className="mrch-container">
        <h1>MERCHANDISE</h1>

        <div className="mrch-catalog">
          <img src={Tee} alt="tee-merchandise" />
          <img src={Bag} alt="bag-merchandise" />
          <img src={Mug} alt="mug-merchandise" />
        </div>

        <div className="mrch-button">
          <button>ORDER NOW</button>
          <button>ALL ITEM</button>
        </div>
      </div>
    </div>
  );
};

export default CompMerchandise;
