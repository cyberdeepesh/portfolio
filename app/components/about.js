import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-gray-900 py-16 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/3 relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
          <Image src="/mypic.jpg" alt="My Picture" layout="fill" objectFit="cover" />
        </div>
        <div className="md:w-1/6 text-center md:text-left mb-8 md:mb-0"></div>
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">DEEPESH KUMAR</h1>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-blue-500">FULL STACK DEVELOPER</h2>
          <p className="text-xl text-justify md:text-2xl mb-8">Skilled web developer experienced in creating engaging user experiences and innovative digital solutions. Proficient in frameworks like Django and Next.JS. Strong problem-solving skills and attention to detail. Committed to staying current with industry trends. Seeking opportunities to contribute to dynamic organizations.</p>

          <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-xl md:text-2xl font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out inline-flex items-center">
            Contact Me <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
