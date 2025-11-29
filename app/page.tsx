"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SkillCanvas from "@/components/skillCanvas";
import { skills } from "@/components/skillList";
import { projects } from "@/app/Projects/page";

export default function Home() {
  const [showSphere, setShowSphere] = useState(false);

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.type]) acc[skill.type] = [];
    acc[skill.type].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  const recentProjects = projects.filter(p =>
    ["Capstone: VFD Firmware ", "Bikestore "].includes(p.title)
  );

  return (
    <section className="max-w-5xl mx-auto p-8 text-[var(--foreground)] bg-[var(--background)] transition-colors duration-300">

      {/* ======================= HERO SECTION ======================= */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Hey, I'm Kyle Simmons
        </h1>

        <p className="text-xl opacity-80 max-w-2xl mx-auto">
          Senior Computer Engineering student specializing in software development,
          embedded systems.
        </p>

        <div className="flex justify-center mt-10">
          <img
            src="/images/Head_shot.jpg"
            alt="Profile"
            className="rounded-full w-44 h-44 object-cover shadow-xl
              hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* ======================= ABOUT ME ======================= */}
      <SectionCard alternate>
        <SectionTitle>About Me</SectionTitle>

        <p className="text-lg leading-relaxed">
          I’m Kyle Simmons, a Senior Computer Engineering student at Texas A&M University,
          graduating in <span className="italic">May 2026</span>. My studies bridge both
          hardware and software, with a focus on software development and embedded systems.
        </p>
      </SectionCard>

      {/* ======================= SKILLS ======================= */}
      <SectionCard alternate>
        <SectionTitle
          className="cursor-pointer hover:opacity-80 transition"
          onClick={() => setShowSphere(!showSphere)}
        >
          Skills
        </SectionTitle>

        {showSphere ? (
          <div className="w-full h-[500px]">
            <SkillCanvas />
          </div>
        ) : (
          <div className="grid gap-8 mt-6">
            {Object.entries(groupedSkills).map(([type, skillList]) => (
              <div key={type}>
                <h3 className="font-semibold mb-3 text-lg">{type}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {skillList.map(skill => (
                    <span
                      key={skill}
                      className="p-2 border rounded-lg 
                        bg-[var(--panel-bg)] dark:bg-[var(--panel-bg-dark)] 
                        text-center shadow-sm hover:shadow-md transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </SectionCard>

      {/* ======================= RECENT PROJECTS ======================= */}
      <SectionCard alternate>
        <SectionTitle>Recent Projects</SectionTitle>

        <div className="grid gap-8 mt-6">
          {recentProjects.map(proj => (
            <div
              key={proj.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 
                rounded-xl shadow-sm hover:shadow-md transition
                bg-[var(--panel-bg)] dark:bg-[var(--panel-bg-dark)]"
            >
              {proj.image && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    width={250}
                    height={160}
                    className="rounded-lg object-cover shadow hover:scale-[1.02] transition"
                  />
                </a>
              )}

              <div>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-xl font-bold mb-2 hover:underline">
                    {proj.title}
                  </h3>
                </a>
                <p className="opacity-90">{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* ======================= EDUCATION ======================= */}
      <SectionCard alternate>
        <SectionTitle>Education</SectionTitle>

        <div className="p-6 rounded-lg shadow bg-[var(--panel-bg)] dark:bg-[var(--panel-bg-dark)]">
          <h3 className="text-2xl font-semibold mb-2">Texas A&M University</h3>
          <p className="italic opacity-80 mb-4">Expected May 2026</p>

          <ul className="list-disc list-inside space-y-1 opacity-90">
            <li>Bachelor of Science in Computer Engineering</li>
            <li>Minor: Mathematics</li>
            <li>GPA: 3.43 (Cumulative)</li>
          </ul>
        </div>
      </SectionCard>

      {/* ======================= CURRENTLY LEARNING ======================= */}
      <SectionCard alternate>
        <SectionTitle>Currently Learning</SectionTitle>

        <ul className="list-disc list-inside space-y-2 text-lg leading-loose">
          <li>
            Preparing for the <span className="italic">FE Exam</span> (Target Feb 2025)
          </li>

          <li>
            <span>LinkedIn Learning Courses:</span>
            <ul className="list-disc list-outside ml-8 mt-2 space-y-1 leading-relaxed">
              <li>
                <a
                  href="https://www.linkedin.com/learning/paths/docker-foundations-professional-certificate?u=74650722"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                >
                  Docker
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/learning/aws-certified-solutions-architect-associate-saa-c03-cert-prep-february-2025/gateways-vpgs-and-cgws?u=74650722"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                >
                  AWS
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </SectionCard>
    </section>
  );
}

/* ======================= REUSABLE COMPONENTS ======================= */

const SectionCard = ({
  children,
  alternate = false,
}: {
  children: React.ReactNode;
  alternate?: boolean;
}) => (
  <div
    className={`p-10 rounded-2xl shadow-lg my-16 border
      ${alternate ? "bg-[var(--panel-bg-dark)]" : "bg-[var(--panel-bg)]"}
      text-[var(--foreground)] transition-colors duration-300 overflow-visible

    `}
  >
    {children}
  </div>
);

const SectionTitle = ({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => (
  <h2
    onClick={onClick}
    className={`
      text-4xl font-extrabold text-center mb-8
      bg-gradient-to-r from-blue-500 to-purple-500 
      text-transparent bg-clip-text select-none leading-relaxed
      ${className}
    `}
  >
    {children}
  </h2>
);
