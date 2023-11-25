// src/components/Projects.js
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Guitar Harmonics',
    image: 'images/GuitarHarmonics.png', // Replace with the actual path to your project image
    // githubLink: 'https://github.com/yourusername/project1',
    websiteLink: 'https://guitar-harmionics.netlify.app/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    technologies: ['React.js','TailwindCss', 'Node.js', 'MongoDB', 'Strapi'],
  },
  {
    id: 2,
    title: 'The Network',
    image: 'images/TheNetwork.png', // Replace with the actual path to your project image
    githubLink: 'https://github.com/yourusername/project1',
    websiteLink: 'https://dashing-madeleine-71eb95.netlify.app/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    technologies: ['React.js','sccs', 'Node.js',],
  },
  {
    id: 3,
    title: 'Massimo',
    image: 'images/FoodStore.png', // Replace with the actual path to your project image
    githubLink: 'https://github.com/yourusername/project1',
    websiteLink: 'https://food-store-aqjb.vercel.app/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    technologies: ['Nextjs', 'Tailwind Css'],
  },
  {
    id: 4,
    title: 'Hotel Booking website',
    image: 'images/HotelBooking.png', // Replace with the actual path to your project image
    githubLink: 'https://github.com/yourusername/project1',
    websiteLink: 'https://apsbooking.onrender.com/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    technologies: ['React.js', 'Node.js', 'MongoDB'],

  },
  {
    id: 5,
    title: 'Gericht: Resturant Website',
    image: 'images/Gericht.png', // Replace with the actual path to your project image
    githubLink: 'https://github.com/yourusername/project1',
    websiteLink: 'https://arkhopravo.github.io/NewReactJsWebsite//',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    technologies: ['React.js'],
  },
  {
    id: 6,
    title: 'APS Store',
    image: 'images/apsheadphones.png', // Replace with the actual path to your project image
    githubLink: 'https://github.com/yourusername/project1',
    websiteLink: 'https://ecommerce-one-kappa.vercel.app/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    technologies: ['Next.js', 'Sanity.io'],
  },
  {
    id: 7,
    title: 'Shareme',
    image: 'images/ShareMe.png', // Replace with the actual path to your project image
    githubLink: 'https://github.com/yourusername/project1',
    websiteLink: 'https://sharemeaps.netlify.app/login',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    technologies: ['React.js', 'Sanity.io', 'TailwindCss'],
  },
  {
    id: 8,
    title: '3D portfolio',
    image: 'images/3Dportfolio.png', // Replace with the actual path to your project image
    githubLink: 'https://github.com/yourusername/project1',
    websiteLink: 'https://arkhopravo-sarkar.netlify.app/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    technologies: ['React.js', 'Sanity.io', 'TailwindCss'],
  },
  
  // Add more projects as needed
];

const Work = () => {
  return (
    <section className="bg-gray-800 text-white py-16">
    <div className="container mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-900 p-6 rounded-lg shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="h-40 w-full object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex justify-between items-center mb-4">
              {/* <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a> */}
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Website
              </a>
            </div>
            <div className="flex space-x-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-600 py-1 px-2 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default Work;
