"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SkillSphere, { skills } from "./skillList";

export default function SkillCanvas() {
  const [selectedType, setSelectedType] = useState("Programming");
  const filteredSkills = skills.filter((s) => s.type === selectedType);
  const types = Array.from(new Set(skills.map((s) => s.type)));

  return (
    <div className="w-full flex flex-col items-center">
      {/* Buttons outside the Canvas */}
      <div className="mb-6 flex gap-3 flex-wrap justify-center">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              selectedType === type
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* 3D Canvas */}
      <div className="w-full h-[500px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[3, 3, 3]} intensity={1} />
          <SkillSphere filteredSkills={filteredSkills} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
          />
        </Canvas>
      </div>
    </div>
  );
}
