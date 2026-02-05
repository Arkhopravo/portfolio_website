import React, { useState } from 'react';
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

const ContactMe = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., send an email or store data
    console.log('Form submitted:', formData);
    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <Card>
        <CardHeader className="space-y-3">
          <div>
            <CardTitle>Contact</CardTitle>
            <CardDescription>
              Open to opportunities, collaborations, and interviews.
            </CardDescription>
          </div>
          <Separator />
        </CardHeader>

        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-background p-4">
              <div className="text-sm font-medium">Get in touch</div>
              <p className="mt-2 text-sm text-muted-foreground">
                If you’re hiring or want to collaborate, the fastest way is
                email.
              </p>

              <div className="mt-4 space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Email:</span>{" "}
                  <a className="hover:underline" href="mailto:arkho.psarkar@gmail.com">
                    arkho.psarkar@gmail.com
                  </a>
                </div>
                <div>
                  <span className="text-muted-foreground">Phone:</span>{" "}
                  <a className="hover:underline" href="tel:+919433355284">
                    +91 9433355284
                  </a>
                </div>
                <div>
                  <span className="text-muted-foreground">GitHub:</span>{" "}
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

              <div className="mt-4 flex gap-2">
                <Button size="sm" asChild>
                  <a href="mailto:arkho.psarkar@gmail.com">Email Me</a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
            </div>

            <div className="rounded-lg border bg-background p-4">
              <div className="text-sm font-medium">Message</div>
              <p className="mt-2 text-sm text-muted-foreground">
                This form currently logs the message in the console.
              </p>

              <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-muted-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm outline-none ring-offset-background focus-visible:ring-1 focus-visible:ring-ring"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm outline-none ring-offset-background focus-visible:ring-1 focus-visible:ring-ring"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none ring-offset-background focus-visible:ring-1 focus-visible:ring-ring"
                    rows={4}
                    required
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Button type="submit" size="sm">
                    Send
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() =>
                      setFormData({ name: "", email: "", message: "" })
                    }
                  >
                    Clear
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactMe;
