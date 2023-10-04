import { PlanetsProps } from "@/types/planets";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import UranusMap from "@/texture/uranus/uranusmap.jpg"; // Importe a textura base correta para Urano
import UranusRingTexture from "@/texture/uranus/uranusringcolor.jpg"; // Importe a textura para os anéis de Urano
import { TextureLoader } from "three";

import * as THREE from "three";

export const Uranus = ({ handlePlanetClick }: PlanetsProps) => {
  const uranusRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  const semiMajorAxis = 200;
  const orbitalPeriod = 290;

  const [colorMap, ringTexture] = useLoader(TextureLoader, [
    UranusMap.src,
    UranusRingTexture.src,
  ]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    const angle = (2 * Math.PI * elapsedTime) / orbitalPeriod;
    const x = semiMajorAxis * Math.cos(angle);
    const y = semiMajorAxis * Math.sin(angle);

    uranusRef.current.position.set(x, y, 0);
    ringRef.current.position.set(x, y, 0);

    uranusRef.current.rotation.y = elapsedTime / 6; // 6 segundos para dar uma volta completa
  });

  return (
    <>
      <mesh
        ref={uranusRef}
        // onClick={() => handlePlanetClick("uranus")}
        position={[400, 0, 0]} // posição de Urano
      >
        <sphereGeometry args={[25.362, 32 * 2, 32 * 2]} />{" "}
        {/* Tamanho de Urano */}
        <meshPhongMaterial map={colorMap} />
      </mesh>
      {/* Adicione os anéis de Urano */}
      <mesh
        ref={ringRef}
        position={[400, 0, 0]}
        scale={[1.1, 1, 0.01]} // Ajuste para a espessura dos anéis
        rotation={[190, 0, 0]}
      >
        <ringGeometry args={[30, 40, 64]} />{" "}
        {/* Tamanho e detalhes dos anéis */}
        <meshPhongMaterial map={ringTexture} side={THREE.DoubleSide} />{" "}
        {/* Textura dos anéis */}
      </mesh>
    </>
  );
};
