import React from 'react';
import Logo from '../assets/img/logo-black.png';
import '../sass/main.scss';

const CompSocialMediaSection = () => {
  return (
    <>
      <div className="home-scm-container">
        <img src={Logo} alt="CouveeJon" />
        <h1>FIND US ON INSTAGRAM!</h1>
      </div>
    </>
  );
};

export default CompSocialMediaSection;
