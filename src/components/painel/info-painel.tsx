import { AiFillExclamationCircle } from "react-icons/ai";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowCounterclockwise } from "react-icons/bs";

type Props = {
  planet: string;
};

export const InfoPainel = ({ planet }: Props) => {
  return (
    <div className="flex-1 w-full border-r pl-8 pr-16 overflow-y-auto min-w-min pb-14">
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

              <span className="font-bold whitespace-nowrap">
                1000 dias.
              </span>
            </div>

            <div className="flex items-center">
              <span className="whitespace-nowrap font-bold ">
                Retornando de Marte:
              </span>

              <div className="flex-grow border-b border-dotted border-gray-400 relative top-1"></div>

              <span className="font-bold whitespace-nowrap">
                1000 dias.
              </span>
            </div>
            <h2 className="text-justify flex items-center pb-2 mb-3 border-b">Dados baseados 
              em um aproveitamento de energia eficiente para uma boa sustentabilidade no 
              consumo de combustível.
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
                Xe 2024
              </span>

              <div className="flex-grow border-b border-dotted border-gray-400 relative top-1"></div>

              <span className="font-bold whitespace-nowrap">
                SpaceX
              </span>
            </div>

            <div className="flex items-center">
              <span className="whitespace-nowrap font-bold ">
                Mars Run 2033
              </span>

              <div className="flex-grow border-b border-dotted border-gray-400 relative top-1"></div>

              <span className="font-bold whitespace-nowrap">
                SpaceX
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
