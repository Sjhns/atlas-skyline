"use client";

import { Earth } from "@/components/earth";
import { Jupiter } from "@/components/jupiter";
import { Mars } from "@/components/mars";
import { Mercury } from "@/components/mercury";
import { Neptune } from "@/components/neptune";
import { Saturn } from "@/components/saturn";
import { Sun } from "@/components/sun";
import { Uranus } from "@/components/uranus";
import { Venus } from "@/components/venus";
import { PlanetsName } from "@/types/planets";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

import * as THREE from "three";

export default function Home() {
  const [about, setAbout] = useState<PlanetsName>();

  const handlePlanetClick = (
    planetName: PlanetsName

  ) => {
    setAbout(planetName);
  };

  const position = new THREE.Vector3(0, 100, 500);

  return (
    <>
      {about && <PlanetInfoModal planetName={about} />}
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

type PlanetInfoProps = {
  planetName: string;
  description: string;
};

function PlanetInfo({ planetName, description }: PlanetInfoProps) {
  return (
    <div className="w-1/2 h-1/2 bg-gray-800 rounded-lg p-4 mt-2">
      <p className="text-2xl font-bold text-center">{description}</p>
    </div>
  );
}

type PlanetInfoModalProps = {
  planetName: PlanetsName
};

function PlanetInfoModal({ planetName }: PlanetInfoModalProps) {
  const planetDescriptions = {
    earth:
      "A Terra é o terceiro planeta do Sistema Solar e o único conhecido por abrigar vida.",
    mars: 'Marte é o quarto planeta do Sistema Solar e é conhecido como o "Planeta Vermelho".',
    moon: "A Lua é o satélite natural da Terra e é o objeto mais próximo do nosso planeta.",
    mercury:
      "Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol.",
    venus: "Vênus é o segundo planeta do Sistema Solar.",
    jupiter: "Júpiter é o maior planeta do Sistema Solar.",
    uranus: "Urano é o sétimo planeta do Sistema Solar.",
    saturn: "Saturno é o sexto planeta do Sistema Solar.",
    neptune: "Netuno é o oitavo planeta do Sistema Solar.",
  };

  return (
    <div className="absolute text-white w-full top-0 left-0 flex justify-center items-center bg-opacity-50 z-20">
      <div className="w-full h-full flex items-center justify-center">
        <PlanetInfo
          planetName={planetName}
          description={planetDescriptions[planetName]}
        />
      </div>
    </div>
  );
}
