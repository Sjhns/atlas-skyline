import Image from "next/image";

export const SideBar = () => {
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
