import { PlanetsProps } from "@/types/planets";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, TextureLoader } from "three";
import MercuryMap from "@/texture/mercury/8k_mercury.jpg";

// Informações orbitais de Mercúrio (em unidades fictícias)
const semiMajorAxis = 95; // Eixo semi-principal da órbita (aumentado para considerar o tamanho maior do Sol)
const orbitalPeriod = 50; // Período orbital em segundos (mais lento para tornar o movimento mais lento)

export const Mercury = ({ handlePlanetClick }: PlanetsProps) => {
  const mercuryRef = useRef<THREE.Mesh>(null!);

  const [colorMap] = useLoader(TextureLoader, [MercuryMap.src]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    // Cálculo da posição de Mercúrio na órbita elíptica
    const angle = (2 * Math.PI * elapsedTime) / orbitalPeriod;
    const x = semiMajorAxis * Math.cos(angle);
    const y = semiMajorAxis * Math.sin(angle);

    // Defina a posição de Mercúrio
    mercuryRef.current.position.set(x, y, 0);
  });

  return (
    <mesh
      
      ref={mercuryRef}
      //   onClick={() => handlePlanetClick("mercury")}
      position={[20, 0, 0]} // posição de Mercúrio
    >
      <sphereGeometry args={[2.439, 32 * 2, 32 * 2]}  />{" "}
      <meshStandardMaterial map={colorMap} side={DoubleSide} metalness={0.4} roughness={0.7} />
    </mesh>
  );
};
