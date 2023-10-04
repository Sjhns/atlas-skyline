"use client";

import { Earth } from "@/components/earth";
import { Canvas, useFrame } from "@react-three/fiber";
import { useState } from "react";

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

function PlanetInfo({ planetName, description }) {
  return (
    <div
      className="
    
    w-1/2 h-1/2 bg-gray-800 rounded-lg p-4
    "
    >
      <h2 className="">{planetName}</h2>
      <p>{description}</p>
    </div>
  );
}

function PlanetInfoModal({ planetName }) {
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  const handlePlanetClick = (planetName) => {
    if (about === planetName) {
      // Se o mesmo planeta for clicado novamente, feche a descrição
      setAbout(null);
      setDescriptionVisible(false);
    } else {
      setAbout(planetName);
      setDescriptionVisible(true);
    }
  };

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
    
    absolute text-white w-full top-0 left-0 flex justify-center items-center bg-opacity-50
    "
      onClick={() => setDescriptionVisible(false)}
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
