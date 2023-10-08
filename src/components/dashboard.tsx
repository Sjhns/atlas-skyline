import { useState } from "react";
import { Raleway } from "next/font/google";

import { MenuOption } from "./painel/menu-option";
import { SideBar } from "./painel/sidebar";
import { Footer } from "./painel/footer";
import { ActiveTimeCounter } from "./painel/active-time-counter";
import { AbaImages } from "./aba/images";
import { AbaTrips } from "./aba/trips";
import { WallE } from "./aba/wall-e";
import { AbaShip } from "./aba/ship";
import { AbaStatistic } from "./aba/statistic";

const raleway = Raleway({ subsets: ["latin"] });

export const Dashboard = () => {
  const [aba, setAba] = useState(0);

  return (
    <div
      className="h-screen w-full flex bg-[#111B52]"
      style={{
        fontFamily: raleway.style.fontFamily,
        fontVariantNumeric: " lining-nums proportional-nums",
      }}
    >
      <div className="flex-1 flex flex-col w-full relative">
        <div className="px-5 py-3 flex items-center w-full border-b justify-between bg-[#020738] sticky top-0">
          <section className="flex items-center space-x-10">
            <div className="flex flex-col items-center justify-center">
              <MenuOption title="Painel Espacial" sub="Atlas Skyline" />
            </div>

            <ActiveTimeCounter title="Tempo ativo" />
          </section>

          <section className="flex items-center space-x-10">
            <MenuOption title="Gravidade local" sub="3,71 m/s²" />

            <MenuOption title="Diâmetro" sub="6.779 km" />

            <MenuOption title="Temperatura média" sub="-62 graus Celsius " />

            <MenuOption
              title="Distância do Sol"
              sub="2,28 x 10"
              potencial="8 "
              distance="km"
            />

            <MenuOption title="Período de orbita" sub="687 dias" />
          </section>
        </div>

        <main className="h-full w-full flex bg-[#020738] border-x border-b rounded-b-[50px] overflow-hidden">
          <SideBar setAba={setAba} />

          {aba === 0 && <AbaStatistic planet="Marte" />}
          {aba === 1 && <AbaImages />}
          {aba === 2 && <AbaTrips />}
          {aba === 3 && <WallE />}
          {aba === 4 && <AbaShip />}
        </main>

        <Footer />
      </div>
    </div>
  );
};
