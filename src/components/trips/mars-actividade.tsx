"use client";

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  Typography,
  TimelineBody,
} from "@material-tailwind/react";

import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineClockCircle,
} from "react-icons/ai";

export const MarsActivities = () => {
  const marsActivities = [
    {
      title: "Exploração da superfície",
      description:
        "Passei horas explorando a incrível paisagem marciana, caminhando pelas dunas de areia vermelha e examinando as rochas marcianas.",
    },
    {
      title: "Observação do pôr do sol",
      description:
        "Assisti a um pôr do sol deslumbrante em Marte, onde o céu vermelho ficou ainda mais dramático quando o sol se pôs atrás das montanhas.",
    },
    {
      title: "Coleta de amostras",
      description:
        "Participei da coleta de amostras de solo marciano para análise científica na base espacial.",
    },
    {
      title: "Experimento de crescimento de plantas",
      description:
        "Cultivei plantas em Marte como parte de um experimento para testar a viabilidade da agricultura no planeta vermelho.",
    },
    {
      title: "Missão de fotografia",
      description:
        "Fiz parte de uma missão de fotografia para capturar imagens incríveis da paisagem marciana e seus fenômenos naturais.",
    },

    {
      title: "Missão de caça a fósseis",
      description:
        "Fiz parte de uma missão de caça a fósseis para encontrar evidências de vida antiga em Marte.",
    },

    {
      title: "Missão de caça a fósseis",
      description:
        "Fiz parte de uma missão de caça a fósseis para encontrar evidências de vida antiga em Marte.",
    },
    {
      title: "Coleta de amostras",
      description:
        "Participei da coleta de amostras de solo marciano para análise científica na base espacial.",
    },
  ];

  return (
    <div className="flex-1 px-5">
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
          Operações de exploração <br /> em Marte
        </h3>

        <div className="flex flex-col">
          <span className="text-sm font-bold text-center flex items-center whitespace-nowrap">
            <AiOutlineClockCircle className="mr-2" /> 2 dias atrás
          </span>

          <span className="text-sm font-bold text-right">14:45:08</span>
        </div>
      </div>

      <Timeline>
        {marsActivities.map((activity, index) => (
          <TimelineItem key={activity.title}>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon className="bg-white" />
              <Typography variant="h6" color="white" className="leading-none">
                {activity.title}
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-300"
              >
                {activity.description}
              </Typography>
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};
