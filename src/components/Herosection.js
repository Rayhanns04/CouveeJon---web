import React from 'react';
import HeroBanner from '../assets/img/Coffeshop-2.jpg';
import TextLogo from '../assets/img/couvee-text.png';
import '../sass/main.scss';

const Herosection = () => {
  return (
    <div className="hero-container">
      <img
        src="https://www.couvee.co.id/wp-content/uploads/2019/08/hero-bg1.jpg"
        alt="hero-banner"
        className="hero-banner-img"
      />
      <img src={TextLogo} alt="text-logo" className="text-logo absolute" />
    </div>
  );
};

export default Herosection;
