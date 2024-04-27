import React from 'react';

const Skills = () => {
  return (
    <section id='skills' className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* HTML + CSS + JS */}
          <div className="rounded-lg bg-gray-800 p-6">
            <div className="text-center bg-gray-700 rounded-lg shadow-md overflow-hidden py-8">
              <h3 className="text-xl font-semibold mb-4 text-white">HTML + CSS + JS</h3>
              <p className="text-gray-300">Solid understanding of front-end web technologies.</p>
            </div>
          </div>
          {/* Python */}
          <div className="rounded-lg bg-gray-800 p-6">
            <div className="text-center bg-gray-700 rounded-lg shadow-md overflow-hidden py-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Python</h3>
              <p className="text-gray-300">Proficient in Python programming language.</p>
            </div>
          </div>
          {/* Django */}
          <div className="rounded-lg bg-gray-800 p-6">
            <div className="text-center bg-gray-700 rounded-lg shadow-md overflow-hidden py-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Django</h3>
              <p className="text-gray-300">Experience with Django framework for web development.</p>
            </div>
          </div>
          {/* React JS and Next JS */}
          <div className="rounded-lg bg-gray-800 p-6">
            <div className="text-center bg-gray-700 rounded-lg shadow-md overflow-hidden py-8">
              <h3 className="text-xl font-semibold mb-4 text-white">React JS and Next JS</h3>
              <p className="text-gray-300">Proficient in React JS and Next JS for building dynamic web applications.</p>
            </div>
          </div>
          {/* Node JS and Express JS */}
          <div className="rounded-lg bg-gray-800 p-6">
            <div className="text-center bg-gray-700 rounded-lg shadow-md overflow-hidden py-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Node JS and Express JS</h3>
              <p className="text-gray-300">Experience with Node JS and Express JS for server-side development.</p>
            </div>
          </div>
          {/* SQL and NoSQL */}
          <div className="rounded-lg bg-gray-800 p-6">
            <div className="text-center bg-gray-700 rounded-lg shadow-md overflow-hidden py-8">
              <h3 className="text-xl font-semibold mb-4 text-white">SQL and NoSQL</h3>
              <p className="text-gray-300">Familiar with both SQL and NoSQL databases.</p>
            </div>
          </div>
          
          {/* Node JS and Express JS */}
          <div className="rounded-lg bg-gray-800 p-6">
            <div className="text-center bg-gray-700 rounded-lg shadow-md overflow-hidden py-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Designing in CAnva</h3>
              <p className="text-gray-300">Experience with canva for better designs and development.</p>
            </div>
          </div>
          
          {/* Node JS and Express JS */}
          <div className="rounded-lg bg-gray-800 p-6">
            <div className="text-center bg-gray-700 rounded-lg shadow-md overflow-hidden py-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Troubleshooting</h3>
              <p className="text-gray-300">Have Intermidiate Troubleshooting skills.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
