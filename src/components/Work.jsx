import React from 'react';
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

const projects = [
  {
    id: 1,
    title: 'Guitar Harmonics',
    image: 'images/GuitarHarmonics.png',
    websiteLink: 'https://guitar-webservices.vercel.app/',
    description: 'Open source guitar tutorial website for multiple purposes. Users can tune their guitars, practice with a metronome, and shop for musical instruments.',
    technologies: ['NextJs','TailwindCss', 'Node.js','Stripe', 'MongoDB'],
  },
  {
    id: 2,
    title: 'The Network',
    image: 'images/TheNetwork.png',
    githubLink: 'https://github.com/yourusername/the-network',
    websiteLink: 'https://dashing-madeleine-71eb95.netlify.app/',
    description: 'Social media website with fantastic UI design featuring user authentication, dark and light mode, and post details.',
    technologies: ['React.js','SCSS', 'Node.js'],
  },
  {
    id: 3,
    title: 'Massimo',
    image: 'images/FoodStore.png',
    githubLink: 'https://github.com/yourusername/massimo',
    websiteLink: 'https://food-store-aqjb.vercel.app/',
    description: 'Online pizza and burger delivery website with awesome UI design using Next.js 13. Clean and observable code implementation.',
    technologies: ['Nextjs', 'Tailwind Css'],
  },
  {
    id: 4,
    title: 'Hotel Booking website',
    image: 'images/HotelBooking.png',
    githubLink: 'https://github.com/yourusername/hotel-booking',
    websiteLink: 'https://apsbooking.onrender.com/',
    description: 'MERN stack hotel booking website with user authentication and hotel details across India and worldwide. Built with SASS, React, MongoDB, and Node.js.',
    technologies: ['React.js', 'Node.js', 'MongoDB'],
  },
  {
    id: 5,
    title: 'Gericht: Restaurant Website',
    image: 'images/Gericht.png',
    githubLink: 'https://github.com/yourusername/gericht',
    websiteLink: 'https://arkhopravo.github.io/NewReactJsWebsite/',
    description: 'First React.js website focusing on frontend UI design and development. Modern restaurant website with menu cards, descriptions, address, and contact details.',
    technologies: ['React.js'],
  },
  {
    id: 6,
    title: 'APS Store',
    image: 'images/apsheadphones.png',
    githubLink: 'https://github.com/yourusername/aps-store',
    websiteLink: 'https://ecommerce-one-kappa.vercel.app/',
    description: 'First e-commerce website using Next.js and Sanity.io. Focuses on frontend UI design with full shopping functionality and Stripe payment processing.',
    technologies: ['Next.js', 'Sanity.io', 'Stripe'],
  },
  {
    id: 7,
    title: 'Shareme',
    image: 'images/ShareMe.png',
    githubLink: 'https://github.com/yourusername/shareme',
    websiteLink: 'https://sharemeaps.netlify.app/login',
    description: 'Social media photo library where users can share photography with others. A fantastic platform for connecting photographers.',
    technologies: ['React.js', 'Sanity.io', 'TailwindCss'],
  },
  {
    id: 8,
    title: '3D Portfolio',
    image: 'images/3Dportfolio.png',
    githubLink: 'https://github.com/yourusername/3d-portfolio',
    websiteLink: 'https://arkhopravo-sarkar.netlify.app/',
    description: 'First 3D portfolio website focusing on Three.js integration and innovative portfolio design.',
    technologies: ['React.js', 'Sanity.io', 'TailwindCss'],
  },
];

const Work = () => {
  return (
    <section id="projects" className="scroll-mt-24">
      <Card>
        <CardHeader className="space-y-3">
          <div>
            <CardTitle>Projects</CardTitle>
            <CardDescription>
              A curated set of recent work with clean UI and real features.
            </CardDescription>
          </div>
          <Separator />
        </CardHeader>

        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="border-b bg-muted/30 p-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-40 w-full rounded-md object-cover"
                    loading="lazy"
                  />
                </div>
                <CardHeader className="space-y-2">
                  <CardTitle className="text-base">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.websiteLink ? (
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.websiteLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Website
                        </a>
                      </Button>
                    ) : null}
                    {project.githubLink ? (
                      <Button size="sm" variant="ghost" asChild>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Work;