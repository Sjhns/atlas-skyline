import { InfoPainel } from "../painel/info-painel";
import { PlanetPainel } from "../painel/planet-painel";

export const AbaStatistic = ({ planet }: { planet: string }) => {
  return (
    <>
      <InfoPainel planet={planet} />
      <PlanetPainel />
    </>
  );
};
