import { PlanetsProps } from "@/types/planets";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import BaseMap from "@/texture/mars/mars_1k_color.jpg";
import { TextureLoader } from "three";
import { Text } from "@react-three/drei";

export const Mars = ({ handlePlanetClick }: PlanetsProps) => {
  const marsRef = useRef<THREE.Mesh>(null!);
  const textRef = useRef<THREE.Mesh>(null!);

  const [colorMap] = useLoader(TextureLoader, [BaseMap.src]);

  const semiMajorAxis = 215;
  const orbitalPeriod = 250;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    const angle = (2 * Math.PI * elapsedTime) / orbitalPeriod;
    const x = semiMajorAxis * Math.cos(angle);
    const y = semiMajorAxis * Math.sin(angle);

    // Defina a posição da Terra
    marsRef.current.position.set(-x, -y, 0);
    textRef.current.position.set(-x, -y + 7, 0);

    marsRef.current.rotation.y = elapsedTime / 6; // 6 segundos para dar uma volta completa
  });

  return (
    <>
      <Text
        ref={textRef}
        position={[120, 7, 0]} // posição da Terra
        fontSize={4}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/KelveticaNobis-A5z6.ttf"
      >
        Marte
      </Text>
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
