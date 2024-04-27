import React from 'react';

const Projects = () => {
  return (
    <section id='projects' className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hospital Management System */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Hospital Management System</h3>
              <p className="text-gray-200">Streamline healthcare operations seamlessly with our comprehensive solution, facilitating efficient patient record management, appointment scheduling, and staff coordination.</p>
            </div>
          </div>
          {/* Inventory Management System */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Inventory Management System</h3>
              <p className="text-gray-200">Elevate your online retail experience with a robust platform, enabling secure transactions, intuitive product browsing, and personalized user interactions for a seamless shopping journey.</p>
            </div>
          </div>
          {/* CMS */}
          <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">CMS</h3>
              <p className="text-gray-200">Empower content creators with a dynamic platform, simplifying content publishing, organization, and customization, fostering a user-friendly environment for content management.</p>
            </div>
          </div>
          {/* E-Auction Management */}
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">E-Auction Management</h3>
              <p className="text-gray-200">Revolutionize the auction process with our digital platform, offering a transparent and competitive environment for buyers and sellers, enhancing the efficiency and accessibility of online auctions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
