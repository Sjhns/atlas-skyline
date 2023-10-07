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
import { Props } from "./simple-mars";

export const SimpleEarth = ({ position }: Props) => {
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

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <mesh
        ref={moonRef}
        position={[position[0]+ 23, position[1] + 7, position[2]]} // posição da Lua
      >
        <sphereGeometry args={[6.371 * 0.27, 32 * 2, 32 * 2]} />

        <meshStandardMaterial
          map={moonMap}
          bumpMap={moonBump}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>

      <mesh ref={cloudsRef} position={position}>
        <sphereGeometry args={[6.371 * 2.005, 32 * 2, 32 * 2]} />

        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          transparent={true}
          depthWrite={true}
          side={DoubleSide}
        />
      </mesh>

      <mesh ref={earthRef} position={position}>
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
