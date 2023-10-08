import { useState } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import Image from "next/image";

export const AbaImages = () => {
  const [imageDescription, setImageDescription] = useState(0);

  const handleImageDescriptionNext = () => {
    setImageDescription((old) => Math.min(old + 1, 2));
  };

  const handleImageDescriptionPrev = () => {
    setImageDescription((old) => Math.max(old - 1, 0));
  };

  return (
    <div className="flex">
      <div className="w-[40%] px-6 pt-10 h-full overflow-y-auto pb-10">
        {imageDescription === 0 && (
          <div className="flex flex-col">
            <div className="bg-[#111B52] p-5 rounded w-full">
              <h3 className="text-2xl font-bold flex items-center pb-2 mb-3 border-b">
                Valles Marineris
              </h3>

              <p className="text-justify text-gray-200 mt-4">
                Valles Marineris &quot;é uma das formações geológicas mais
                impressionantes de Marte, conhecida como o &ldquo;Grand Canyon
                de Marte&rdquo;. Aqui estão informações adicionais detalhadas
                sobre este incrível destino:
              </p>
            </div>

            <ul className="list-disc ml-6 my-8 space-y-4">
              <li>
                Localização: Valles Marineris está localizado na região
                equatorial de Marte, estendendo-se por mais de 3000 quilômetros
                de comprimento e cobrindo uma área maior que os Estados Unidos.
              </li>
              <li>
                Dimensões: Este desfiladeiro marciano tem cerca de 600
                quilômetros de largura e atinge uma profundidade incrível de 8
                quilômetros, tornando-o o cânion mais profundo do sistema solar.
              </li>
              <li>
                Geologia: Valles Marineris é uma enorme fenda que se formou
                devido a processos geológicos complexos, incluindo atividade
                tectônica e erosão. A geologia variada da região oferece pistas
                valiosas sobre a história de Marte.
              </li>
              <li>
                Paisagem: A paisagem de Valles Marineris é de tirar o fôlego,
                com escarpas íngremes, cânions estreitos, vales amplos e
                formações geológicas únicas.
              </li>
              <li>
                Clima: O clima em Valles Marineris pode ser extremamente
                variável, com temperaturas que podem chegar a -125°C e ventos
                intensos.
              </li>
              <li>
                Atividades para Turistas: Os visitantes podem desfrutar de
                caminhadas espaciais em trajes adequados e experimentar a
                sensação de gravidade reduzida.
              </li>
              <li>
                Missões de Exploração: Várias missões da NASA, como a Mars
                Reconnaissance Orbiter e o rover Opportunity, estudaram Valles
                Marineris para entender melhor sua origem e evolução.
              </li>
            </ul>

            <p className="text-justify text-gray-200 mt-4">
              Esta é uma parada imperdível para qualquer turista espacial que
              queira testemunhar uma das maravilhas geológicas de Marte,
              entender mais sobre a história do planeta vermelho e explorar
              paisagens verdadeiramente alienígenas.
            </p>
          </div>
        )}

        {imageDescription === 1 && (
          <div>
            <div className="bg-[#111B52] p-5 rounded w-full">
              <h3 className="text-2xl font-bold flex items-center pb-2 mb-3 border-b">
                Região de Tharsis:
              </h3>
              <p className="text-justify text-gray-200 mt-4">
                Nossa primeira parada é o planalto de Tharsis, uma região
                vulcânica fascinante que oferece uma visão única da geologia
                marciana. Aqui estão informações adicionais sobre este destino
                extraordinário:
              </p>
            </div>

            <ul className="list-disc ml-6 my-8 space-y-4">
              <li>
                Localização: Tharsis está localizado no hemisfério ocidental de
                Marte e é uma das maiores elevações do planeta.
              </li>
              <li>
                Vulcanismo Ativo: Essa região é conhecida por abrigar 12
                vulcões, incluindo o Monte Olimpo, que é o maior vulcão do
                Sistema Solar. O Monte Olimpo tem quase 40 quilômetros de
                altura, tornando-o 4 vezes maior que o monte Everest da Terra.
              </li>
              <li>
                Geologia Intrigante: Tharsis é uma janela para o vulcanismo
                marciano e oferece insights sobre a atividade vulcânica e a
                história geológica de Marte.
              </li>
              <li>
                Paisagem Marciana: Os visitantes podem explorar a paisagem
                vulcânica, com vastas planícies, cânions e picos vulcânicos
                imponentes.
              </li>
              <li>
                Atividades para Turistas: Os turistas podem escalar o Monte
                Olimpo com o auxílio de trajes espaciais adequados, desfrutando
                de vistas espetaculares da superfície marciana.
              </li>
              <li>
                Missões de Exploração: Tharsis tem sido alvo de várias missões
                da NASA, como a Mars Odyssey e a Mars Reconnaissance Orbiter,
                que têm estudado sua geologia e atmosfera.
              </li>
            </ul>
            <p className="text-justify text-gray-200 mt-4">
              Esta é uma experiência única para os amantes da geologia e da
              exploração espacial, onde você pode testemunhar os vestígios de
              atividade vulcânica em Marte e explorar paisagens que desafiam a
              imaginação.
            </p>
          </div>
        )}

        {imageDescription === 2 && (
          <div>
            <div className="bg-[#111B52] p-5 rounded w-full">
              <h3 className="text-2xl font-bold flex items-center pb-2 mb-3 border-b">
                Polo Norte de Marte:
              </h3>
              <p className="text-justify text-gray-200 mt-4">
                Nossa próxima parada é o Polo Norte de Marte, uma região
                intrigante coberta de gelo. Aqui estão informações adicionais
                sobre este destino polar:
              </p>
            </div>
            <ul className="list-disc ml-6 my-8 space-y-4">
              <li>
                Localização: O Polo Norte de Marte está situado no hemisfério
                norte do planeta e é uma das áreas mais frias e remotas.
              </li>
              <li>
                Geleiras de Poeira: A superfície polar é coberta por gelo
                empoeirado com cerca de 3 quilômetros de espessura, composto por
                água e poeira marciana.
              </li>
              <li>
                Extensão: A região polar tem quase 1000 quilômetros de diâmetro,
                criando uma paisagem vasta e congelada.
              </li>
              <li>
                Fenômenos Climáticos: Os visitantes podem testemunhar fenômenos
                climáticos únicos, como tempestades de poeira e ventos gelados
                que esculpem a paisagem polar.
              </li>
              <li>
                Exploração Científica: O Polo Norte de Marte tem sido objeto de
                estudo por missões como a Mars Odyssey e a Mars Reconnaissance
                Orbiter, que coletaram dados cruciais sobre a composição do gelo
                e a história climática de Marte.
              </li>
            </ul>

            <p className="text-justify text-gray-200 mt-4">
              Esta é uma oportunidade emocionante para explorar uma região polar
              marciana e entender melhor o clima e a geologia de Marte, enquanto
              testemunha a beleza fria e desolada do Polo Norte.
            </p>
          </div>
        )}
      </div>
      <div className="flex-1">
        <Carousel
          transition={{ duration: 1.5 }}
          className="object-center"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={() => {
                handlePrev();
                handleImageDescriptionPrev();
              }}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={() => {
                handleNext();
                handleImageDescriptionNext();
              }}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => {
                    setActiveIndex(i);

                    if (i === 0) {
                      setImageDescription(0);
                    }

                    if (i === 1) {
                      setImageDescription(1);
                    }

                    if (i === 2) {
                      setImageDescription(2);
                    }
                  }}
                />
              ))}
            </div>
          )}
        >
          <Image
            src="/images/mars/1-focus.jpg"
            alt="image 1"
            className="h-full w-full object-cover object-center"
            width={100000}
            height={100000}
          />

          <Image
            src="/images/mars/2-focus.jpg"
            alt="image 2"
            className="h-full w-full object-cover object-center"
            width={100000}
          />

          <Image
            src="/images/mars/2.jpg"
            alt="image 3"
            className="h-full w-full object-cover object-center"
            height={100000}
          />
        </Carousel>
      </div>
    </div>
  );
};
