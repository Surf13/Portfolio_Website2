import { useMemo, useRef } from "react";
import { Text, Billboard } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const skills = [
  { name: "JavaScript", type: "Programming" },
  { name: "Python", type: "Programming" },
  { name: "C++", type: "Programming" },
  { name: "Next.js", type: "Programming" },
  { name: "React", type: "Programming" },
  { name: "Node.js", type: "Programming" },
  { name: "Cadence Virtuoso", type: "Hardware" },
  { name: "Multisim", type: "Hardware" },
  { name: "Altium", type: "Hardware" },
  { name: "AWS", type: "Cloud" },
];


export default function SkillAnimation() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  const points = useMemo(() => {
    const pts = [];
    const count = skills.length;
    const phi = Math.PI * (3 - Math.sqrt(5));
    
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = phi * i;

      pts.push([
        Math.cos(theta) * radius,
        y,
        Math.sin(theta) * radius
      ]);
    }

    return pts;
  }, []);

  return (
    <group ref={groupRef}>
      {points.map((pos, i) => (
        <Billboard key={i} position={pos}>
          <Text
            fontSize={0.18}
            color={"var(--skill-text-color)"}
            fontWeight="bold"
            fillOpacity={1}
            opacity={1}
            transparent={false}
            anchorX="center"
            anchorY="middle"
            outlineColor="#000000"
            outlineWidth={0.004}

          >
            {skills[i].name}
          </Text>
        </Billboard>
      ))}
    </group>
  );
}
