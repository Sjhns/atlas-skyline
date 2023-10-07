"use client";

import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import BaseMap from "@/texture/mars/mars_1k_color.jpg";
import { TextureLoader } from "three";

export type Props = {
  position: [number, number, number];
};

export const SimpleMars = ({ position }: Props) => {
  const marsRef = useRef<THREE.Mesh>(null!);
  const [colorMap] = useLoader(TextureLoader, [BaseMap.src]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    marsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <mesh ref={marsRef} position={position}>
        <sphereGeometry args={[6.371 * 2, 32 * 2, 32 * 2]} />
        <meshPhongMaterial map={colorMap} />
      </mesh>
    </>
  );
};
