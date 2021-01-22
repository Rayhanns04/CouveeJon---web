import React from 'react';
import Logo from '../assets/img/logo-black.png';
import * as FiIcons from 'react-icons/fi';
import '../sass/main.scss';

const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div className="footer-center">
          <div className="footer-container">
            <img src={Logo} alt="logo" className="footer-logo" />
            <div className="links-container">
              <h6>LINKS</h6>

              <div className="link-ul">
                <div>
                  <p>Homepage</p>
                  <p>Story</p>
                  <p>Menu</p>
                </div>
                <div>
                  <p>Location</p>
                  <p>Merchandise</p>
                  <p>Contact</p>
                </div>
              </div>
            </div>

            <div className="contact-container">
              <h6>CONTACTS</h6>
              <p>Hello@couvee.co.id</p>
            </div>

            <div className="footer-sosmed-container">
              <h6>SOCIALS</h6>
              <div className="footer-instagram">
                <FiIcons.FiInstagram />
                <p>couvee.idn</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-container">
          <div className="footer-bottom">
            <p>© 2020 CouveeJon</p>
            <p>Designed by KukuhAldy and developed by Hans</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
