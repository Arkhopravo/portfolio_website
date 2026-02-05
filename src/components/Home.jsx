// src/components/Home.js
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
const Home = () => {
  return (
    <section id="overview" className="scroll-mt-24">
      <Card>
        <CardHeader className="space-y-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Hi, I’m Arkhopravo Sarkar</CardTitle>
              <CardDescription>
                Computer Science & Engineering • Kolkata
              </CardDescription>
            </div>
            <Badge className="w-fit" variant="secondary">
              Full Stack Developer
            </Badge>
          </div>
          <Separator />
        </CardHeader>

        <CardContent>
          <div className="grid gap-6 md:grid-cols-[1fr_260px] md:items-start">
            <p className="text-sm leading-relaxed text-muted-foreground">
              I am an ambitious and dedicated computer science and engineering
              fresher with a strong passion for technology and software
              development. I am actively seeking opportunities to apply and
              expand my knowledge in a professional setting. Organized and
              dependable candidate successful at managing multiple priorities
              with a positive attitude.
            </p>

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
