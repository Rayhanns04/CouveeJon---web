import React from 'react';
import CompLocation from '../components/CompLocation';
import CompMerchandise from '../components/CompMerchandise';
import CompPromo from '../components/CompPromo/CompPromo';
import CompSocialMediaSection from '../components/CompSocialMediaSection';
import Conversation from '../components/Conversation';
import Herosection from '../components/Herosection';
import ProductsHome from '../components/ProductsHome';
import Story from '../components/Story';
import '../sass/main.scss';

const Home = () => {
  return (
    <div>
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
