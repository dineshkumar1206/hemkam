import React from 'react';
import AbtHero from '../about/Abt-Hero';
import AbtChoose from '../about/Abt-choose';

const About = () => {
  return (
    <div className="relative min-h-screen">
      <main>
        <AbtHero />
        <AbtChoose />
      </main>
    </div>
  );
};

export default About;
