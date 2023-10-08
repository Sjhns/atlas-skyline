import { ShipSystem } from "@/components/painel/ship-system";
import { AiFillCheckCircle } from "react-icons/ai";

export const AbaShip = () => {
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
      <ShipSystem />
    </div>
  );
};
