import React from 'react';
import CompLocation from '../components/CompLocation';
import CompMerchandise from '../components/CompMerchandise';
import CompPromo from '../components/CompPromo/CompPromo';
import CompSocialMediaSection from '../components/CompSocialMediaSection';
import Conversation from '../components/Conversation';
import Herosection from '../components/Herosection';
import Navbar from '../components/Navbar/Navbar';
import ProductsHome from '../components/ProductsHome';
import Story from '../components/Story';
import '../sass/main.scss';

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
      <CompSocialMediaSection />
    </div>
  );
};

export default Home;
