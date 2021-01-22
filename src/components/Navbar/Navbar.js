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
      <div>
        <div
          className={
            navbarSticky ? 'nav__options__outer active' : 'nav__options__outer'
          }
        >
          <div className="nav-options">
            <Link>
              <FiIcons.FiInstagram
                className={
                  navbarSticky ? 'instagram-icon active' : 'instagram-icon'
                }
                color={navbarSticky ? '#FFFF' : 'black'}
              />
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
              <FaIcons.FaBars
                className={
                  navbarSticky ? 'nav-bars-icon active' : 'nav-bars-icon'
                }
                color={navbarSticky ? '#FFFF' : 'black'}
              />
            </Link>
          </div>
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
                <li key={index} className="nav__menu__each__items__container">
                  <NavLink
                    exact
                    to={item.path}
                    onClick={() => setSideShow(false)}
                    className="nav__menu__items"
                    activeClassName="nav__menu__items__active"
                  >
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
