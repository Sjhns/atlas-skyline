export type PlanetsProps = {
  handlePlanetClick: (
    planetName:
      | "earth"
      | "mars"
      | "moon"
      | "mercury"
      | "venus"
      | "jupiter"
      | "uranus"
      | "saturn"
  ) => void;
};
