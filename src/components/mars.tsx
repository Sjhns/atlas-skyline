import { PlanetsProps } from "@/types/planets";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import BaseMap from "@/texture/mars/mars_1k_color.jpg";
import { TextureLoader } from "three";

export const Mars = ({ handlePlanetClick }: PlanetsProps) => {
  const marsRef = useRef<THREE.Mesh>(null!);

  const [colorMap] = useLoader(TextureLoader, [BaseMap.src]);

  const semiMajorAxis = 130;
  const orbitalPeriod = 72;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    const angle = (2 * Math.PI * elapsedTime) / orbitalPeriod;
    const x = semiMajorAxis * Math.cos(angle);
    const y = semiMajorAxis * Math.sin(angle);

    // Defina a posição da Terra
    marsRef.current.position.set(x, y, 0);

    marsRef.current.rotation.y = elapsedTime / 6; // 6 segundos para dar uma volta completa
  });

  return (
    <>
      <mesh
        ref={marsRef}
        onClick={() => handlePlanetClick("mars")}
        position={[120, 0, 0]} // posição de Marte
      >
        <sphereGeometry args={[3.389, 32 * 2, 32 * 2]} />{" "}
        {/* Tamanho de Marte */}
        <meshPhongMaterial map={colorMap} />
      </mesh>
    </>
  );
};
