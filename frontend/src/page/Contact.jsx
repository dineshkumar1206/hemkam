import React from 'react';
import ContactHero from '../contact/Contact-Hero';
import ContactForm from '../contact/Contact-Form';

const Contact = () => {
  return (
    <div className="relative min-h-screen">
      <main>
        <ContactHero />
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;
