import React from 'react';

const Education = () => {
  return (
    <section id="education" className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education Card 1 */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Bachelor of Computer Application</h3>
              <p className="text-gray-400">Guru Nanak Dev University</p>
              <p className="text-gray-400">Location: Amritsar, Punjab, India</p>
              <p className="text-gray-400">Year: 2020 - 2023</p>
            </div>
          </div>
          {/* Education Card 2 */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Masters of Computer Application</h3>
              <p className="text-gray-400">Guru Nanak Dev University</p>
              <p className="text-gray-400">Location: Amritsar, Punjab, India</p>
              <p className="text-gray-400">Year: 2023 - 2025</p>
            </div>
          </div>
          {/* Education Card 3 */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">5 Year Diploma in Music</h3>
              <p className="text-gray-400">Pracheen Kala Kendra</p>
              <p className="text-gray-400">Location: Chandigarh, India</p>
              <p className="text-gray-400">Year: 2018 - 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
