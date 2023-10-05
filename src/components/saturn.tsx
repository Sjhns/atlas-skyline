import { PlanetsProps } from "@/types/planets";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import SaturnMap from "@/texture/saturn/saturnmap.jpg"; // Importe a textura base correta para Saturno
import SaturnRingTexture from "@/texture/saturn/saturnringcolor.jpg"; // Importe a textura para os anéis de Saturno
import { TextureLoader } from "three";

import * as THREE from "three";
import { Text } from "@react-three/drei";

export const Saturn = ({ handlePlanetClick }: PlanetsProps) => {
  const saturnRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const textRef = useRef<THREE.Mesh>(null!);

  const [colorMap, ringTexture] = useLoader(TextureLoader, [
    SaturnMap.src,
    SaturnRingTexture.src,
  ]);

  const semiMajorAxis = 300; // Eixo semi-principal da órbita (aumentado para considerar o tamanho maior do Sol)
  const orbitalPeriod = 250;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    const angle = (2 * Math.PI * elapsedTime) / orbitalPeriod;
    const x = semiMajorAxis * Math.cos(angle);
    const y = semiMajorAxis * Math.sin(angle);

    saturnRef.current.position.set(x, y, 0);
    ringRef.current.position.set(x, y, 0);
    textRef.current.position.set(x, y + 80, 0);

    saturnRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <Text
        ref={textRef}
        position={[480, 80, 0]}
        fontSize={20}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/KelveticaNobis-A5z6.ttf"
      >
        Saturno
      </Text>

      <mesh
        ref={saturnRef}
        onClick={() => handlePlanetClick("saturn")}
        position={[480, 0, 0]} // posição de Saturno
      >
        <sphereGeometry args={[58.232, 32 * 2, 32 * 2]} />{" "}
        {/* Tamanho de Saturno */}
        <meshStandardMaterial
          map={colorMap} // Textura base
          metalness={0.4} // Ajuste para o metal de Saturno
          roughness={0.7} // Ajuste para a aspereza de Saturno
        />
      </mesh>
      {/* Adicione os anéis de Saturno */}
      <mesh
      
        ref={ringRef}

      position={[480, 0, 0]} scale={[1, 1, 0.01]} rotation={[190, 0, 0]}>
        <ringGeometry args={[70, 90, 128]} />{" "}
        {/* Tamanho e detalhes dos anéis */}
        <meshPhongMaterial map={ringTexture} side={THREE.DoubleSide} />{" "}
        {/* Textura dos anéis */}
      </mesh>
    </>
  );
};
