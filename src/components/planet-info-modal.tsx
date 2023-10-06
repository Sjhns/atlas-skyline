import { PlanetsName } from "@/types/planets";
import { PlanetInfo } from "./planet-info";
import { planetData } from "@/data/planets";

type PlanetInfoModalProps = {
  planetName: PlanetsName;
};

export const PlanetInfoModal = ({ planetName }: PlanetInfoModalProps) => {
  const planetInfo = planetData[planetName];

  return (
    <div className="absolute h-screen text-white right-0 flex justify-center items-center z-20">
      <div className="mr-2  w-72 rounded-lg px-5 py-10 flex items-center justify-center bg-[#000000be] border border-[#7f7e7e64]">
        <PlanetInfo {...planetInfo} />
      </div>
    </div>
  );
};
