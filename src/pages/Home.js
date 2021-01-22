import React from 'react';
import CompLocation from '../components/CompLocation';
import CompMerchandise from '../components/CompMerchandise';
import CompPromo from '../components/CompPromo/CompPromo';
import CompSocialMediaSection from '../components/CompSocialMediaSection';
import Conversation from '../components/Conversation';
import Footer from '../components/Footer';
import Herosection from '../components/Herosection';
import Navbar from '../components/Navbar/Navbar';
import ProductsHome from '../components/ProductsHome';
import Story from '../components/Story';
import TestingComponent from '../components/TestingComponent';
import '../sass/main.scss';

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Herosection />
      <Story />
      <ProductsHome />
      <Conversation />
      <CompLocation />
      <CompMerchandise />
      <CompPromo />
      <CompSocialMediaSection />
      <Footer />
    </div>
  );
};

export default Home;
