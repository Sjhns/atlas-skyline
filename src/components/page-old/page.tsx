"use client";

import { Earth } from "@/components/planets/earth";
import { Jupiter } from "@/components/planets/jupiter";
import { Mars } from "@/components/planets/mars";
import { Mercury } from "@/components/planets/mercury";
import { Neptune } from "@/components/planets/neptune";
import { PlanetInfoModal } from "@/components/common/planet-info-modal";
import { Saturn } from "@/components/planets/saturn";
import { Sun } from "@/components/planets/sun";
import { Uranus } from "@/components/planets/uranus";
import { Venus } from "@/components/planets/venus";
import { PlanetInfo, PlanetsName } from "@/types/planets";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

import * as THREE from "three";
import { PlanetProvider } from "@/context/planet-context";
import { PlanetItinerary } from "@/components/dashboard";
import { Welcome } from "@/components/operations/welcome";

export default function Home() {
  const [about, setAbout] = useState<PlanetsName>();

  const handlePlanetClick = (planetName: PlanetsName) => {
    setAbout(planetName);
  };

  const position = new THREE.Vector3(0, 100, 500);

  return (
    <>
      <PlanetProvider>
        {/* {about && <PlanetInfoModal planetName={about} />} */}

        <Welcome />
        {/* <PlanetItinerary /> */}

        {/* <Canvas
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
        </Canvas> */}
      </PlanetProvider>
    </>
  );
}
