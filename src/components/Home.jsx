// src/components/Home.js
import React from 'react';
import Navbar from './Navbar';
const Home = () => {
  return (
    <main>
        <Navbar/>
    <section className="bg-gray-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center">
        <div className="text-center lg:mr-8 mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-blue-500">Hi, I'm Arkhopravo Sarkar</h1>
          <div className="bg-gray-800 p-6 rounded-lg max-w-md">
            <p className="text-sm lg:text-base text-gray-300">
              I am an ambitious and dedicated computer science and engineering fresher with a strong passion for <span className="text-blue-400">technology</span> and <span className="text-blue-400">software development</span>. I am actively seeking opportunities to apply and expand my knowledge in a professional setting. Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals.
            </p>
            <div className="mt-4 border-t border-gray-600 pt-4">
              <p className="text-sm text-gray-400">Let's connect and build something amazing together!</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <img
            src="images/MyPhoto.jpg" // Replace with the actual path to your image
            alt="Arkhopravo Sarkar"
            className="h-80 lg:h-60 w-48 lg:w-60 lg:h-96 object-cover mx-auto mb-4 rounded-full"
          />
          <p className="text-center text-sm lg:text-base text-gray-300">Web Developer</p>
        </div>
      </div>
    </section>
    </main>
  );
};

export default Home;
