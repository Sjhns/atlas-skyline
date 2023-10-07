type Props = {
  title: string;
  sub: string;
  potencial?: string;
  distance?: string;
};

export const MenuOption = ({ sub, title, potencial, distance }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-base font-bold">{title}</span>
      <span className="text-base font-bold">
        {sub}
        {potencial && <sup>{potencial}</sup>}
        {distance && <span className="text-sm font-bold">{distance}</span>}
      </span>
    </div>
  );
};
