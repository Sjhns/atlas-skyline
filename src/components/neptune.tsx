import { PlanetsProps } from "@/types/planets";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import NeptuneMap from "@/texture/neptune/neptunemap.jpg";

import { TextureLoader } from "three";

import * as THREE from "three";
import { Text } from "@react-three/drei";

export const Neptune = ({ handlePlanetClick }: PlanetsProps) => {
  const NeptuneRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const textRef = useRef<THREE.Mesh>(null!);

  const [colorMap] = useLoader(TextureLoader, [NeptuneMap.src]);

  const semiMajorAxis = 300;
  const orbitalPeriod = 250;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    const angle = (2 * Math.PI * elapsedTime) / orbitalPeriod;
    const x = semiMajorAxis * Math.cos(angle);
    const y = semiMajorAxis * Math.sin(angle);

    NeptuneRef.current.position.set(-x, -y, 0);
    textRef.current.position.set(-x, -y + 50, 0);

    NeptuneRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <Text
        ref={textRef}
        position={[400, 50, 0]}
        fontSize={20}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/KelveticaNobis-A5z6.ttf"
      >
        Netuno
      </Text>

      <mesh
        ref={NeptuneRef}
        onClick={() => handlePlanetClick("neptune")}
        position={[400, 0, 0]}
      >
        <sphereGeometry args={[32, 32 * 2, 32 * 2]} />{" "}
        {/* Tamanho de Saturno */}
        <meshStandardMaterial map={colorMap} metalness={0.4} roughness={0.7} />
      </mesh>
    </>
  );
};
