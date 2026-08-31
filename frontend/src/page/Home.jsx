import React from 'react';
import Hero from '../home/Hero';
import HomeAbt from '../home/Home-Abt';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      
      <main>
        <Hero />
        <HomeAbt />
      </main>
    </div>
  );
};

export default Home;
