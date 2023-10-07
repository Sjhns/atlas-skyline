"use client";

import { AiFillExclamationCircle } from "react-icons/ai";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { System } from "../system";
import { Carousel } from "@material-tailwind/react";
import { useState } from "react";

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";
import {
  BellIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";

type Props = {
  planet: string;
};

export const InfoPainel = ({ planet }: Props) => {
  return (
    <div className="flex-1 w-full border-r pl-8 pr-10 overflow-y-auto min-w-min pb-14 mr-10">
      <div className="p-5 flex w-full items-center justify-between mb-5">
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
            {" "}
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

        {/* ----------------*/}

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

        {/* ----------------*/}
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

export const AbaStatistic = ({ planet }: { planet: string }) => {};

export const AbaImagens = () => {
  const [fullScreen, setFullScreen] = useState(false);

  const handleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <div
      className={`
    
    ${fullScreen ? "absolute inset-0 z-20" : "relative"}
    `}
    >
      {/* <div>

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
      </div> */}

      <div
        className="absolute top-0 right-0 p-5 cursor-pointer z-50"
        onClick={handleFullScreen}
      >
        {fullScreen ? (
          <AiOutlineFullscreen className="text-4xl text-yellow-300" />
        ) : (
          <AiOutlineFullscreenExit className="text-4xl text-yellow-300" />
        )}
      </div>
      <Carousel transition={{ duration: 2 }}>
        <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/210330140016-curiosity-selfie.jpg?q=w_2500,h_1406,x_0,y_0,c_fill/w_1376"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/210211180510-02-mars-unf.jpg?q=w_1782,h_1005,x_0,y_0,c_fill/w_1376"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/210203131356-01-best-moments-on-mars-0203.jpg?q=w_2880,h_1800,x_0,y_0,c_fill/w_1376"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/181115180614-06-mars-best-moments-mars-msl-gale-crater-mt-sharp-soil-layers-pia19912.jpg?q=w_2500,h_1406,x_0,y_0,c_fill/w_1376"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/210211181300-13-mars-unf.jpg?q=w_1600,h_1600,x_0,y_0,c_fill/w_1376"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export const AbaViagens = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="flex-1 flex flex-col border-r pt-3 px-5 overflow-y-scroll">
        <h3 className="text-2xl font-bold mb-9">
          Ultimas operações realizadas
        </h3>

        <div className="w-full px-16">
          <Timeline>
            <TimelineItem className="h-28">
              <TimelineConnector className="!w-[78px]" />
              <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-[#111B52] py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                <TimelineIcon className="p-3" variant="ghost" color="white">
                  <BellIcon className="h-5 w-5" />
                </TimelineIcon>
                <div className="flex flex-col gap-1">
                  <Typography variant="h6" color="white">
                    $2400, Design changes
                  </Typography>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-300"
                  >
                    22 DEC 7:20 PM
                  </Typography>
                </div>
              </TimelineHeader>
            </TimelineItem>

            <TimelineItem className="h-28">
              <TimelineConnector className="!w-[78px]" />
              <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-[#111B52] py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                <TimelineIcon className="p-3" variant="ghost" color="red">
                  <ArchiveBoxIcon className="h-5 w-5" />
                </TimelineIcon>
                <div className="flex flex-col gap-1">
                  <Typography variant="h6" color="white">
                    New order #1832412
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    21 DEC 11 PM
                  </Typography>
                </div>
              </TimelineHeader>
            </TimelineItem>

            <TimelineItem className="h-28">
              <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-[#111B52] py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                <TimelineIcon className="p-3" variant="ghost" color="green">
                  <CurrencyDollarIcon className="h-5 w-5" />
                </TimelineIcon>
                <div className="flex flex-col gap-1">
                  <Typography variant="h6" color="white">
                    Payment completed for order #4395133
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    20 DEC 2:20 AM
                  </Typography>
                </div>
              </TimelineHeader>
            </TimelineItem>

            {/* ----------- */}

            <TimelineItem className="h-28">
              <TimelineConnector className="!w-[78px]" />
              <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-[#111B52] py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                <TimelineIcon className="p-3" variant="ghost">
                  <BellIcon className="h-5 w-5 text-white"  />
                </TimelineIcon>
                <div className="flex flex-col gap-1">
                  <Typography variant="h6" color="white">
                    $5700, New order #1832412
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    21 DEC 11 PM
                  </Typography>
                </div>
              </TimelineHeader>
            </TimelineItem>

            <TimelineItem className="h-28">
              <TimelineConnector className="!w-[78px]" />
              <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-[#111B52] py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                <TimelineIcon className="p-3" variant="ghost" color="red">
                  <ArchiveBoxIcon className="h-5 w-5" />
                </TimelineIcon>
                <div className="flex flex-col gap-1">
                  <Typography variant="h6" color="white">
                    New order #532458
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    85 DEC 11 PM
                  </Typography>
                </div>
              </TimelineHeader>
            </TimelineItem>

            <TimelineItem className="h-28">
              <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-[#111B52] py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                <TimelineIcon className="p-3" variant="ghost" color="green">
                  <CurrencyDollarIcon className="h-5 w-5" />
                </TimelineIcon>
                <div className="flex flex-col gap-1">
                  <Typography variant="h6" color="white">
                    Payment completed for order #842358
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    05 SEP 2:20 AM
                  </Typography>
                </div>
              </TimelineHeader>
            </TimelineItem>
          </Timeline>
        </div>
      </div>

      <div className="flex-1 flex flex-col pt-3 pl-3">
        <h3 className="text-2xl font-bold text-center mb-5">Atividades</h3>

        <div>
          <h4 className="text-lg font-bold text-gray-400">
            Poipu Beach Park is a beach on the south side of the island of Kauai
          </h4>

          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            impedit, porro natus magnam similique architecto omnis fugiat iusto
            iste ipsum? Nobis impedit atque iure dignissimos quos cum incidunt
            voluptatem eos.
          </p>
        </div>
      </div>
    </div>
  );
};

export const AbaNavegacao = () => {
  return <h1>AbaNavegacao</h1>;
};

export const AbaSistema = () => {
  return (
    <div className="w-full h-screen">
      <div>
        <div>
          <span>Inertial Velocity</span>

          <div className="bg-[#5f5f61] rounded w-[540px] h-1 p-1">
            <div className="bg-blue-900 w-full h-full"></div>
          </div>
        </div>
      </div>
      <System />
    </div>
  );
};

export const AbaSair = () => {
  return <h1>AbaSair</h1>;
};
