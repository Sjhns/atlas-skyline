import { PlanetsProps } from "@/types/planets";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import JupiterMap from "@/texture/jupiter/jupitermap.jpg";
import { Text } from "@react-three/drei";

export const Jupiter = ({ handlePlanetClick }: PlanetsProps) => {
  const jupiterRef = useRef<THREE.Mesh>(null!);
  const textRef = useRef<THREE.Mesh>(null!);

  const [colorMap] = useLoader(TextureLoader, [JupiterMap.src]);

  const semiMajorAxis = 370;
  const orbitalPeriod = 250;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    const angle = (2 * Math.PI * elapsedTime) / orbitalPeriod;
    const x = semiMajorAxis * Math.cos(angle) ;
    const y = semiMajorAxis * Math.sin(angle);

    // Defina a posição da Terra
    jupiterRef.current.position.set(-x, -y , 0);

    textRef.current.position.set(-x, -y + 90, 0);

    jupiterRef.current.rotation.y = elapsedTime / 6; // 6 segundos para dar uma volta completa
  });

  return (
    <>
      <Text
        ref={textRef}
        position={[300, 90, 0]} // posição da Terra
        fontSize={20}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/KelveticaNobis-A5z6.ttf"
      >
        Jupiter
      </Text>

      <mesh
        ref={jupiterRef}
        onClick={() => handlePlanetClick("jupiter")}
        position={[300, 0, 0]} // posição de Júpiter
      >
        <sphereGeometry args={[69.911, 32 * 2, 32 * 2]} />{" "}
        {/* Tamanho de Júpiter */}
        <meshPhongMaterial map={colorMap} />
      </mesh>
    </>
  );
};
