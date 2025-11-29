"use client";

import { Text, Billboard } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

// Skills data
export const skills = [
  { name: "JavaScript", type: "Programming" },
  { name: "TypeScript", type: "Programming" },
  { name: "Python", type: "Programming" },
  { name: "C/C++", type: "Programming" },
  { name: "Node.js", type: "Programming" },
  { name: "React", type: "Programming" },
  { name: "Next.js", type: "Programming" },
  { name: "SQL", type: "Programming" },
  { name: "Verilog", type: "Programming" },
  { name: "Cadence Virtuoso", type: "Hardware" },
  { name: "Multisim", type: "Hardware" },
  { name: "LTspice", type: "Hardware" },
  { name: "Altium Designer", type: "Hardware" },
  { name: "PCB Design", type: "Hardware" },
  { name: "Vivado", type: "Hardware" },
  { name: "AWS S3", type: "Cloud" },
  { name: "AWS EC2", type: "Cloud" },
  { name: "AWS RDS (PostgreSQL)", type: "Cloud" },
  { name: "AWS Lambda", type: "Cloud" },
  { name: "AWS CloudFormation", type: "Cloud" },
  { name: "Docker", type: "DevOps" },
  { name: "Git / GitHub", type: "DevOps" },
  { name: "Linux / Bash", type: "DevOps" },
  { name: "VS Code", type: "DevOps" },
];

// 3D SkillSphere component
export default function SkillSphere({ filteredSkills }) {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.003;
  });

  const points = useMemo(() => {
    const pts = [];
    const count = filteredSkills.length;
    const phi = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = phi * i;
      pts.push([Math.cos(theta) * radius, y, Math.sin(theta) * radius]);
    }

    return pts;
  }, [filteredSkills]);

  return (
    <group ref={groupRef}>
      {points.map((pos, i) => (
        <Billboard key={i} position={pos}>
         <Text
          fontSize={0.18}
          color="#ffffff"        // bright white text
          fontWeight="bold"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.03}   // adds a thin outline
          outlineColor="#000000" // black outline
        >
            {filteredSkills[i].name}
          </Text>
        </Billboard>
      ))}
    </group>
  );
}
