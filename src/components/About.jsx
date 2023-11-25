// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-400 text-gray-700 py-16">
      <div className="container mx-auto p-4 lg:p-8 bg-gray-300 shadow-lg rounded-lg">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">About Me</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 pr-0 lg:pr-8">
            <p className="text-gray-700 mb-4">
              Hi, I'm Arkhopravo Sarkar, a passionate Full Stack Developer based in Kolkata.
              I am an ambitious and dedicated computer science and engineering fresher with a strong passion for technology and software development.
              I am actively seeking opportunities to apply and expand my knowledge in a professional setting.
            </p>
            <p className="text-gray-700">
              I have a solid foundation in web development and a keen interest in learning and adapting to new technologies with dedication.
              My goal is to contribute to innovative projects and create meaningful solutions that make a positive impact.
            </p>
          </div>
          <div className="lg:w-1/2 mt-4 lg:mt-0">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">Skills</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>JavaScript (Reactjs, Nextjs, Node.js, React Native)</li>
              <li>HTML5, CSS3 (Sass/SCSS)</li>
              <li>MongoDB, Express.js</li>
              <li>RESTful API Development</li>
              <li>Git, GitHub</li>
              <li>Firebase</li>
              <li>Figma(Designing app and website model)</li>
              <li>Canva</li>
              <li>Blender(3D model making)</li>
              <li>C/C++, Java, python3 (Academics Learning)</li>
              <li>SQL (Basic) </li>
              <li>Flutter Development</li>
              <li>Adobe Photoshop and Adobe Lightroom</li>
              
              {/* Add more skills as needed */}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl lg:text-2xl font-bold mb-4">Education</h3>
          <p className="text-gray-700 mb-2">Bachelor of Technology in Computer Science and Engineering</p>
          <p className="text-gray-700">Gargi Memorial Institute Of Technology, 2023-24</p>
        </div>
        <div className="mt-8">
        <p className="text-gray-700 mb-2">Higer Secondary Education from The Scottish Church Collegiate School, 2020</p>
          
        </div>
      </div>
    </section>
  );
};

export default About;
