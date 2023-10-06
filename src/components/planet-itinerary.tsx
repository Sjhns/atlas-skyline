/* eslint-disable @next/next/no-img-element */
import { usePlanetContext } from "@/context/planet-context";
import { PlanetInfo } from "./planet-info";
import { useState } from "react";

export const PlanetItinerary = () => {
  const { selectedPlanet, setSelectedPlanet } = usePlanetContext();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleCloseModal = () => {
    setSelectedPlanet(null);
  };

  if (!selectedPlanet) {
    return null;
  }

  return (
    <div className="absolute z-50 h-screen overflow-x-hidden inset-0 w-full bg-black py-9">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-bold mb-5">
          Itinerário de {selectedPlanet.name}{" "}
        </h1>
        {/* Adicione informações educativas sobre o planeta */}
        <p className="text-white text-center w-full">
          {selectedPlanet.name} é o {selectedPlanet.distanceRank} planeta do
          nosso sistema solar e tem um diâmetro de {selectedPlanet.diameter}.{" "}
          {/* Adicione mais informações relevantes */}
        </p>
      </div>

      <p className="text-white text-center w-full mb-16">
        {/* Conteúdo educativo sobre o planeta */}
        {selectedPlanet.name} é um planeta fascinante com muitos lugares
        interessantes para visitar. Você pode explorar {selectedPlanet.name} por{" "}
        {selectedPlanet.orbitalPeriod} e descobrir seus segredos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5 relative">
        {selectedPlanet.images.map((image) => (
          <div key={image} className="relative flex">
            {!imageLoaded && (
              <div className="absolute rounded animate-pulse flex-1 inset-0 flex items-center justify-center bg-slate-900 w-full h-full"></div>
            )}

            <img
              onLoad={handleImageLoad}
              src={image}
              alt={selectedPlanet.name}
              className={`w-full h-auto object-cover rounded-lg  object-center bg-slate-900  transform transition duration-300 hover:scale-105 
              ${imageLoaded ? "opacity-100" : "opacity-0"}
              `}
            />

            {/* Adicione um overlay com informações adicionais se desejar */}
            {/* <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 p-4 transition duration-300 group-hover:opacity-100">
        <p className="text-white">Nome do planeta: {selectedPlanet.name}</p>
      </div> */}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center w-full mt-16">
        <PlanetInfo {...selectedPlanet} showButton={false} />
      </div>

      <button
        className="absolute top-0 right-0 mt-2 mr-2 text-white bg-purple-700 bg-opacity-50 px-4 py-1 rounded"
        onClick={handleCloseModal}
      >
        Fechar
      </button>
    </div>
  );
};
