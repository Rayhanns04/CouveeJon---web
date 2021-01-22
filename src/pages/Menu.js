import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from 'react-router-dom';
import MenuHero from '../components/MenuHero';
import '../sass/main.scss';
import AllMenu from '../components/Menu/AllMenu';
import BasicMenu from '../components/Menu/BasicMenu';
import SignatureMenu from '../components/Menu/SignatureMenu';
import FlavoredCoffeMenu from '../components/Menu/FlavoredCoffeMenu';
import NoCoffeMenu from '../components/Menu/NoCoffeMenu';

const Menu = () => {
  let match = useRouteMatch();

  return (
    <Router>
      <div className="menu__main">
        <MenuHero />

        <div className="menu__content_container">
          <h1>PRODUCTS</h1>

          <div className="menu__content_nav">
            <NavLink
              exact
              to={match.url}
              className="menu__nav__link"
              activeClassName="menu__nav__link_active"
            >
              <h3>All</h3>
            </NavLink>

            <NavLink
              to="/menu/basic"
              className="menu__nav__link"
              activeClassName="menu__nav__link_active"
            >
              <h3>Basic</h3>
            </NavLink>

            <NavLink
              to="/menu/signature"
              className="menu__nav__link"
              activeClassName="menu__nav__link_active"
            >
              <h3>Signature</h3>
            </NavLink>

            <NavLink
              to="/menu/flavored-coffe"
              className="menu__nav__link"
              activeClassName="menu__nav__link_active"
            >
              <h3>Flavored Coffee</h3>
            </NavLink>

            <NavLink
              to="/menu/non-coffe"
              className="menu__nav__link"
              activeClassName="menu__nav__link_active"
            >
              <h3>Non-Coffee</h3>
            </NavLink>
          </div>

          <Switch>
            <Route path="/menu/non-coffe">
              <NoCoffeMenu />
            </Route>
            <Route path="/menu/flavored-coffe">
              <FlavoredCoffeMenu />
            </Route>
            <Route path="/menu/signature">
              <SignatureMenu />
            </Route>
            <Route path="/menu/basic">
              <BasicMenu />
            </Route>
            <Route path={match.url}>
              <AllMenu />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Menu;
