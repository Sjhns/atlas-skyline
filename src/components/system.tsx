/* eslint-disable react/no-children-prop */
"use client";

import {
  Backdrop,
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  PivotControls,
  QuadraticBezierLine,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { ReactNode, useRef } from "react";
import { Vector3 } from "three";

export const System = () => {
  const spaceman = useRef(!null);

  return (
    <Canvas shadows camera={{ position: [0, 1.5, 3], zoom: 1.7   }}>
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

      {/* <Float
        position={[1, 1.1, -0.5]}
        rotation={[Math.PI / 3.5, 0, 0]}
        rotationIntensity={4}
        floatIntensity={6}
        speed={1.5}
        >
      </Float> */}

      {/* <Cable start={ship} end={spaceman} /> */}

      {/* <mesh>
        <Backdrop
          castShadow
          floor={2}
          position={[0, -0.5, -3]}
          scale={[50, 10, 4]}
          children={() => {
            return;
          }}
          
          receiveShadow={true}
        />
        <meshStandardMaterial color="#353540" envMapIntensity={0.1} />;
      </mesh> */}

      <ContactShadows position={[0, -0.485, 0]} scale={5} blur={1.5} far={1} />
      <Environment preset="city" />

      {/* <Spaceman /> */}

      <OrbitControls
        makeDefault
        // maxPolarAngle={Math.PI / 2}
        // minPolarAngle={Math.PI / 2}
        // minAzimuthAngle={-Math.PI / 2}
        // maxAzimuthAngle={Math.PI / 2}
        // minDistance={0}
        // maxDistance={700}
        // zoomSpeed={2}
        // panSpeed={0.5}
        // rotateSpeed={0.4}
        // enablePan={true}
        // enableZoom={true}
        // enableRotate={true}
      />
    </Canvas>
  );
};

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

function Cable({
  start,
  end,
  v1 = new Vector3(),
  v2 = new Vector3(),
}: {
  start: any;
  end: any;
  v1?: Vector3;
  v2?: Vector3;
}) {
  const ref = useRef() as any;
  // useFrame(() =>
  //   ref.current.setPoints(
  //     start.current.getWorldPosition(v1),
  //     end.current.getWorldPosition(v2)
  //   )
  // );
  return (
    <QuadraticBezierLine
      ref={ref}
      lineWidth={3}
      color="#ff2060"
      start={new Vector3()}
      end={new Vector3()}
    />
  );
}
