import { PlanetInfo as PlanetInfoType } from "@/types/planets";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const PlanetInfo = ({
  age,
  diameter,
  distanceFromSun,
  distanceRank,
  name,
  orbitalPeriod,
  orbitalPeriodRank,
  sizeRank,
  weight,
  weightRank,
}: PlanetInfoType) => {
  return (
    <div
      className="flex flex-col items-start justify-center tracking-wider transition-all duration-500 ease-in-out"
      style={{
        fontFamily: jetBrainsMono.style.fontFamily,
      }}
    >
      <h2 className="text-xl font-bold mb-5 text-center w-full">
        Planeta {name}
      </h2>
      <Paragraph>
        <strong>Distância do Sol:</strong> {distanceFromSun} {distanceRank}
      </Paragraph>
      <Paragraph>
        <strong>Diâmetro:</strong> {diameter} {sizeRank}
      </Paragraph>
      <Paragraph>
        <strong>Peso:</strong> {weight} {weightRank}
      </Paragraph>
      <Paragraph>
        <strong>Idade:</strong> {age}
      </Paragraph>
      <Paragraph>
        <strong>Período orbital:</strong> {orbitalPeriod} {orbitalPeriodRank}
      </Paragraph>

      <button className="mt-5 w-full bg-gray-800 hover:opacity-90 text-white px-5 py-2 rounded-md">
        Mais informações <span>&rarr;</span>
      </button>
    </div>
  );
};

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="mb-5 text-left w-full text-sm">{children}</p>;
};
