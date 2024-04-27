import React from 'react';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Skills from './components/skills';
import Footer from './components/footer';
import CTA from './components/cta';
import Edu from './components/edu';

const Portfolio = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <main className="px-4 sm:px-6 lg:px-8">
        <About />
        <Skills />
        <CTA />
        <Projects />
        <Edu />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
