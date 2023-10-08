/* eslint-disable @next/next/no-img-element */
"use client";

import { AiFillExclamationCircle } from "react-icons/ai";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillCheckCircle,
} from "react-icons/ai";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { System } from "../system";
import { Carousel, TimelineBody } from "@material-tailwind/react";
import { useEffect, useState } from "react";

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
import { MarsActivities } from "../viagem/mars-actividade";
import { Canvas } from "@react-three/fiber";
import {
  CameraShake,
  OrbitControls,
  Stage,
  useAnimations,
  useGLTF,
} from "@react-three/drei";

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
        className="absolute top-0 w-full flex justify-end  right-0 p-5 cursor-pointer z-50"
        onClick={handleFullScreen}
      >
        {fullScreen ? (
          <AiOutlineFullscreen className="text-4xl text-gray-700" />
        ) : (
          <AiOutlineFullscreenExit className="text-4xl text-gray-700" />
        )}
      </div>
      <Carousel transition={{ duration: 2 }}>
        <img
          src="/images/mars/1.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />

        <img
          src="/images/mars/2.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />

        <img
          src="/images/mars/3.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />

        <img
          src="/images/mars/4.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />

        <img
          src="/images/mars/5.jpg"
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
      <div className="flex-1 flex flex-col border-r  px-4 overflow-y-scroll">
        <div className="px-2 pt-3 pb-5 flex w-full items-center justify-between mb-5">
          <div className="flex space-x-3">
            <span className="rounded bg-[#111B52] border p-3 text-white">
              <AiOutlineArrowLeft className="text-xl" />
            </span>
            <span className="rounded bg-[#111B52] border p-3 text-white ">
              <AiOutlineArrowRight className="text-xl" />
            </span>
          </div>

          <h3 className="text-2xl font-bold text-center max-w-xs">
            Operações financeiras <br /> em Marte
          </h3>

          <div className="flex flex-col ">
            <span className="text-sm font-bold text-center flex items-center whitespace-nowrap">
              {" "}
              Ultima atualização
            </span>

            <span className="text-sm font-bold text-right">22:05:45</span>
          </div>
        </div>

        <div className="w-full px-2">
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
                  <BellIcon className="h-5 w-5 text-white" />
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

      <MarsActivities />
    </div>
  );
};

// useGLTF.preload("/3d/robot-draco.glb");
function Model(props: any) {
  const { scene, animations } = useGLTF("/3d/robot-draco.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (!actions.Idle) return;

    actions.Idle.play();
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  }, [actions, scene]);

  return <primitive object={scene} {...props} />;
}

export const WallE = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute flex flex-col right-0 top-0 p-7 space-y-5">
        <div className="">
          <span className="text-sm font-bold text-gray-200 mb-2 block">
            Processamento
          </span>

          <div className="flex items-center space-x-3">
            <div className="bg-[#5f5f61] rounded-full w-[240px] h-2 ">
              <div className="bg-blue-900 w-[100%] h-full rounded-full"></div>
            </div>

            <span className="text-sm font-bold text-gray-200 block">100%</span>
          </div>
        </div>

        <div className="">
          <span className="text-sm font-bold text-gray-200 mb-2 block">
            Armazenamento
          </span>

          <div className="flex items-center space-x-3">
            <div className="bg-[#5f5f61] rounded-full w-[240px] h-2 ">
              <div className="bg-blue-900 w-[30%] h-full rounded-full"></div>
            </div>

            <span className="text-sm font-bold text-gray-200 block">30%</span>
          </div>
        </div>

        <div className="">
          <span className="text-sm font-bold text-gray-200 mb-2 block">
            Poder de fogo
          </span>

          <div className="flex items-center space-x-3">
            <div className="bg-[#5f5f61] rounded-full w-[240px] h-2 ">
              <div className="bg-blue-900 w-[70%] h-full rounded-full"></div>
            </div>

            <span className="text-sm font-bold text-gray-200 block">1500%</span>
          </div>
        </div>

        <div className="mb-10">
          <span className="text-sm font-bold text-gray-200 mb-2 block">
            Capacidade analítica
          </span>

          <div className="flex items-center space-x-3">
            <div className="bg-[#5f5f61] rounded-full w-[240px] h-2 ">
              <div className="bg-blue-900 w-[80%] h-full rounded-full"></div>
            </div>

            <span className="text-sm font-bold text-gray-200 block">80%</span>
          </div>
        </div>

        <div className="mb-10">
          <span className="text-sm font-bold text-gray-200 mb-2 block">
            Capacidade de manobra
          </span>

          <div className="flex items-center space-x-3">
            <div className="bg-[#5f5f61] rounded-full w-[240px] h-2 ">
              <div className="bg-blue-900 w-[70%] h-full rounded-full"></div>
            </div>

            <span className="text-sm font-bold text-gray-200 block">
              9000 km/h
            </span>
          </div>
        </div>

        <div className="mb-10">
          <span className="text-sm font-bold text-gray-200 mb-2 block">
            Aceleração máxima
          </span>

          <div className="flex items-center space-x-3">
            <div className="bg-[#5f5f61] rounded-full w-[240px] h-2 ">
              <div className="bg-blue-900 w-[70%] h-full rounded-full"></div>
            </div>

            <span className="text-sm font-bold text-gray-200 block">
              20 m/s²
            </span>
          </div>
        </div>

        {/* -------------------------- */}
      </div>

      {/* -------------------------- */}

      <div className="absolute flex flex-col left-0 top-0 p-7 space-y-9">
        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-gray-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              All Systems check
            </span>
            <span className="text-sm font-bold text-gray-500 block">
              Normal
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-gray-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              Rendezvous burn
            </span>
            <span className="text-sm font-bold text-gray-500 block">
              Normal
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-gray-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              prepare rendezvous burn
            </span>
            <span className="text-sm font-bold text-gray-500 block">
              Normal
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-green-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              Thermal shield
            </span>
            <span className="text-sm font-bold text-gray-300 block">
              Applied
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-gray-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              Burn go/no-go
            </span>
            <span className="text-sm font-bold text-gray-500 block">
              Normal
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-orange-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              Power completion
            </span>
            <span className="text-sm font-bold text-gray-500 block">
              Awaiting
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-gray-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              Station deck check
            </span>
            <span className="text-sm font-bold text-gray-500 block">
              Normal
            </span>
          </div>
        </div>
      </div>

      {/* -------------------------- */}

      <Canvas shadows camera={{ fov: 30, position: [0, 0, 0] }}>
        <CameraShake
          maxYaw={0.1} // Max amount camera can yaw in either direction
          maxPitch={0.1} // Max amount camera can pitch in either direction
          maxRoll={0.1} // Max amount camera can roll in either direction
          yawFrequency={0.1} // Frequency of the the yaw rotation
          pitchFrequency={0.1} // Frequency of the pitch rotation
          rollFrequency={0.1} // Frequency of the roll rotation
          intensity={1} // initial intensity of the shake
          decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
        />
        <Stage>
          <Model />
        </Stage>
        <ambientLight intensity={1} />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
};

export const AbaNave = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute flex flex-col right-0 top-0 p-7 space-y-5">
        <div className="">
          <span className="text-sm font-bold text-gray-200 mb-2 block">
            Inertial Velocity
          </span>

          <div className="flex items-center space-x-3">
            <div className="bg-[#5f5f61] rounded-full w-[240px] h-2 ">
              <div className="bg-blue-900 w-[80%] h-full rounded-full"></div>
            </div>

            <span className="text-sm font-bold text-gray-200 block">
              1000km/h
            </span>
          </div>
        </div>

        <div className="">
          <span className="text-sm font-bold text-gray-200 mb-2 block">
            Altitude
          </span>

          <div className="flex items-center space-x-3">
            <div className="bg-[#5f5f61] rounded-full w-[240px] h-2 ">
              <div className="bg-blue-900 w-[30%] h-full rounded-full"></div>
            </div>

            <span className="text-sm font-bold text-gray-200 block">
              390.0 km/h
            </span>
          </div>
        </div>

        <div className="">
          <span className="text-sm font-bold text-gray-200 mb-2 block">
            Apogee
          </span>

          <div className="flex items-center space-x-3">
            <div className="bg-[#5f5f61] rounded-full w-[240px] h-2 ">
              <div className="bg-blue-900 w-[50%] h-full rounded-full"></div>
            </div>

            <span className="text-sm font-bold text-gray-200 block">
              404.4 km/h
            </span>
          </div>
        </div>

        <div className="mb-10">
          <span className="text-sm font-bold text-gray-200 mb-2 block">
            Perigee
          </span>

          <div className="flex items-center space-x-3">
            <div className="bg-[#5f5f61] rounded-full w-[240px] h-2 ">
              <div className="bg-blue-900 w-[80%] h-full rounded-full"></div>
            </div>

            <span className="text-sm font-bold text-gray-200 block">
              389.4 km/h
            </span>
          </div>
        </div>

        {/* -------------------------- */}

        <div className="!mt-28">
          <span className="text-sm font-bold text-gray-200 mb-2 block">
            Inclination
          </span>

          <div className="flex items-center space-x-3">
            <div className="bg-[#5f5f61] rounded-full w-[240px] h-2 ">
              <div className="bg-blue-900 w-[70%] h-full rounded-full"></div>
            </div>

            <span className="text-sm font-bold text-gray-200 block">
              51.67°
            </span>
          </div>
        </div>

        <div className="">
          <span className="text-sm font-bold text-gray-200 mb-2 block">
            Range to ISS
          </span>

          <div className="flex items-center space-x-3">
            <div className="bg-[#5f5f61] rounded-full w-[240px] h-2 ">
              <div className="bg-blue-900 w-[95%] h-full rounded-full"></div>
            </div>

            <span className="text-sm font-bold text-gray-200 block">
              0.02 km/h
            </span>
          </div>
        </div>
      </div>

      {/* ------------------------ */}
      <div className="absolute flex flex-col left-0 top-0 p-7 space-y-9">
        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-gray-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              All Systems check
            </span>
            <span className="text-sm font-bold text-gray-500 block">
              Normal
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-gray-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              Rendezvous burn
            </span>
            <span className="text-sm font-bold text-gray-500 block">
              Normal
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-gray-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              prepare rendezvous burn
            </span>
            <span className="text-sm font-bold text-gray-500 block">
              Normal
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-green-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              Thermal shield
            </span>
            <span className="text-sm font-bold text-gray-300 block">
              Applied
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-gray-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              Burn go/no-go
            </span>
            <span className="text-sm font-bold text-gray-500 block">
              Normal
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-orange-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              Power completion
            </span>
            <span className="text-sm font-bold text-gray-500 block">
              Awaiting
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <AiFillCheckCircle className="text-2xl text-gray-500 relative bottom-1" />

          <div>
            <span className="uppercase font-bold text-gray-400">
              Station deck check
            </span>
            <span className="text-sm font-bold text-gray-500 block">
              Normal
            </span>
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
