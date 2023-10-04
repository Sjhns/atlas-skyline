"use client";

import { Earth } from "@/components/earth";
import { Jupiter } from "@/components/jupiter";
import { Mars } from "@/components/mars";
import { Mercury } from "@/components/mercury";
import { Sun } from "@/components/sun";
import { Uranus } from "@/components/uranus";
import { Venus } from "@/components/venus";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { useState } from "react";
import { TextureLoader } from "three";

import * as THREE from "three";
import SceneBackground from "@/texture/background/8k_stars_milky_way_dark2.jpg";

export default function Home() {
  const [about, setAbout] = useState<"earth" | "mars" | "moon">();

  const handlePlanetClick = (planetName: "earth" | "mars" | "moon") => {
    setAbout(planetName);
  };

  const position = new THREE.Vector3(0, 0, 300);

  return (
    <>
      <Canvas
        camera={{
          position: position,
        }}
      >
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          zoomSpeed={2}
          panSpeed={0.5} // significa a velocidade de movimento da câmera
          rotateSpeed={0.4} // velocidade de rotação
          // target={}
        />
        <ambientLight intensity={2} />
        {/* <pointLight color="#f6f3ea" position={[0, 0, 0]} intensity={100} /> */}
        <Sun />
        <Mercury handlePlanetClick={handlePlanetClick} />
         <Venus handlePlanetClick={handlePlanetClick} />
        <Earth handlePlanetClick={handlePlanetClick} /> 
        <Mars handlePlanetClick={handlePlanetClick} />
        <Jupiter handlePlanetClick={handlePlanetClick} />
        <Uranus handlePlanetClick={handlePlanetClick} /> 
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
  planetName: "earth" | "mars" | "moon";
};

function PlanetInfoModal({ planetName }: PlanetInfoModalProps) {
  // Cria a referência com o tipo HTMLDivElement

  // ----------------------

  // Aqui você pode definir descrições para cada planeta
  const planetDescriptions = {
    earth:
      "A Terra é o terceiro planeta do Sistema Solar e o único conhecido por abrigar vida.",
    mars: 'Marte é o quarto planeta do Sistema Solar e é conhecido como o "Planeta Vermelho".',
    moon: "A Lua é o satélite natural da Terra e é o objeto mais próximo do nosso planeta.",
  };

  return (
    <div className="absolute text-white w-full top-0 left-0 flex justify-center items-center bg-opacity-50 z-20">
      <div className="w-full h-full flex items-center justify-center">
        <PlanetInfo
          planetName={planetName}
          description={planetDescriptions[planetName]}
        />
      </div>
      {/* Adicione mais informações detalhadas sobre o planeta, se desejar */}
    </div>
  );
}
