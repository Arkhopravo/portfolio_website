import React from "react";
import { Button } from "./ui/button";
// import { Separator } from "./ui/separator";

const navItems = [
  { href: "#overview", label: "Overview" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Shell = ({ children }) => {
  return (
    <div className="min-h-screen bg-muted/30">
      <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:flex md:w-64 md:flex-col md:border-r md:bg-background">
        <div className="p-6">
          <div className="text-xs font-medium text-muted-foreground">Portfolio</div>
          <div className="mt-1 text-base font-semibold leading-tight">
            Arkhopravo Sarkar
          </div>
          <div className="mt-1 text-xs text-muted-foreground">Full Stack Developer</div>
          {/* <Separator className="my-4" /> */}
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                asChild
                variant="ghost"
                className="justify-start"
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6">
          {/* <Separator className="mb-4" /> */}
          <div className="space-y-1 text-xs text-muted-foreground">
            <div>
              <a
                className="hover:underline"
                href="mailto:arkho.psarkar@gmail.com"
              >
                arkho.psarkar@gmail.com
              </a>
            </div>
            <div>
              <a className="hover:underline" href="tel:+919433355284/7003948678">
                +91 9433355284/7003948678
              </a>
            </div>
            <div>
              <a
                className="hover:underline"
                href="https://github.com/Arkhopravo"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Arkhopravo
              </a>
            </div>
          </div>
        </div>
      </aside>

      <div className="md:pl-64">
        <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div className="leading-tight">
              <div className="text-sm font-semibold">Arkhopravo Sarkar</div>
              <div className="text-xs text-muted-foreground">
                Full Stack Developer
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" asChild>
                <a href="mailto:arkho.psarkar@gmail.com">Email</a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a href="tel:+919433355284">Call</a>
              </Button>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-4 pb-3 md:hidden">
            <nav className="flex gap-2 overflow-x-auto">
              {navItems.map((item) => (
                <Button key={item.href} asChild size="sm" variant="ghost">
                  <a href={item.href}>{item.label}</a>
                </Button>
              ))}
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Shell;
