import React from 'react';
import ServiceHero from '../service/Service-Hero';
import ServiceList from '../service/Service-List';
import ServiceChoose from '../service/Service-Choose';

const Service = () => {
  return (
    <div className="relative min-h-screen">
      <main>
        <ServiceHero />
        <ServiceList />
        <ServiceChoose />
      </main>
    </div>
  );
};

export default Service;
