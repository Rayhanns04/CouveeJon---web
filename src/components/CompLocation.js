import React from 'react';
import '../sass/main.scss';
import * as BsIcons from 'react-icons/bs';

const CompLocation = () => {
  return (
    <div className="lct-main">
      <div className="lct-container">
        <div className="lct-left">
          <h1 className="lct-title">LOCATIONS</h1>
          <p className="lct-text">
            Couvee has 5 branches, four are located in Yogyakarta and one is
            located in Jakarta.
          </p>
          <button className="lct-button">
            <p>ALL LOCATIONS</p>
            <BsIcons.BsArrowRight />
          </button>
        </div>

        <div className="lct-right">
          <img
            src="https://www.couvee.co.id/wp-content/uploads/2019/07/decoration-2.jpg"
            alt="decoration-2"
            className="sty-dcr-2"
          />
          <img
            src="https://www.couvee.co.id/wp-content/uploads/2019/07/locations.jpg"
            alt="location-img"
          />
        </div>
        <img
          src="https://www.couvee.co.id/wp-content/uploads/2019/07/decoration-5.jpg"
          alt="decoration-1"
          className="sty-dcr-1"
        />
      </div>
    </div>
  );
};

export default CompLocation;
