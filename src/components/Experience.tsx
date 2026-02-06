import React from "react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const experienceData = [
  {
    project: "Asset Tracker Software",
    details: [
      "Refactored and stabilized the core frontend architecture, resolving major production bugs and improving overall performance.",
      "Built a powerful global search system with advanced filters, auto-suggestions, and date-based queries.",
      "Integrated real-time IoT tracking using MQTT and WebSockets to display live machine location and proximity via Mapbox GL.",
      "Developed role-based dashboards for operators, customers, and admins with granular permission control.",
      "Implemented a Machine Rental Management System including booking, automated costing, and billing workflows.",
      "Integrated backend services with Odoo ERP to sync asset runtime, attendance, and maintenance data.",
      "Designed operator salary calculation logic based on shifts, attendance, and machine usage.",
      "Created complex reporting APIs with financial metrics and visual dashboards.",
      "Participated in client demos, requirement discussions, and production rollouts.",
    ],
    tech: ["React.js", "Flask", "MongoDB", "PostgreSQL", "MQTT", "WebSockets", "Mapbox GL", "Redux"],
  },
  {
    project: "Cloud Connect (IoT Safety Platform)",
    details: [
      "Developed a real-time safety monitoring platform for Ansul fire-safety devices used in mining operations.",
      "Built dashboards displaying live device health, fire detection alerts, fault signals, and active/inactive status.",
      "Implemented instant incident notifications and real-time alerts to improve response time in critical situations.",
      "Integrated fire-detection audio alarms for operators working near heavy equipment.",
      "Designed responsive and fast operator-focused UI using React.js and Tailwind CSS.",
      "Developed secure backend APIs using Flask to communicate with field devices.",
    ],
    tech: ["React.js", "Tailwind CSS", "Flask", "WebSockets", "REST APIs"],
  },
  {
    project: "MAT Tracker Software",
    details: [
      "Researched and implemented automated depreciation calculation modules including Straight-Line and Double Declining Balance methods.",
      "Designed real-time asset lifecycle tracking from procurement to disposal with accurate book-value calculations.",
      "Acted as a technical bridge between Accounts, Marketing, and Operations teams to translate business logic into software features.",
      "Built segment-specific dashboards and reports tailored for finance, inventory, and logistics teams.",
      "Ensured strong audit compliance by logging every asset movement with timestamps and user identifiers.",
    ],
    tech: ["React.js", "Node.js", "Flask", "PostgreSQL", "Financial Systems"],
  },
  {
    project: "Asset Maintenance System",
    details: [
      "Developed maintenance scheduling and tracking workflows to reduce asset downtime.",
      "Built dashboards to monitor service history, upcoming maintenance, and issue resolution.",
      "Integrated asset usage data to trigger automated maintenance alerts.",
    ],
    tech: ["React.js", "Node.js", "PostgreSQL", "Flask"],
  },
  {
    project: "Durbin CRM",
    details: [
      "Worked on internal CRM tools for managing clients, assets, and operational workflows.",
      "Improved UI responsiveness and usability for internal teams.",
      "Integrated REST APIs to synchronize customer and asset-related data.",
    ],
    tech: ["React.js", "Node.js", "PostgreSQL", "TypeORM"],
  },
];

const Experience = (): JSX.Element => {
  return (
    <section id="experience" className="scroll-mt-24">
      <Card>
        <CardHeader className="space-y-3">
          <div className="flex flex-col gap-1">
            <CardTitle>Experience</CardTitle>
            <CardDescription>
              Full Stack Developer • Durbin Technologies Pvt. Ltd.
            </CardDescription>
            <div className="text-xs text-muted-foreground">
              Apr 2024 — Present
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          {experienceData.map((exp) => (
            <div key={exp.project} className="space-y-3">
              <div className="text-sm font-semibold">{exp.project}</div>

              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {exp.details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tech.map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default Experience;