import { PlanetsProps } from "@/types/planets";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

import * as THREE from "three";

import VenusMap from "@/texture/venus/venusmap.jpg";
import VenusAtmosphereMap from "@/texture/venus/4k_venus_atmosphere.jpg";
import VenusBumpMap from "@/texture/venus/venusbump.jpg";
import { Text } from "@react-three/drei";

export const Venus = ({ handlePlanetClick }: PlanetsProps) => {
  const venusRef = useRef<THREE.Mesh>(null!);
  const textRef = useRef<THREE.Mesh>(null!);

  const [colorMap, atmosphereMap, bumpMap] = useLoader(TextureLoader, [
    VenusMap.src,
    VenusAtmosphereMap.src,
    VenusBumpMap.src,
  ]);

  const semiMajorAxis = 110;
  const orbitalPeriod = 250;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    // Cálculo da posição de Vênus na órbita elíptica
    const angle = (2 * Math.PI * elapsedTime) / orbitalPeriod;
    const x = semiMajorAxis * Math.cos(angle);
    const y = semiMajorAxis * Math.sin(angle);

    // Defina a posição de Vênus
    venusRef.current.position.set(x, y, 0);
    textRef.current.position.set(x, y + 10, 0);

    venusRef.current.rotation.y = elapsedTime / 6; // 6 segundos para dar uma volta completa
  });

  return (
    <>
    <Text
        ref={textRef}
        position={[40, 10, 0]}
        fontSize={5}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/KelveticaNobis-A5z6.ttf"
      >
        Venus
      </Text>

      <mesh
        ref={venusRef}
        onClick={() => handlePlanetClick("venus")}
        position={[40, 0, 0]} // posição de Vênus
      >
        <sphereGeometry args={[6.051, 32 * 2, 32 * 2]} />{" "}
        {/* Tamanho de Vênus */}
        <meshPhongMaterial
          map={colorMap} // Textura base
          bumpMap={bumpMap} // Textura de bump para detalhes de relevo
          bumpScale={0.02} // Ajuste para a intensidade do efeito de relevo
        >
          {/* Configurar o material da atmosfera */}
          <meshStandardMaterial
            map={atmosphereMap} // Textura de atmosfera
            transparent={true} // Tornar a atmosfera transparente
            opacity={0.5} // Ajuste para a intensidade da atmosfera
          />
        </meshPhongMaterial>
      </mesh>
    </>
  );
};
