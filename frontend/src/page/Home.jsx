import React from 'react';
import Hero from '../home/Hero';
import HomeAbt from '../home/Home-Abt';
import HomeChoose from '../home/Home-choose';
import HomeSkills from '../home/Home-Skills';
import HomeTeam from '../home/Home-team';
import HomeCP from '../home/Home-CP';
import HomeOP from '../home/Home-OP';
import HomeFAQ from '../home/Home-FAQ';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <main>
        <Hero />
        <HomeAbt />
        <HomeChoose />
        <HomeSkills />
        <HomeTeam />
        <HomeCP />
        <HomeOP />
        <HomeFAQ />
      </main>
    </div>
  );
};

export default Home;
