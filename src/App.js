import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Menu from './pages/Menu';

// Rafce
const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
};

export default App;
