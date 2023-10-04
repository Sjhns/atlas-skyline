"use client";

import { Earth } from "@/components/earth";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [about, setAbout] = useState<"earth" | "mars" | "moon">();

  const handlePlanetClick = (planetName: "earth" | "mars" | "moon") => {
    setAbout(planetName);
  };

  return (
    <>
      {about && <PlanetInfoModal planetName={about} />}
      <Canvas>
        <Earth handlePlanetClick={handlePlanetClick} />
      </Canvas>
    </>
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
    <div
      className="
    
    absolute text-white w-full top-0 left-0 flex justify-center items-center bg-opacity-50 z-20
    "
    >
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
