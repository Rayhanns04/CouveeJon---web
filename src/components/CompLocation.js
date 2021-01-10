import React from 'react';
import '../sass/main.scss';
import * as BsIcons from 'react-icons/bs';

const CompLocation = () => {
  return (
    <>
      <div>
        <div className="location-container">
          <div className="location-left">
            <h1 className="location-title">LOCATIONS</h1>
            <p className="location-text">
              Couvee has 5 branches, four are located in Yogyakarta and one is
              located in Jakarta.
            </p>
            <button className="location-button">
              <p>ALL LOCATIONS</p>
              <BsIcons.BsArrowRight />
            </button>
          </div>
          <div className="location-img">
            <img
              src="https://www.couvee.co.id/wp-content/uploads/2019/07/decoration-2.jpg"
              alt="decoration-2"
              className="comp-location-dcr-2"
            />
            <img
              src="https://www.couvee.co.id/wp-content/uploads/2019/07/locations.jpg"
              alt="location-img"
            />
            <img
              src="https://www.couvee.co.id/wp-content/uploads/2019/07/decoration-5.jpg"
              alt="decoration-1"
              className="comp-location-dcr-1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompLocation;
