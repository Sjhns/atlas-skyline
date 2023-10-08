"use client";

import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillExclamationCircle,
} from "react-icons/ai";

import { BsArrowCounterclockwise } from "react-icons/bs";

type Props = {
  planet: string;
};

export const InfoPainel = ({ planet }: Props) => {
  return (
    <div className="flex-1 w-full border-r pl-5 pr-8 overflow-y-auto min-w-min pb-14 mr-12">
      <div className="py-5 flex w-full items-center justify-between mb-5">
        <div className="flex space-x-3 ">
          <span className="rounded bg-[#111B52] border p-3 text-white">
            <AiOutlineArrowLeft className="text-xl" />
          </span>
          <span className="rounded bg-[#111B52] border p-3 text-white ">
            <AiOutlineArrowRight className="text-xl" />
          </span>
        </div>

        <h3 className="text-2xl font-bold">Planeta {planet}</h3>

        <div className="flex flex-col">
          <span className="text-sm font-bold text-center flex items-center">
            running
            <BsArrowCounterclockwise className="ml-2 text-lg" />
          </span>

          <span className="text-sm font-bold text-left">00:22:00</span>
        </div>
      </div>

      <div className="space-y-7 pl-3">
        <div className="bg-[#111B52] p-5  rounded w-full">
          <h3 className="text-xl font-bold flex items-center pb-2 mb-3 border-b">
            <AiFillExclamationCircle className="text-xl mr-2 text-yellow-300" />
            Duração média da viagem:
          </h3>

          <div className="space-y-3">
            <div className="flex items-center">
              <span className="whitespace-nowrap font-bold ">
                Partindo da Terra:
              </span>

              <div className="flex-grow border-b border-dotted border-gray-400 relative top-1"></div>

              <span className="font-bold whitespace-nowrap">1000 dias.</span>
            </div>

            <div className="flex items-center">
              <span className="whitespace-nowrap font-bold ">
                Retornando de Marte:
              </span>

              <div className="flex-grow border-b border-dotted border-gray-400 relative top-1"></div>

              <span className="font-bold whitespace-nowrap">1000 dias.</span>
            </div>
            <h2 className="text-justify flex items-center pb-2 mb-3 text-sm text-gray-200 mt-4">
              Dados baseados em um aproveitamento de energia eficiente para uma
              boa sustentabilidade no consumo de combustível.
            </h2>
          </div>
        </div>

        <div className="bg-[#111B52] p-5  rounded w-full">
          <h3 className="text-xl font-bold flex items-center pb-2 mb-3 border-b">
            <AiFillExclamationCircle className="text-xl mr-2 text-yellow-300" />
            Próximas expedições:
          </h3>

          <div className="space-y-3">
            <div className="flex items-center">
              <span className="whitespace-nowrap font-bold ">
                Xe - 10/11/2024
              </span>

              <div className="flex-grow border-b border-dotted border-gray-400 relative top-1"></div>

              <span className="font-bold whitespace-nowrap">SpaceX</span>
            </div>

            <div className="flex items-center">
              <span className="whitespace-nowrap font-bold ">
                Mars Run - 25/03/2033
              </span>

              <div className="flex-grow border-b border-dotted border-gray-400 relative top-1"></div>

              <span className="font-bold whitespace-nowrap">SpaceX</span>
            </div>
            <div className="flex items-center">
              <span className="whitespace-nowrap font-bold ">;</span>

              <div className="flex-grow border-b border-dotted border-gray-400 relative top-1"></div>

              <span className="font-bold whitespace-nowrap">;</span>
            </div>
            <div className="flex items-center">
              <span className="whitespace-nowrap font-bold ">;</span>

              <div className="flex-grow border-b border-dotted border-gray-400 relative top-1"></div>

              <span className="font-bold whitespace-nowrap">;</span>
            </div>
          </div>
        </div>

        <div className="bg-[#111B52] p-5  rounded w-[540px]">
          <h3 className="text-xl font-bold flex items-center pb-2 mb-3 border-b">
            <AiFillExclamationCircle className="text-xl mr-2 text-yellow-300" />
            Descrição:
          </h3>

          <div className="space-y-3">
            <div className="flex items-center">
              <p className="font-bold line-clamp-2">
                Marte, conhecido como o planeta vermelho, é o quarto planeta do
                sistema solar e o segundo menor, situando-se a uma distância de
                227 milhões de km do Sol e possui um diâmetro de aproximadamente
                6791 km. Sua superfície sólida é formada por de basalto ígneo,
                arenito sedimentar, argilito, impactitos e evaporitos, rochas
                compostas por carbonatos, sulfatos, sílica, filossilicatos,
                fosfatos e óxidos de ferro - material responsável pela aparência
                vermelha-alaranjada do planeta. Ademais, a atmosfera do corpo
                celeste é constituída de dióxido de carbono, nitrogênio e
                argônio, além disso ela é bastante fraca e sua pressão
                atmosférica é apenas cerca de 0,6% da Terra. Sua gravidade é de
                3,71 m/s², o que significa que uma pessoa de 45 kg pesaria 17 kg
                em Marte e ele possui dois satélites naturais, conhecidos como:
                Fobos e Deimos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
