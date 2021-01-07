import React from 'react';
import Herosection from '../components/Herosection';
import Navbar from '../components/Navbar/Navbar';
import Story from '../components/Story';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Story />
    </div>
  );
};

export default Home;
