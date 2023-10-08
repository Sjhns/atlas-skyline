import Image from "next/image";

type Props = {
  setAba: (aba: number) => void;
};

export const SideBar = ({ setAba }: Props) => {
  const abas = [
    {
      name: "Estatística",
      id: 0,
    },
    {
      name: "Imagens",
      id: 1,
    },
    {
      name: "Viagens",
      id: 2,
    },
    {
      name: "Wall-e",
      id: 3,
    },
    {
      name: "Nave",
      id: 4,
    },
    {
      name: "Sair",
      id: 5,
    },
  ];

  return (
    <div className="flex flex-col px-5 w-32 h-full h-sc border-r pt-10">
      <div className="flex flex-col items-center justify-center space-y-12">
        {abas.map((aba) => (
          <div
            key={aba.name}
            className="flex flex-col items-center justify-center hover:cursor-pointer"
            onClick={() => setAba(aba.id)}
          >
            <Image src="/svgs/union.svg" alt="Icon" width={24} height={24} />

            <span className="mt-1 text-sm font-bold text-center tracking-wide">
              {aba.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
