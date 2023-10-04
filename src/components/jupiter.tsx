import { PlanetsProps } from "@/types/planets";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import JupiterMap from "@/texture/jupiter/jupitermap.jpg";

export const Jupiter = ({ handlePlanetClick }: PlanetsProps) => {
  const jupiterRef = useRef<THREE.Mesh>(null!);

  const [colorMap] = useLoader(TextureLoader, [JupiterMap.src]);

  const semiMajorAxis = 230;
  const orbitalPeriod = 220;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    const angle = (2 * Math.PI * elapsedTime) / orbitalPeriod;
    const x = semiMajorAxis * Math.cos(angle);
    const y = semiMajorAxis * Math.sin(angle);

    // Defina a posição da Terra
    jupiterRef.current.position.set(x, y, 0);

    jupiterRef.current.rotation.y = elapsedTime / 6; // 6 segundos para dar uma volta completa
  });

  return (
    <mesh
      ref={jupiterRef}
      onClick={() => handlePlanetClick("jupiter")}
      position={[300, 0, 0]} // posição de Júpiter
    >
      <sphereGeometry args={[69.911, 32 * 2, 32 * 2]} />{" "}
      {/* Tamanho de Júpiter */}
      <meshPhongMaterial map={colorMap} />
    </mesh>
  );
};
