// src/components/About.tsx
import React from 'react';
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "React Native",
  "HTML5",
  "CSS3 / Sass",
  "MongoDB",
  "Express",
  "REST APIs",
  "Git & GitHub",
  "Firebase",
  "Figma",
  "Canva",
  "Blender",
  "C/C++",
  "Java",
  "Python",
  "SQL (Basic)",
  "Flutter",
  "Photoshop",
  "Lightroom",
];

const About = (): JSX.Element => {
  return (
    <section id="about" className="scroll-mt-24">
      <Card>
        <CardHeader className="space-y-3">
          <div>
            <CardTitle>About</CardTitle>
            <CardDescription>Short, focused, and recruiter-friendly.</CardDescription>
          </div>
          <Separator />
        </CardHeader>

        <CardContent>
          <div className="grid gap-6 md:grid-cols-[1fr_260px]">
            <div className="space-y-3">
              <p className="text-sm leading-relaxed text-muted-foreground">
                I’m a Full Stack Developer based in Kolkata with a strong
                foundation in modern web development. I enjoy building clean,
                reliable user experiences and practical backend services.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I’m actively looking for opportunities where I can contribute
                to real products, learn from a strong team, and ship meaningful
                features.
              </p>

              <div className="pt-2">
                <div className="text-sm font-medium">Education</div>
                <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <div>
                    Bachelor of Technology (CSE) • Gargi Memorial Institute Of
                    Technology
                  </div>
                  <div className="text-xs">2023 — 2024</div>
                  <div className="pt-2">
                    Higher Secondary • The Scottish Church Collegiate School
                  </div>
                  <div className="text-xs">2019 — 2020</div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-background p-4">
              <div className="text-sm font-medium">Skills</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;
