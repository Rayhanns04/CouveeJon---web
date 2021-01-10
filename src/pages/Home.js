import React from 'react';
import CompLocation from '../components/CompLocation';
import CompMerchandise from '../components/CompMerchandise';
import CompPromo from '../components/CompPromo/CompPromo';
import Conversation from '../components/Conversation';
import Herosection from '../components/Herosection';
import Navbar from '../components/Navbar/Navbar';
import ProductsHome from '../components/ProductsHome';
import Story from '../components/Story';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Story />
      <ProductsHome />
      <Conversation />
      <CompLocation />
      <CompMerchandise />
      <CompPromo />
    </div>
  );
};

export default Home;
