import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { PlanetInfo } from "@/types/planets";

type PlanetContextType = {
  selectedPlanet: PlanetInfo | null;
  setSelectedPlanet: (planet: PlanetInfo | null) => void;
};

const PlanetContext = createContext<PlanetContextType | undefined>(undefined);

export const usePlanetContext = () => {
  const context = useContext(PlanetContext);

  if (context === undefined) {
    throw new Error("usePlanetContext must be used within a PlanetProvider");
  }

  return context;
};

export const PlanetProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetInfo | null>(null);

  const value = useMemo(() => {
    return { selectedPlanet, setSelectedPlanet };
  }, [selectedPlanet]);

  return (
    <PlanetContext.Provider value={value}>{children}</PlanetContext.Provider>
  );
};
