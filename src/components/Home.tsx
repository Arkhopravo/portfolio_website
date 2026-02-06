// src/components/Home.tsx
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
const Home = (): JSX.Element => {
  return (
    <section id="overview" className="scroll-mt-24">
      <Card>
        <CardHeader className="space-y-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Hi, I’m Arkhopravo Sarkar</CardTitle>
              <CardDescription>
                Full Stack Developer • Kolkata
              </CardDescription>
            </div>
            <Badge className="w-fit" variant="secondary">
              Full Stack Developer
            </Badge>
          </div>
          <Separator />
        </CardHeader>

        <CardContent>
          <div className="grid gap-6 md:grid-cols-[2fr_300px] md:items-start">
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Dynamic and motivated MERN stack developer with real-life working
                experience in React.js, Next.js, Node.js, Express, and MongoDB.
                Adept at building user-centric web applications and robust backend
                systems. Passionate about problem-solving, tackling challenges,
                and designing innovative solutions. Seeking opportunities to grow as
                a full-stack developer and contribute to impactful projects.
              </p>

              <div className="mt-6">
                <div className="text-sm font-medium text-muted-foreground">Core Skills</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind</Badge>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
                {/* <Button size="lg" variant="outline" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
                </Button> */}
              </div>
            </div>

            <div className="rounded-lg border bg-background p-3">
              <img
                src="images/profile.jpg"
                alt="Arkhopravo Sarkar"
                className="h-64 w-full rounded-md object-cover"
              />
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Let’s connect and build something meaningful.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Home;
