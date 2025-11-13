"use client";

import Image from "next/image";
import Link from "next/link";
import "./projects.css";
import { useState } from "react";

export default function ProjectsPage() {
  const filters = ["All", "Coursework", "Javascript", "C/C++", "Java", "Python"];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
  ? projects
  : projects.filter(p =>
      p.tags?.some(tag => tag.toLowerCase() === activeFilter.toLowerCase())
    );

  return (
    <div className="projects-page">
      <h1 className="projects-heading">Projects</h1>

      {/* Filter buttons */}
      <div className="projects-filters">
        {filters.map(filter => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-list">
        {filteredProjects.map((proj) => (
          <div key={proj.title} className="project-panel">
            {/* Left side: image → GitHub */}
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-image-link"
            >
              <Image
                src={proj.image}
                alt={proj.title}
                width={200}
                height={140}
                className="project-image"
              />
            </a>

            {/* Right side: title + description → internal project page */}
            <Link href={proj.page} className="project-content">
              <h2 className="project-title">{proj.title}</h2>
              <p className="project-desc">{proj.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Portfolio Website V1",
    description: "A personal site built with php.",
    image: "/images/portfolio.png",
    github: "https://github.com/Surf13/Portfolio_Website",
    page: "/projects/portfolio",
    tags: ["Coursework", "php"],
  },
  {
    title: "Portfolio Website V2",
    description: "A personal site built with Next.js and Tailwind CSS.",
    image: "/images/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    page: "/projects/portfolio",
    tags: ["Javascript"],
  },
  {
    title: "Checker Board",
    description: "A simple Checkerboard game for playing with your friends.",
    image: "/images/chatbot.png",
    github: "https://github.com/Surf13/Checker_Board",
    page: "/projects/Checker_Board",
    tags: ["C/C++"],
  },
  {
    title: "Earth Animation",
    description: "A basic 3D earth animation",
    image: "/images/weather.png",
    github: "https://github.com/yourusername/weather-dashboard",
    page: "/projects/weather-dashboard",
    tags: [ "Javascript"],
  },
  {
    title: "Interactive Gallery",
    description: "A basic music Gallery",
    image: "/images/weather.png",
    github: "https://github.com/Surf13/HackV5_Project",
    page: "/projects/weather-dashboard",
    tags: [ "Javascript"],
  },
  {
    title: "Reach The Castle",
    description: "A simple Single player game trying to cross the forest",
    image: "/images/weather.png",
    github: "https://github.com/Surf13/Reach-the-Castle",
    page: "/projects/weather-dashboard",
    tags: [ "Javascript"],
  },
  {
    title: "Matrix Calculator",
    description: "A basic Calculator for matrix math",
    image: "/images/weather.png",
    github: "https://github.com/Surf13/Matrix-Calculator",
    page: "/projects/weather-dashboard",
    tags: [ "Java"],
  },
  {
    title: "Basic Git",
    description: "A simple replica of git",
    image: "/images/weather.png",
    github: "https://github.com/Surf13/Basic_Git_Program",
    page: "/projects/weather-dashboard",
    tags: [ "C/C++"],
  },
  {
    title: "Capstone: VFD Firmware ",
    description: "processor firmware for a Variable frequency drive",
    image: "/images/weather.png",
    github: "https://github.com/Surf13/Basic_Git_Program",
    page: "/projects/weather-dashboard",
    tags: [ "C/C++", "Coursework"],
  },
   {
    title: "Bikestore ",
    description: "Bikestore Database project created in collabration with three other members.",
    image: "/images/weather.png",
    github: "https://github.com/eshwaran-krishnan/908-team2",
    page: "/projects/weather-dashboard",
    tags: [ "Java", "Coursework"],
  },
   {
    title: "Budget Tracker",
    description: "Budget Tracker Extension for Google Docs created in collabration with three other members. ",
    image: "/images/weather.png",
    github: "https://github.com/eshwaran-krishnan/908-team2-project3",
    page: "/projects/weather-dashboard",
    tags: [ "Javascript", "Coursework", "HTML"],
  },
   {
    title: "Single Cycle Processor",
    description: "single cycle ARM processor logic for implementing basic assembly code.",
    image: "/images/weather.png",
    github: "https://github.com/Surf13/Coursework_SingleCycleProcessor",
    page: "/projects/weather-dashboard",
    tags: [ "Verilog", "Coursework"],
  },
];
