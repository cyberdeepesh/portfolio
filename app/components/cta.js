import React from 'react';

const CTA = () => {
  return (
    <section id="cta" className="bg-gray-900 py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Next Project?</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">Let&apos;s work together and bring your ideas to life!</p>
        <a href="#contact" className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 md:py-4 md:px-10 rounded-full shadow-lg transition duration-300 ease-in-out">Contact Me</a>
      </div>
    </section>
  );
};

export default CTA;
