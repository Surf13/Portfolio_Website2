import { useState } from "react";
import SkillCanvas from "./SkillCanvas";

export default function SkillsSection() {
  const [showSphere, setShowSphere] = useState(false);

  const skills = [
    "JavaScript", "Python", "C++", "Three.js",
    "Next.js", "Cadence Virtuoso", "Multisim",
    "Altium", "React", "Node.js"
  ];

  return (
    <section className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>

      {/* Normal readable list */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="p-2 border rounded bg-[var(--background)] text-[var(--foreground)] text-center"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setShowSphere(!showSphere)}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 mb-6"
      >
        {showSphere ? "Hide 3D Skill Sphere" : "View 3D Skill Sphere"}
      </button>

      {/* 3D sphere */}
      {showSphere && (
        <div className="w-full h-[500px]">
          <SkillCanvas />
        </div>
      )}
    </section>
  );
}
