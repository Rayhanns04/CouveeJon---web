import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavbarData } from './NavbarData';
import * as FaIcons from 'react-icons/fa';
import * as GoIcons from 'react-icons/go';
import * as FiIcons from 'react-icons/fi';
import Logo from '../../assets/img/logo-text.png';
import '../../sass/main.scss';

const Navbar = () => {
  const [sideShow, setSideShow] = useState(false);
  const [navbarSticky, setNavbarSticky] = useState(false);

  const showSidebar = () => {
    setSideShow(!sideShow);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarSticky(true);
    } else {
      setNavbarSticky(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <div className="nav-container">
        <div
          className={
            navbarSticky
              ? 'nav-options active flex justify-between m-auto items-center'
              : 'nav-options flex justify-between m-auto items-center'
          }
        >
          <Link>
            <FiIcons.FiInstagram className="instagram-icon" />
          </Link>
          <Link to="#" className="logo">
            <img
              src={Logo}
              alt="logo-couveejon"
              className={
                navbarSticky ? 'logo-couveejson active' : 'logo-couveejson'
              }
            />
          </Link>
          <Link to="#" className="nav-bars" onClick={showSidebar}>
            <FaIcons.FaBars className="nav-bars-icon" />
          </Link>
        </div>
        {/* Sidetop ---------------------------- */}
        <nav className={sideShow ? 'nav-menu active' : 'nav-menu'}>
          <Link to="#" className="nav-toggle" onClick={showSidebar}>
            <GoIcons.GoX className="nav-close" />
          </Link>

          <ul className="nav-menu-items">
            <li>
              <Link to="#">
                <img src={Logo} alt="logo-couveejon" className="overlay-logo" />
              </Link>
            </li>

            {NavbarData.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={item.path}>
                    <div className="nav-line-active"></div>
                    <p className="nav-title">{item.title}</p>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
