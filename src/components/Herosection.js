import React from 'react';
import HeroBanner from '../assets/img/Coffeshop-2.jpg';
import TextLogo from '../assets/img/couvee-text.png';
import '../sass/main.scss';

const Herosection = () => {
  return (
    <>
      <div className="hero-banner">
        <img
          src={HeroBanner}
          alt="hero-banner"
          className="hero-banner-img"
        ></img>
        <img src={TextLogo} alt="text-logo" className="text-logo absolute" />
      </div>
    </>
  );
};

export default Herosection;
