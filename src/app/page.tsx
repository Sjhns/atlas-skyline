"use client";

import { ChoosePlan } from "@/components/operations/choose-plan";
import { ChoosePlanet } from "@/components/operations/chosse-planet";
import { Health } from "@/components/operations/health";
import { Insurances } from "@/components/operations/insurances";
import { Welcome } from "@/components/operations/welcome";
import { Dashboard } from "@/components/dashboard";
import { Raleway } from "next/font/google";
import { useEffect, useState } from "react";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const [telaAtual, setTelaAtual] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (telaAtual === 5) {
        return;
      }

      if (!scrolling) {
        setScrolling(true);

        if (event.deltaY > 0 && telaAtual < 5) {
          setTelaAtual(telaAtual + 1);
        } else if (event.deltaY < 0 && telaAtual > 0) {
          setTelaAtual(telaAtual - 1);
        }

        setTimeout(() => {
          setScrolling(false);
        }, 1400); // Tempo em milissegundos para habilitar o scroll novamente
      }
    };

    document.addEventListener("wheel", handleScroll);

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, [telaAtual, scrolling]);

  return (
    <div
      className="h-screen flex items-center justify-center flex-col"
      style={{
        fontFamily: raleway.style.fontFamily,
        fontWeight: raleway.style.fontWeight,
      }}
    >
      {telaAtual === 0 && <Welcome />}
      {telaAtual === 1 && <ChoosePlanet />}
      {telaAtual === 2 && <Health />}
      {telaAtual === 3 && <ChoosePlan />}
      {telaAtual === 4 && <Insurances />}
      {telaAtual === 5 && <Dashboard />}
    </div>
  );
}
