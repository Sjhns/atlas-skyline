import React, { useState, useEffect } from "react";

interface ActiveTimeCounterProps {
  title: string;
}

export const ActiveTimeCounter: React.FC<ActiveTimeCounterProps> = ({
  title,
}) => {
  const [activeTime, setActiveTime] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Incrementar o tempo ativo a cada segundo
      setActiveTime((prevActiveTime) => prevActiveTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-base font-bold">{title}</span>
      <span className="text-base font-bold">{formatTime(activeTime)}</span>
    </div>
  );
};
