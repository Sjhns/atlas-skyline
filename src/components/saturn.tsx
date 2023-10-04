import { PlanetsProps } from "@/types/planets";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import SaturnMap from "@/texture/saturn/saturnmap.jpg"; // Importe a textura base correta para Saturno
import SaturnRingTexture from "@/texture/saturn/saturnringcolor.jpg"; // Importe a textura para os anéis de Saturno
import { TextureLoader } from "three";

import * as THREE from "three";

export const Saturn = ({ handlePlanetClick }: PlanetsProps) => {
  const saturnRef = useRef<THREE.Mesh>(null!);

  const [colorMap, ringTexture] = useLoader(TextureLoader, [
    SaturnMap.src,
    SaturnRingTexture.src,
  ]);

  const semiMajorAxis = 320; // Eixo semi-principal da órbita (aumentado para considerar o tamanho maior do Sol)
  const orbitalPeriod = 60;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    const angle = (2 * Math.PI * elapsedTime) / orbitalPeriod;
    const x = semiMajorAxis * Math.cos(angle);
    const y = semiMajorAxis * Math.sin(angle);

    saturnRef.current.position.set(x, y, 0);

    saturnRef.current.rotation.y = elapsedTime / 6; // 6 segundos para dar uma volta completa
  });

  return (
    <>
      <mesh
        ref={saturnRef}
        // onClick={() => handlePlanetClick("saturn")}
        position={[570, 0, 0]} // posição de Saturno
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
      <mesh position={[570, 0, 0]} scale={[1, 1, 0.01]} rotation={[190, 0, 0]}>
        <ringGeometry args={[70, 90, 128]} />{" "}
        {/* Tamanho e detalhes dos anéis */}
        <meshPhongMaterial map={ringTexture} side={THREE.DoubleSide} />{" "}
        {/* Textura dos anéis */}
      </mesh>
    </>
  );
};
