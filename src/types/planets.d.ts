export type PlanetsProps = {
  handlePlanetClick: (planetName: PlanetsName) => void;
};

export type PlanetInfo = {
  name: string;
  distanceFromSun: string;
  distanceRank: string;
  diameter: string;
  sizeRank: string;
  weight: string;
  weightRank: string;
  age: string;
  orbitalPeriod: string;
  orbitalPeriodRank: string;
  images: string[];
};

export type PlanetsName =
  | "earth"
  | "mars"
  | "moon"
  | "mercury"
  | "venus"
  | "jupiter"
  | "uranus"
  | "saturn"
  | "neptune";
