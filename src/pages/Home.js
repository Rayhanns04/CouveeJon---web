import React from 'react';
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
      {/* <Conversation /> */}
    </div>
  );
};

export default Home;
