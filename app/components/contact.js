import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Contact Me</h2>
            <p className="text-gray-200 mb-6">Feel free to reach out to me through any of the following channels:</p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a8 8 0 00-8 8c0 3.301 2.891 7.051 7.04 12.185a.725.725 0 001.12 0C17.109 17.051 20 13.301 20 10a8 8 0 00-8-8zm0 2a6 6 0 00-6 6c0 2.598 2.082 5.548 6 9.566 3.918-4.018 6-6.968 6-9.566a6 6 0 00-6-6z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 11a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-200">Chheharta, Amritsar, Punjab, 143105</p>
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a8 8 0 00-8 8c0 3.301 2.891 7.051 7.04 12.185a.725.725 0 001.12 0C17.109 17.051 20 13.301 20 10a8 8 0 00-8-8zm0 2a6 6 0 00-6 6c0 2.598 2.082 5.548 6 9.566 3.918-4.018 6-6.968 6-9.566a6 6 0 00-6-6z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 11a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-200">kumardeepesh159@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a8 8 0 00-8 8c0 3.301 2.891 7.051 7.04 12.185a.725.725 0 001.12 0C17.109 17.051 20 13.301 20 10a8 8 0 00-8-8zm0 2a6 6 0 00-6 6c0 2.598 2.082 5.548 6 9.566 3.918-4.018 6-6.968 6-9.566a6 6 0 00-6-6z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 11a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-200">+91 9115 783 676</p>
              </div>
            </div>
          </div>
          <div>
            <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline h-32 bg-gray-700"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
