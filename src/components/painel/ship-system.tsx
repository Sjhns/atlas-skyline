"use client";

import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  PivotControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode, useRef } from "react";

const Spaceman = ({ children }: { children: ReactNode }) => {
  const ship = useRef();

  const { scene } = useGLTF("/3d/ship.glb");

  return (
    <mesh scale={0.2}>
      <primitive object={scene} ref={ship} position={[0, 0, 0]} />
      {children}
    </mesh>
  );
};

const Ship = () => {
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf"
  );

  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
};

export const ShipSystem = () => {
  const spaceman = useRef(!null);

  return (
    <Canvas shadows camera={{ position: [0, 1.5, 3], zoom: 1.7 }}>
      <ambientLight intensity={2} />
      <directionalLight position={[-10, 0, -5]} intensity={1} color="red" />
      <directionalLight
        position={[-1, -2, -5]}
        intensity={0.2}
        color="#0c8cbf"
      />
      <spotLight
        position={[5, 0, 5]}
        intensity={2.5}
        penumbra={1}
        angle={0.35}
        castShadow
        color="#0c8cbf"
      />

      <Float scale={0.75} position={[0, 0.65, 0]} rotation={[0, 0.6, 0]}>
        <PivotControls
          anchor={[0, 0.7, 0.09]}
          depthTest={true}
          scale={0.5}
          lineWidth={2}
        >
          <Ship />
          <Spaceman>
            <object3D position={[-0.6, 2, 0]} ref={spaceman as any} />
          </Spaceman>
        </PivotControls>
      </Float>

      <ContactShadows position={[0, -0.485, 0]} scale={5} blur={1.5} far={1} />
      <Environment preset="city" />

      <OrbitControls makeDefault />
    </Canvas>
  );
};
