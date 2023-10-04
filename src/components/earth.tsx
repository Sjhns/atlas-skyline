"use client";

import EarthDayMap from "@/texture/earth/8k_earth_daymap.jpg";
import EarthNormalMap from "@/texture/earth/8k_earth_normal_map.jpg";
import EarthSpecularMap from "@/texture/earth/8k_earth_specular_map.jpg";
import EarthCloudsMap from "@/texture/earth/8k_earth_clouds.jpg";

import MoonBumpMap from "@/texture/moon/moonbump4k.jpg";
import MoonMap from "@/texture/moon/moonmap4k.jpg";

import { DoubleSide, TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { PlanetsProps } from "@/types/planets";

export const Earth = ({ handlePlanetClick }: PlanetsProps) => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [
      EarthDayMap.src,
      EarthNormalMap.src,
      EarthSpecularMap.src,
      EarthCloudsMap.src,
    ]
  );

  const [moonMap, moonBump] = useLoader(TextureLoader, [
    MoonMap.src,
    MoonBumpMap.src,
  ]);

  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);
  const moonRef = useRef<THREE.Mesh>(null!);

  const semiMajorAxis = 130;
  const orbitalPeriod = 120;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    // Cálculo da posição da Terra na órbita elíptica
    const angle = (2 * Math.PI * elapsedTime) / orbitalPeriod;
    const x = semiMajorAxis * Math.cos(angle);
    const y = semiMajorAxis * Math.sin(angle);

    // Defina a posição da Terra
    earthRef.current.position.set(x, y, 0);
    cloudsRef.current.position.set(x, y, 0);

    // Defina a posição da Lua (em relação à Terra)
    moonRef.current.position.set(x + 20, y, 0);
    //

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      {/* moon */}

      <mesh
        ref={moonRef}
        onClick={() => handlePlanetClick("moon")}
        position={[80, 0, 0]} // posição da Lua
      >
        <sphereGeometry args={[6.371 * 0.27, 32 * 2, 32 * 2]} />
        {/* Tamanho da Lua aproximadamente */}
        <meshStandardMaterial
          map={moonMap}
          bumpMap={moonBump}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>

      <mesh
        ref={cloudsRef}
        onClick={() => handlePlanetClick("earth")}
        position={[80, 0, 0]} // posição da Terra
      >
        <sphereGeometry args={[6.371 * 2.005, 32 * 2, 32 * 2]} />
        {/* Tamanho da Terra aproximadamente */}
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          transparent={true}
          depthWrite={true}
          side={DoubleSide} // significa que a malha será renderizada em ambos os lados do triângulo. Isso significa que a malha será renderizada mesmo se estivermos olhando para o lado de trás do triângulo. Exigi maior poder de processamento, mas é necessário para renderizar as nuvens.
        />
      </mesh>

      <mesh
        ref={earthRef}
        position={[80, 0, 0]} // posição da Terra
      >
        <sphereGeometry args={[6.371 * 2, 32 * 2, 32 * 2]} />

        <meshPhongMaterial specularMap={specularMap} />

        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>
    </>
  );
};

