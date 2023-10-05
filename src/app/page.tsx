"use client";

import { Earth } from "@/components/earth";
import { Jupiter } from "@/components/jupiter";
import { Mars } from "@/components/mars";
import { Mercury } from "@/components/mercury";
import { Neptune } from "@/components/neptune";
import { PlanetInfoModal } from "@/components/planet-info-modal";
import { Saturn } from "@/components/saturn";
import { Sun } from "@/components/sun";
import { Uranus } from "@/components/uranus";
import { Venus } from "@/components/venus";
import { PlanetInfo, PlanetsName } from "@/types/planets";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

import * as THREE from "three";

export default function Home() {
  const [about, setAbout] = useState<PlanetsName>();
  const [close, setClose] = useState<boolean>(false);

  const handlePlanetClick = (planetName: PlanetsName) => {
    setAbout(planetName);
  };

  

  const position = new THREE.Vector3(0, 100, 500);

  return (
    <>
      {about && <PlanetInfoModal setClose={setClose} planetName={about} />}
      <Canvas
        camera={{
          position: position,
        }}
      >
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          // maxPolarAngle={Math.PI / 2}

          // minPolarAngle={Math.PI / 2}
          // minAzimuthAngle={-Math.PI / 2}
          // maxAzimuthAngle={Math.PI / 2}
          minDistance={100}
          maxDistance={700}
          zoomSpeed={2}
          panSpeed={0.5} // significa a velocidade de movimento da câmera
          rotateSpeed={0.4} // velocidade de rotação
          // target={}
        />

        <ambientLight intensity={2} />
        <pointLight color="#f6f3ea" position={[0, 0, 0]} intensity={100} />
        <Sun />
        <Mercury handlePlanetClick={handlePlanetClick} />
        <Venus handlePlanetClick={handlePlanetClick} />
        <Earth handlePlanetClick={handlePlanetClick} />
        <Mars handlePlanetClick={handlePlanetClick} />
        <Jupiter handlePlanetClick={handlePlanetClick} />
        <Saturn handlePlanetClick={handlePlanetClick} />
        <Uranus handlePlanetClick={handlePlanetClick} />
        <Neptune handlePlanetClick={handlePlanetClick} />
      </Canvas>
    </>
  );
}

function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}
