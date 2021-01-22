import React from 'react';
import '../sass/main.scss';
import HeroBanner from '../assets/img/menu-banner.png';

const MenuHero = () => {
  return (
    <div className="menu__hero">
      <img src={HeroBanner} alt="hero-banner" className="menu__hero_banner" />
      <div className="menu__hero_text">
        <p>MENU</p>
        <div />
      </div>
    </div>
  );
};

export default MenuHero;
