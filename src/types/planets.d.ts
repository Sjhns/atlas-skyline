export type PlanetsProps = {
  handlePlanetClick: (
    planetName: PlanetsName,
  ) => void;
};


export type  PlanetsName =  | "earth"
                            | "mars"
                            | "moon"
                            | "mercury"
                            | "venus"
                            | "jupiter"
                            | "uranus"
                            | "saturn"
                            | "neptune"