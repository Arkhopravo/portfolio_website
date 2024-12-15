// src/components/Home.js
import React from 'react';
import Navbar from './Navbar';
const Home = () => {
  return (
    <main>
        <Navbar/>
    <section className=" min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center gap-16 items-center">
        <div className="text-center lg:mr-8 mb-8 lg:mb-0">
          <h1 className="text-2xl font-extrabold mb-4 text-black">Hi, I'm Arkhopravo Sarkar</h1>
          <div className="border p-6 rounded-lg max-w-md shadow-lg">
            <p className="text-sm lg:text-base text-black">
              I am an ambitious and dedicated computer science and engineering fresher with a strong passion for <span className="text-black">technology</span> and <span className="text-blue-400">software development</span>. I am actively seeking opportunities to apply and expand my knowledge in a professional setting. Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals.
            </p>
            <div className="mt-4 border-t border-gray-600 pt-4">
              <p className="text-sm text-gray-600">Let's connect and build something amazing together!</p>
            </div>
          </div>
        </div>
        <div className=" p-6 rounded-lg">
          <img
            src="images/profile.jpg" // Replace with the actual path to your image
            alt="Arkhopravo Sarkar"
            className="h-80 sm:h-60 w-48 lg:w-60 lg:h-96 object-cover mx-auto mb-4 rounded-[4px] shadow-md  "
          />
          <p className="text-center text-sm lg:text-base text-black">Full Stack Developer</p>
        </div>
      </div>
    </section>
    </main>
  );
};

export default Home;
