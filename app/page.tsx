"use client";

import { useState } from "react";
import Link from "next/link";
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
    <section className="max-w-4xl mx-auto p-8 text-[var(--foreground)] bg-[var(--background)]">
      <div className="flex justify-center mb-8">
        <img
          src="/images/Head_shot.jpg"
          alt="Placeholder profile"
          className="rounded-full w-40 h-40 object-cover"
        />
      </div>

      <h2 className="text-4xl font-bold mb-6 text-[var(--foreground)] text-center">
        About Me
      </h2>

      <p className="text-lg mb-4 text-[var(--foreground)]">
        I’m Kyle Simmons, a Senior Computer Engineering student at Texas A&M University, 
        graduating in <span className="italic">May 2026</span>. My studies bridge both 
        hardware and software, with a focus on software development, cloud computing, 
        and electrical engineering applications.
      </p>

      <hr className="border-[var(--sidebar-border)] my-12" />

      {/* Skills Header as Toggle */}
      <h2
        className="text-4xl font-bold mb-6 text-[var(--foreground)] text-center cursor-pointer hover:text-blue-500 transition-colors duration-200"
        onClick={() => setShowSphere(!showSphere)}
      >
        Skills
      </h2>

      {showSphere ? (
        // 3D Skill Sphere
        <div className="w-full h-[500px]">
          <SkillCanvas />
        </div>
      ) : (
        // Grouped Skill Grid
        <div className="grid gap-6">
          {Object.entries(groupedSkills).map(([type, skillList]) => (
            <div key={type}>
              <h3 className="font-semibold mb-2">{type}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="p-2 border rounded bg-[var(--background)] text-[var(--foreground)] text-center"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <hr className="border-[var(--sidebar-border)] my-12" />

      <section className="max-w-4xl mx-auto p-8">
  <h2 className="text-4xl font-bold mb-6 text-[var(--foreground)] text-center">Recent Projects</h2>

  <div className="grid gap-6">
    {recentProjects.map((proj) => (
      <div key={proj.title} className="project-panel grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left side: image linking to GitHub */}
        <a
          href={proj.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-image-link"
        >
          <Image
            src={proj.image}
            alt={proj.title}
            width={300}
            height={200}
            className="rounded-lg"
          />
        </a>

        {/* Right side: title + description linking to internal page */}
        <Link href={proj.page} className="project-content">
          <h3 className="text-xl font-semibold">{proj.title}</h3>
          <p className="text-[var(--foreground)]">{proj.description}</p>
        </Link>
      </div>
    ))}
  </div>
</section>

  <hr className="border-[var(--sidebar-border)] my-12" />

  <div
      className="max-w-2xl mx-auto p-0"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Education */}
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl font-bold mb-6 text-[var(--foreground)] text-center">
          Education
        </h2>

        <div
          className="p-6 rounded-lg shadow-md"
          style={{ background: "var(--sidebar-bg)", color: "var(--foreground)" }}
        >
          <h3 className="text-2xl font-semibold mb-2">Texas A&M University</h3>
          <p className="italic mb-4">Expected May 2026</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Bachelor of Science in Computer Engineering</li>
            <li>Minor: Mathematics</li>
            <li>GPA: 3.43 (Cumulative)</li>
          </ul>
        </div>
      </div>
    </div>

  <hr className="border-[var(--sidebar-border)] my-12" />

  




    </section>


  );
}
