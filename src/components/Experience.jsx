import React from "react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";


const highlights = [
  "Built and maintained web apps using React.js, Node.js and MongoDB.",
  "Collaborated with cross-functional teams to deliver new features.",
  "Designed REST APIs and integrated third-party services.",
  "Worked with Flask, PostgreSQL and SQLAlchemy on backend modules.",
];

const projects = [
  "Durbin CRM",
  "Asset Tracker",
  "Asset Maintenance",
  "Mat Tracker",
  "CloudConnect",
];

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <Card>
        <CardHeader className="space-y-3">
          <div className="flex flex-col gap-1">
            <CardTitle>Experience</CardTitle>
            <CardDescription>
              Full Stack Developer • Durbin Technologies Pvt Ltd
            </CardDescription>
            <div className="text-xs text-muted-foreground">Apr 2022 — Present</div>
          </div>
          {/* <Separator /> */}
        </CardHeader>

        <CardContent>
          <div className="grid gap-6 md:grid-cols-[1fr_260px]">
            <div>
              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border bg-background p-4">
              <div className="text-sm font-medium">Key Projects</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {projects.map((name) => (
                  <Badge key={name} variant="outline">
                    {name}
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

export default Experience;