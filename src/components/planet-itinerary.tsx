/* eslint-disable @next/next/no-img-element */
import { usePlanetContext } from "@/context/planet-context";
import { PlanetInfo } from "./planet-info";
import { useState } from "react";
import { Raleway } from "next/font/google";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { AiFillExclamationCircle } from "react-icons/ai";
import { SimpleEarth } from "./planets/simple-earth";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const raleway = Raleway({ subsets: ["latin"] });

export const PlanetItinerary = () => {
  // const { selectedPlanet, setSelectedPlanet } = usePlanetContext();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleCloseModal = () => {
    // setSelectedPlanet(null);
  };

  // if (!selectedPlanet) {
  //   return null;
  // }

  return (
    <div
      className="h-screen w-full flex bg-[#111B52]"
      style={{
        fontFamily: raleway.style.fontFamily,
        fontVariantNumeric: " lining-nums proportional-nums",
      }}
    >
      <div className="flex-1 flex flex-col w-full">
        <div className="px-5 py-3 flex items-center w-full border-b justify-between bg-[#020738]">
          <section className="flex items-center space-x-10">
            <div className="flex flex-col items-center justify-center">
              <MenuOption title="Active Phase" sub="Deorbit Coast" />
              {/* <span className="text-xl font-bold">Active Phase</span>
            <span className="text-xl font-bold">Deorbit Coast</span> */}
            </div>

            <MenuOption title="Deorbit Burn" sub="T-:00:00:00" />

            {/* <div>
            <span>Splashdown time</span>
            <span>T-:00:00:00</span>
          </div> */}
          </section>

          <section className="flex items-center space-x-10">
            <MenuOption title="inertial velocity" sub="7.69 km/s" />

            <MenuOption title="Altitude" sub="393.3kms" />

            <MenuOption title="Apogee" sub="416.2km" />

            <MenuOption title="Perigee" sub="379.4km" />

            <MenuOption title="Inclination" sub="51.62°" />
          </section>
        </div>

        <main className="h-full w-full flex bg-[#020738] border-x border-b rounded-b-[50px] overflow-hidden">
          <SideBar />

          <InfoPainel />

          <PlanetPainel />
        </main>

        <header className="w-full flex items-center justify-between px-5 py-3 bg-[#111B52]">
          <div className="flex items-center space-x-5">
            <span>
              <img
                src="/svgs/navigation/1.svg"
                alt="Logo"
                className="w-10 h-10"
              />
            </span>
            <span>
              <img
                src="/svgs/navigation/2.svg"
                alt="Logo"
                className="w-10 h-10"
              />
            </span>
            <span>
              <img
                src="/svgs/navigation/3.svg"
                alt="Logo"
                className="w-10 h-10"
              />
            </span>
            <span>
              <img
                src="/svgs/navigation/4.svg"
                alt="Logo"
                className="w-10 h-10"
              />
            </span>
            <span>
              <img
                src="/svgs/navigation/5.svg"
                alt="Logo"
                className="w-10 h-10"
              />
            </span>
          </div>

          <div className="border-r pr-2 flex items-end flex-col">
            <span className="text-sm font-bold">current state</span>
            <span className="text-sm font-bold">
              Far Field Pointing Deorbit
            </span>
          </div>

          <div className="border-l pl-2 flex items-start flex-col">
            <span className="text-sm font-bold">current state</span>
            <span className="text-sm font-bold">
              Far Field Pointing Deorbit
            </span>
          </div>

          <div className="flex items-center space-x-8">
            {/* 1  */}
            <div className="flex items-center space-x-2">
              <img
                src="/svgs/controls/1.svg"
                alt="Logo"
                className="w-10 h-10"
              />
              <span className="text-sm font-bold text-[#20FBFD]">SPX</span>
            </div>

            {/* 2 */}
            <div className="flex items-center space-x-3">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/svgs/controls/2.svg"
                  alt="Logo"
                  className="w-4 h-4"
                />
                <img
                  src="/svgs/controls/3.svg"
                  alt="Logo"
                  className="w-4 h-4"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <span className="text-sm font-bold text-[#20FBFD] border-b-2  pb-1 border-[#20FBFD]">
                  22:23
                </span>
                <span className="text-sm font-bold text-[#20FBFD]">GND</span>
              </div>

              <div className="flex flex-col items-center justify-center">
                <span
                  className="text-sm font-bold text-[#20FBFD] 
             border-b-2  pb-1 border-[#20FBFD]"
                >
                  0.00
                </span>
                <span className="text-sm font-bold text-[#20FBFD]">TDRS</span>
              </div>
            </div>

            {/* 3 */}
            <div className="flex items-center space-x-2">
              <img
                src="/svgs/controls/1.svg"
                alt="Logo"
                className="w-10 h-10"
              />
              <span className="font-bold text-gray-500">ISS</span>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/svgs/controls/4.svg"
                  alt="Logo"
                  className="w-4 h-4"
                />
                <img
                  src="/svgs/controls/5.svg"
                  alt="Logo"
                  className="w-4 h-4"
                />
              </div>
            </div>

            {/* 4 */}
            <div>
              <span className="text-sm font-bold">06/10/2023</span>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

type MenuOptionProps = {
  title: string;
  sub: string;
};
const MenuOption = ({ sub, title }: MenuOptionProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-xl font-bold">{title}</span>
      <span className="text-xl font-bold">{sub}</span>
    </div>
  );
};

const SideBar = () => {
  const names = [
    "Deport & burn",
    "Coast to Trunk...",
    "Claw Separati...",
    "Trunk Separa...",
    "Trunk Separa...",
  ];

  return (
    <div className="flex flex-col px-5 w-32 h-full h-sc border-r pt-10">
      <div className="flex flex-col items-center justify-center space-y-12">
        {names.map((name) => (
          <div key={name} className="flex flex-col items-center justify-center">
            <Image src="/svgs/union.svg" alt="Icon" width={24} height={24} />

            <span className="text-sm font-bold text-center">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const InfoPainel = () => {
  return (
    <div className="flex-1 w-full border-r pl-8 pr-16">
      <div className="p-5 flex w-full items-center justify-between mb-5">
        <div className="flex space-x-3 ">
          <span className="rounded bg-[#111B52] border p-3 text-white">
            <AiOutlineArrowLeft className="text-xl" />
          </span>
          <span className="rounded bg-[#111B52] border p-3 text-white ">
            <AiOutlineArrowRight className="text-xl" />
          </span>
        </div>

        <h3 className="text-2xl font-bold">Planeta Terra</h3>

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
            Crew Interrupt Conditions
          </h3>

          <div className="space-y-3">
            <div className="flex items-center">
              <span className="whitespace-nowrap font-bold ">
                30° sustained altitude error
              </span>

              <div className="flex-grow border-b border-dotted border-gray-400 relative top-1"></div>

              <span className="font-bold whitespace-nowrap">
                Crew Interrupt Conditions
              </span>
            </div>

            <div className="flex items-center">
              <span className="whitespace-nowrap font-bold ">
                600°/m altitude rate
              </span>

              <div className="flex-grow border-b border-dotted border-gray-400 relative top-1"></div>

              <span className="font-bold whitespace-nowrap">
                FAR FIELD POINTING
              </span>
            </div>
          </div>
        </div>

        {/* ----------------*/}

        <div className="bg-[#111B52] p-5  rounded w-full">
          <h3 className="text-xl font-bold flex items-center pb-2 mb-3 border-b">
            <AiFillExclamationCircle className="text-xl mr-2 text-yellow-300" />
            Crew Deorbit Preparation
          </h3>

          <div className="space-y-3">
            <div className="flex items-center">
              <span className="whitespace-nowrap font-bold ">
                Deorbit burn - 3 hrs
              </span>

              <div className="flex-grow border-b border-dotted border-gray-400 relative top-1"></div>

              <span className="font-bold whitespace-nowrap">
                On SpaceX, On, begin procedure 4.700
              </span>
            </div>

            <div className="flex items-center">
              <span className="whitespace-nowrap font-bold ">
                NLT Deorbit Burn - 1 hr
              </span>

              <div className="flex-grow border-b border-dotted border-gray-400 relative top-1"></div>

              <span className="font-bold whitespace-nowrap">
                Deorbit Burn Brief
              </span>
            </div>
            <div className="flex items-center">
              <span className="whitespace-nowrap font-bold ">
                NLT Deorbit Burn - 30 min
              </span>

              <div className="flex-grow border-b border-dotted border-gray-400 relative top-1"></div>

              <span className="font-bold whitespace-nowrap">
                Review Reference Content
              </span>
            </div>
            <div className="flex items-center">
              <span className="whitespace-nowrap font-bold ">
                Deorbit, entry and landing Go/No-Go
              </span>

              <div className="flex-grow border-b border-dotted border-gray-400 relative top-1"></div>

              <span className="font-bold whitespace-nowrap">Acknowledge</span>
            </div>
          </div>
        </div>

        {/* ----------------*/}
        <div className="bg-[#111B52] p-5  rounded w-full">
          <h3 className="text-xl font-bold flex items-center pb-2 mb-3 border-b">
            <AiFillExclamationCircle className="text-xl mr-2 text-yellow-300" />
            Crew Interrupt Conditions
          </h3>

          <div className="space-y-3">
            <div className="flex items-center">
              <span className="whitespace-nowrap font-bold ">
                30° sustained altitude error
              </span>

              <div className="flex-grow border-b border-dotted border-gray-400 relative top-1"></div>

              <span className="font-bold whitespace-nowrap">
                Crew Interrupt Conditions
              </span>
            </div>

            <div className="flex items-center">
              <span className="whitespace-nowrap font-bold ">
                600°/m altitude rate
              </span>

              <div className="flex-grow border-b border-dotted border-gray-400 relative top-1"></div>

              <span className="font-bold whitespace-nowrap">
                FAR FIELD POINTING
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type InfoCardProps = {
  title: string;
  keyValue: string;
  value: string;
};

const InfoCard = ({ title, keyValue, value }: InfoCardProps) => {
  return (
    <div className="bg-[#111B52] p-5 ml-4 rounded w-full border">
      <h3 className="text-xl font-bold flex items-center pb-2 border-b">
        <AiFillExclamationCircle className="text-xl mr-2 text-yellow-300" />
        {title}
      </h3>

      <div className="flex items-center">
        <span className="whitespace-nowrap font-bold ">{keyValue}</span>

        <div className="flex-grow border-b border-dotted border-gray-400 relative top-1"></div>

        <span className="font-bold whitespace-nowrap">{value}</span>
      </div>
    </div>
  );
};

const PlanetPainel = () => {
  return (
    <div className="w-full">
      <Canvas
        camera={{
          position: [0, 0, 26],
        }}
      >
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
          minDistance={25}
          maxDistance={700}
          zoomSpeed={2}
          panSpeed={0.5} // significa a velocidade de movimento da câmera
          rotateSpeed={0.4} // velocidade de rotação
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
        />
        {/* <pointLight color="#f6f3e a" position={[-5, 5, 20]} intensity={100} />
        <pointLight color="#f6f3ea" position={[-5, 0, 20]} intensity={100} />
        <pointLight color="#f6f3ea" position={[-5, -5, 20]} intensity={100} />
        <pointLight color="#f6f3ea" position={[-5, -10, 20]} intensity={100} /> */}
        <ambientLight intensity={2} />
        <SimpleEarth position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
};

// export const PlanetItinerary = () => {
//   const { selectedPlanet, setSelectedPlanet } = usePlanetContext();
//   const [imageLoaded, setImageLoaded] = useState(false);

//   const handleImageLoad = () => {
//     setImageLoaded(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedPlanet(null);
//   };

//   if (!selectedPlanet) {
//     return null;
//   }

//   return (
//     <div className="absolute z-50 h-screen overflow-x-hidden inset-0 w-full bg-black py-9">
//       <div className="flex flex-col items-center justify-center">
//         <h1 className="text-4xl text-white font-bold mb-5">
//           Itinerário de {selectedPlanet.name}{" "}
//         </h1>
//         {/* Adicione informações educativas sobre o planeta */}
//         <p className="text-white text-center w-full">
//           {selectedPlanet.name} é o {selectedPlanet.distanceRank} planeta do
//           nosso sistema solar e tem um diâmetro de {selectedPlanet.diameter}.{" "}
//           {/* Adicione mais informações relevantes */}
//         </p>
//       </div>

//       <p className="text-white text-center w-full mb-16">
//         {/* Conteúdo educativo sobre o planeta */}
//         {selectedPlanet.name} é um planeta fascinante com muitos lugares
//         interessantes para visitar. Você pode explorar {selectedPlanet.name} por{" "}
//         {selectedPlanet.orbitalPeriod} e descobrir seus segredos.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5 relative">
//         {selectedPlanet.images.map((image) => (
//           <div key={image} className="relative flex">
//             {!imageLoaded && (
//               <div className="absolute rounded animate-pulse flex-1 inset-0 flex items-center justify-center bg-slate-900 w-full h-full"></div>
//             )}

//             <img
//               onLoad={handleImageLoad}
//               src={image}
//               alt={selectedPlanet.name}
//               className={`w-full h-auto object-cover rounded-lg  object-center bg-slate-900  transform transition duration-300 hover:scale-105
//               ${imageLoaded ? "opacity-100" : "opacity-0"}
//               `}
//             />

//             {/* Adicione um overlay com informações adicionais se desejar */}
//             {/* <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 p-4 transition duration-300 group-hover:opacity-100">
//         <p className="text-white">Nome do planeta: {selectedPlanet.name}</p>
//       </div> */}
//           </div>
//         ))}
//       </div>

//       <div className="flex items-center justify-center w-full mt-16">
//         <PlanetInfo {...selectedPlanet} showButton={false} />
//       </div>

//       <button
//         className="absolute top-0 right-0 mt-2 mr-2 text-white bg-purple-700 bg-opacity-50 px-4 py-1 rounded"
//         onClick={handleCloseModal}
//       >
//         Fechar
//       </button>
//     </div>
//   );
// };
